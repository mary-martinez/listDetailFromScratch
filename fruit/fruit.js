import { fruitArray } from '../fruit-data.js';
import { renderFruit, renderFruitDetails } from '../render-fruit.js';
import { findByID } from '../utils.js';

const main = document.querySelector('main');

const params = new URLSearchParams(window.location.search);
console.log('params', params);

const fruitSelected = findByID(fruitArray, params.get('id'));
console.log('fruitSelected', fruitSelected);

const fruitDetails = renderFruitDetails(fruitSelected);
console.log(fruitDetails);

main.append(fruitDetails);
