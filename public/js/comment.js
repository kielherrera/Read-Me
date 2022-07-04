$(document).ready(function () {
    
    $('#submit-comment').click(function () {
        // your code here
        var username = "user123456";
        var essaytitle = document.querySelector("#title");
        var comment = document.querySelector("#comment");
      
        
        if (comment.value != "") {
          var url = `/postcomment?username=${username}&essaytitle=${essaytitle.textContent}&comment=${comment.value}`;

            $.get(url, (data, status, xhr) => {
                console.log(status);
                if (status == "success") {
                    window.location = window.location;
                }
                $("#comment").value = "";
                comment.value = "";
            });

        }
    });

});
