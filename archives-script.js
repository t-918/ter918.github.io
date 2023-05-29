document.querySelector('.scroll-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('data-target')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });