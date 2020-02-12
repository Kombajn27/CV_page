document.addEventListener("DOMContentLoaded", function () {

  // NAVIGATION ANIMATIONS
  const navElements = document.querySelectorAll('.main_nav_link');

  // Navigation animation function
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

  // Navigation hover animation function
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

  // Page loaded letter animation
  [...navElements].forEach(element => {
    element.innerHTML =  element.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    [...element.children].forEach((el, index) => {
      animateNav(el, index);
    })
  });

  // Hover navigation element animation
  setTimeout(function () {
    [...navElements].forEach((element) => element.addEventListener('mouseenter', () => {
      [...element.children].forEach((el, index) => {
        animateNavHover(el, index);
      })
    }));
  }, 1000);

});