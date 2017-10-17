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
//	datawork.forEach(function(person){
//		div.appendChild(person);
//	})
//}

function init(person) {
	var divone = document.createElement("div");
	var text = person.title + "<br>";
	text = text + person.texts;
	divone.innerHTML = text;
	return divone;
}
