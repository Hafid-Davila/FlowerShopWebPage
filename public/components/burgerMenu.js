document.querySelector('.burger').addEventListener('click', function() {
    const nav = document.getElementById('nav');
    this.classList.toggle('open');
    nav.classList.toggle('open');
  });
  