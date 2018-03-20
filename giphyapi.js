var image = $(this).attr("#image-input");

var images = ["Toy Story", "Bug's Life", "Toy Story 2", "Incredibles"];

//BROKEN, GO BACK  var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ search +"?api_key=MefACdu3H6cYdsq06RCoHA7gmS8bJJUj";


var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + image + "&api_key=MefACdu3H6cYdsq06RCoHA7gmS8bJJUj&limit=10&";

console.log(queryURL);

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});


//Button render function



function renderButtons() {

    // Deletes the image prior to adding new image
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons-view").empty();
    // Loops through the array of image
    for (var i = 0; i < images.length; i++) {

        // Then dynamicaly generates buttons for each image in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        // Adds a class of image to our button
        a.addClass("image");
        // Added a data-attribute
        a.attr("data-name", images[i]);
        // Provided the initial button text
        a.text(images[i]);
        // Added the button to the buttons-view div
        $("#buttons-view").append(a);
    }
}

//onclicks
$("#add-image").on("click", function (event) {
    event.preventDefault();
    console.log("CLICK WORKS");
    // This line of code will grab the input from the textbox
    var image = $("#image-input").val().trim();

    // The image from the textbox is then added to our array
    images.push(image);

    // Calling renderButtons which handles the processing of our image array
    renderButtons();
});


$("#buttons-view").on("click", function (event) {
    event.preventDefault();
    console.log("Buttons CLICK WORKS");
    // This line of code will grab the input from the textbox
    var image = $("#image-input").val().trim();
    console.log( $("#image-input").val().trim());



    // Calling renderButtons which handles the processing of our image array

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + image + "&api_key=MefACdu3H6cYdsq06RCoHA7gmS8bJJUj&limit=10&";

    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);    

        var results = response.data;
        // The image from the textbox is then added to our array
        console.log(results.length);
    for (var i = 0; i < results.length; i++) {
console.log(results);
            // Only taking action if the photo has an appropriate rating
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
              // Creating a div with the class "item"
              
              var gifDiv = $("<div class='item'>");

              // Storing the result item's rating
              var rating = results[i].rating;

              // Creating a paragraph tag with the result item's rating
              var p = $("<p>").text("Rating: " + rating);

              // Creating an image tag
              var personImage = $("<img>");

              // Giving the image tag an src attribute of a proprty pulled off the
              // result item
              personImage.attr("src", results[i].images.fixed_height.url);

              // Appending the paragraph and personImage we created to the "gifDiv" div we created
              gifDiv.append(p);
              gifDiv.append(personImage);
            

              // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
              $("#images-view").prepend(gifDiv);
            }
          }
        var imagediv = $("<div id='imgDiv'>");
        var imagebucket = $("<img>")
        imagediv.attr("src", results.data[i].images.fixed_height_small.url)

    });
});


//Add search topics


$(document).on("click", "#image-input", );
{
    $("images").empty();
    // console.log(results);




};
// renderButtons();





//NOTE TO SELF, ADD RATING + Q PARAMETERS