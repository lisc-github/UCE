/**
 * Created by admin on 2016/10/28.
 */
$(window).ready(readyHandler);
function readyHandler() {
    (function () {
        if(IsPC()){
            var timer =  null;
            var timer2 =  null;
            $(".container .con").fadeIn(1000);
            $(".nav .wrapper a").each(function(i){
                $(this).hover(function () {
                    var self = this;
                    timer = setTimeout(function () {
                        $(self).animate({"backgroundColor":"#cfa883"}).css("color","#fff");
                    },200);
                },function () {
                    var self = this;
                    clearTimeout(timer);
                    $(this).animate({"backgroundColor": "transparent"}).css("color", "#2D2D2D");
                    $(".nav .wrapper .list").css("display","none");
                });

            });
            //PC端申请表点击展开
            $(".list").each(function (z) {
                var offsetTop0;
                $(this).on("click",function () {
                    offsetTop0 = $(".list").eq(0).parent().offset().top;
                    $(".box").each(function () {
                        if($(this).height()>40){
                            $(this).animate({"height":"40px"},1000);
                            $(this).find("span").find("img").css("transform","rotate(0deg)");
                        }
                    });
                    if($(".box").eq(z).height()<=40){
                        $(".box").eq(z).animate({"height":$(".content").eq(z).outerHeight()+100+"px"},1000);
                        $("html,body").animate({"scrollTop":offsetTop0},1000);
                        $(this).find("span").find("img").css("transform","rotate(180deg)");
                    }
                    else{
                        $(".box").eq(z).animate({"height":"40px"},1000);
                    }
                });
            });
            //------------------------------------------------------------------

            //  模拟单选框

            //------------------------------------------------------------------
            $(".degree_certification,.current_occupation,.graduate_from").each(function () {
                $(this).find("label").on("click",function () {
                    $(this).parent().find("i").each(function () {
                        $(this).css("background-position-y","0");
                    });
                    $(this).find("i").css("background-position-y","18px");
                })
            });


        }

        //-----------------------------------------------------------------------

        // 手机端的效果

        //---------------------------------------------------------------------------
        if(!IsPC()){
            //--------------------------------------------
            //创建遮罩层并添加到body
            //--------------------------------------------
            var cover = $("<div></div>");
            cover.css({'height':'100%','width':'100%','position':'fixed','top':0,'left':'0','z-index':-1,'background':'red','opacity':'0'});
            cover.appendTo($("body"));
            //--------------------------------------------
            //把about us,sign in 等第二导航栏添加到nav中
            //--------------------------------------------
            var navTwo = $(".top_box");
            navTwo.appendTo($(".nav"));
            $(".container .con").fadeIn(1000);
            cover.on("touchstart", function (event) {
                $("body").css("pointer-events",'none');
                setTimeout(function () {
                    $("body").css("pointer-events",'');
                },500);
                cover.css("z-index",'-1');
                $(".nav .wrapper").animate({opacity:0,"z-index":"-100"},400);
                $(".top_box").animate({"opacity":"0","z-index":"-100"},400);
                $(".mobile_nav").css("background","url('img/menu.jpg') no-repeat");
            });
            $("body").on("touchstart",function () {
                $(".user").animate({left:'-360px'});
            });
            $(".user").on("touchstart",function (event) {
                event.stopPropagation();
            });

            //-----------------------------------------
            //点击nav左边的图标及导航栏
            //-----------------------------------------
            $(".mobile_nav").on("click",function(event){
                    if($(".nav .wrapper").css("opacity")=="0"){
                        $(".nav .wrapper").css("z-index",100);
                        $(".nav .wrapper").animate({opacity:1},function () {
                            cover.css('z-index','99');
                        });
                        $(this).css("background","url('img/close.jpg') no-repeat");
                    }
                }
            );
            $(".nav .wrapper a").each(function (i) {
                $(this).removeAttr("href");
                $(this).on("touchstart",function () {
                    event.stopPropagation();
                });
                $(this).on("click",function () {
                    cover.css("z-index",'-1');
                    $(".nav .wrapper").animate({opacity:0},400,function () {
                        $(this).css("z-index","-100");
                        setTimeout(function () {
                            switch(i){
                                case 0 : goTo("uce_home.html");break;
                                case 1 : goTo("teach in china.html");break;
                                case 2 : goTo("uce_study.html");break;
                                case 3 : goTo("uce_camp.html");break;
                                case 4 : goTo("research.html");break;
                                case 5 : goTo("uce_photo.html");break;
                            }
                        },300)

                    });
                    $(".mobile_nav").css("background","url('img/menu.jpg') no-repeat");
                });
            });
            $(".mobile_nav").on("touchstart",function () {
                event.stopPropagation();
            });

            //-----------------------------------------
            //点击nav右边的图标及导航栏
            //-----------------------------------------
            $(".mobile_nav2").on("click",function(event){
                if($(".top_box").css('opacity')=='0'){
                    $(".top_box").css("z-index",100);
                    $(".top_box").animate({opacity:'1'},function () {
                        cover.css('z-index','99');
                    });
                    }
                }
            );
            $(".top_box a").each(function (i) {
                $(this).removeAttr("href");
                $(this).on("touchstart",function () {
                    event.stopPropagation();
                });
                $(this).on("click",function () {
                    cover.css("z-index",'-1');
                    $(".top_box").animate({opacity:"0"},400,function () {
                        $(this).css("z-index",-100);
                        setTimeout(function () {
                            switch(i){
                                case 0 : goTo("login.html");break;
                                case 1 : goTo("uce_about.html");break;
                                case 2 : goTo("uce_contact.html");break;
                                case 3 : goTo("sign_up.html");break;
                                case 4 : goTo("login.html");break;
                            }
                        },300)

                    });
                });
            });
            $(".mobile_nav").on("touchstart",function () {
                event.stopPropagation();
            });


            //-------------------------------------------------------------------------------

            //待处理??????????????????????????????????????????????????????????????????????????

            // ------------------------------------------------------------------------------
            $(".mobile_user_nav").on("click",function(event){
                    if($(".user").position().left!=0){
                        $(".user").animate({left:0});
                    }
                    else{
                        $(".user").animate({left:'-360px'});
                    }

                }
            );
            $(".user a").each(function () {
                $(this).on("touchstart",function () {
                    event.stopPropagation();
                });
                $(this).on("click",function () {
                    $(".user").animate({left:'-360px'});
                });
            });
            $(".mobile_user_nav").on("touchstart",function () {
                event.stopPropagation();
            });

            // 申请表点击展开
            $(".list").each(function (z) {
                var offsetTop0;
                $(this).on("click",function () {
                    offsetTop0 = $(".list").eq(0).parent().offset().top;
                    $(".box").each(function () {
                        if($(this).height()>100){
                            $(this).animate({"height":"100px"},1000);
                            $(this).find("span").find("img").css("transform","rotate(0deg)");
                        }
                    });
                    if($(".box").eq(z).height()<=100){
                        $(".box").eq(z).animate({"height":$(".content").eq(z).outerHeight()+100+"px"},1000);

                        $("html,body").animate({"scrollTop":offsetTop0},1000);
                        $(this).find("span").find("img").css("transform","rotate(180deg)");
                    }
                    else{
                        $(".box").eq(z).animate({"height":"100px"},1000);
                    }
                });
            });
            //------------------------------------------------------------------

            //  模拟单选框

            //------------------------------------------------------------------
            $(".degree_certification,.current_occupation,.graduate_from").each(function () {
                $(this).find("label").on("click",function () {
                    $(this).parent().find("i").each(function () {
                        $(this).css("background-position-y","0");
                    });
                    $(this).find("i").css("background-position-y","40px");
                })
            });


        }




        $('.questions').each(function (i) {
            $(this).on('click',clickHandler);
            function clickHandler() {
                console.log(i);
                var $detail = $(".detail").eq(i);
                $detail.parent().fadeIn();
                console.log(i);
                var w = $detail.width();
                var h = $detail.height();
                console.log(w,h);
                $detail.css("margin-top",-h/2+"px").css("margin-left",-w/2+"px");
            };
            $(".close").eq(i).on('click',function () {
                $(this).parent().parent().fadeOut();
            })
        });


        $(".con_work .mask").hover(function () {
            var self = this;
            timer = setTimeout(function () {
                $(self).animate({"opacity":"0.2"});
                $(self).find(".word").fadeOut();
            },200);

        },function () {
            clearTimeout(timer);
            $(this).animate({"opacity":"0.6"});
            $(this).find(".word").fadeIn();
        });

        $(".top").on("click",function () {
            $("html,body").animate({"scrollTop":"0px"},1000);
        });

        $("#faq").on("click",function () {
            $(".cover").parent().fadeIn();
        });
        $(".cover .close").on("click",function () {
            $(".cover").parent().fadeOut();
        });

        $(window).on("scroll",function(){
            if($("html").scrollTop()||$("body").scrollTop()>300){
                $(".top").fadeIn();
            }
            else
                $(".top").fadeOut();
        });

        $(".camp_pro").each(function (z) {
            $(this).on("click",function () {
                if(!$(this).hasClass('choose')){
                    $(".camp_pro").each(function () {
                        $(this).removeClass("choose");
                    });
                    $(this).addClass("choose");
                    $(".programs").each(function () {
                        $(this).fadeOut();
                    });
                    $(".programs").eq(z).fadeIn(1000);
                }

            });
        });
        $(".teach_pro").each(function (z) {
            $(this).on("click",function (){
                if(!$(this).hasClass('choose')){
                    $(".teach_pro").each(function () {
                        $(this).removeClass("choose");
                    });
                    $(this).addClass("choose");
                    $(".programs").each(function () {
                        $(this).fadeOut();
                    });
                    setTimeout(function () {
                        $(".programs").eq(z).fadeIn(1000);
                    },100);
                }

            });
        });
        $(".study_pro").each(function (z) {
            $(this).on("click",function (){
                if(!$(this).hasClass('choose')){
                    $(".study_pro").each(function () {
                        $(this).removeClass("choose");
                    });
                    $(this).addClass("choose");
                    $(".programs").each(function () {
                        $(this).fadeOut();
                    });
                    setTimeout(function () {
                        $(".programs").eq(z).fadeIn(1000);
                    },100);
                }
            });
        });

        pullDown("#type_of_program",".choose_type",".each_option");
        $("#sabbatical_term").on("keyup",function () {
            if($.trim($(this).val())){
                $("#sabbatical_term_term1").attr("checked","true");
            }
            else{
                $("#sabbatical_term_term1").removeAttr("checked");
            }
        });

        pullDown("#gender",".gender_option");
        pullDown("#ethnicity",".ethnicity_option");
        pullDown("#type_of_degree",".degree_con");
        pullDown("#no_type_of_degree",".no_degree_con");
        pullDown("#first_choice",".first_choice");
        pullDown("#second_choice",".second_choice");
        pullDown("#third_choice",".third_choice");
        pullDown("#A_prefix",".a_prefix_con");
        pullDown("#B_prefix",".b_prefix_con");

        $("#graduate_yes").on("click",function () {
            $(".no_con").css("display","none");
            $(".yes_con").fadeIn();
            $(".yes_con input").each(function () {
                $(this).val("");
                if(!$(this).hasClass("list_must")){
                    $(this).addClass("list_must");
                }
            });
            $(".box").eq(1).animate({"height":$(".content").eq(1).outerHeight()+180+"px"},1000);
            $(".no_con input").each(function () {
                $(this).val("");
                $(this).removeClass("list_must");
            })
        });
        $("#graduate_no").on("click",function () {
            $(".yes_con").css("display","none");
            $(".no_con").fadeIn();
            $(".no_con input[type='text']").each(function () {
                $(this).val("");
                if(!$(this).hasClass("list_must")){
                    $(this).addClass("list_must");
                }
            });
            $(".box").eq(1).animate({"height":$(".content").eq(1).outerHeight()+180+"px"},1000);
            $(".yes_con input").each(function () {
                $(this).val("");
                $(this).removeClass("list_must");
            })
        });

        $(".more_btn").on("click",function () {
            $(".more_cover").fadeIn();
            $(".close_btn").on("click",function () {
                $(".more_cover").fadeOut();
            })
        });

        //-----------------------------------------------------------

        //   请求验证码

        //-----------------------------------------------------------
        var Email = $(".sign input[name='Email_address']");
        $("#get_code").on("click",function () {
            if(isEmail(Email.val())){
                $(this).attr("disabled",'true').css("color","#aaa");
                $(".return_info").text("The verification code will be sent to you via E-mail. If you do not receive it, please try again after 60 seconds.");
                var i = 60;
                var timer = null;
                var self = this;
                timer = setInterval(function () {
                    i--;
                    $(self).val("Try again after "+ i +" seconds");
                    if(i ==0){
                        clearInterval(timer);
                        $(self).removeAttr("disabled").css("color","#666").val("Get Verification Code");
                    }
                },1000);
            }
            else{
                alert("Please enter a valid email address");
            }
        });

        //正则验证邮箱的方法
        function isEmail(str){
            var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            return reg.test(str);
        }

        //------------------------------------------------------------------------

        // 单选框点击之后下面的input/textarea 切换必须填的class

        //------------------------------------------------------------------------
        $(".degree1").click(function () {
            if(!$("#any_degree").hasClass("list_must")){
                $("#any_degree").addClass("list_must").removeAttr("disabled");
            }
            $("#any_degree").css("border-color","#ccc");
        });
        $(".degree2").click(function () {
            if(!$("#any_certify").hasClass("list_must")){
                $("#any_certify").addClass("list_must").removeAttr("disabled");
            }
            $("#any_certify").css("border-color","#ccc");
        });
        $(".certification1").click(function () {
            $("#any_degree").removeClass("list_must").css("border-color","#eee").attr("disabled","disabled").val("");

        });
        $(".certification2").click(function () {
            $("#any_certify").removeClass("list_must").css("border-color","#eee").attr("disabled","disabled").val("");
        });
        $(".occupation3").click(function () {
            if(!$("#other_con").hasClass("list_must")){
                $("#other_con").addClass("list_must");
            }
            $("#other_con").css("border-color","#ccc").removeAttr("disabled");
        });
        $(".occupation1").click(function () {
            if($("#other_con").hasClass("list_must")){
                $("#other_con").removeClass("list_must").css("border-color","#eee").attr("disabled","disabled").val("");
            }
        });
        $(".occupation2").click(function () {
            if($("#other_con").hasClass("list_must")){
                $("#other_con").removeClass("list_must").css("border-color","#eee").attr("disabled","disabled").val("");
            }
        });




        // $(".login input[type='submit']").on("click",function () {
        //     goTo('user_center.html');
        // });


        $(".phone_format").on("blur",function () {
            if($.trim($(this).val())){
                var str = $(this).val();
                str=str.split("");
                var arr = [];
                for(var i=0;i<str.length;i++){
                    if(parseInt(str[i])>=0||parseInt(str[i])<10){
                        arr.push(str[i]);
                    }
                }
                var new_str1="";
                var new_str2="";
                var new_str3="";
                for(var j=0;j<arr.length;j++){
                    if(j<3){
                        new_str1+=arr[j]+"";
                    }
                    if(j>2&&j<6){
                        new_str2+=arr[j]+"";
                    }
                    if(j>5&&j<10){
                        new_str3+=arr[j]+"";
                    }
                }
                $(this).val("("+new_str1+")"+"-"+new_str2+"-"+new_str3);
            }

        });

        $(".date_format").on("blur",function () {
            if($.trim($(this).val())) {
                var str = $(this).val();
                str=str.split("");
                var arr = [];
                for(var i=0;i<str.length;i++){
                    if(parseInt(str[i])>=0||parseInt(str[i])<10) {
                        arr.push(str[i]);
                    }
                }
                var new_str1="";
                var new_str2="";
                var new_str3="";
                for(var j=0;j<arr.length;j++){
                    if(j<2){
                        new_str1+=arr[j]+"";
                    }
                    if(j>1&&j<4){
                        new_str2+=arr[j]+"";
                    }
                    if(j>3&&j<8){
                        new_str3+=arr[j]+"";
                    }
                }
                $(this).val(new_str1+"/"+new_str2+"/"+new_str3);
            }

        })
    })()

}



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

//------------------------------------------------------------------

// 模拟下拉选择框

//------------------------------------------------------------------

function pullDown(input,content,con_list){
    $(input).on("blur",function (){
        $(content).fadeOut();
    });
    $(input).on("click",function () {
        if( $(content).css("display")=="none"){
            $(content).fadeIn();
        }
        else
            $(content).fadeOut();
        $(this).val("");
        $(content).on("mouseover",function () {
            $(input).unbind("blur");
        });
        $(content).find("p").each(function (z) {
            $(this).on("click",function () {
                $(input).on("blur",function (){
                    $(content).fadeOut();
                });
                $(input).val($(this).html());
                $(this).parent().fadeOut();
                $(con_list).each(function () {
                    $(this).css("display","none");
                });
                $(con_list).eq(z).fadeIn();
            })
        });
        $(content).on("mouseout",function () {
            $(input).on("blur",function (){
                $(content).fadeOut();
            });
        })
    });
}


//----------------------------------------------------------------------

//打开新窗口不被拦截

//----------------------------------------------------------------------

function goTo(_href)
{
    var newA = document.createElement("a");
    newA.id='gg';
    newA.target='_self';
    newA.href= _href;

    document.body.appendChild(newA);
    newA.click();
    document.body.removeChild(newA);
}



















































