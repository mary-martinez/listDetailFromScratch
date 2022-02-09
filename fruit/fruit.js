import { fruitArray } from '../fruit-data.js';
import { renderFruitDetails } from '../render-fruit.js';
import { findByID } from '../utils.js';

const main = document.querySelector('main');

const params = new URLSearchParams(window.location.search);
const fruitSelected = findByID(fruitArray, params.get('id'));
const fruitDetails = renderFruitDetails(fruitSelected);
main.append(fruitDetails);
