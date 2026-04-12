document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.parentElement;
    const answer = card.querySelector('.faq-answer');
    const icon = card.querySelector('.icon');
    
    card.classList.toggle('active');
    
    if (card.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      icon.style.transform = 'rotate(45deg)';
    } else {
      answer.style.maxHeight = '0';
      icon.style.transform = 'rotate(0deg)';
    }
  });
});
