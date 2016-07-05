//->解决click的300ms延迟
FastClick.attach(document.body);

//->动态计算REM的值
~function () {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / 640 * 100 + "px";
}();
//->初始化Swiper
new Swiper('.swiper-container', {
    loop: true,
    direction: "vertical",
    onSlidePrevEnd: change,
    onSlideNextEnd: change

})
function change(swiper) {
    var n = swiper.activeIndex,
        slideAry = swiper.slides;
    [].forEach.call(slideAry, function (slide, index) {
        if (n == index) {
            switch (n) {
                case 1:
                    slide.id = "page1"
                    break;
                case 6:
                    slide.id = "page1"
                    break;
                case 2:
                    slide.id = "page2"
                    break;
                case 3:
                    slide.id = "page3"
                    break;
                case 4:
                    slide.id = "page4"
                    break;
                case 0:
                    slide.id = "page5"
                    break;
                case 5:
                    slide.id = "page5"
                    break;
            }

            return
        }

        slide.id = null
    })

}
var tt = document.querySelector(".page1");
var imgOwn = [].slice.call(tt.querySelectorAll("img"))

tt.addEventListener("webkitAnimationEnd", function (e) {
                imgOwn.forEach(function (slide, index) {
                    if (index == 1) {
                        setTimeout(function () {
                            //imgOwn[index].style.Animation = "bounceOutRight 2s linear 1 both"
                            imgOwn[index].style.webkitAnimation = "flash 2s linear 1 both";
                            imgOwn[index].style.width = "4rem";
                            console.log(1)
                        }, 100)

                    }
                    if (index == 3) {
                        setTimeout(function () {
                            imgOwn[index].style.webkitAnimation = "bounceOutDown 2s linear 1 both"
                        }, 500)

            }
            if (index == 2) {
                setTimeout(function () {
                    imgOwn[index].style.webkitAnimation = "flash 1s linear infinite both"
                }, 2000)

            }
        })

}, false)









