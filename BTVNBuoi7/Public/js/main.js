var character = 200;

$(document).ready(function(){
    console.log($("#character"));
    $("#questionInput").keyup(function(){
        $("#character").html(200 - $("#questionInput").val().length);
    });
})