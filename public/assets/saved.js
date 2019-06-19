
$(document).ready(function() {
    // add event listeners for buttons for saving, and deleting articles and making notes
    $("#clear2").on("click", deleteAllSaved);
    $(".clearthis").on("click", deleteThisArticle);
    $(".writenotes").on("click", addNotes);
    });