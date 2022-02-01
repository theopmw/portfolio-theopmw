// Skills
// let skills = [
//     "HTML", "CSS", "JavaScript", "Python", "Git", "GitHub",
//     "Django", "Flask", "Materialize", "Bootstrap", "Sass",
//     "jQuery", "Stripe", "VSCode", "Heroku", "Slack",
//     "AWS", "PostgreSQL", "MongoDB", "Balsamiq"
// ];

let languages = ["HTML", "CSS", "JavaScript", "Python"];

// set variables
let imgType = ".png";
let imgs_skills = "static/img/skills/";
let ul_languages = "<div class='languages-container'><ul>";

// slice languages array
let languagesRow1 = languages.slice(0, 4);

// row 1
let row1 = ul_languages;
languagesRow1.map((language) => {
  row1 += `<li class="skills-item"><img src="${imgs_skills}${language.toLowerCase()}${imgType}" alt="${language}" lazyload="on"><h3>${language}</h3></li>`;
});
row1 += "</ul></div>";

// append all rows to #skills
let languagesDiv = document.getElementById("languages");
languagesDiv.innerHTML += row1;
