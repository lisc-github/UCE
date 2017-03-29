/**
 * Created by admin on 2016/11/30.
 */
$(window).ready(readyHandler);
function readyHandler() {
    (function () {
        $(".user a").not(".exit").each(function (i) {
            $(this).on("click",function () {
                $(".user a").not(".exit").each(function (){
                    $(this).removeClass("active");
                });
                $(this).addClass("active");
                $(".each_con").each(function () {
                    $(this).css("display","none");
                })
                $(".each_con").eq(i).fadeIn();
            })
        });
        $(".change_info").each(function (i) {
            $(this).on("click",function () {
                if($(".change_con").eq(i).css("display")=="none"){
                    $(".change_con").eq(i).fadeIn();
                }
                else{
                    $(".change_con").eq(i).fadeOut();
                }
            })
        });


        //------------------------------------------------------------------

        //上传文件的验证

        //------------------------------------------------------------------
        $(".upload").click(function () {
            $("input[type='file']").click();
        });
        $("input[type='file']").change(function () {

            var file_name = $("input[type='file']").val();
            $(".upload_file").text(file_name);

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

        });
    })()

}
//----------------------------------------------------------------------

//打开新窗口不被拦截

//----------------------------------------------------------------------

function goTo()
{
    var newA = document.createElement("a");
    newA.id='gg'
    newA.target='_blank';
    newA.href='newForm.html';


    document.body.appendChild(newA);
    newA.click();
    document.body.removeChild(newA);

}
