import { renderFruit } from '../render-fruit.js';
const test = QUnit.test;

test('renderFruit should return a div that contains an img and an h2', (expect) => {
    const expected = `<div class="fruit"><img src="./assets/apple.png" id="apple-img" class="fruit-img"><h2 id="apple" class="fruit-type">APPLE</h2></div>`;

    const actual = renderFruit({
        type: 'apple',
        img: '../assets/apple.png',
        nutrition: {
            calories: 95,
            sugar: 19,
            nutrient: 'fiber'
        }
    });

    expect.equal(actual.outerHTML, expected);
});
