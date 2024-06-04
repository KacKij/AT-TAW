var sumPubYears = function (input) {
    return input.map(function (x) { return x.publicationYear; }).reduce(function (a, b) { return a + b; });
};
var books = [
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
var joinArrays = function (first, second) {
    return first.concat(second);
};
var stuff = ['lorem ipsum', 1337, false, NaN];
console.log(joinArrays(books, stuff));
