export class Order {
    constructor(user, product, quantity) {
        this.user = user;
        this.product = product;
        this.quantity = quantity;
    }

    displayOrder() {
        console.log(`User: ${this.user.name}, Product: ${this.product}, Quantity: ${this.quantity}`);
    }

}