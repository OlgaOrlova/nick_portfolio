(function (window) {
	function gh(){
window.open(about:blank);
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

function () {
		window.open("https://www.w3schools.com");
	}, false
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
	}
  window.datawork = datawork;
	})(window);
