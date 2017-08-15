var pages = [{

	"titl": 0
	, "texts": "P"
}, {
	"titl": 1
	, "texts": "E"
}, {

	"titl": 2
	, "texts": "F"
}];

function arrayScan(pages) {
	var square = document.getElementById("square");

	for (var i = 0; i < pages.length; i++) {
		square.appendChild(createItems(pages[i]));
	}
}

arrayScan(pages);
function createItems(item) {

	var blok= document.createElement('div');
	var text = "<b>ID:</b> " + item.titl+ "<br>";
	text = text + "<b>Name:</b> " + item.texts;
	blok.innerHTML = text;

	return blok;
}

