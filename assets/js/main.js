// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  });

  // Check for saved theme preference
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
}

// Navigation Active State
const currentPage = location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

// Typing Test Logic (for typing.html)
if (document.getElementById('typingInput')) {
  const passages = [
    // 100+ passages array would go here
    "The quick brown fox jumps over the lazy dog...",
    "It was the best of times, it was the worst of times...",
    // ... more passages
  ];
  
  let startTime, endTime;
  const typingInput = document.getElementById('typingInput');
  
  typingInput.addEventListener('focus', () => {
    startTime = new Date();
  });
  
  typingInput.addEventListener('input', () => {
    // Calculate WPM and accuracy
  });
}
