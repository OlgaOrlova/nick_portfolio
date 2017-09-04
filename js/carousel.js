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
    var text = person.id + "<br>";
    text = "<br>" + person.name;
    listButton.innerHTML = text;

    var button = document.createElement('button');
    button.className = "listButto mui-btn mui-btn--raised mui-btn--danger ";
    button.style.display = "none";
    var buttonText = "<p>Click me</p>";
    button.innerHTML = buttonText;
    var href = document.createElement("a");
    href.href = "#myProjects";
    href.appendChild(button);

    listButton.appendChild(href);
    button.addEventListener("click", function () {

        g(person.id);
    }, false);
    listButton.addEventListener("mouseover", function () {
        button.style.display = "inline-block";
    }, false);
    listButton.addEventListener("mouseout", function () {
        button.style.display = "none";
    }, false);


    var image = document.createElement('img');
    image.className = "image";
    image.src = person.image_path;

    listButton.appendChild(image);
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
    add(blocksArray, skills.skills[index]);
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
        addToHead(skills.skills[index]);
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
    if (currentIndex > skills.skills.length - 1) {
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
    var projArr = skills.skills;
    for (var i = 0; i < 3; i++) {
        add(blocksArray, projArr[i])
    }
}
init();
displayElements(blocksArray);
