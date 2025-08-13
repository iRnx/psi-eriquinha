  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const isActive = button.classList.contains('active');

      // Fecha todas as outras
      document.querySelectorAll('.faq-question').forEach(btn => {
        btn.classList.remove('active');
        btn.nextElementSibling.style.display = 'none';
        btn.querySelector('.icon').textContent = '+';
      });

      // Abre a clicada
      if (!isActive) {
        button.classList.add('active');
        button.nextElementSibling.style.display = 'block';
        button.querySelector('.icon').textContent = '–';
      }
    });
  });