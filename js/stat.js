'use strict';

// Объявляем константы
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGTH = 270;
var BAR_CHART_COLUMN_WIDTH = 40;
var BAR_CHART_COLUMN_INTERVAL = 50;
var BAR_CHART_MAX_HEIGHT = 150;
var BAR_CHART_START_POSITION_X = 150;
var BAR_CHART_START_POSITION_Y = 100;
var GAP = 10;
var SUCCESS_TEXT_X = 110;
var SUCCESS_TEXT_Y = 40;
var BAR_CHART_ALPHA_MIN = 1;
var BAR_CHART_ALPHA_MAX = 10;


// Функция отрисовки гистограммы
var renderBarChart = function (ctx, names, times) {
  // Находи максимальное время в массиве times
  var maxTime = window.util.getMaxElement(times);
  // Проходим по массиву times и отрисовываем колонки гистаграммы
  var color;
  var barChartPositionX = BAR_CHART_START_POSITION_X;
  for (var i = 0; i < names.length; i++) {
    color = 'rgba(35, 100, 250, 0.' + window.util.getRandomNumber(BAR_CHART_ALPHA_MIN, BAR_CHART_ALPHA_MAX) + ')';
    if (names[i] === 'Вы') {
      color = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillStyle = color;
    var currentBarChartHeight = window.util.getBarChartHeight(maxTime, times[i], BAR_CHART_MAX_HEIGHT);
    var realBarChartStartPositionY = BAR_CHART_START_POSITION_Y + (BAR_CHART_MAX_HEIGHT - currentBarChartHeight);
    ctx.fillRect(barChartPositionX, realBarChartStartPositionY, BAR_CHART_COLUMN_WIDTH, currentBarChartHeight);
    ctx.fillStyle = '#000';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(Math.round(times[i]), barChartPositionX, realBarChartStartPositionY - GAP);
    ctx.textBaseline = 'hanging';
    ctx.fillText(names[i], barChartPositionX, BAR_CHART_START_POSITION_Y + BAR_CHART_MAX_HEIGHT + GAP);
    if (i < names.length - 1) {
      barChartPositionX += BAR_CHART_COLUMN_WIDTH + BAR_CHART_COLUMN_INTERVAL;
    }
  }
};


window.renderStatistics = function (ctx, names, times) {

  window.util.renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)', CLOUD_WIDTH, CLOUD_HEIGTH);
  window.util.renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff', CLOUD_WIDTH, CLOUD_HEIGTH);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', SUCCESS_TEXT_X, SUCCESS_TEXT_Y);
  ctx.fillText('Список результатов:', SUCCESS_TEXT_X, SUCCESS_TEXT_Y + (2 * GAP));

  renderBarChart(ctx, names, times);
};
