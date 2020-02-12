document.addEventListener("DOMContentLoaded", function () {

  const navElements = document.querySelectorAll('.main_nav_link');

  function animateNav(element, index) {
    element.animate([{
        transform: 'translateY(-50px)',
        opacity: 0
      },
      {
        transform: 'translateY(10px)',
        opacity: 0.8
      },
      {
        transform: 'translateY(0px)',
        opacity: 1
      }
    ], {
      duration: 600,
      easing: "ease-in-out",
      fill: 'backwards',
      delay: index * 120
    })
  }

  function animateNavHover(element, index) {
    element.animate([{
        transform: 'translateY(0px)'
      },
      {
        transform: 'translateY(-5px)'
      },
      {
        transform: 'translateY(0px)'
      }
    ], {
      duration: 250,
      easing: "ease-in-out",
      delay: index * 40
    })
  }

  [...navElements].forEach(element => {
    element.innerHTML = element.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    [...element.children].forEach((el, index) => {
      animateNav(el, index);
    })
  });

  setTimeout(function () {
    [...navElements].forEach((element) => element.addEventListener('mouseenter', () => {
      [...element.children].forEach((el, index) => {
        animateNavHover(el, index);
      })
    }));
  }, 1000);

});