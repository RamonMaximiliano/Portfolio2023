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
  document.getElementById("Next-Avançado").innerText = "Básico";
  document.getElementById("Tailwind-Avançado").innerText = "Intermediário";
  document.getElementById("Postgre-Avançado").innerText = "Básico";
  document.getElementById("Prisma-Avançado").innerText = "Básico";
  document.getElementById("WebDesign-Avançado").innerText = "Básico";
  document.getElementById("Technical").innerText = "Conhecimento técnico";

  /*Techs translation end*/


  /*Projects translation start*/
  document.getElementById("Projects").innerText = "Projetos";
  document.getElementById("project1-title").innerText = "NLW 03 - Orfanato";
  document.getElementById("project1-text").innerText = "Projeto NLW da RocketSeat, esta é somente a versão front-end do projeto usando uma API de mapas";


  document.getElementById("project2-title").innerText = "CRUD Página de login";
  document.getElementById("project2-text").innerText = "Uma login page onde é possivel criar, deletar, atualizar, e o sistema lê qual usuário logado. Projeto CRUD completo com integração com banco de dados Supabase.";


  document.getElementById("project9-title").innerText = "Landing page Professor";
  document.getElementById("project9-text").innerText = "Uma landing page simples para promover minhas aulas particulares de inglês";

  document.getElementById("project6-title").innerText = "Fullstack Trips";
  document.getElementById("project6-text").innerText = "Usando Next JS, consegui fazer meu primeiro App com back end, criando, consultando e utilizando métodos de API como: GET, POST, e DELETE";

  document.getElementById("project8-title").innerText = "Fullstack GamerStore";
  document.getElementById("project8-text").innerText = "Meu segundo projeto Fullstack! Um E-commerce de produtos de informática. Totalmente responsivo com integração com banco de dados Supabase.";

  document.getElementById("project7-title").innerText = "E-Commerce-React";
  document.getElementById("project7-text").innerText = "Um projeto de e-commerce para praticar o React, com página de produtos, carrinho de compras, carrossel (sem o uso de bibliotecas externas) e uma página de contato.";

  /*Projects translation end*/



   /*Professional exp translation start*/
   document.getElementById("Experience").innerText = "Experiência Profissional";
   document.getElementById("exp-title1").innerText = "Engenheiro de Suporte";
   document.getElementById("exp-period1").innerText = "Janeiro de 2023 - Atual";
   document.getElementById("exp-descrip1").innerText = "Suporte ao cliente via telefone, e-mails para TMS, um sistema informatizado de gerenciamento de manutenção para a área da saúde.";
 
   document.getElementById("exp-title2").innerText = "Engenheiro de Suporte";
   document.getElementById("exp-period2").innerText = "Julho de 2019 - Novembro de 2022";
   document.getElementById("exp-descrip2").innerText = "Suporte ao cliente via telefone, e-mails e chat para a área de despesas da plataforma Concur.";
 
   document.getElementById("exp-title3").innerText = "Engenheiro de Suporte";
   document.getElementById("exp-period3").innerText = "Maio de 2018 - Novembro de 2018";
   document.getElementById("exp-descrip3").innerText = "Suporte ao cliente via telefone, chat e service desk de sistema, suporte de hardware e software para notebooks e desktops.";
 
   document.getElementById("exp-title4").innerText = "Analista de Implementação de Sistemas";
   document.getElementById("exp-period4").innerText = "Fevereiro de 2016 – Agosto de 2017";
   document.getElementById("exp-descrip4").innerText = "Implementação de sistemas para clientes, conduzindo a implementação em distribuidores e acompanhamento de processos com contratantes de sistemas industriais.";
 
   document.getElementById("exp-title5").innerText = "Engenheiro de Suporte";
   document.getElementById("exp-period5").innerText = "Setembro de 2014 - Fevereiro de 2015";
   document.getElementById("exp-descrip5").innerText = "Suporte no service desk para clientes estrangeiros (americanos, canadenses) via telefone, e-mail e web.";
 
   document.getElementById("exp-title6").innerText = "Professor de Inglês"
   document.getElementById("exp-period6").innerText = "Janeiro de 2012 - Presente";
   document.getElementById("exp-descrip6").innerText = "Professor de inglês em escolas de idiomas particulares, ensinando inglês para turmas de adolescentes e adultos em níveis avançado, intermediário e iniciante. Também leciono em aulas particulares.";
 
  /*Professional exp translation end*/
}



function ingles() {
  document.getElementById("Portugues")
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
  document.getElementById("Next-Avançado").innerText = "Basic";
  document.getElementById("Tailwind-Avançado").innerText = "Intermediate";
  document.getElementById("Postgre-Avançado").innerText = "Basic";
  document.getElementById("Prisma-Avançado").innerText = "Basic";
  document.getElementById("WebDesign-Avançado").innerText = "Basic";
  document.getElementById("Technical").innerText = "  Technical knowledge";
  /*Techs translation end*/

  /*Projects translation start*/

  document.getElementById("Projects").innerText = "Projects";
  document.getElementById("project1-title").innerText = "NLW 03 - Orphanage";
  document.getElementById("project1-text").innerText = "NLW project from RocketSeat TechSchool, this is just the front-end version of the project using a MAP free API";

  document.getElementById("project2-title").innerText = "CRUD Login page";
  document.getElementById("project2-text").innerText = "A login page where it's possible to create, delete, update, and the system reads which user is logged in. Complete CRUD project with integration to a Supabase database.";

  document.getElementById("project6-title").innerText = "Fullstack Trips";
  document.getElementById("project6-text").innerText = "Using Next.js, I managed to build my first app with a backend, creating, querying, and utilizing API methods such as GET, POST, and DELETE.";

  document.getElementById("project9-title").innerText = "Teacher landing page";
  document.getElementById("project9-text").innerText = "A simple landing page to promote my private English classes";


  document.getElementById("project8-title").innerText = "Fullstack GamerStore";
  document.getElementById("project8-text").innerText = "My second fullstack project! An e-commerce site for computer products. Fully responsive with integration to a Supabase database.";

  document.getElementById("project7-title").innerText = "E-Commerce-React";
  document.getElementById("project7-text").innerText = "A React e-commerce project for practicing, featuring product pages, a shopping cart, a carousel (without the use of external libraries), and a contact page.";


  /*Projects translation end*/


  /*Professional exp translation start*/
  document.getElementById("Experience").innerText = "Professional Experience";
  document.getElementById("exp-title1").innerText = "Support Engineer";
  document.getElementById("exp-period1").innerText = "January 2023 - Current";
  document.getElementById("exp-descrip1").innerText = "Customer support via phone, emails to TMS, a computerized maintenance management system for healthcare.";

  document.getElementById("exp-title2").innerText = "Support Engineer";
  document.getElementById("exp-period2").innerText = "July 2019 - November 2022";
  document.getElementById("exp-descrip2").innerText = "Customer support via phone, emails and chat to expense area of the Concur platform.";

  document.getElementById("exp-title3").innerText = "Support Engineer";
  document.getElementById("exp-period3").innerText = "May 2018 - November 2018";
  document.getElementById("exp-descrip3").innerText = "Customer support via phone, chat and system service desk, hardware and software support for notebooks, desktops.";

  document.getElementById("exp-title4").innerText = "System implementation analyst";
  document.getElementById("exp-period4").innerText = "February 2016 – August 2017";
  document.getElementById("exp-descrip4").innerText = "Implementation of customer systems, driving implementation in distributors and follow up of processes with industry system contractor.";

  document.getElementById("exp-title5").innerText = "Support Engineer";
  document.getElementById("exp-period5").innerText = "September 2014 - February 2015";
  document.getElementById("exp-descrip5").innerText = "Service desk support for foreign customers (Americans, Canadians) via phone, e-mail and web.";

  document.getElementById("exp-title6").innerText = "English teacher"
  document.getElementById("exp-period6").innerText = "January 2012 - Present";
  document.getElementById("exp-descrip6").innerText = "Part time English teacher in private language schools, teach English for classes of teenagers and adults to advanced, intermediate and beginner levels. Also teacher in private classes.";

  /*Professional exp translation end*/

}

/* LANGUAGE CHANGER END TEST*/
