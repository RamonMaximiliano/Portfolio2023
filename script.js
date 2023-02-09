/* 

https://portfolio-gsj.vercel.app/index.html#habilidades

https://ramonmaximiliano.github.io/Portfolio/

*/

/* PROFILE DATA FETCH API START*/

/* Fetch GitHub API to get profile data */
/* https://api.github.com/users/RamonMaximiliano */

function profilePicture() {

    fetch("https://api.github.com/users/RamonMaximiliano")
        .then(function setPicture(profile_data) {
            return profile_data.json()
        })
        .then(function (profile_data) {
            document.getElementById("Profile_name").innerHTML = profile_data.name;
            document.getElementById("profile_picture").setAttribute("src", `${profile_data.avatar_url}`)
            document.getElementById("Profile_picture_Anchor").setAttribute("href", `${profile_data.html_url}`)
        })
        .catch(function () {
            window.alert("Sorry, you are offline, most of the page content will not load!")
        })
}

window.onload = profilePicture();

/* Fetch GitHub API to get profile data */
/* https://api.github.com/users/RamonMaximiliano */

/* PROFILE DATA FETCH API END*/

/* ---------------------------------------------------------------------------- */

/* LANGUAGE CHANGER START */

function portugues(){
    document.getElementById("Ingles").classList.remove("language-changer-button");
    document.getElementById("Portugues").classList.add("language-changer-button");

    /*Header translation start*/
    document.getElementById("Ingles").innerText = "Inglês";
    document.getElementById("Portugues").innerText = "Português";
    document.querySelector(".main-title").innerText = "Portfólio";
    document.getElementById("Sobre").innerText = "Sobre";
    document.getElementById("Projetos").innerText = "Projetos";
    document.getElementById("Curriculo").innerText = "Currículo";
    /*Header translation end*/

    /*Profile translation start*/
    document.querySelector(".profession").innerText = "Aprendendo Web Dev, a meta é ser dev full stack";
    document.getElementById("Fone").innerText = "Fone: ";
    document.getElementById("Endereço").innerText = "Endereço: ";
    /*Profile translation end*/

    /*Footer translation start*/
    document.getElementById("Portfolio-footer").innerText = "Portfólio";
    document.getElementById("text-footer").innerText = "Desenvolvido por Ramon Maximiliano";
    /*Footer translation end*/

}

function ingles(){
    document.getElementById("Portugues").classList.remove("language-changer-button")
    document.getElementById("Ingles").classList.add("language-changer-button")

    /*Header translation start*/
    document.getElementById("Ingles").innerText = "English";
    document.getElementById("Portugues").innerText = "Portuguese";
    document.querySelector(".main-title").innerText = "Portfolio";
    document.getElementById("Sobre").innerText = "About";
    document.getElementById("Projetos").innerText = "Projects";
    document.getElementById("Curriculo").innerText = "Resume";
    /*Header translation end*/

    /*Profile translation start*/
    document.querySelector(".profession").innerText = "Learning Web Dev, the goal is to be a full stack dev";
    document.getElementById("Fone").innerText = "Phone: ";
    document.getElementById("Endereço").innerText = "Address: ";
    /*Profile translation end*/

    /*Footer translation start*/
    document.getElementById("Portfolio-footer").innerText = "Portfolio";
    document.getElementById("text-footer").innerText = "Developed by Ramon Maximiliano";
    /*Footer translation end*/

}

/* LANGUAGE CHANGER END */












