let buttonA = document.getElementById('btn')
buttonA.addEventListener('click', ()=>{
    const fieldH = parseFloat(document.getElementById("fieldHeight").value);
    const fieldW = parseFloat(document.getElementById("fieldWeight").value);
    const res = fieldW / (fieldH * fieldH);
    let indice = "";
    if(res < 18.5){
        indice = "Abaixo do peso";
    }
    if(res >= 18.5 && res <= 24.9){
        indice = "Peso normal";
    }
    if(res >= 24.9 && res <= 30){
        indice = "Pré-obesidade";
    }
    if(res >= 30 && res <= 34.9){
        indice = "Obesidade grau 1";
    }
    if(res >= 35 && res <= 34.9){
        indice = "Obesidade grau 2"
    }
    if(res > 40){
        indice = "Obesidade grau 3"
    }
    document.getElementById('displayC').innerHTML = 
    `<p><span style="color:white;">${res.toFixed(2)}kg/m2</span><br>Considerado<br>
    <span style="color: white;">${indice}</span></p>`

})



