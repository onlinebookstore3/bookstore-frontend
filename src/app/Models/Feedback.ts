import { User } from "./User";
import { BookDetails } from "./BookDetails";

export class Feedback {

    feedId: number;
    rating: string;
    comments: string;
    user: User[];
    bookDetails: BookDetails[]

    constructor(feedId: number,
        rating: string,
        comments: string,
        user: User[],
        bookDetails: BookDetails[]) {

        this.feedId = feedId,
            this.rating = rating,
            this.comments = comments,
            this.user = user,
            this.bookDetails = bookDetails

    }
}