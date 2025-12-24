import {getRandomInteger, getRandomArrayElement} from '../utils.js';

// Данные для генерации
const DESTINATION_DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Fusce tristique felis at fermentum pharetra.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam.'
];

//const DESTINATION_NAMES = ['Chamonix', 'Geneva', 'Amsterdam', 'Paris', 'Tokyo'];

// 1. СТРУКТУРА ПУНКТА НАЗНАЧЕНИЯ (Destination)
const mockDestinations = [
  {
    id: 'dest-1',
    description: getRandomArrayElement(DESTINATION_DESCRIPTIONS),
    name: 'Chamonix',
    pictures: Array.from({length: 4}, () => ({
      src: '`24.objects.htmlacademy.pro{getRandomInteger(1, 15)}.jpg`',
      description: 'Chamonix parliament building'
    }))
  },
  // добавить еще несколько объектов для Geneva и Amsterdam...
];

// 2. СТРУКТУРА (Offers)
const mockOffers = [
  {
    type: 'taxi',
    offers: [
      { id: '1', title: 'Upgrade to a business class', price: 120 },
      { id: '2', title: 'Add luggage', price: 50 }
    ]
  },
  {
    type: 'flight',
    offers: [
      { id: '3', title: 'Choose seats', price: 20 },
      { id: '4', title: 'Add meal', price: 15 }
    ]
  }
];

// 3. СТРУКТУРА ТОЧКИ МАРШРУТА (Point)
const getRandomPoint = () => ({
  id: crypto.randomUUID(),// Генерируем уникальный ID
  basePrice: getRandomInteger(100, 1500),
  dateFrom: '2025-12-23T12:00:00.000Z',
  dateTo: '2025-12-24T12:00:00.000Z',
  destination: getRandomArrayElement(mockDestinations).id, // Ссылка на ID пункта
  isFavorite: Boolean(getRandomInteger(0, 1)),
  offers: [// Ссылки на ID офферов
    mockOffers[0].offers[0].id
  ],
  type: getRandomArrayElement(['taxi', 'flight', 'bus', 'train', 'ship'])
});

export {getRandomPoint, mockDestinations, mockOffers};
