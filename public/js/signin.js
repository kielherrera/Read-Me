$(document).ready(function () {
    $('#submit-credential').click(function () {
        // your code here
        var username = $('#username').val();
        var password = $('#password').val();

        if (username.value != "" && password.value != "") {
          $.get('getcred', {username: username, password: password}, function (result) {
            
            if (!result){
              //reset
              $('#username').css('background-color', 'red');
              $('#password').css('background-color', 'red');
              $('#submit').prop('disabled', false);
            }
            else{
              //proceed
              $('#username').css('background-color', 'green');
              $('#password').css('background-color', 'green');
              $('#submit').prop('disabled', true);

              window.location.replace('/LoggedIn');
              
            }
          });         
        }
    });
});