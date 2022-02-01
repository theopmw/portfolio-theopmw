// Skills
// let skills = [
//     "HTML", "CSS", "JavaScript", "Python", "Git", "GitHub",
//     "Django", "Flask", "Materialize", "Bootstrap", "Sass",
//     "jQuery", "Stripe", "VSCode", "Heroku", "Slack",
//     "AWS", "PostgreSQL", "MongoDB", "Balsamiq"
// ];

let languages = ["HTML", "CSS", "JavaScript", "Python"];
let frameworks = [
  "Bootstrap",
  "Materialize",
  "JQuery",
  "Sass",
  "Flask",
  "Jinja2",
  "Django",
];

// set variables
let imgType = ".png";
let imgs_languages = "static/img/skills/languages/";
let imgs_frameworks = "static/img/skills/frameworks_libraries/";
let ul_languages = "<div class='languages-container'><ul>";
let ul_frameworks = "<div class='frameworks-container'><ul>";

// slice languages array
let languagesRow1 = languages.slice(0, 4);

// slice languages array
let frameworksRow1 = frameworks.slice(0, 7);

// languages row 1
let langRow1 = ul_languages;
languagesRow1.map((language) => {
  langRow1 += `<li class="skills-item"><img src="${imgs_languages}${language.toLowerCase()}${imgType}" alt="${language}" lazyload="on"><h3>${language}</h3></li>`;
});
langRow1 += "</ul></div>";

// frameworks row 1
let frameRow1 = ul_languages;
frameworksRow1.map((framework) => {
  frameRow1 += `<li class="skills-item"><img src="${imgs_frameworks}${framework.toLowerCase()}${imgType}" alt="${framework}" lazyload="on"><h3>${framework}</h3></li>`;
});
frameRow1 += "</ul></div>";

// append all rows to #languages
let languagesDiv = document.getElementById("languages");
languagesDiv.innerHTML += langRow1;

// append all rows to #frameworks
let frameworksDiv = document.getElementById("frameworks");
frameworksDiv.innerHTML += frameRow1;
