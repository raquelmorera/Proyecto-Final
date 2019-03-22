//USER
//FORM2

(function(){
    var USER = {
        init: function(){
        this.addEvents();
        console.log('this.cacheElements', this.cacheElementsUser.$btnregistrar);
    },

    addEvents: function(){
        this.cacheElementsUser.$btnregistrar.on('click', function(){
                this.sendInfoUser();
            }.bind(this));            
        },

        cacheElementsUser: {

            $btnregistrar : $('#btn-submit'),
            $inputbirthdate: $('#birthdate'),
            $inputcedula: $('#cedula'),
            $inputdireccion: $('#direccion'),
            $inputsexo : $('#sexo'),
            $inputestadocivil : $('#estadocivil'),
         

        },

        sendInfoUser : function(){

            var birthdate = this.cacheElementsUser.$inputbirthdate.val();
            var cedula = this.cacheElementsUser.$inputcedula.val();
            var direccion = this.cacheElementsUser.$inputdireccion.val();
            var sexo = this.cacheElementsUser.$inputsexo.val();
            var estadocivil = this.cacheElementsUser.$inputestadocivil.val();
             



            var dataUser = {
                
              birthdate : birthdate,
               cedula : cedula,
               direccion : direccion,
               sexo : sexo,
               estadocivil : estadocivil,
            


            }

            //enviamos al servidor 
            console.log('data', dataUser);

            //ajax se usa para la comunicacion cliente - servidor 
            $.ajax({
                dataUser: dataUser,
                type: 'post',
                url: '',
                success: function (result, status, xhr) {
                  
                }
            });
        }
    }

    USER.init();
})()
