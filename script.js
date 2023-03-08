/* 

https://portfolio-gsj.vercel.app/index.html#habilidades

https://ramonmaximiliano.github.io/Portfolio/


- Add "have fun area" with turn over card for the game projects

*/

/* PROFILE DATA FETCH API START*/

/* Fetch GitHub API to get profile data */
/* https://api.github.com/users/RamonMaximiliano */

function profilePicture() {
  fetch("https://api.github.com/users/RamonMaximiliano")
    .then(function setPicture(profile_data) {
      return profile_data.json();
    })
    .then(function (profile_data) {
      document.getElementById("Profile_name").innerHTML = profile_data.name;
      document
        .getElementById("profile_picture")
        .setAttribute("src", `${profile_data.avatar_url}`);
      document
        .getElementById("Profile_picture_Anchor")
        .setAttribute("href", `${profile_data.html_url}`);
    })
    .catch(function () {
      window.alert(
        "Sorry, you are offline, most of the page content will not load!"
      );
    });
}

window.onload = profilePicture();

/* PROFILE DATA FETCH API END*/

/* --------------------------------------------------------------------------------------------------- */

/* LANGUAGE LEVEL APPEARANCE START*/

let lang_items = document.querySelectorAll(".language-div-item");

for (item of lang_items) {
  item.addEventListener("mouseover", function test(e) {
    document
      .getElementById(`level-${e.target.id}`)
      .setAttribute("style", "animation: appear;");
    document
      .getElementById(`level-${e.target.id}`)
      .setAttribute("style", "opacity:1");
  });
}

for (item of lang_items) {
  item.addEventListener("mouseout", function test(e) {
    document
      .getElementById(`level-${e.target.id}`)
      .setAttribute("style", "opacity:0");
  });
}

/* LANGUAGE LEVEL APPEARANCE END*/

/* --------------------------------------------------------------------------------------------------- */


/* TECH LEVEL APPEARANCE START*/

/* colocar um id pra cada um dos elementos da div, e criar uma var string que corta deixando só a variavel que quero */


let tech_items = document.querySelectorAll(".tech-item");

for (item of tech_items) {
  item.addEventListener("mouseover", function change(e) {

    let endTag = e.target.id
    let tagstring = endTag.split("-")[0]

    document.getElementById(`${tagstring}-Avançado`).setAttribute("style", "animation: appear;")

    document.getElementById(`${tagstring}-Avançado`).setAttribute("style", "opacity:1")
 });
}

for (item of tech_items) {
  item.addEventListener("mouseout", function change(e) {
    let endTag = e.target.id
    let tagstring = endTag.split("-")[0]
    document.getElementById(`${tagstring}-Avançado`).setAttribute("style", "opacity:0")
 });
}



/* TECH LEVEL APPEARANCE END*/

/*CARD SLIDER START*/





/*CARD SLIDER END*/

























/*

https://www.youtube.com/watch?v=7HPsdVQhpRw&ab_channel=CodingNepal


https://www.youtube.com/watch?v=JOdpkAJVub0&ab_channel=CodingLab

https://www.youtube.com/watch?v=qOO6lVMhmGc&ab_channel=CodingLab

*/