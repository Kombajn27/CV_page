document.addEventListener('DOMContentLoaded', function () {
  const typeListElements = document.querySelectorAll('.portfolio_type');
  const projects = document.querySelectorAll('.portfolio_project');


  const showDisplay = function (array) {
    array.forEach(item => item.dataset.display = "true")
  }

  const removeDisplay = function (array) {
    array.forEach(item => item.dataset.display = "false")
  }

  const removeItems = function (array) {
    array.forEach(item => {
      item.classList.remove('active');
    });
  };

  const showItems = function (array) {
    for (let i = 0; i < array.length; i += 1) {
      (function (i) {
        setTimeout(function () {
          array[i].classList.add('active');
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
        typeElement.classList.remove('type_active');
      })

      e.currentTarget.classList.add('type_active');

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