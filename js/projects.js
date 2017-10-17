$(document).ready(function () {
    var templateSnippet = $('#template').html();
    var template = Handlebars.compile(templateSnippet);
    $('#projects-container').append(template(projects));

    $.fn.onItemClicked = function (id) {
        window.open("projectDetail.html?" + "id=" + id);
    };


});
//animation of blocks
$(document).ready(function () {
    $.fn.animatBlock = function (ops) {
        var $elem = this;
        var res = $.extend({delay: 600, speed: 1000}, ops);
        for (var i = 0, pause = 0, l = $elem.length; i < l; i++, pause += res.delay) {
            $elem.eq(i).delay(pause).fadeIn(res.speed);
        }
        return $elem;
    };
    $('.projectBlok').animatBlock();
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


