$(document).ready(function() {
    $.getJSON('info.json', function(data) {
        $.each(data.projects, function(i, project) {
            var projectSection = "<section>" +
                "<h3>" + project.name + "</h3>";

            if (project.role) {
                projectSection += "<p class=\"role\">" + project.role + "</p>";
            }

            projectSection += "<p>" + project.description;

            if (project.link !== "") {
                projectSection += " <a href=\"" + project.link +
                    "\" target=\"_blank\" rel=\"noopener noreferrer\"> " + (project.linkText || "GitHub") + " </a>";
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