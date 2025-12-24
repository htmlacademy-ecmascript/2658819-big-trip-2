import {render} from '../render.js';
import SortingView from '../view/sorting-view.js';
import ListView from '../view/list-view.js';
import PointView from '../view/point-view.js';
import PointEditView from '../view/point-edit-view.js';
import PointAddView from '../view/point-add-view.js';

export default class BoardPresenter {
  #listComponent = new ListView();
  #boardContainer = null;
  #pointsModel = null;
  #boardPoints = [];

  constructor({boardContainer, pointsModel}) {
    this.#boardContainer = boardContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    // Получаем данные из модели и сохраняем их в приватное поле
    this.#boardPoints = [...this.#pointsModel.points];

    render(new SortingView(), this.#boardContainer);
    render(this.#listComponent, this.#boardContainer);
    // Формы пока оставляем без данных (или передаем первую точку для редактирования)
    render(new PointEditView({point: this.#boardPoints[0]}), this.#listComponent.getElement());
    render(new PointAddView(), this.#listComponent.getElement());
    for (let i = 0; i < this.#boardPoints.length; i++) {
      render(new PointView({point: this.#boardPoints[i]}), this.#listComponent.getElement());
    }
  }
}
