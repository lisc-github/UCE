/**
 * Created by admin on 2016/12/3.
 */
$(window).ready(readyHandler);
function readyHandler() {
    (function () {
        //------------------------------------------------------------------

        // 申请表验证

        //------------------------------------------------------------------
        if(IsPC()){
            $("#application").on("submit",submitHandler);
            function submitHandler() {
                return check();
                function check(){
                    if(!$("#application .must").val()){
                        $("#application .must").focus().css("border-color","red");
                        $(".temp .return_info").html("Please fill out all information.");
                        return false;
                    }
                    var flag;
                    $(".each_option input").each(function () {
                       if($(this).attr("checked")=='checked'){
                           flag = true;
                           return false;
                       }
                       else{
                           flag = false;
                       }
                    });
                    if(!flag){
                        $(".option").css("background","yellow");
                        $("html,body").animate({"scrollTop":$(".option").position().top},1000);
                        return false;
                    }
                    if($("#sabbatical_term_term1").attr("checked")=='checked'&&$("#sabbatical_term").val()==''){
                        $("#sabbatical_term").focus().css("border-color","red");
                        return false;
                    }
                    if($.trim($("#application .must").val())){
                        $("#application .must").css("border-color","#ccc");
                    }
                    var input = $("#application .list_must");
                    for(var i=0;i<input.length;i++){
                        if(!$.trim(input.eq(i).val())||input.eq(i).attr('class').indexOf('placeholder')!=-1){
                            var p = input.eq(i).findParent("content");
                            setTimeout(function () {
                                if(parseInt($(p).parent().height())<45){
                                    $(p).prev().click();
                                }
                            },1000);
                            input.eq(i).focus().css("border-color","red");
                            $(".temp .return_info").html("Please fill out all information.");
                            return false;
                        }
                        else{
                            input.eq(i).css("border-color","#ccc");
                        }
                    }
                    $("#application .must").val("");
                    $(".temp .return_info").html("Successful submission");

                }

            }



            $(".each_option input").each(function () {
                $(this).on("change",function () {
                    $(".option").css("background","");
                })
            });

            $("#sabbatical_term").on("keyup",function () {
                $(this).css("border-color","#ccc");
            })
            //-------------------------------------------------------------------

            //input 框变红之后的恢复

            //-------------------------------------------------------------------
            var input_red = $(".list_must");
            for(var i=0;i<input_red.length;i++){
                input_red.eq(i).on("keyup",function () {
                    if($.trim($(this).val())){
                        $(this).css("border-color","#ccc");
                    }
                })
            }
        }

        else{
            $("#application").on("submit",submitHandler);
            function submitHandler() {
                return check();
                function check(){
                    if(!$("#application .must").val()){
                        $("#application .must").focus().css("border-color","red");
                        $(".temp .return_info").html("Please fill out all information.");
                        return false;
                    }
                    if($.trim($("#application .must").val())){
                        $("#application .must").css("border-color","#ccc");
                    }
                    var input = $("#application .list_must");
                    for(var i=0;i<input.length;i++){
                        if(!$.trim(input.eq(i).val())||input.eq(i).attr('class').indexOf('placeholder')!=-1){
                            var p = input.eq(i).findParent("content");
                            setTimeout(function () {
                                if(parseInt($(p).parent().height())<105){
                                    $(p).prev().click();
                                }
                            },1000);
                            input.eq(i).focus().css("border-color","red");
                            $(".temp .return_info").html("Please fill out all information.");
                            return false;
                        }
                        else{
                            input.eq(i).css("border-color","#ccc");
                        }
                    }
                    $("#application .must").val("");
                    $(".temp .return_info").html("Successful submission");

                }

            }

            //-------------------------------------------------------------------

            //input 框变红之后的恢复

            //-------------------------------------------------------------------
            var mobile_input_red = $(".list_must");
            for(var i=0;i<mobile_input_red.length;i++){
                mobile_input_red.eq(i).on("keyup",function () {
                    if($.trim($(this).val())){
                        $(this).css("border-color","#ccc");
                    }
                })
            }
        }
    })()


}


//-------------------------------------------------------

// 找出某个元素的特定的父级

//-------------------------------------------------------

$.fn.extend({
    findParent:function(_class){
        var _parent=$(this);
        return find();
        function find() {
            _parent = _parent.parent();
            if(!_parent.hasClass(_class)){
                find();
            }
            if(_parent.hasClass(_class)){
                return _parent;
            }
        }
    }
}

);


//--------------------------------------------------------------------------

//判断是否是手机端

//--------------------------------------------------------------------------

function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}



