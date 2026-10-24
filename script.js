$(document).ready(function() {
    $.getJSON('info.json', function(data) {
        $.each(data.experience, function(i, job) {
            $("#experience-container").append(renderSection(job, job.role + " · " + job.date));
        });

        $.each(data.projects, function(i, project) {
            $("#projects-container").append(renderSection(project, project.role));
        });
    });
});

function renderSection(item, subtitle) {
    var section = "<section>" +
        "<h3>" + item.name + "</h3>";

    if (subtitle) {
        section += "<p class=\"role\">" + subtitle + "</p>";
    }

    section += "<p>" + item.description;

    if (item.link !== "") {
        section += " <a href=\"" + item.link +
            "\" target=\"_blank\" rel=\"noopener noreferrer\"> " + (item.linkText || "GitHub") + " </a>";
    }

    section += "</p>";

    $.each(item.tags, function(i, tag) {
        section += "<span>" + tag + "</span>";
    });

    section += "</section>";
    return section;
}
