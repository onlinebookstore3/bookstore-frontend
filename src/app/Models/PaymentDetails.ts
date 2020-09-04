import { User } from "./User"

export class PaymentDetails {
    paymentId: number;
    cardNumber: number;
    cvv: number;
    expiryDate: Date;
    cardHolderName: string;
    user: User[]

    constructor(paymentId: number,
        cardNumber: number,
        cvv: number,
        expiryDate: Date,
        cardHolderName: string,
        user: User[]) {

        this.paymentId = paymentId,
            this.cardNumber = cardNumber,
            this.cvv = cvv,
            this.expiryDate = expiryDate,
            this.cardHolderName = cardHolderName,
            this.user = user
    }
}