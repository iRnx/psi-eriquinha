document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');

    // Alterna ícones manualmente para maior compatibilidade
    toggle.querySelector('.icon-hamburger').style.display =
      menu.classList.contains('active') ? 'none' : 'inline';
    toggle.querySelector('.icon-close').style.display =
      menu.classList.contains('active') ? 'inline' : 'none';
  });
});