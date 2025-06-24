let startTime, endTime, timer, typed = false;
const testText = document.getElementById('test-text');
const userInput = document.getElementById('user-input');
const resultDiv = document.getElementById('result');
const progressBar = document.getElementById('progress');

function startTest() {
  userInput.value = '';
  resultDiv.textContent = '';
  userInput.disabled = false;
  userInput.focus();
  typed = false;
  progressBar.style.width = '0%';
  startTime = new Date();
}

userInput.addEventListener('input', function() {
  if (!typed) {
    startTime = new Date();
    typed = true;
  }
  const val = userInput.value;
  // Progress bar animation
  let prog = Math.min(val.length / testText.textContent.length, 1);
  progressBar.style.width = (prog * 100) + "%";
  // Check for completion
  if (val === testText.textContent) {
    endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000; // seconds
    const words = val.split(' ').length;
    const wpm = Math.round(words / (timeTaken / 60));
    let accuracy = Math.round((1 - (typos(val, testText.textContent) / testText.textContent.length)) * 100);
    resultDiv.innerHTML = `<span style="color:green;">🎉 Completed!</span><br>
      Time: <b>${timeTaken.toFixed(1)}s</b>, Speed: <b>${wpm} WPM</b>, Accuracy: <b>${accuracy}%</b>`;
    userInput.disabled = true;
    progressBar.style.width = '100%';
  }
});

function resetTest() {
  userInput.value = '';
  resultDiv.textContent = '';
  progressBar.style.width = '0%';
  userInput.disabled = false;
}

// Simple typo counter
function typos(input, ref) {
  let count = 0;
  for(let i=0; i<ref.length; i++)
    if(input[i] !== ref[i]) count++;
  return count + Math.abs(input.length - ref.length);
}
