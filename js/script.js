$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});
$(document).ready(function(){
    $("#collapsable-nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
$(function() {
$(window).scroll(function() {

if($(this).scrollTop() != 0) {

$('#toTop').fadeIn();

} else {

$('#toTop').fadeOut();

}

});

$('#toTop').click(function() {

$('body,html').animate({scrollTop:0},800);

});

});

/*Карусель*/
var data = [{
	"id": 0
	, "name": "Phil"
}, {
	"id": 1
	, "name": "Ed"
}, {
	"id": 2
	, "name": "Fred"
}];
var datatwo = [{
	"id": 0
	, "name": "Phil"
}, {
	"id": 1
	, "name": "Ed"
}, {
	"id": 2
	, "name": "Fred"
}];
var datathree = [{
	"id": 0
	, "name": "Phil"
}, {
	"id": 1
	, "name": "Ed"
}, {
	"id": 2
	, "name": "Fred"
}];
data.forEach(function (person) {
	var listButton = document.createElement('listButton');
	listButton.className = "category-tileWorks col-lg-4 col-md-4 col-sm-4 col-xs-4 col-xxs-4";
	var text = "<b>ID:</b> " + person.id + "<br>";
	text = text + "<b>Name:</b> " + person.name;
	listButton.innerHTML = text;

	var button = document.createElement('button');
		button.className = "listButto";
	    button.style.display = "none";
		listButton.appendChild(button);
		button.addEventListener("click", function () {
			window.open("https://www.w3schools.com");
		}, false);

	listButton.addEventListener("mouseover", function () {
	button.style.display = "inline-block";
	}, false);


	listButton.addEventListener("mouseout", function () {
	button.style.display = "none";
	}, false);


	document.getElementById("output").appendChild(listButton);
});
datatwo.forEach(function (person) {
	var listButton = document.createElement('listButton');
	listButton.className = "category-tileWorks col-lg-4 col-md-4 col-sm-4 col-xs-4 col-xxs-4";
	var text = "<b>ID:</b> " + person.id + "<br>";
	text = text + "<b>Name:</b> " + person.name;
	listButton.innerHTML = text;

	var button = document.createElement('button');
		button.className = "listButto";
	    button.style.display = "none";
		listButton.appendChild(button);
		button.addEventListener("click", function () {
			window.open("https://www.w3schools.com");
		}, false);

	listButton.addEventListener("mouseover", function () {
	button.style.display = "inline-block";
	}, false);


	listButton.addEventListener("mouseout", function () {
	button.style.display = "none";
	}, false);


	document.getElementById("outputtwo").appendChild(listButton);
});
datathree.forEach(function (person) {
	var listButton = document.createElement('listButton');
	listButton.className = "category-tileWorks col-lg-4 col-md-4 col-sm-4 col-xs-4 col-xxs-4";
	var text = "<b>ID:</b> " + person.id + "<br>";
	text = text + "<b>Name:</b> " + person.name;
	listButton.innerHTML = text;

	var button = document.createElement('button');
		button.className = "listButto";
	    button.style.display = "none";
		listButton.appendChild(button);
		button.addEventListener("click", function () {
			window.open("https://www.w3schools.com");
		}, false);

	listButton.addEventListener("mouseover", function () {
	button.style.display = "inline-block";
	}, false);


	listButton.addEventListener("mouseout", function () {
	button.style.display = "none";
	}, false);


	document.getElementById("outputhree").appendChild(listButton);
});
