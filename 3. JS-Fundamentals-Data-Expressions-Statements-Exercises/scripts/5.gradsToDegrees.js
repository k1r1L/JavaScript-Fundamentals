function gradsToDegrees(grads) {
    grads %= 400;
    grads = grads < 0 ? 400 + grads : grads;

    return grads * 0.9;
}