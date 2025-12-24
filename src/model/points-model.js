import { getRandomPoint } from '../mock/points.js';

const POINT_COUNT = 5; // Количество точек, которое мы хотим создать

export default class PointsModel {
  // 1. Объявляем приватное поле, но не заполняем его сразу
  #points = [];

  // 2. Асинхронный метод для инициализации данных
  async init() {
    try {
      // Имитируем получение данных (Array.from выполняется быстро, но await готовит нас к fetch)
      this.#points = Array.from({ length: POINT_COUNT }, getRandomPoint);
    } catch (err) {
      this.#points = [];
    }
  }

  // 3. Метод для получения всех точек
  // Мы возвращаем копию массива [...], чтобы никто случайно не изменил данные внутри модели
  get points() {
    return [...this.#points];
  }
}

