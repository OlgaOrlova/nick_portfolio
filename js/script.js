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
$(document).ready(function () {
	$("#collapsable-nav").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href')
			, top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 1500);
	});
});
$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		}
		else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
	});
});

(function (window) {
/*Карусель*/
var data = [{
	"id": 0
	, "name": "P"
}, {
	"id": 1
	, "name": "E"
}, {
	"id": 2
	, "name": "F"
}];
var data1 = [
	{
		"id": 3
		, "name": "P"
}, {
		"id": 4
		, "name": "E"
}, {
		"id": 5
		, "name": "F"
}]
var data2 = [
	{
		"id": 3
		, "name": "P"
}, {
		"id": 4
		, "name": "E"
}, {
		"id": 5
		, "name": "F"
}];

function initCarusel(data, data1, data2) {
	createItems(data, true);
	createItems(data1, false);
	createItems(data2, false);
}

function createItems(data, isActive) {
	var slideContainer = document.getElementById("slideContainer");
	var slide = document.createElement('div');
	if (isActive) {
		slide.className = "item active";
	}
	else {
		slide.className = "item";
	}
	for (var i = 0; i < data.length; i++) {
		slide.appendChild(createItem(data[i]));
	}
	slideContainer.appendChild(slide);
}

function createItem(person) {
	var listButton = document.createElement('div');
	listButton.className = "category-tileWorks col-lg-4 col-md-4 col-sm-4 col-xs-4 col-xxs-4";
	var text = "<b>ID:</b> " + person.id + "<br>";
	text = text + "<b>Name:</b> " + person.name;
	listButton.innerHTML = text;
	var image = document.createElement('img');
	image.className = "image";
	listButton.appendChild(image);
	var button = document.createElement('button');
	button.className = "listButto";
	button.style.display = "none";
	listButton.appendChild(button);
	button.addEventListener("click", fgh, false);
	listButton.addEventListener("mouseover", function () {
		button.style.display = "inline-block";
	}, false);
	listButton.addEventListener("mouseout", function () {
		button.style.display = "none";
	}, false);
	return listButton;
}
initCarusel(data, data1, data2);
var datawork = [{
	"title": "Cinamaker"
	, "texts": "Я живу в Харькове"
}, {
	"title": "Irny"
	, "texts": "Я жиыу в Украине"
}];
//	datawork.forEach(function(person){
//		div.appendChild(person);
//	})
//}

function b(datawork) {
		var mainContainer = document.getElementById("mainContainer");

	for (var i = 0; i < datawork.length; i++) {
		mainContainer.appendChild(init(datawork[i]));// ты же в функции init ничего не возвразаешь
	}

}

b(datawork);

function init(person) {
var divone = document.createElement("div");
	var text = person.title + "<br>";
	text = text + person.texts;
	divone.innerHTML = text;

	return divone;
}
	 window.data = data;
 window.data2 = data2;
 window.data1 = data1 ;


})(window);
