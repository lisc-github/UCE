/**
 * Created by admin on 2016/12/3.
 */
$(window).ready(readyHandler);
function readyHandler() {
    (function() {
        //------------------------------------------------------------------

        // 表单验证

        //------------------------------------------------------------------
        $("form").on("submit",submitHandler);
        function submitHandler() {
            return check();
            function check(){
                var input = $(".must");
                for(var i=0;i<input.length;i++){
                    if(input.eq(i).attr("type")=="password"&&input.eq(i).next().attr("type")=="text"){
                        var temp = input.eq(i);
                        console.log(temp.val());
                        if(!temp.val()){
                            input.eq(i).show().next().hide().focus().css("border-color","red");
                            return false;
                        }
                    }
                    // console.log(input.eq(i));
                    if(!$.trim(input.eq(i).val())||input.eq(i).attr('class').indexOf('placeholder')!=-1){
                        input.eq(i).focus().css("border-color","red");
                        $(".return_info").html("Please fill out all information.");
                        return false;
                    }

                    if(input.eq(i).attr("type")=="password"){
                        input.eq(i).show().next().hide().focus();
                    }
                    if(input.eq(i).attr("id")=="sign_username"){
                        var str = input.eq(i).val();
                        var new_str = str.replace(/[a-zA-Z0-9_@.]+/g,"");
                        if(new_str.length>0){
                            $(".return_info").html("Your username can only contain alphanumeric characters (letters A-Z,letters a-z, numbers 0-9) with the exception of underscores, @ and dot, and cannot be longer than 30 characters. ");
                            input.eq(i).focus();
                            return false;
                        }
                        else if(str.length>30){
                            $(".return_info").html("Your username can only contain alphanumeric characters (letters A-Z,letters a-z, numbers 0-9) with the exception of underscores, @ and dot, and cannot be longer than 30 characters. ");
                            input.eq(i).focus();
                            return false;
                        }
                        else{
                            $(".return_info").html("");
                        }

                    }
                    if(input.eq(i).attr("id")&&input.eq(i).attr("id")=="sign_password"){
                        var str2 = input.eq(i).val();
                        if(str2.length<6||str2.length>20){
                            $(".return_info").html("Your password must be longer than 6 characters less than 20 characters ");
                            input.eq(i).focus();
                            return false;
                        }
                        else{
                            $(".return_info").html("");
                        }
                    }
                    if($("input[name='password']").val()&&$("input[name='password_again']").val()){
                        if($("input[name='password']").val()!=$("input[name='password_again']").val()){
                            $("input[name='password_again']").focus();
                            $(".return_info").html("Two input passwords are not consistent");
                            return false;
                        }
                    }
                    if($("input[name='new_password']").val()&&$("input[name='new_password_again']").val()){
                        if($("input[name='new_password']").val()!=$("input[name='new_password_again']").val()){
                            $("input[name='new_password_again']").focus();
                            $(".return_info").html("Two input passwords are not consistent");
                            return false;
                        }
                    }

                }
                $(".return_info").html("Successful submission");
            }
        }


        //-------------------------------------------------------------------

        //input 框变红之后的恢复

        //-------------------------------------------------------------------
        var input_red = $(".must");
        for(var i=0;i<input_red.length;i++){
            input_red.eq(i).on("keyup",function () {
                if($.trim($(this).val())){
                    $(this).css("border-color","#ccc");
                }
            })
        }
    })()

}


