interface Book {
    title: string;
    author: string;
    publicationYear: number;
}

const sumPubYears = (input: Book[]): number => {
    return input.map(x => x.publicationYear).reduce((a, b) => a + b);
}

const books: Book[] = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publicationYear: 1960
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        publicationYear: 1951
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publicationYear: 1925
    }
];


console.log(sumPubYears(books));



const joinArrays = (first: any[], second: any[], ) => {
    return first.concat(second);
}

const stuff: any[] = ['lorem ipsum', 1337, false, NaN];
console.log(joinArrays(books, stuff));