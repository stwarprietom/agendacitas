
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

        // funcion de confrimacion

        function confiracion() {

            // captura de funciones

            let tipo = tipoCita();
            let dia = diaCita();
            let hora = horaCita();  

            // imprime confirmacion de cita
            let vista = "La cita para " + tipo + " esta agendada para el dia " + dia + " a las " + hora + " horas"

            return vista
                  
            
              }   



          


        // funcion tipo de cita
       function tipoCita (){

        let  cita =  parseInt(window.prompt("Si desea cita medicina general ingrese el 1 Si desea cita odontologia ingrese el 2 Si desea cita examanes medicos ingrese el 3"))
            
            // validacion de cita

            if( cita === 1 ){
               return "medicina general"
            }

            else if (cita === 2){
                return "Odontología"
            }

            else if (cita === 3){
                return "Examenmedico"
            }

            else{
    
                    alert("Dato no valido")
                
    
            }


       }    

    //   funcion dia de la cita
       
       function diaCita (){

       let  dia =  parseInt(window.prompt("Para el día lunes ingrese 1, Para el día martes ingrese 2, Para el día miercoles ingrese 3, Para el día jueves ingrese 4, Para el día viernes ingrese 5,"))

        // array dias de la semana

       const diaSemana = ["lunes", "martes", "miercoles", "jueves", "viernes"]

              return diaSemana[dia - 1];
            
        }

        // funcion de hora de cita

       function horaCita(){
         
            //ciclo que muestra las horas disponibles 
            for (let i = 8; i <=12; i++) {
                alert(" horas disponibles " + i);            
            }

            return parseInt(prompt("ingrese la hora deseada "))
    
            
           }

        // instancia de funcion de configuracion    
        const agendaCita = confiracion(tipoCita,diaCita,horaCita);
        document.write(agendaCita);

       }

    
    

    }




