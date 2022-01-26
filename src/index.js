 import validator from './validator.js';
document.getElementById("numeroT").addEventListener("click", validarTarjeta)

function validarTarjeta(){
    let numberCard= document.getElementById("casilla1").value;
//console.log("validarTarjeta");//
validator.isValid(numberCard);
let isValid=validator.isValid(numberCard);
respuestaUsuario(isValid)
validator.maskify(numberCard);
let arrayCard= validator.maskify(numberCard);
console.log(arrayCard);
document.getElementById("casilla1").value= arrayCard;
}
    
    
function respuestaUsuario(isValid){
    let respuestaUsuario=document.getElementById("resultado");
    
    if (isValid==true){
    respuestaUsuario.innerHTML="Tu tarjeta es válida"
    respuestaUsuario.classList.add("caja1");
    respuestaUsuario.classList.remove("caja2");
    

   }

    else{
    respuestaUsuario.innerHTML= "Tu tarjeta es inválida"
    respuestaUsuario.classList.add("caja2");
    respuestaUsuario.classList.remove("caja1");
    
    }

}
