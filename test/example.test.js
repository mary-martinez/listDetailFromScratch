import { renderFruit, renderFruitDetails, titleCase } from '../render-fruit.js';
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

test('titleCase function should take in apple and return Apple', (expect) => {
    const expected = 'Apple';
    const actual = titleCase('apple');
    expect.equal(actual, expected);
});

test('renderFruitDetails should return a div that contains an h1, an img, an h2, and a ul with 3 li', (expect) => {
    const expected = `<div class="fruit-details"><h1 class="fruit-name" id="apple-heading">Apple</h1><img src="../assets/apple.png" id="apple-page-img" class="fruit-page-img"><h2 class="nutrients">Nutrient Facts for One Apple</h2><ul class="nutrient-list"><li class="calories">Calories: 95</li><li class="sugar">Sugar: 19g</li><li class="nutrient">Source of: Fiber</li></ul></div>`;

    const actual = renderFruitDetails({
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