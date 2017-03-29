/**
 * Created by admin on 2016/12/3.
 */
$(window).ready(readyHandler);
function readyHandler() {
    (function () {
        //------------------------------------------------------------------

        // 表单验证

        //------------------------------------------------------------------
        $("#change_password").on("submit",submitHandler);
        function submitHandler() {
            return check();
            function check(){
                var input = $(".password .must");
                for(var i=0;i<input.length;i++){
                    if(!$.trim(input.eq(i).val())){
                        input.eq(i).focus().css("border-color","red");
                        $(".password .return_info").html("Please fill out all information.");
                        return false;
                    }
                    if(input.eq(i).attr("id")&&input.eq(i).attr("id")=="new_password"){
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
                }
                $(".password .return_info").html("Successful submission");
            }
        }

        //-------------------------------------------------------------------

        //input 框变红之后的恢复

        //-------------------------------------------------------------------
        var input_red = $(".password .must");
        for(var i=0;i<input_red.length;i++){
            input_red.eq(i).on("keyup",function () {
                if($.trim($(this).val())){
                    $(this).css("border-color","#ccc");
                }
            })
        }
    })()

}