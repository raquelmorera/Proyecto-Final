//Data 
//FORM

(function(){
    var DATA = {
        init: function(){
            this.addEvents();
            console.log('this.cacheElements', this.cacheElements.$btningresar);
        },

        addEvents: function(){
            this.cacheElements.$btningresar.on('click', function(){
                this.sendInfo();
            }.bind(this));            
        },

        cacheElements: {

            $btningresar : $('#btn-submit'),
            $inputemail : $('#email'),
            $inputpassword : $('#password'),
            $inputname : $('#name'),
            $inputlastname : $('#lastname'),
            $inputphone : $('#phone'),
         

        },

        sendInfo : function(){

            var email = this.cacheElements.$inputemail.val();
            var password = this.cacheElements.$inputpassword.val();
            var name = this.cacheElements.$inputname.val();
            var lastname = this.cacheElements.$inputlastname.val();
            var phone = this.cacheElements.$inputphone.val();
         
             



            var data = {

                email : email,
                password : password,
                name : name,
                lastname : lastname,
                phone : phone,
            


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

    DATA.init();
})();

