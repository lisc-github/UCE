/**
 * Created by admin on 2016/11/11.
 */
$(window).ready(readyHandler);
function readyHandler(){
    $("form").on("submit",submitHandler);
    function submitHandler() {
        return check();
        function check(){
            var input = $("input,#activity").not(".phone2 input").not("#m_name,.fax input,#other,#employer,#employer_phone,#work_experience,#other_path");
            for(var i=0;i<input.length;i++){
                if(!input.eq(i).val()){
                    input.eq(i).focus();
                    return false;
                }
            }
        }

    }
}