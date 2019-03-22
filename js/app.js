(function(){

    //VALIDACIONES 

    $("#email").on('blur', function(){
        console.log('perdi el foco');
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!re.test($("#email").val())){
            $('.error-email').html('Ingrese un email correcto');
        }

        else {
            $('.error-email').html('');
        }
    });

    $("#password").on('blur', function(){
        console.log('perdi el foco'); 
        let re =/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        
        if(!re.test($("#password").val())){
          
            $('.error-password').html('Ingrese una contraseña válida');
        }
        else{ 
            $('.error-password').html('');
        }

    });

    $("#name").on('blur', function(){
        console.log('perdi el foco');
        let re =/^[a-zA-Z ]{2,30}$/;

        if(!re.test($("#name").val())){
    
            $('.error-name').html('Ingrese un nombre válido');
        }
        else{ 
            $('.error-name').html('');
        }

    });

    $("#lastname").on('blur', function(){
        console.log('perdi el foco');
        let re =/^[a-zA-Z ]{2,30}$/;

        if(!re.test($("#lastname").val())){
    
            $('.error-lastname').html('Ingrese un apellido válido');
        }
        else{ 
            $('.error-lastname').html('');
        }
    });

    $("#phone").on('blur', function(){
        console.log('perdi el foco');
        let re = /^[0-9]{2,15}$/;
     
        if(!re.test($("#phone").val())){
            $('.error-phone').html('Ingrese un numero de telefono válido');
        }
        else{ 
            $('.error-phone').html('');
        }
    });


 $("#birthdate").on('blur', function(){
        console.log('perdi el foco');
        let re = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
        if(!re.test($("#birthdate").val())){
    
            $('.error-birthdate').html('Ingrese una fecha de nacimiento válida');
        }
        else{ 
            $('.error-birthdate').html('');
        }
});

$("#cedula").on('blur', function(){
    console.log('perdi el foco');
    let re = /^[0-9]{9,15}$/;
 
    if(!re.test($("#cedula").val())){
        $('.error-cedula').html('Ingrese una cedula válida');
    }
    else{ 
        $('.error-cedula').html('');
    }
});

$("#direccion").on('blur', function(){
    console.log('perdi el foco');
    let re =/^[a-zA-Z ]{2,30}$/;

    if(!re.test($("#direccion").val())){

        $('.error-direccion').html('Ingrese una direccion válida');
    }
    else{ 
        $('.error-direccion').html('');
    }
});

$("#sexo").on('blur', function(){
    console.log('perdi el foco');
    let re =/^(f|m|o|F|M|O)*$/;

    if(!re.test($("#sexo").val())){

        $('.error-sexo').html('Ingrese un sexo correcto');
    }
    else{ 
        $('.error-sexo').html('');
    }
});

$("#estadocivil").on('blur', function(){
    console.log('perdi el foco');
    let re =/^(c|s|d|v|ul|C|S|D|V|UL)*$/;

    if(!re.test($("#estadocivil").val())){

        $('.error-estadocivil').html('Ingrese un estado civil correcto');
    }
    else{ 
        $('.error-estadocivil').html('');
    }
});

}

)();


