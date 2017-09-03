$(document).ready(function () {

    var urlString = window.location.search;
    var projId = urlString.substring(urlString.indexOf("=") + 1, urlString.length);
    var currentProject;
    projects.projects.forEach(function (item) {
        if (item.id == projId) {
            currentProject = item;
        }

    });
    console.log(currentProject);
    var templateSnippet = $('#projectTemplate').html();
    var template = Handlebars.compile(templateSnippet);
    $('#section1').append(template(currentProject));


    var skillIds = currentProject.skill_ids;
    console.log(skillIds);
    var ourSkills = [];
    skills.skills.forEach(function (item) {
        if (skillIds.includes(item.id)) {
            ourSkills.push(item);
        }
    });
    var skillsContainer = {"skills": ourSkills};
    var templateSkillsNames = $('#projectTemplateSkills').html();
    var template1 = Handlebars.compile(templateSkillsNames);
    $('#section2').append(template1(skillsContainer));
    // console.log(ourSkills);


//    section3
    var picSkillIds = currentProject.skill_ids;

    var ourPicSkills = [];
    currentProject.pictures.forEach(function (item) {

        if ($("skillIds:contains(item.id)")) {
            ourPicSkills.push(item);

        }
    });
    var skillsPicContainer = {"picture": ourPicSkills};
    var templateSkillsPic = $('#projectTemplateSkillsPic').html();
    var template2 = Handlebars.compile(templateSkillsPic);
    $('#section3').append(template2(skillsPicContainer));
    // console.log(ourSkills);
//IMAGES


    $(".image").click(function () {	// Событие клика на маленькое изображение
        var img = $(this);	// Получаем изображение, на которое кликнули
        var src = img.attr('src'); // Достаем из этого изображения путь до картинки
        $("#section3").append("<div class='popup'>" + //Добавляем в тело документа разметку всплывающего окна
            "<div class='popup_bg'></div>" + // Блок, который будет служить фоном затемненным
            "<img src=" + src + " class='popup_img' />" + // Само увеличенное фото
            "</div>");
        $(".popup").fadeIn(800); // Медленно выводим изображение
        $(".popup_bg").click(function () {	// Событие клика на затемненный фон
            $(".popup").fadeOut(800);	// Медленно убираем всплывающее окно
            setTimeout(function () {	// Выставляем таймер
                $(".popup").remove(); // Удаляем разметку высплывающего окна
            }, 800);
        });
    });

//END IMAGES
//END SECTION3
});