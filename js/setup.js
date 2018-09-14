'use strict';

// Объявляем константы
var WIZARDS_NAMES_AMOUNT_MIN = 0;
var WIZARDS_NAMES_AMOUNT_MAX = 7;
var WIZARDS_COAT_COLOR_AMOUNT_MIN = 0;
var WIZARDS_COAT_COLOR_AMOUNT_MAX = 5;
var WIZARDS_EYES_COLOR_AMOUNT_MIN = 0;
var WIZARDS_EYES_COLOR_AMOUNT_MAX = 4;
var WIZARDS_FIREBALL_COLOR_AMOUNT_MIN = 0;
var WIZARDS_FIREBALL_COLOR_AMOUNT_MAX = 4;
var WIZARDS_AMOUNT = 4;
var ESC_KEYCODE_PRESS = 27;
var ENTER_KEYCODE_PRESS = 13;

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

var WIZARDS_FIREBALL_COLOR = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848',
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


// Обработчик события нажатия клавиши Esc
var escClickHandler = function (evt) {
  var classTarget = evt.target.className;
  if (evt.keyCode === ESC_KEYCODE_PRESS && classTarget !== 'setup-user-name') {
    closePopupSetupWizards();
  }
};


// Функция открывающая окно настроек волшебника
var openPopupSetupWizards = function () {
  setupWizards.classList.remove('hidden');

  document.addEventListener('keydown', escClickHandler);
};


// Функция закрывающая окно настроек волшебника
var closePopupSetupWizards = function () {
  document.removeEventListener('keydown', escClickHandler);

  setupWizards.classList.add('hidden');
};

var setupWizards = document.querySelector('.setup');
var setupClose = setupWizards.querySelector('.setup-close');
var setupOpenIcon = document.querySelector('.setup-open-icon');


// Открытие окна настроек волшебника при клике на иконку
setupOpenIcon.addEventListener('click', function () {
  openPopupSetupWizards();
});


// Открытие окна настроек волшебника при нажатии клавиши enter на иконку
setupOpenIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE_PRESS) {
    openPopupSetupWizards();
  }
});


// Закрытие окна настроек волшебника при клике на крестик
setupClose.addEventListener('click', function () {
  closePopupSetupWizards();
});


// Закрытие окна настроек волшебника при нажатии клавиши enter на крестик
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE_PRESS) {
    closePopupSetupWizards();
  }
});

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


// Обработчик события нажатия на мантии меняющий цвет мантии
var coatWizard = document.querySelector('.setup-wizard .wizard-coat');
coatWizard.addEventListener('click', function () {
  var wizardCoatColor = WIZARDS_COAT_COLOR[getRandomNumber(WIZARDS_COAT_COLOR_AMOUNT_MIN, WIZARDS_COAT_COLOR_AMOUNT_MAX)];
  coatWizard.style.fill = wizardCoatColor;
  var inputHiddenCoatColorWizard = document.querySelector('input[type=hidden][name="coat-color"]');
  inputHiddenCoatColorWizard.value = wizardCoatColor;
});


// Обработчик события нажатия на глаза волшебника меняющий цвет глаз
var eyesWizard = document.querySelector('.setup-wizard .wizard-eyes');
eyesWizard.addEventListener('click', function () {
  var wizardEyesColor = WIZARDS_EYES_COLOR[getRandomNumber(WIZARDS_EYES_COLOR_AMOUNT_MIN, WIZARDS_EYES_COLOR_AMOUNT_MAX)];
  eyesWizard.style.fill = wizardEyesColor;
  var inputHiddenEyesWizard = document.querySelector('input[type=hidden][name="eyes-color"]');
  inputHiddenEyesWizard.value = wizardEyesColor;
});


// Обработчик события нажатия на файрбол волшебника меняющий цвет файрбола
var fireballWizard = document.querySelector('.setup-fireball-wrap');
fireballWizard.addEventListener('click', function () {
  var wizardFireballColor = WIZARDS_FIREBALL_COLOR[getRandomNumber(WIZARDS_FIREBALL_COLOR_AMOUNT_MIN, WIZARDS_FIREBALL_COLOR_AMOUNT_MAX)];
  fireballWizard.style.background = wizardFireballColor;
  var inputHiddenFireballWizard = fireballWizard.querySelector('input[type=hidden]');
  inputHiddenFireballWizard.value = wizardFireballColor;
});
