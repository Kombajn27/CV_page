document.addEventListener('DOMContentLoaded', function () {
  const typeListElements = document.querySelectorAll('.headings__type');
  const projects = document.querySelectorAll('.project');


  const showDisplay = function (array) {
    array.forEach(item => item.dataset.display = "true")
  }

  const removeDisplay = function (array) {
    array.forEach(item => item.dataset.display = "false")
  }

  const removeItems = function (array) {
    array.forEach(item => {
      item.classList.remove('project--active');
    });
  };

  const showItems = function (array) {
    for (let i = 0; i < array.length; i += 1) {
      (function (i) {
        setTimeout(function () {
          array[i].classList.add('project--active');
        }, 50 * i);
      })(i);
    }
  };

  [...typeListElements].forEach(typeElement => {
    typeElement.addEventListener('click', e => {
      const typeValue = e.currentTarget.dataset.type;
      const match = [...projects].filter(project =>
        project.dataset.type.includes(typeValue)
      );
      const notMatch = [...projects].filter(
        project => !project.dataset.type.includes(typeValue)
      );

      [...typeListElements].forEach(typeElement => {
        typeElement.classList.remove('headings__type--active');
      })

      e.currentTarget.classList.add('headings__type--active');

      removeItems([...projects]);
      removeDisplay([...projects]);

      setTimeout(() => {
        if (typeValue === 'all') {
          showItems([...projects]);
        } else {
          removeItems(notMatch);
          showDisplay(match);
          showItems(match);
        }
      }, 300);
    });
  });
});
