$(function() {
    $("#login").click(function() {
        $("#loginModal").modal("show");
    });

    $("#register").click(function() {
        $("#registerModal").modal("show");
    });

    $("#register").hover(function() {
        if ($("#loginLabel").children("btn").hasClass("btn-primary") && $("#loginLabel").children("btn").hasClass("active")) {
            $("#loginLabel").children("btn").removeClass("btn-primary");
            $("#loginLabel").children("btn").removeClass("active");
            $("#loginLabel").children("btn").addClass("btn-light");
        }
    })
});