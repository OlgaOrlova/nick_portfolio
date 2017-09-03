$(document).ready(function () {
    var templateSnippet = $('#template').html();
    var template = Handlebars.compile(templateSnippet);
    $('#projects-container').append(template(projects));

    $.fn.onItemClicked = function (id) {
        window.open("projectDetail.html?" + "id=" + id);
    };
 

});

function g(id) {

    var items = [];
    var template = document.getElementById("template");
    var templateSnippet = Handlebars.compile(template.innerHTML);
    projects.projects.forEach(function (item) {
        if (item.skill_ids.includes(id)) {
            items.push(item);
        }
    })

    var projectsContainer = document.getElementById("projects-container");
    var pre = {"projects": items};
    var a = templateSnippet(pre);
    projectsContainer.innerHTML = a;


}


