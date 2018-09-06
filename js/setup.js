'use strict';

// Объявляем константы
var WIZARDS_NAMES_AMOUNT_MIN = 0;
var WIZARDS_NAMES_AMOUNT_MAX = 7;
var WIZARDS_COAT_COLOR_AMOUNT_MIN = 0;
var WIZARDS_COAT_COLOR_AMOUNT_MAX = 5;
var WIZARDS_EYES_COLOR_AMOUNT_MIN = 0;
var WIZARDS_EYES_COLOR_AMOUNT_MAX = 4;
var WIZARDS_AMOUNT = 4;

var WIZARDS_DESCRIPTION = [];

var WIZARDS_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var WIZARDS_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

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

// Функция генерирующая случайные числа
var getRandomNumber = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

// Функция возвращающая объект волшебника
var getWizard = function (nameWizard, coatColorWizard, eyesColorWizard) {
  return {
    name: nameWizard,
    coatColor: coatColorWizard,
    eyesColor: eyesColorWizard
  };
};

// Функция добавления объектов волшебников в массив
(function () {
  for (var i = 0; i < WIZARDS_AMOUNT; i++) {
    var fullNameWizard = WIZARDS_NAMES[getRandomNumber(WIZARDS_NAMES_AMOUNT_MIN, WIZARDS_NAMES_AMOUNT_MAX)] + ' ' + WIZARDS_SURNAMES[getRandomNumber(WIZARDS_NAMES_AMOUNT_MIN, WIZARDS_NAMES_AMOUNT_MIN)];
    var wizardCoatColor = WIZARDS_COAT_COLOR[getRandomNumber(WIZARDS_COAT_COLOR_AMOUNT_MIN, WIZARDS_COAT_COLOR_AMOUNT_MAX)];
    var wizardEyesColor = WIZARDS_EYES_COLOR[getRandomNumber(WIZARDS_EYES_COLOR_AMOUNT_MIN, WIZARDS_EYES_COLOR_AMOUNT_MAX)];
    var wizard = getWizard(fullNameWizard, wizardCoatColor, wizardEyesColor);
    WIZARDS_DESCRIPTION.push(wizard);
  }
})();

var setupWizards = document.querySelector('.setup');
setupWizards.classList.remove('hidden');

var wizardsTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var wizardsList = document.querySelector('.setup-similar-list');

var fragment = document.createDocumentFragment();

// Функция создания похожего персонажа
var getWizardElement = function (wizard) {
  var wizardElement = wizardsTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

// Функция добавляющая во фрагмент список похожих волшебников
(function () {
  for (var j = 0; j < WIZARDS_DESCRIPTION.length; j++) {
    var currentWizard = getWizardElement(WIZARDS_DESCRIPTION[j]);
    fragment.appendChild(currentWizard);
  }
})();

wizardsList.appendChild(fragment);


var setupSimilarWizards = document.querySelector('.setup-similar');
setupSimilarWizards.classList.remove('hidden');
