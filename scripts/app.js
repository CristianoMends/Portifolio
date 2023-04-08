
function openPanelR() {
    document.getElementById("cRigth").style.display = "block";
    document.getElementById("text").style.animationName = "textUp";
    document.getElementById("cRigth").style.animationName = "visibleR";
 }
 function showContentAboutMe(){
    document.getElementById("contentProjects").style.display = "none";
    document.getElementById("contentAboutMe").style.display = "grid";
 }
 function showContentProjects(){
    document.getElementById("contentAboutMe").style.display = "none";
    document.getElementById("contentProjects").style.display = "grid";
 }
function gowhatsapp(){
    window.location.href="https://wa.me/qr/3X3KO4KZIJXKI1";    
}
function goemail(){
    window.location.href="mailto:mendescristiano012@gmail.com";
}
function golinkedin(){    
    window.location.href="https://www.linkedin.com/in/cristiano-mendes-link/";
}
function gogithub(){
    window.location.href="https://github.com/CristianoMends";
}

const projects = document.getElementById("projects");
const projectImg = document.getElementById("projectImg");
projects.addEventListener("change", function() {
    var selectedValue = projects.value;
  
    if (selectedValue === "IMC") {
      projectImg.style.backgroundImage = "url(src/images/projects/IMC.png)";
      document.getElementById("projectDescription").innerText = "Este é o projeto de uma Calculadora de IMC";
    }else if (selectedValue === "devweb"){
      projectImg.style.backgroundImage = "url(src/images/projects/devweb.png)";
      document.getElementById("projectDescription").innerText = "Site: Objetivo do site é dar os primeiros passos para criar seu primeiro site";
    }else if (selectedValue === "..."){
      projectImg.style.backgroundImage = "url(src/images/projects/embreve.png)";
      document.getElementById("projectDescription").innerText = "Mais projetos em breve";
    }
  });
  
function openProject(){ 
    const projects = document.getElementById("projects");

    const selectedProject = projects.options[projects.selectedIndex];

    const selectedValue = selectedProject.value;

if (selectedValue === "IMC") {
    const loading = `
        <div class="container">
        <div class="loading"></div>
        </div>
    `;
    document.getElementById("cRigth").innerHTML = loading;
    setTimeout(function() {
        window.location.href="projects/IMC/index.html";
    }, 5000);
    
}else if (selectedValue === "devweb") {
    const loading = `
        <div class="container">
        <div class="loading"></div>
        </div>
    `;
    document.getElementById("cRigth").innerHTML = loading;
    setTimeout(function() {
        window.location.href="projects/devweb/index.html";
    }, 5000);
}else if(selectedValue === "..."){
	alert("Em breve, mais projetos...");

}else {
    alert("Selecione um projeto!");
}
 
}

