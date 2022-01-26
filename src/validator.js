const validator = {
 isValid(numberCard){
     if(numberCard== ""){
        return false;
     }
     
     let array1=numberCard.split("");
     let reversaArray= array1.reverse();
     for(let i= 1; i < reversaArray.length; i+=2) {
        
                reversaArray[i];
                
                let multipicacion= reversaArray[i];
                let resultadoMultiplicacion= multipicacion *2; 
                
                reversaArray[i]= resultadoMultiplicacion;
            
            if(resultadoMultiplicacion>9){
                        let sumarDosDigitos= sumarDigitos(resultadoMultiplicacion);
                        
                        reversaArray[i]= sumarDosDigitos;
                        
                    
                }

        }  
        let numeroTotal= 0;
        for(let i= 0; i < reversaArray.length; i+=1) {
        
            reversaArray[i]= parseInt(reversaArray[i]);

              numeroTotal=numeroTotal+reversaArray[i];
              
           
            
        }

        let moduloFinal= numeroTotal%10;
        if(moduloFinal==0){
            return true;
        }
        else{
            return  false;
        }
        function sumarDigitos(numerosDosDigitos){
            
            let valorString= numerosDosDigitos.toString();
            
            let primerNumero= parseInt(valorString[0]);
            let segundoNumero=parseInt(valorString[1]);
            
            let sumarDosDigitos= primerNumero + segundoNumero;

            return sumarDosDigitos
            
            
            
            
        }
         
},
    
 maskify(numberCard){
 let arrayCard=numberCard.split("");
 
 for(let i=0; i<arrayCard.length -4; i++){
arrayCard[i]="#";


 }
 
 return arrayCard.join("")

}  

  
};

export default validator;
