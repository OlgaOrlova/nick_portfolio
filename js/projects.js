$(document).ready(function () {
    var templateSnippet = $('#template').html();
    var template = Handlebars.compile(templateSnippet);
    $('#projects-container').append(template(projects));

    $.fn.onItemClicked = function (id) {
        window.open("projectDetail.html?" + "id=" + id);
    };


    // $(".category-tile-project").mouseenter(function () {
    //     $(".category-tile-project").append( //Добавляем в тело документа разметку всплывающего окна
    //         "<div class='daker'></div>");
    //     $(".daker").css("background","rgba(0, 0, 0, 0.4)");
    //     $(".daker").css("z-index","1");
    //     $(".projectItemButton").css("z-index","2");
    //     $(".projectItemButton").css("background","rgba(0, 0, 0, 0.4)");
    //
    // });
});




