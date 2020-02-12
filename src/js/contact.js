document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector('.contact_button');
  const email = document.querySelector('.contact_email');

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