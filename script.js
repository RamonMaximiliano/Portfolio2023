
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


/* ---------------------------------------------------------------------------- */











