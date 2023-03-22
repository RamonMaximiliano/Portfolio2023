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
  document.querySelector(".profession").innerText =
    "Aprendendo Web Dev, a meta é ser dev full stack";
  document.getElementById("Fone").innerText = "Fone: ";
  document.getElementById("Endereço").innerText = "Endereço: ";
  /*Profile translation end*/

  /*Footer translation start*/
  document.getElementById("Portfolio-footer").innerText = "Portfólio";
  document.getElementById("text-footer").innerText =
    "Desenvolvido por Ramon Maximiliano";
  /*Footer translation end*/

  /*Education translation start*/
  document.getElementById("Education").innerText = "Formação";
  document.getElementById("graduation").innerText =
    "Análise e desenvolvimento de sistemas";
  document.getElementById("mba-data").innerText = "MBA em Data Science";
  document.getElementById("mba-data").innerText = "MBA em Data Science";
  document.getElementById("mba-project").innerText =
    "MBA em Gestão de projetos";
  document.getElementById("graduation-text").innerText =
    "Graduação em analise, desenvolvimento, documentação, teste, implantação e manutenção de sistemas computacionais e softwares.";
  document.getElementById("mba-data-text").innerText =
    "Tecnologia para negócios: AI, Data Science e Big Data. Como utilizar as principais tendências em tecnologia para administrar negócios tecnologicamente competitivos.";
  document.getElementById("mba-project-text").innerText =
    "Gestão de projetos desde a sua concepção até a implementação, integração entre equipes, prazos, custos, recursos, alinhado com as melhores práticas internacionais.";
  /*Education translation end*/

  /*Languages translation start*/
  document.getElementById("Languages").innerText = "Idiomas";
  document.getElementById("Portuguese").innerText = "Português";
  document.getElementById("English").innerText = "Inglês";
  document.getElementById("Spanish").innerText = "Espanhol";
  document.getElementById("French").innerText = "Francês";
  document.getElementById("level-Portuguese").innerText = "Nativo";
  document.getElementById("level-English").innerText = "Fluente";
  document.getElementById("level-Spanish").innerText = "Fluente";
  document.getElementById("level-French").innerText = "Fluente";

  /*Languages translation end*/

  /*Techs translation start*/
  document.getElementById("HTML-Avançado").innerText = "Avançado";
  document.getElementById("CSS-Avançado").innerText = "Avançado";
  document.getElementById("JavaScript-Avançado").innerText = "Avançado";
  document.getElementById("Python-Avançado").innerText = "Básico";
  document.getElementById("Node-Avançado").innerText = "Básico";
  document.getElementById("React-Avançado").innerText = "Básico";
  document.getElementById("TypeScript-Avançado").innerText = "Intermediário";
  document.getElementById("SQL-Avançado").innerText = "Avançado";
  document.getElementById("GitHub-Avançado").innerText = "Avançado";
  document.getElementById("Java-Avançado").innerText = "Básico";
  document.getElementById("Technical").innerText = "Conhecimento técnico";

  /*Techs translation end*/




  /*Projects translation start*/
  document.getElementById("Projects").innerText = "Projetos";
  document.getElementById("project1-title").innerText = "NLW 03 - Orfanato - Front-end";
  document.getElementById("project1-text").innerText = "Projeto NLW da RocketSeat, esta é somente a versão front-end do projeto usando uma API de mapas";


  document.getElementById("project2-title").innerText = "Carrinho de compras";
  document.getElementById("project2-text").innerText = "Um projeto simples de carrinho de compras para praticar: React, Context API, React Router, TypeScript e um pouco de CSS";

  document.getElementById("project3-title").innerText = "Galeria de fotos";
  document.getElementById("project3-text").innerText = "Projeto de galeria de fotos para praticar: React Router and Context API";

  document.getElementById("project4-title").innerText = "Multiformulário React";
  document.getElementById("project4-text").innerText = "Multiformulário com React e Typescript para praticar React Router e Context API. Também usa a API do GitHub para buscar dados";

  document.getElementById("project5-title").innerText = "Rastreador de despesas";
  document.getElementById("project5-text").innerText = "Simples rastreador de despesas. Meu primeiro projeyto com TypeScript. Um bom projeto para começar a aprender alguns conceitos de TypeScript";

  document.getElementById("project6-title").innerText = "Lista de tarefas JavaScript";
  document.getElementById("project6-text").innerText = "Uma simples lista de tarefas com JavaScript. Você pode criar, deletar, marcar a tarefa como finalizada ao dar um duplo clique nela, limpar a sua lista de tarefas, alertas para tarefa repetida e quando o usuário tenta adicionar uma tarefa duplicada"

  /*Projects translation end*/



  /*Professional exp translation start*/
  /*Professional exp translation end*/




}

function ingles() {
  document
    .getElementById("Portugues")
    .classList.remove("language-changer-button");
  document.getElementById("Ingles").classList.add("language-changer-button");

  /*Header translation start*/
  document.getElementById("Ingles").innerText = "English";
  document.getElementById("Portugues").innerText = "Portuguese";
  document.querySelector(".main-title").innerText = "Portfolio";
  document.getElementById("Sobre").innerText = "About";
  document.getElementById("Projetos").innerText = "Projects";
  document.getElementById("Curriculo").innerText = "Resume";
  /*Header translation end*/

  /*Profile translation start*/
  document.querySelector(".profession").innerText =
    "Learning Web Dev, the goal is to be a full stack dev";
  document.getElementById("Fone").innerText = "Phone: ";
  document.getElementById("Endereço").innerText = "Address: ";
  /*Profile translation end*/

  /*Footer translation start*/
  document.getElementById("Portfolio-footer").innerText = "Portfolio";
  document.getElementById("text-footer").innerText =
    "Developed by Ramon Maximiliano";
  /*Footer translation end*/

  /*Education translation start*/
  document.getElementById("Education").innerText = "Education";
  document.getElementById("graduation").innerText =
    "System Analysis and Development";
  document.getElementById("mba-data").innerText = "MBA in Data Science";
  document.getElementById("mba-project").innerText =
    "MBA in Project Management";
  document.getElementById("graduation-text").innerText =
    "Degree in analysis, development, documentation, testing, implementation and maintenance of computer systems and software.";
  document.getElementById("mba-data-text").innerText =
    "Technology for business: AI, Data Science and Big Data. How to use key trends in technology to run a technologically competitive business.";
  document.getElementById("mba-project-text").innerText =
    "Project management from conception to implementation, integration between teams, deadlines, costs, resources, in line with the best international practices.";
  /*Education translation end*/

  /*Languages translation start*/
  document.getElementById("Languages").innerText = "Languages";
  document.getElementById("Portuguese").innerText = "Portuguese";
  document.getElementById("English").innerText = "English";
  document.getElementById("Spanish").innerText = "Spanish";
  document.getElementById("French").innerText = "French";
  document.getElementById("level-Portuguese").innerText = "Native";
  document.getElementById("level-English").innerText = "Fluent";
  document.getElementById("level-Spanish").innerText = "Fluent";
  document.getElementById("level-French").innerText =
    "Fluent"; /*Languages translation end*/

  /*Techs translation start*/
  document.getElementById("HTML-Avançado").innerText = "Advanced";
  document.getElementById("CSS-Avançado").innerText = "Advanced";
  document.getElementById("JavaScript-Avançado").innerText = "Advanced";
  document.getElementById("Python-Avançado").innerText = "Basic";
  document.getElementById("Node-Avançado").innerText = "Basic";
  document.getElementById("React-Avançado").innerText = "Basic";
  document.getElementById("TypeScript-Avançado").innerText = "Intermediate";
  document.getElementById("SQL-Avançado").innerText = "Advanced";
  document.getElementById("GitHub-Avançado").innerText = "Advanced";
  document.getElementById("Java-Avançado").innerText = "Basic";
  document.getElementById("Technical").innerText = "  Technical knowledge";
  /*Techs translation end*/

  /*Projects translation start*/

  document.getElementById("Projects").innerText = "Projects";
  document.getElementById("project1-title").innerText = "NLW 03 - Orphanage - Front-end";
  document.getElementById("project1-text").innerText = "NLW project from RocketSeat TechSchool, this is just the front-end version of the project using a MAP free API";

  document.getElementById("project2-title").innerText = "Shopping Cart";
  document.getElementById("project2-text").innerText = "This simple shopping cart is a project to practice: React, Context API, React Router, TypeScript and some CSS";

  document.getElementById("project3-title").innerText = "Picture Galery";
  document.getElementById("project3-text").innerText = "Photo gallery project to practice React Router and Context API";

  document.getElementById("project4-title").innerText = "Multiform React";
  document.getElementById("project4-text").innerText = "Multiform with React and Typescript to practice React Router and Context. It also uses the GitHub API for data fetching";

  document.getElementById("project5-title").innerText = "Simple Expense Tracker";
  document.getElementById("project5-text").innerText = "Simple expense tracker project. My first project with typescript, for some variables it was not possible to type the variable correctly since I am new to this, but the project was good to start learning some TypeScript concepts";

  document.getElementById("project6-title").innerText = "JavaScript To Do List";
  document.getElementById("project6-text").innerText = "One simple 'to do' App with vanilla JavaScript. You can: Create task, delete task, mark a task as completed by double clicking it, clean entire list of tasks, warnings for repeated task, warning when the user tries to add empty task"


  /*Projects translation end*/



  /*Professional exp translation start*/
  /*Professional exp translation end*/

}

/* LANGUAGE CHANGER END */
