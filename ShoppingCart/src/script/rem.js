/* 
* @Author: anchen
* @Date:   2017-03-16 15:32:21
* @Last Modified by:   anchen
* @Last Modified time: 2017-03-20 10:31:44
*/

(function(){
    function resizeBaseFontSize(){
        var rootHtml = document.documentElement,
            deviceWidth = rootHtml.clientWidth;

        if(deviceWidth > 640){
            deviceWidth = 640;
        }

        rootHtml.style.fontSize = deviceWidth / 6.4 + "px";
    }

    resizeBaseFontSize();

    window.addEventListener("resize", resizeBaseFontSize, false);
    window.addEventListener("orientationchange", resizeBaseFontSize, false);
})();