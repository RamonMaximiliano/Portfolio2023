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
    document.getElementById("Ingles").classList.remove("language-changer-button")
    document.getElementById("Portugues").classList.add("language-changer-button")
}

function ingles(){
    document.getElementById("Portugues").classList.remove("language-changer-button")
    document.getElementById("Ingles").classList.add("language-changer-button")
}



/* LANGUAGE CHANGER END */

