// /**
//  * Created by Nick on 20.08.2017.
//  */
// var displayItems = 3;
// var lastPos = 0;


var currentIndex = 3;
var mainContainer = document.getElementById("mainContainer");

var blocksArray = [];


function createItem(person) {
    var listButton = document.createElement('div');
    var text = "<b>ID:</b> " + person.id + "<br>";
    text = text + "<b>Name:</b> " + person.name;
    listButton.innerHTML = text;
    var image = document.createElement('img');
    image.className = "image";
    image.src = "holder.js/300x250/sky";

    listButton.appendChild(image);
    var button = document.createElement('button');
    button.className = "listButto";
    button.style.display = "none";
    listButton.appendChild(button);
    button.addEventListener("click", function () {
        window.open("works.html?id=" + person.id);
    }, false);
    listButton.addEventListener("mouseover", function () {
        button.style.display = "inline-block";
    }, false);
    listButton.addEventListener("mouseout", function () {
        button.style.display = "none";
    }, false);
    return listButton;
}

function add(array, dataItem) {
    var block3 = createItem(dataItem);
    block3.id = "blocks";
    array.push(block3);
}
function remove(array) {
    array.shift();
}
function removeLast(array) {
    array.pop();
}

function next() {
    var index = nextIndex();
    add(blocksArray, itemsText[index]);
    remove(blocksArray);
    displayElements(blocksArray);
}
document.getElementById('buttOne').onclick = next; 

function addToHead(dataItem) {
    var block3 = createItem(dataItem);
    block3.id = "blocks";
    blocksArray.unshift(block3);
}
function back() {
    var decIndex = prevIndex();
    var index = decIndex - 4;

    if (index >= 0) {
        removeLast(blocksArray);
        addToHead(itemsText[index]);
        displayElements(blocksArray);
    }
}
document.getElementById('buttTwo').onclick = back;

function displayElements(dataElemtnts) {
    mainContainer.innerHTML = "";
    dataElemtnts.forEach(function (item) {
        mainContainer.appendChild(item);
        console.log(item);
    })
}

function nextIndex() {
    if (currentIndex > itemsText.length - 1) {
        return currentIndex;
    }

    return currentIndex++;
}
function prevIndex() {
    if (currentIndex < 3) {
        return 2;
    }
    return currentIndex--;
}
function init() {
    for (var i = 0; i < 3; i++) {
        add(blocksArray, itemsText[i])
    }
}
init();
displayElements(blocksArray);
