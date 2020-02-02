document.addEventListener("DOMContentLoaded", function () {

  // Welcome section - image rotation
  const cube = document.querySelectorAll('.cube');
  const positionArray = [50, 10, 20, 30, 0, 25, 60, 50, 5];

  [...cube].forEach((el, index) => {
    el.children[0].style.backgroundImage = `url(../img/front${index}.jpg`;
    el.children[0].style.backgroundPosition = `center -${positionArray[index]}px`
    el.style.top = `${positionArray[index]}px`;

    el.children[1].style.backgroundImage = `url(../img/left${index}.png`;
    el.children[1].style.backgroundPosition = `center -${positionArray[index]}px`
    el.style.top = `${positionArray[index]}px`;

    el.children[2].style.backgroundImage = `url(../img/back${index}.jpg`;
    el.children[2].style.backgroundPosition = `center -${positionArray[index]}px`
    el.style.top = `${positionArray[index]}px`;

    el.children[3].style.backgroundImage = `url(../img/right${index}.jpg`;
    el.children[3].style.backgroundPosition = `center -${positionArray[index]}px`
    el.style.top = `${positionArray[index]}px`;
  });

  function animateCubeRotation(element, index) {
    element.animate([{
        transform: 'translateZ(-20px) rotateY(0deg)',
        easing: 'cubic-bezier(0, 1, 0, 1)'
      },
      {
        transform: 'translateZ(-20px) rotateY(90deg)',
        easing: 'cubic-bezier(0, 1, 0, 1)'
      },
      {
        transform: 'translateZ(-20px) rotateY(180deg)',
        easing: 'cubic-bezier(0, 1, 0, 1)'
      },
      {
        transform: 'translateZ(-20px) rotateY(270deg)',
        easing: 'cubic-bezier(0, 1, 0, 1)'
      },
      {
        transform: 'translateZ(-20px) rotateY(360deg)',
        easing: 'cubic-bezier(0, 1, 0, 1)'
      },
    ], {
      iterationStart: 0.80,
      duration: 28000,
      delay: index * 60,
      iterations: Infinity
    })
  }

  [...cube].forEach((el, index) => animateCubeRotation(el, index));

  // Toggle information visibility
  const welcomeDetails = document.querySelector('.welcome_info_details');

  const changeVisibility = function () {
    let active = welcomeDetails.querySelector(":not(.invisible)");
    [...welcomeDetails.children].forEach(el => el.classList.add('invisible'));
    if (active.dataset.last === 'last') {
      welcomeDetails.firstElementChild.classList.remove('invisible');
    } else {
      active.nextElementSibling.classList.remove('invisible');
    }
  }

  setInterval(changeVisibility, 7000);

});