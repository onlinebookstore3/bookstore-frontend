export class User {
    userId: number;
    password: string;
    name: string;
    email: string;
    address: string;
    nickName: string;
    avatar: string;
    shippingAddress1: string;
    shippingAddress2: string;
    phone: number

    constructor(userId: number, password: string, name: string, email: string, address: string, nickName: string,
        avatar: string, shippingAddress1: string, shippingAddress2: string, phone: number) {
        this.userId = userId,
            this.password = password,
            this.name = name,
            this.email = email,
            this.address = address,
            this.nickName = nickName,
            this.avatar = avatar,
            this.shippingAddress1 = shippingAddress1,
            this.shippingAddress2 = shippingAddress2,
            this.phone = phone
    }
}