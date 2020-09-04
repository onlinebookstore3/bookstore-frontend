export class BookDetails {

    bookId: number;
    bookName: string;
    bookCover: string;
    author: string;
    authorBio: string;
    bookDescription: string;
    genre: string;
    publisher: string;
    releaseDate: Date;
    price : number

    constructor(bookId: number,
        bookName: string,
        bookCover: string,
        author: string,
        authorBio: string,
        bookDescription: string,
        genre: string,
        publisher: string,
        releaseDate: Date, price : number) {
        this.bookId = bookId,
            this.bookName = bookName,
            this.bookCover = bookCover,
            this.author = author,
            this.authorBio = authorBio,
            this.bookDescription = bookDescription,
            this.genre = genre,
            this.publisher = publisher,
            this.releaseDate = releaseDate,
            this.price = price


    }
}