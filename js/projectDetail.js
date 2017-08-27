$(document).ready(function () {

    var urlString = window.location.search;
    var nn = urlString.substring(urlString.indexOf("=") + 1, urlString.length);
    var element;
    projects.projects.forEach(function (item) {
        if (item.id == nn) {
            element = item;
        }
    });
    var templateSnippet = $('#projectTemplate').html();
    var template = Handlebars.compile(templateSnippet);
    $('#mainContent').append(template(element));

});