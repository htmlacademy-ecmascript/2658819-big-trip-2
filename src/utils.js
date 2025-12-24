
import dayjs from 'dayjs';
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const DATE_FORMAT = 'MMM D';
const TIME_FORMAT = 'HH:mm';

// Форматирование даты для карточки (например: DEC 24)
const humanizePointDate = (date) => (date ? dayjs(date).format(DATE_FORMAT) : '');

// Форматирование времени (например: 19:30)
const humanizePointTime = (date) => (date ? dayjs(date).format(TIME_FORMAT) : '');

export { getRandomInteger, getRandomArrayElement, humanizePointDate, humanizePointTime };
