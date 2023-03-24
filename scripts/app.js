

function openPanelR() {
    document.getElementById("cRigth").style.visibility = "visible";
    document.getElementById("text").style.animationName = "textUp";
    document.getElementById("cRigth").style.animationName = "visibleR";
 }
 function closePanelR(){
    document.getElementById("cRigth").style.animationName = "hiddenR";
 }
 function showContentAboutMe(){
    document.getElementById("contentAboutMe").style.visibility = "visible";
 }
 function hiddenContentAboutMe(){
    document.getElementById("contentAboutMe").style.visibility = "hidden";
    document.getElementById("text").style.animationName = "none";

 }
 function showContentProjects(){
    document.getElementById("contentProjects").style.visibility = "visible";
 }
 function hiddenContentProjects(){
    document.getElementById("contentProjects").style.visibility = "hidden";

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
function goAboutMe(){
    window.location.href="../pages/aboutMe.html";

}


