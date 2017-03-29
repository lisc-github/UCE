/**
 * Created by admin on 2016/12/28.
 */
$(window).ready(readyHandler);
function readyHandler() {
    (function () {
        var t=13;
        var Imgs = $(".photo img");
        if(!IsPC()){
            $(".pic_show .close").css("display","none");
            $(".pic_show").click(function () {
                $(this).css("display","none");
            })
        }


        //----------------------------------------------------

        //加载图片

        //----------------------------------------------------
        var timer;
        var i=0;
        $(".load").click(function () {
            i=0;
            var load = $(".load");
            var loading = $("<p></p>");
            if(IsPC()){
                loading.css({"background":"url('img/load.gif') center no-repeat","height":"40px"});
            }
            if(!IsPC()){
                loading.css({"background":"url('img/load.gif') center no-repeat","height":"70px"});
            }
            loading.insertBefore($(".load"));
            load.css("display","none");
            setTimeout(function () {
                load.css("display","block");
                loading.remove();
                timer = setInterval(function () {
                    i++;
                    if(i>12){
                        clearInterval(timer);
                    }
                    if(t<175){
                        if(i%3==1){
                            var picRow = $("<div class='pic_row'></div>");
                            for(var z=0;z<4;z++){
                                if(t<175){
                                    var picBox = $("<div class='pic_box'></div>");
                                    if(z==3){
                                        picBox = $("<div class='pic_box' style='margin-right:0;'></div>");
                                    }
                                    $("<img/>").appendTo(picBox).attr("src",'photo_gallery/'+t+'.jpg');
                                    t++;
                                    picBox.appendTo(picRow);
                                }

                            }
                            picRow.appendTo($(".photo"));


                        }

                        $(".photo img").each(function () {
                            $(this).on("click",function () {
                                var temp= $(this).attr("src");
                                $(".pic_show").show();
                                if(IsPC()){
                                    var $Img = $("<img src="+temp+" width=60%>");
                                    $(".show").html($Img);
                                    $(".show img").css({"position":"absolute","left":"50%","top":"50%","margin-left":-$Img.width()/2,"margin-top":-$Img.height()/2});
                                }
                                else{
                                    $(".show").css("background","url("+temp+") no-repeat center").css("background-size","100%");
                                }
                            })
                        });
                        $(".pic_show .close").click(function () {
                            $(".pic_show").hide();
                        });
                    }
                    else{
                        $(".load span").html("No more");
                        $(".load").unbind();
                    }
                },100);
            },1000)
        });


        //----------------------------------------------

        // photo图片点击的预览

        //----------------------------------------------
        $(".photo img").each(function () {
            $(this).on("click",function () {
                var temp= $(this).attr("src");
                $(".pic_show").show();
                if(IsPC()){
                    var $Img = $("<img src="+temp+" width=60%>");
                    $(".show").html($Img);
                    $(".show img").css({"position":"absolute","left":"50%","top":"50%","margin-left":-$Img.width()/2,"margin-top":-$Img.height()/2});
                }
                else{
                    $(".show").css("background","url("+temp+") no-repeat center").css("background-size","100%");
                }
            })
        });
        $(".pic_show .close").click(function () {
            $(".pic_show").hide();
        });

        $(".add_pic").on("click",function () {
            $(".upload_box").css("display","block");
        });

        $(".close").on("click",function () {
            $(".upload_box").hide();
        });
        //-------------------------------------------------------------------

        // 上传图片的验证

        //-------------------------------------------------------------------
        $("input[type='file']").change(function () {

            setImagePreview();
            var file_name = $("input[type='file']").val();
            $(".upload_file").text("");
            console.log(file_name);
            if (file_name.lastIndexOf('.')==-1){    //如果不存在"."
                alert("路径不正确!");
                return false;
            }
            var AllImgExt=".jpg|.jpeg|.gif|.bmp|.png|";
            var extName = file_name.substring(file_name.lastIndexOf(".")).toLowerCase();//（把路径中的所有字母全部转换为小写）
            if(AllImgExt.indexOf(extName+"|")==-1)
            {
                $("input[type='file']").val('');
                var ErrMsg="<span style='color:red'>The file type is not allowed to upload.Please upload the "+AllImgExt+" type file</span>";
                $(".upload_file").html(ErrMsg);
                return false;
            }
        });

        $(".return_info").html("Successful submission");
        $("form").on("submit",submitHandler);
        function submitHandler() {
            return check();
            function check(){

                var file_name = $("input[type='file']").val();
                $(".upload_file").text("");
                console.log(file_name);
                console.log(file_name.lastIndexOf('.')==-1);
                if (file_name.lastIndexOf('.')==-1){    //如果不存在"."
                    alert("Incorrect path!");
                    return false;
                }
                var AllImgExt=".jpg|.jpeg|.gif|.bmp|.png|";
                var extName = file_name.substring(file_name.lastIndexOf(".")).toLowerCase();//（把路径中的所有字母全部转换为小写）
                if(AllImgExt.indexOf(extName+"|")==-1)
                {
                    $("input[type='file']").val('');
                    var ErrMsg="<span style='color:red'>The file type is not allowed to upload.Please upload the "+AllImgExt+" type file</span>";
                    $(".upload_file").html(ErrMsg);
                    return false;
                }

            }
        }
    })()

}


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

function setImagePreview(){
    var docObj=document.getElementById("file");
    var imgObjPreview=document.getElementById("preview");
    if(docObj.files  &&  docObj.files[0])
    {
        //火狐下，直接设img属性
        imgObjPreview.style.display = 'block';
        imgObjPreview.style.width = '100px';
        imgObjPreview.style.height = '100px';
        //imgObjPreview.src = docObj.files[0].getAsDataURL();
        //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
        imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
    }
    else
    {
        //IE下，使用滤镜
        docObj.select();
        docObj.blur();
        var imgSrc = document.selection.createRange().text;
        var localImagId = document.getElementById("localImag");
        //必须设置初始大小
        localImagId.style.width = "300px";
        localImagId.style.height = "120px";
        //图片异常的捕捉，防止用户修改后缀来伪造图片
        try
        {
            localImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
            localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
        }
        catch(e)
        {
            alert("您上传的图片格式不正确，请重新选择!");
            return false;
        }
        imgObjPreview.style.display = 'block';
        document.selection.empty();
    }
    return true;
}


function min_obj(array,_this) {
    var arr1 = [];
    if(array.length!=0){
        var my_this = null;
        var tempTop = _this.position().top;
        var tempLeft = _this.position().left;
        for(var i in array) {
            if(array[i].position().top == tempTop) {
                if (array[i].position().left >= tempLeft){
                    arr1.push(array[i]);
                    my_this = min_left(arr1);
                    console.log(my_this);
                }

            }
            else if (array[i].position().top > tempTop) {
                arr1.push(array[i]);
                my_this = min_top(arr1);
                tempTop = my_this.position().top;

            }

        }
        return my_this;
    }
    else{
        throw Error('please load some pictures!!!');
    }
}
function min_left(arr1) {
    var temp = null;
    var l = 9999;
    for(var i in arr1){
        if(arr1[i].position().left<l){
            l = arr1[i].position().left;
            temp = arr1[i];
        }
    }
    return temp;
}

function min_top(arr1) {
    var temp = null;
    var t = 99999;
    for(var i in arr1){
        if(arr1[i].position().top<t){
            t = arr1[i].position().top;
            temp = arr1[i];
        }
    }
    return temp;
}


function max_obj(array2) {
    if(array2.length!=0){
        var my_this = null;
        var tempTop = array2[0].attr("top");
        var tempLeft = array2[0].attr("left");
        for(var j in array2) {
            if (array2[j].attr("top") > tempTop) {
                tempTop = array2[j].attr("top");
                my_this = array2[j];
            }
            else if(array2[j].attr("top") == tempTop) {
                if (array2[j].attr("left") >= tempLeft){
                    tempLeft = array2[j].attr("left");
                    my_this = array2[j];
                }

            }
        }
        return my_this;
    }
    else{
        throw Error('this is the first picture!!!');
    }
}