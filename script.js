$(document).ready(function() {
    $.getJSON('info.json', function(data) {
        $.each(data.projects, function(i, project) {
            var projectSection = "<section>" +
                "<h3>" + project.name + "</h3>" +
                "<p>" + project.description;

            if (project.link !== "") {
                projectSection += " <a href=\"" + project.link +
                    "\" target=\"_blank\" rel=\"noopener noreferrer\"  \"> GitHub </a>";
            }

            projectSection += "</p>";

            $.each(project.tags, function(i, tag) {
                projectSection += "<span>" + tag + "</span>";
            });

            projectSection += "</section>";
            $("#projects-container").append(projectSection);
        });
    });
});