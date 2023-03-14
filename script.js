/* 

https://portfolio-gsj.vercel.app/index.html#habilidades

https://ramonmaximiliano.github.io/Portfolio/


- Add "have fun area" with turn over card for the game projects
- Make header menu fixed position

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

var stepLeft = 1
var stepRight = 1

function left(){
  let Leftarrow = document.getElementById("slider");

  if(stepLeft == 1){
    Leftarrow.setAttribute("style", "margin-left: -34%;");
    stepLeft = 2

  } else if(stepLeft == 2){
    Leftarrow.setAttribute("style", "margin-left: -68%;");
    stepLeft = 3

  } else if(stepLeft == 3){
    Leftarrow.setAttribute("style", "margin-left: -102%;");
    stepLeft = 4
  } 
}

/* Pegar margem atual e adicionar ou diminuir conforme valor atual
 */


function right(){
  let Leftarrow = document.getElementById("slider");

  if(stepRight == 1){
    Leftarrow.setAttribute("style", "margin-left: 34%;");
    stepRight = 2

  } else if(stepRight == 2){
    Leftarrow.setAttribute("style", "margin-left: 68%;");
    stepRight = 3

  } else if(stepRight == 3){
    Leftarrow.setAttribute("style", "margin-left: 102%;");
    stepRight = 4
  }
}






/*CARD SLIDER END*/




/*

https://www.youtube.com/watch?v=7HPsdVQhpRw&ab_channel=CodingNepal


https://www.youtube.com/watch?v=JOdpkAJVub0&ab_channel=CodingLab

https://www.youtube.com/watch?v=qOO6lVMhmGc&ab_channel=CodingLab

*/