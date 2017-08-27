$(document).ready(function () {

    var urlString = window.location.search;
    var nn = urlString.substring(urlString.indexOf("=") + 1, urlString.length);
    var element;
    projects.projects.forEach(function (item) {
        if (item.id == nn) {
            element = item;
        }
    });
    alert(element.id + " " + element.name);
});