function calculate(){
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let imc = weight/(height*height).toFixed(2);
    
    window.alert(imc);
    
}

