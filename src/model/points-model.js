import { getRandomPoint } from '../mock/points.js';

const POINT_COUNT = 5; // Количество точек, которое мы хотим создать

export default class PointsModel {
  // Создаем приватный массив данных
  // Array.from генерирует массив нужной длины, заполняя его случайными точками
  #points = Array.from({length: POINT_COUNT}, getRandomPoint);

  // Метод для получения всех точек
  // Мы возвращаем копию массива [...], чтобы никто случайно не изменил данные внутри модели
  get points() {
    return [...this.#points];
  }
}

