
function login (){

    let user = window.prompt("ingrese su usuario")
    let pass = window.prompt("ingresar la clave")

    if(user === "admin" && pass === "admin"){
        agendarCita(ingreso = true)
    }

    else {
        alert("Datos no validos")
    }

}

login();



function agendarCita (ingreso){

    

    if(ingreso === true){

      


        
       function tipoCita (){

        let  cita =  parseInt(window.prompt("Si desea cita medicina general ingrese el 1 Si desea cita odontologia ingrese el 2 Si desea cita examanes medicos ingrese el 3"))
            if( cita === 1 ){
               return diaCita("medicina general")
            }

            else if (cita === 2){
                diaCita("Odontología")
            }

            else if (cita === 3){
                diaCita("Examenmedico")
            }

            else{
    
                    alert("Dato no valido")
                
    
            }


       }    
       
       function diaCita (a){



       let  dia =  parseInt(window.prompt("Para el día lunes ingrese 1, Para el día martes ingrese 2, Para el día miercoles ingrese 3, Para el día jueves ingrese 4, Para el día viernes ingrese 5,"))


       const diaSemana = ["lunes", "martes", "miercoles", "jueves", "viernes"]

              horaCita(a , diaSemana[dia - 1]);
            
        }

       function horaCita(a,b){

            for (let i = 8; i <=12; i++) {
                alert(" horas disponibles " + i);            
            }
    
            confiracion(a, b, parseInt(prompt("ingrese la hora deseada ")));
           }


           function confiracion (a, b, c) {

            document.write("La cita para " + a + " esta agendada para el dia " + b + " a las " + c + " horas") 
            
              }   

           tipoCita();
           diaCita();
           horaCita();
    

       }

    
    

    }




