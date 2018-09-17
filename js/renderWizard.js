'use strict';

(function () {

  var WIZARDS_COAT_COLOR_AMOUNT_MIN = 0;
  var WIZARDS_COAT_COLOR_AMOUNT_MAX = 5;
  var WIZARDS_EYES_COLOR_AMOUNT_MIN = 0;
  var WIZARDS_EYES_COLOR_AMOUNT_MAX = 4;
  var WIZARDS_FIREBALL_COLOR_AMOUNT_MIN = 0;
  var WIZARDS_FIREBALL_COLOR_AMOUNT_MAX = 4;

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
  var coatWizard = document.querySelector('.setup-wizard .wizard-coat');
  coatWizard.addEventListener('click', function () {
    var wizardCoatColor = WIZARDS_COAT_COLOR[window.util.getRandomNumber(WIZARDS_COAT_COLOR_AMOUNT_MIN, WIZARDS_COAT_COLOR_AMOUNT_MAX)];
    coatWizard.style.fill = wizardCoatColor;
    var inputHiddenCoatColorWizard = document.querySelector('input[type=hidden][name="coat-color"]');
    inputHiddenCoatColorWizard.value = wizardCoatColor;
  });


  // Обработчик события нажатия на глаза волшебника меняющий цвет глаз
  var eyesWizard = document.querySelector('.setup-wizard .wizard-eyes');
  eyesWizard.addEventListener('click', function () {
    var wizardEyesColor = WIZARDS_EYES_COLOR[window.util.getRandomNumber(WIZARDS_EYES_COLOR_AMOUNT_MIN, WIZARDS_EYES_COLOR_AMOUNT_MAX)];
    eyesWizard.style.fill = wizardEyesColor;
    var inputHiddenEyesWizard = document.querySelector('input[type=hidden][name="eyes-color"]');
    inputHiddenEyesWizard.value = wizardEyesColor;
  });


  // Обработчик события нажатия на файрбол волшебника меняющий цвет файрбола
  var fireballWizard = document.querySelector('.setup-fireball-wrap');
  fireballWizard.addEventListener('click', function () {
    var wizardFireballColor = WIZARDS_FIREBALL_COLOR[window.util.getRandomNumber(WIZARDS_FIREBALL_COLOR_AMOUNT_MIN, WIZARDS_FIREBALL_COLOR_AMOUNT_MAX)];
    fireballWizard.style.background = wizardFireballColor;
    var inputHiddenFireballWizard = fireballWizard.querySelector('input[type=hidden]');
    inputHiddenFireballWizard.value = wizardFireballColor;
  });

})();
