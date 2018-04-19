$("#signmeup").on("click", function(){
    var firstName = $("#firstName").val().trim();
    var lastName = $("#lastName").val().trim();
    var email = $("#email").val().trim();
    var password = $("#password").val().trim();
    event.preventDefault();
    var newUser = {
        firstName:firstName,
        lastName:lastName,
        email_1:email,
        password:password
    }
    $.post('/api/users', newUser)
    .then(function(){
        $("#myModal").show();
    })
})

$("#modalSuccess").on("click", function(){
    document.location.href="/homepage";
})