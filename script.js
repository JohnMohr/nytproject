


var author = ""
var queryURL = "https://api.nytimes.com/svc/books/v3/reviews.json?author=" + author + "&api-key=qXumAozqy9Go05UQAhGponS62qp0WILb"



$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});