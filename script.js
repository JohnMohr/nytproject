var author = "https://api.nytimes.com/svc/books/v3/reviews.json?author=" + bookAuthor + "&api-key=qXumAozqy9Go05UQAhGponS62qp0WILb"
var queryURL = "https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=qXumAozqy9Go05UQAhGponS62qp0WILb"

var searchTerm = $("#search-term");
var fiveResults = $("#5");
var twentyResults = $("#20");
var fiftyResults = $("#50");
var bookAuthor = $("#book-author");
var publicationDate = $("#publication-dt");
var resultsField = $("#results-here");


//author, title, 
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});
$.ajax({
    url: author,
    method: "GET"
}).then(function (response) {
    console.log(response);

});