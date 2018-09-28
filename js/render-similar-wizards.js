'use strict';

(function () {
  var WIZARDS_AMOUNT = 4;
  var similarWizards = [];

  var renderWizards = function (wizards) {
    var wizardsTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

    var wizardsList = document.querySelector('.setup-similar-list');

    var fragment = document.createDocumentFragment();

    // Функция создания похожего персонажа
    var getWizardElement = function (wizard) {
      var wizardElement = wizardsTemplate.cloneNode(true);

      wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
      wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

      return wizardElement;
    };

      // Функция добавляющая во фрагмент список похожих волшебников
    (function () {
      for (var j = 0; j < WIZARDS_AMOUNT; j++) {
        var currentWizard = getWizardElement(wizards[j]);
        fragment.appendChild(currentWizard);
      }
    })();

    wizardsList.appendChild(fragment);
  };

  var cbSuccess = function (data) {
    similarWizards = data;
    renderWizards(data);
  };

  var updateWizards = window.debounce(function () {
    var coatWizard = document.querySelector('.setup-wizard .wizard-coat').style.fill || 'rgb(101, 137, 164)';
    var eyesWizard = document.querySelector('.setup-wizard .wizard-eyes').style.fill || 'black';
    var fireballWizard = document.querySelector('.setup-fireball-wrap').style.background || 'rgb(238, 72, 48)';
    var newArr = similarWizards.slice(0);
    newArr.forEach(function (it) {
      var rating = 0;
      if (it.colorCoat === coatWizard) {
        rating += 2;
      }
      if (it.colorEyes === eyesWizard) {
        rating += 1;
      }
      if (it.colorFierball === fireballWizard) {
        rating += 1;
      }
      it.rating = rating;
    });

    newArr.sort(function (a, b) {
      return b.rating - a.rating;
    });

    var setupSimilarItem = document.querySelectorAll('.setup-similar-item');
    setupSimilarItem.forEach(function (it) {
      it.remove();
    });

    renderWizards(newArr);
  });

  window.renderSimilarWizards = {
    renderWizards: renderWizards,
    updateWizards: updateWizards
  };


  window.backend.load(cbSuccess, window.util.cbError);
})();
