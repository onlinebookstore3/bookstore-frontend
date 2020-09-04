import { User } from "./User";
import { BookDetails } from "./BookDetails";
import { ShoppingCart } from "./ShoppingCart";

export class OrderDetails {
    orderId: number;
    bookName: string;
    orderDate: Date;
    quantity: number;
    price: number;
    subTotal: number;
    totalAmount: number;
    shippingAddress: string;
    user: User[];
    bookDetails: BookDetails[];
    shoppingCart: ShoppingCart[];

    constructor(orderId: number,
        bookName: string,
        orderDate: Date,
        quantity: number,
        price: number,
        subTotal: number,
        totalAmount: number,
        shippingAddress: string,
        user: User[],
        bookDetails: BookDetails[],
        shoppingCart: ShoppingCart[]) {

        this.orderId = orderId,
            this.bookName = bookName,
            this.orderDate = orderDate,
            this.quantity = quantity,
            this.price = price,
            this.subTotal = subTotal,
            this.totalAmount = totalAmount,
            this.shippingAddress = shippingAddress,
            this.user = user,
            this.bookDetails = bookDetails,
            this.shoppingCart = shoppingCart
    }



}