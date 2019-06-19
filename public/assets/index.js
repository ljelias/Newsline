

$(document).ready(function() {
  // add event listeners for saving, and deleting articles and "get new articles" buttons
  $("#get1").on("click", getNews);
  $("#clear1").on("click", deleteAllNews);
  $(".savethis").on("click", saveThisArticle);
  $(".clear").on("click", deleteThisArticle);
});



function buildDivs() {
    for (var i = 0; i < results.length; i++) {
        var newsItemTitle = $("<h3>").text(results[i].title);
        var a = $("<a>").attr({
                "class": "article-link",
                "target": "blank",
                "href": (results[i].link)
                }).text(newsItemTitle);

        var saveButton = $("<button>").text("Save this").attr({"class":"w3-btn w3-small w3-pale-green"});
        var deleteButton = $("<button>").text("X").attr({"class":"w3-btn w3-small w3-red"});
        var p = $("<p>").text(results[i].brief).append(saveButton).append(deleteButton);

        var headlineDiv = $("<div>").attr({"class": "newsbox"}).append(a).append(p);

        $("#container2a").append(headlineDiv);
        };
}