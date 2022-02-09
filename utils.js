export function findByID(fruit, type) {
    const found = fruit.find((item) => item.type === type);
    return (found);
}