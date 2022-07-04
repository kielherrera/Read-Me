$(document).ready(function () {
    $('#username').keyup(function () {
        var username = $('#username').val();
        console.log(username);
        $.get('getCheckUN', {username : username}, function (result) {
            console.log(result.username);
            if(result.username == username){
                $('#username').css('background-color', 'red');
                //$('#error').text('Reference number already in the database');
                $('#submit').prop('disabled', true);
            }
            else{
                $('#username').css('background-color', '#E3E3E3');
                //$('#error').text('');
                $('#submit').prop('disabled', false);
            }
        });
    });
    
    $('#submit-credential').click(function () {
        // your code here
        var lastname = document.querySelector("#lastname");
        var firstname = document.querySelector("#firstname");
        var username = document.querySelector("#username");
        var password = document.querySelector("#password");

        if (lastname.value != "" && firstname.value != "" && username.value != "" && password.value != "") {
          
          var url = `/postcred?lastname=${lastname.value}&firstname=${firstname.value}&username=${username.value}&password=${password.value}`;
          
            $.get(url, (data, status, xhr) => {
                if (status == "success") {
                    window.location.replace('/');
                }
            });

            lastname.value = "";
            firstname.value = "";
            username.value = "";
            password.value = "";
        }
    });

});
