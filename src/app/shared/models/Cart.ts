import { CartItem } from "./Cart-Item";

export class Cart {
    items: CartItem[] = [];

    get totalPrice(): number {
        let totalPrice = 0;
        this.items.forEach(item => {
            totalPrice += item.price;
        });

        return totalPrice;
    }

    get totalCount(): number {
        let totalCount = 0;
        this.items.forEach(item => {
            totalCount += item.count;
        });

        return totalCount;
    }
}
