// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function() {
      links.classList.toggle('open');
    });

    // Close nav when a link is clicked (mobile)
    links.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        links.classList.remove('open');
      });
    });
  }

  // Set active nav link based on current page
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function(a) {
    const href = a.getAttribute('href');
    if (href === currentPath) {
      a.classList.add('active');
    } else if (currentPath === '' && (href === 'index.html' || href === '/')) {
      a.classList.add('active');
    }
  });
});