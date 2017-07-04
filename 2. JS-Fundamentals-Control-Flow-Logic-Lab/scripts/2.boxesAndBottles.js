function calc(bottles, capacity) {
    [bottles, capacity] = [bottles, capacity].map(Number);

    return Math.ceil(bottles / capacity)
}