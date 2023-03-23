/* 

https://portfolio-gsj.vercel.app/index.html#habilidades

https://ramonmaximiliano.github.io/Portfolio/

- Add "have fun area" with turn over card for the game projects
- Make header menu fixed position
- Make it mobile responsive
- When mobile version, sandwich menu
- Make Mario game to add to projects:
https://www.youtube.com/watch?v=r9buAwVBDhA&t=1182s&ab_channel=ManualdoDev


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
var step = 0

function right() {
  let firstCard = document.getElementById("slider");
  if (step == 0) {
    firstCard.setAttribute("style", "margin-left: -34%;");
    step = 1
  } else if (step == 1) {
    firstCard.setAttribute("style", "margin-left: -68%;");
    step = 2
  } else if (step == 2) {
    firstCard.setAttribute("style", "margin-left: -102%;");
    step = 3
  }
}

/* Pegar margem atual e adicionar ou diminuir conforme valor atual
*/

function left() {
  let firstCard = document.getElementById("slider");
  if (step == 1) {
    firstCard.setAttribute("style", "margin-left: 0%;");
    step = 0
  } else if (step == 2) {
    firstCard.setAttribute("style", "margin-left: -34%;");
    step = 1
  } else if (step == 3) {
    firstCard.setAttribute("style", "margin-left: -68%;");
    step = 2
  }
}

/*CARD SLIDER END*/


function cardeffectOn(x) {
  x.style.transition = "all 0.5s";
  x.style.border = "3px solid rgb(0, 189, 149)";
  x.style.boxShadow = "none";
/*   x.style.scale = "1.01";
 */  let img = x.querySelector('img');
  let title = x.querySelectorAll('h2')[1];
  img.setAttribute("style", "filter: grayscale(0%)");
  title.setAttribute("style", "color: rgb(0, 189, 149)");
}

function cardeffectOff(x) {
  x.style.border = "3px solid transparent";
  x.style.boxShadow = "1px 1px 5px 1px black";
/*   x.style.scale = "1";
 */  let img = x.querySelector('img');
  let title = x.querySelectorAll('h2')[1];
  img.setAttribute("style", "filter: grayscale(100%)");
  title.setAttribute("style", "color: white");
}





