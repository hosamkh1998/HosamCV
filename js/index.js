function onInit() {
  console.log("Ready");
  renderPersonalDetails();
  renderSoftware();
  renderLanguages();
  renderWorkExperience();
  renderEducation();
  renderSocial();
  renderProjects();
}

var personalDetails = [
  { item: "Name", value: "Hosam" },
  {
    item: "Tel",
    value: "+972-52-406-9659",
  },
  {
    item: "Email",
    value: "wolfergod23@gmail.com",
  },
  {
    item: "Address",
    value: "Peqiin, Israel",
  },
];
var software = [
  {
    item: "Highly proficient",
    value: "with Web Applications, Vue, Angular and Office",
  },
  {
    item: "Very good",
    value: "control of Firebase",
  },
  {
    item: "Good control",
    value: "of Node.js and MongoDB",
  },
];
var languages = [
  {
    item: "Arabic",
    value: "Mother's tongue",
  },
  {
    item: "Hebrew",
    value: "Full command",
  },
  {
    item: "English",
    value: "Very good command",
  },
];
var workExperience = [
  {
    title: "2020 – Today Disabled at work",
    items: ["Disabled at work"],
  },
  {
    title: "2018 – 2020, tranportation at taher hovalot",
    items: ["Moves and assembles furniture"],
  },
  {
    title: "2016 – 2018, Cellular technician, peqiin cellular",
    items: ["Repairs devices up to level D and sells in the store"],
  },
];
var education = [
  {
    title: "2023 – Full Stack programming course at Pro Code",
    items: ["Frontend: Vue, React, Angular", "Backend: Node.js, MongoDB"],
  },
  {
    title:
      "2023 – Final project, software practical engineer diploma degree, Ort Braude College",
    items: ["Administrative site for a planning and construction company"],
  },
  {
    title: "2017 – Certificate studies, cellular technician up to level D",
    items: ["I studied cellular technician up to level D level repairs"],
  },
];
var social = [
  {
    item: "Development",
    value:
      "and publication of a grammatical analysis method in Arabic helping teachers and students understand the various topics of syntax",
  },
  {
    item: "Volunteering",
    value: "in helping Arabic students reach matriculation",
  },
  {
    item: "Representative",
    value: "of the Student Association at TAU",
  },
  {
    item: "2 years",
    value:
      "participation in a 'Perah' project at an innovative school in Yarka",
  },
];

var myProjects = [
  {
    Image: "https://i.ytimg.com/vi/fpV1LTbavKk/hqdefault.jpg",
    title: "To Be Programmer",
    technologies: ["Vue, Node.js, MongoDB"],
    link: "https://wolfergod23.github.io/To-Be-Programmer/",
    description:
      "A website for a programming course, where students can register and log in, and the teacher can add and delete students, and the students can see their grades and the teacher can add and delete grades.",
    createdBy: "25/04/2023",
  },
  {
    Image:
      "https://assets.materialup.com/uploads/24de0951-14e6-4f0c-900a-4dc57f522234/26.png",
    title: "Products Gallery",
    technologies: ["Html, CSS, JavaScript"],
    link: "https://hosamkh1998.github.io/galleryProCode/",
    description:
      "A website for a book shop, where the user can register and log in, and the user can add and delete books to the cart, and the user can see the total price of the books in the cart.",
    createdBy: "27/03/2023",
  },
];

var ePersonalDetails = document.querySelector(".personalDetails");
var eSoftware = document.querySelector(".software");
var eLanguages = document.querySelector(".languages");
var eWorkExperience = document.querySelector(".workExperience");
var eEducation = document.querySelector(".education");
var eSocial = document.querySelector(".social");
var eProjects = document.querySelector(".myProjects");

function renderPersonalDetails() {
  var strHTML = "";
  personalDetails.forEach(function (item) {
    strHTML += `<li><span><b>${item.item}</b>:</span> ${item.value}</li>`;
  });
  if (ePersonalDetails) ePersonalDetails.innerHTML = strHTML;
}

function renderSoftware() {
  var strHTML = "";
  software.forEach(function (item) {
    strHTML += `<li><span><b>${item.item}</b>:</span> ${item.value}</li>`;
  });
  if (eSoftware) eSoftware.innerHTML = strHTML;
}

function renderLanguages() {
  var strHTML = "";
  languages.forEach(function (item) {
    strHTML += `<li><span><b>${item.item}</b>:</span> ${item.value}</li>`;
  });
  if (eLanguages) eLanguages.innerHTML = strHTML;
}

function renderWorkExperience() {
  var strHTML = "";
  workExperience.forEach(function (item) {
    strHTML += `<li><span><b>${item.title}</b>:</span><ul>`;
    item.items.forEach(function (item) {
      strHTML += `<li>${item}</li>`;
    });
    strHTML += `</ul></li>`;
  });
  if (eWorkExperience) eWorkExperience.innerHTML = strHTML;
}

function renderEducation() {
  var strHTML = "";
  education.forEach(function (item) {
    strHTML += `<li><span><b>${item.title}</b>:</span><ul>`;
    item.items.forEach(function (item) {
      strHTML += `<li>${item}</li>`;
    });
    strHTML += `</ul></li>`;
  });
  if (eEducation) eEducation.innerHTML = strHTML;
}

function renderSocial() {
  var strHTML = "";
  social.forEach(function (item) {
    strHTML += `<li><span><b>${item.item}</b>:</span> ${item.value}</li>`;
  });
  if (eSocial) eSocial.innerHTML = strHTML;
}

function renderProjects() {
  var strHTML = "";
  myProjects.forEach(function (item) {
    (strHTML += `<div class="card m-1 cardProj" style="width: 18rem">
    <img
      src="${item.Image}"
      class="card-img-top"
      alt="${item.title}"
    />
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">
        <span class="fs-5 fw-bolder">technologies:</span>
        <ul>`),
      item.technologies.forEach(function (item) {
        strHTML += `<li>${item}</li>`;
      }),
      (strHTML += `
        </ul>
      </p>
      <p class="fs-5 text-primary">${item.createdBy}</p>
      <p class="card-text">${item.description}</p>
      <button class="btn btn-success col-12"><a class="text-light" href="${item.link}" target="_blank">Visit site</a></button>
    </div>
  
  </div>`);
  });
  if (eProjects) eProjects.innerHTML = strHTML;
}
