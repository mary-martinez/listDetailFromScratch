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