export function renderFruit(fruit) {
    const div = document.createElement('div');
    div.classList.add('fruit');

    const img = document.createElement('img');
    img.src = `./assets/${fruit.type}.png`;
    img.setAttribute('id', `${fruit.type}-img`);
    img.classList.add('fruit-img');

    const h2 = document.createElement('h2');
    h2.textContent = `${fruit.type.toUpperCase()}`;
    h2.setAttribute('id', `${fruit.type}`);
    h2.classList.add('fruit-type');

    div.append(img, h2);
    return div;
}

export function renderFruitDetails(fruit) {
    const div = document.createElement('div');
    div.classList.add('fruit-details');

    const h1 = document.createElement('h1');
    h1.classList.add('fruit-name');
    h1.setAttribute('id', `${fruit.type}-heading`);
    h1.textContent = `${titleCase(fruit.type)}`;

    const img = document.createElement('img');
    img.src = `${fruit.img}`;
    img.setAttribute('id', `${fruit.type}-page-img`);
    img.classList.add('fruit-page-img');

    const h2 = document.createElement('h2');
    h2.classList.add('nutrients');
    h2.textContent = `Nutrient Facts for One ${titleCase(fruit.type)}`;

    const ul = document.createElement('ul');
    ul.classList.add('nutrient-list');

    const li1 = document.createElement('li');
    li1.classList.add('calories');
    li1.textContent = `Calories: ${fruit.nutrition.calories}`;

    const li2 = document.createElement('li');
    li2.classList.add('sugar');
    li2.textContent = `Sugar: ${fruit.nutrition.sugar}g`;

    const li3 = document.createElement('li');
    li3.classList.add('nutrient');
    li3.textContent = `Source of: ${titleCase(fruit.nutrition.nutrient)}`;

    ul.append(li1, li2, li3);

    div.append(h1, img, h2, ul);

    return (div);
}

export function titleCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}