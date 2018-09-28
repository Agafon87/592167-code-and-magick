'use strict';

(function () {

  // var WIZARDS_COAT_COLOR_AMOUNT_MIN = 0;
  // var WIZARDS_COAT_COLOR_AMOUNT_MAX = 5;
  // var WIZARDS_EYES_COLOR_AMOUNT_MIN = 0;
  // var WIZARDS_EYES_COLOR_AMOUNT_MAX = 4;
  // var WIZARDS_FIREBALL_COLOR_AMOUNT_MIN = 0;
  // var WIZARDS_FIREBALL_COLOR_AMOUNT_MAX = 4;

  var coatWizard = document.querySelector('.setup-wizard .wizard-coat');
  var eyesWizard = document.querySelector('.setup-wizard .wizard-eyes');
  var fireballWizard = document.querySelector('.setup-fireball-wrap');

  var WIZARDS_COAT_COLOR = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var WIZARDS_EYES_COLOR = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var WIZARDS_FIREBALL_COLOR = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848',
  ];


  // Обработчик события нажатия на мантии меняющий цвет мантии
  coatWizard.addEventListener('click', function () {
    var wizardCoatColor = window.util.getRandomElement(WIZARDS_COAT_COLOR);
    coatWizard.style.fill = wizardCoatColor;
    var inputHiddenCoatColorWizard = document.querySelector('input[type=hidden][name="coat-color"]');
    inputHiddenCoatColorWizard.value = wizardCoatColor;
    window.renderSimilarWizards.updateWizards();
  });


  // Обработчик события нажатия на глаза волшебника меняющий цвет глаз
  eyesWizard.addEventListener('click', function () {
    var wizardEyesColor = window.util.getRandomElement(WIZARDS_EYES_COLOR);
    eyesWizard.style.fill = wizardEyesColor;
    var inputHiddenEyesWizard = document.querySelector('input[type=hidden][name="eyes-color"]');
    inputHiddenEyesWizard.value = wizardEyesColor;
    window.renderSimilarWizards.updateWizards();
  });


  // Обработчик события нажатия на файрбол волшебника меняющий цвет файрбола
  fireballWizard.addEventListener('click', function () {
    var wizardFireballColor = window.util.getRandomElement(WIZARDS_FIREBALL_COLOR);
    fireballWizard.style.background = wizardFireballColor;
    var inputHiddenFireballWizard = fireballWizard.querySelector('input[type=hidden]');
    inputHiddenFireballWizard.value = wizardFireballColor;
    window.renderSimilarWizards.updateWizards();
  });

})();
