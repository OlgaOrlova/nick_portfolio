$(document).ready(function () {
    var templateSnippet = $('#template').html();
    var template = Handlebars.compile(templateSnippet);
    $('#projects-container').append(template(projects));

    $.fn.onItemClicked = function (id) {
        window.open("projectDetail.html?" + "id=" + id);
    };


});




