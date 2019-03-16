(function(){
    var Final = {
        init: function(){
            this.addEvents();
            console.log('this.cacheElements', this.cacheElements.$btnSubmitForm);
        },

        addEvents: function(){
            this.cacheElements.$btnSubmitForm.on('click', function(){
                console.log('click');
                this.sendInfo();
            }.bind(this));            
        },

        cacheElements: {
            $btnSubmitForm : $('#btn-submit-form'),
            $inputName : $ ('#input-name'),
            $inputLastname : $ ('#input-lastname'),
            $inputPassword : $('#input-pass'),
            $inputPhone : $ ('#input-phone'),
           
       
            
        },

        sendInfo : function(){

            var name = this.cacheElements.$inputName.val();
            var lastname = this.cacheElements.$inputLastname.val();
            var pass = this.cacheElements.$inputPassword.val();
            var phone = this.cacheElements.$inputPhone.val();
           
           

            var data = {
        
                name : name,
                lastname : lastname,
                pass : pass,
                phone : phone,
                
              
               
                

            }
        
             $ ("#email").on('blur'), function(){
             console.log('perdi el foco');
             let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                if(!re.test($("#email").val())){
                  $('.error-email').html('Ingrese un email valido');

                 }
            }

            //enviamos al servidor
            console.log('data', data);

            //ajax se usa para la comunicacion cliente - servidor
            $.ajax({
                data: data,
                type: 'post',
                url: '',
                success: function (result, status, xhr) {
                  
                }
            });
        }
    }

    Final.init();
})();