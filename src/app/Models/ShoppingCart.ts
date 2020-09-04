import { User } from "./User"
import { BookDetails } from "./BookDetails"

export class ShoppingCart {
    cartId: number;
    totalAmount: number;
    subTotal: number;
    quantity: number;
    price: number;
    user: User[];
    bookDetails: BookDetails[]

    constructor(cartId: number,
        totalAmount: number,
        subTotal: number,
        quantity: number,
        price: number,
        user: User[],
        bookDetails: BookDetails[]) {

        this.cartId = cartId,
            this.totalAmount = totalAmount,
            this.subTotal = subTotal,
            this.quantity = quantity,
            this.price = price,
            this.user = user,
            this.bookDetails = bookDetails
    }
}