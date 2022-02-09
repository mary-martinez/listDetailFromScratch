// import functions and grab DOM elements
import { renderFruit } from './render-fruit.js';
import { fruitArray } from './fruit-data.js';
// let state
const shelves = document.getElementById('fruit-shelves');
shelves.textContent = '';

for (let fruit of fruitArray) {
    const addFruit = renderFruit(fruit);
    const a = document.createElement('a');
    a.href = `./fruit/?id=${fruit.type}`;
    a.append(addFruit);
    shelves.append(a);
}
