document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector('.contact__button');
  const email = document.querySelector('.contact__email');

  button.addEventListener('click', e => {
    e.preventDefault;
    if (button.dataset.status === 'show') {
      email.style.display = 'inherit';
      button.innerText = 'Click to hide e-mail';
      button.dataset.status = 'hide';
    } else {
      email.style.display = 'none';
      button.innerText = 'Click to see e-mail';
      button.dataset.status = 'show';
    }
  })
});
