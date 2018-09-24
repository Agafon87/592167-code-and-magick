'use strict';

(function () {
  var WIZARDS_AMOUNT = 4;

  var cbSuccess = function (wizards) {
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


  window.backend.load(cbSuccess, window.util.cbError);
})();
