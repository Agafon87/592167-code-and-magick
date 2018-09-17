'use strict';

(function () {
  // Объявляем константы
  var ESC_KEYCODE_PRESS = 27;
  var ENTER_KEYCODE_PRESS = 13;


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


  var setupSimilarWizards = document.querySelector('.setup-similar');
  setupSimilarWizards.classList.remove('hidden');

})();
