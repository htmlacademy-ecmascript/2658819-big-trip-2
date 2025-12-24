import {render} from './render.js';
import PointsModel from './model/points-model.js';
import FilterView from './view/filter-view.js';
import BoardPresenter from './presenter/board-presenter.js';

// Находим места в разметке, куда будем вставлять компоненты
const siteHeaderElement = document.querySelector('.trip-main');
const siteFilterElement = siteHeaderElement.querySelector('.trip-controls__filters');
const siteEventsElement = document.querySelector('.trip-events');

const pointsModel = new PointsModel();

// Создаем экземпляр презентера, передав ему контейнер для отрисовки
const boardPresenter = new BoardPresenter({
  boardContainer: siteEventsElement,
  pointsModel: pointsModel,
});

// Отрисовываем фильтры в шапку сайта (они не зависят от доски событий)
render(new FilterView(), siteFilterElement);

// Запускаем отрисовку доски (сортировка + список с формами и точками)
boardPresenter.init();
