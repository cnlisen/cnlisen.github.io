/**
 * Created by TJNUL on 2019/11/8.
 */
var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        //var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善");
        var a = new Array("森哥大佬","卧槽，这博客真好看", "李森牛逼","哇，这文章写得真好", "森哥真棒", "李森真强","我要打赏森哥", "森哥男神","太强了");
        var $i = $("<span />").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#ff6651"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
        1500,
        function() {
            $i.remove();
        });
    });
});
