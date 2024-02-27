let user = window.prompt("ingrese su usuario")
let pass = window.prompt("ingresar la clave")

if(user === "admin" && pass === "admin"){

  
 let  cita =  parseInt(window.prompt("Si desea cita medicina general ingrese el 1 Si desea cita odontologia ingrese el 2 Si desea cita examanes medicos ingrese el 3"))
  
 if (cita === 1) {
 let  MedicinaGeneralDia =  parseInt(window.prompt("Para el día lunes ingrese 1, Para el día martes ingrese 2, Para el día miercoles ingrese 3, Para el día jueves ingrese 4, Para el día viernes ingrese 5,"))
   switch (MedicinaGeneralDia) {
    case 1:
        
        for (let i = 8; i <=11; i++) {
            alert(" horas disponibles " + i);       
            
        }    
        
        day = "lunes"
        
        break;

    case 2:

        for (let i = 8; i <=11; i++) {
            alert(" horas disponibles " + i);            
        }

        day = "Martes"
            
        break;

    case 3:
        for (let i = 8; i <=11; i++) {
            alert(" horas disponibles " + i);
            
        }

        day = "Miercoles"
            
        break;

    case 4:
         for (let i = 8; i <=11; i++) {
            alert(" horas disponibles " + i);
            
        }

        day = "Jueves"
            
        break; 
        
    case 5:
        for (let i = 8; i <=11; i++) {
            alert(" horas disponibles " + i);
            
        }
        day = "Viernes"
            
        break;
    default: alert("Datos incorrectos 🛑")
        break;        
   }

 let hora  =   parseInt(prompt("ingrese la hora deseada ")) 
  document.write("La cita de medicina general esta agendada para el dia " + day +" a las " + hora + " horas") 
 }
 
 
 else if(cita === 2){

    let  odontologiaDia =  parseInt(window.prompt("Para el día lunes ingrese 1, Para el día martes ingrese 2, Para el día miercoles ingrese 3, Para el día jueves ingrese 4, Para el día viernes ingrese 5,"))
    switch (odontologiaDia) {
    case 1:
        for (let i = 11; i <=13; i++) {
            alert(" horas disponibles " + i);
        }

        day = "lunes"
            
        
        break;
    case 2:
        for (let i = 11; i <=13; i++) {
            alert(" horas disponibles " + i);
        }

        day = "Martes"
        break;

    case 3:
        for (let i = 11; i <=13; i++) {
            alert(" horas disponibles " + i);
        }
        day = "Miercoles"
        break;

    case 4:
        for (let i = 11; i <=13; i++) {
            alert(" horas disponibles " + i);
        }
        day = "Jueves"
        break; 
        
    case 5:
        for (let i = 11; i <=13; i++) {
            alert(" horas disponibles " + i);
        }
        day = "viernes"
        break;
    default: alert("Datos incorrectos 🛑")
        break;
   }

   let hora  =   parseInt(prompt("ingrese la hora deseada ")) 
   document.write("La cita para adontología esta agendada para el dia es " + day +  " a las " + hora + " horas") 


    
 }

 else if(cita === 3){
   let  examenDia =  parseInt(window.prompt("Para el día lunes ingrese 1, Para el día martes ingrese 2, Para el día miercoles ingrese 3, Para el día jueves ingrese 4, Para el día viernes ingrese 5,"))
   switch (examenDia) {
    case 1:
        for (let i = 13; i <=16; i++) {
            alert(" horas disponibles " + i);
        }

        day = "lunes"
        
        break;
    case 2:
        for (let i = 13; i <=16; i++) {
            alert(" horas disponibles " + i);
        }

        day = "Martes"
            
        break;

    case 3:
        for (let i = 13; i <=16; i++) {
            alert(" horas disponibles " + i);
        }

        day = "Miercoles"
            
        break;

    case 4:
        for (let i = 13; i <=16; i++) {
            alert(" horas disponibles " + i);
        }
        day = "Jueves"
        break; 
        
    case 5:
        for (let i = 13; i <=16; i++) {
            alert(" horas disponibles " + i);
        }
        day = "Viernes"    
        break;
    default: alert("Datos incorrectos 🛑")
        break;
   }
   let hora  =   parseInt(prompt("ingrese la hora deseada ")) 
   document.write("La cita para los examanes medicos esta agendada para el dia " + day + " a las " + hora + " horas") 
 }

 else{
    alert("Datos incorrectos 🛑")
 }


}
else{
    alert("Datos incorrectos 🛑")
}

