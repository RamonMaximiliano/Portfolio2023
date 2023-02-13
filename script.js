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

let lang_items = document.querySelectorAll(".language-div-item")
        console.log(lang_items)
 
for (item of lang_items){
    item.addEventListener("mouseover", function test(e){
        document.getElementById(`level-${e.target.id}`).setAttribute("style", "visibility:visible")
    } )
}

for (item of lang_items){
    item.addEventListener("mouseout", function test(e){
        document.getElementById(`level-${e.target.id}`).setAttribute("style", "visibility:hideen")
    } )
}






/* LANGUAGE CHANGER START */

function portugues() {
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

    /*Education translation start*/
    document.getElementById("Education").innerText = "Formação";
    document.getElementById("graduation").innerText = "Análise e desenvolvimento de sistemas";
    document.getElementById("mba-data").innerText = "MBA em Data Science";
    document.getElementById("mba-data").innerText = "MBA em Data Science";
    document.getElementById("mba-project").innerText = "MBA em Gestão de projetos";
    document.getElementById("graduation-text").innerText = "Graduação em analise, desenvolvimento, documentação, teste, implantação e manutenção de sistemas computacionais e softwares.";
    document.getElementById("mba-data-text").innerText = "Tecnologia para negócios: AI, Data Science e Big Data. Como utilizar as principais tendências em tecnologia para administrar negócios tecnologicamente competitivos.";
    document.getElementById("mba-project-text").innerText = "Gestão de projetos desde a sua concepção até a implementação, integração entre equipes, prazos, custos, recursos, alinhado com as melhores práticas internacionais.";
    /*Education translation end*/

    /*Languages translation start*/
    document.getElementById("Languages").innerText = "Idiomas";
    document.getElementById("Portuguese").innerText = "Português";
    document.getElementById("English").innerText = "Inglês";
    document.getElementById("Spanish").innerText = "Espanhol";
    document.getElementById("French").innerText = "Francês";
    document.getElementById("Native").innerText = "Nativo";
    document.getElementById("Fluent-Ingles").innerText = "Fluente";
    document.getElementById("Fluent-Espanhol").innerText = "Fluente";
    document.getElementById("Fluent-Frances").innerText = "Fluente";

    /*Languages translation end*/

}

function ingles() {
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

    /*Education translation start*/
    document.getElementById("Education").innerText = "Education";
    document.getElementById("graduation").innerText = "System Analysis and Development";
    document.getElementById("mba-data").innerText = "MBA in Data Science";
    document.getElementById("mba-project").innerText = "MBA in Project Management";
    document.getElementById("graduation-text").innerText = "Degree in analysis, development, documentation, testing, implementation and maintenance of computer systems and software.";
    document.getElementById("mba-data-text").innerText = "Technology for business: AI, Data Science and Big Data. How to use key trends in technology to run a technologically competitive business.";
    document.getElementById("mba-project-text").innerText = "Project management from conception to implementation, integration between teams, deadlines, costs, resources, in line with the best international practices.";
    /*Education translation end*/

    /*Languages translation start*/
    document.getElementById("Languages").innerText = "Languages";
    document.getElementById("Portuguese").innerText = "Portuguese";
    document.getElementById("English").innerText = "English";
    document.getElementById("Spanish").innerText = "Spanish";
    document.getElementById("French").innerText = "French";
    document.getElementById("Native").innerText = "Native";
    document.getElementById("Fluent-Ingles").innerText = "Fluent";
    document.getElementById("Fluent-Espanhol").innerText = "Fluent";
    document.getElementById("Fluent-Frances").innerText = "Fluent";    /*Languages translation end*/

}

/* LANGUAGE CHANGER END */












