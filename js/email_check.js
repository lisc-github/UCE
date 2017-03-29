/**
 * Created by admin on 2016/12/3.
 */
$(window).ready(readyHandler);
function readyHandler() {
    (function () {
        //------------------------------------------------------------------

        // 表单验证

        //------------------------------------------------------------------
        $("#change_email").on("submit",submitHandler);
        function submitHandler() {
            return check();
            function check(){
                var input = $(".Email .must");
                for(var i=0;i<input.length;i++){
                    if(!$.trim(input.eq(i).val())||input.eq(i).attr('class').indexOf('placeholder')!=-1){
                        input.eq(i).focus().css("border-color","red");
                        $(".Email .return_info1").html("Please fill out all information.");
                        return false;
                    }
                }
                $(".Email .return_info1").html("Successful submission");
            }
        }

        //-------------------------------------------------------------------

        //input 框变红之后的恢复

        //-------------------------------------------------------------------
        var input_red = $(".Email .must");
        for(var i=0;i<input_red.length;i++){
            input_red.eq(i).on("keyup",function () {
                if($.trim($(this).val())){
                    $(this).css("border-color","#ccc");
                }
            })
        }
    })()

}