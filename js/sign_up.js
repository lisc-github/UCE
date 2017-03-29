/**
 * Created by admin on 2016/12/17.
 */
$(window).ready(function () {
    $("input[name='username']").on("keyup",function () {
       var str = $(this).val();
       var new_str = str.replace(/[a-zA-Z0-9_@.]+/g,"");
       if(new_str.length>0){
           $(".return_info").html("Your username can only contain alphanumeric characters (letters A-Z,letters a-z, numbers 0-9) with the exception of underscores, @ and dot, and cannot be longer than 30 characters. ");

       }
       else if(str.length>30){
           $(".return_info").html("Your username can only contain alphanumeric characters (letters A-Z,letters a-z, numbers 0-9) with the exception of underscores, @ and dot, and cannot be longer than 30 characters. ");
       }
       else{
           $(".return_info").html("");
       }
    });
    $("input[name='password']").on("keyup",function () {
        var str = $(this).val();
        if(str.length<6||str.length>20){
            $(".return_info").html("Your password must be longer than 6 characters less than 20 characters ");
        }
        else{
            $(".return_info").html("");
        }
    });

    $("input[name='new_password']").on("keyup",function () {
        var str = $(this).val();
        if(str.length<6||str.length>20){
            $(".return_info").html("Your password must be longer than 6 characters less than 20 characters ");
        }
        else{
            $(".return_info").html("");
        }
    })
});