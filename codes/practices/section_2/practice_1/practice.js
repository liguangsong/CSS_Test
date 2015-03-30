$(window).ready(function() {
    //记得添加参数
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var circleDiameter = getCircleDiameter(windowWidth, windowHeight);
    setCirclePlace(circleDiameter, windowHeight, windowWidth);
    setTextPlace(windowHeight);
    setCircleTextPlace(circleDiameter);
});


$(window).resize(function() {
    //记得添加参数
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var circleDiameter = getCircleDiameter(windowWidth, windowHeight);
    setCirclePlace(circleDiameter, windowHeight, windowWidth);
    setTextPlace(windowHeight);
    setCircleTextPlace(circleDiameter);
});

//返回值 为 圆的直径
function getCircleDiameter(windowWidth, windowHeight) {
    if (windowWidth * 0.4 > windowHeight * 0.6) return windowHeight * 0.6;
    return windowWidth * 0.4;
}
//设置黑球的（class="circle"）的css样式
function setCirclePlace(circleDiameter, windowHeight, windowWidth) {
    $('.circle').css({
        'width': circleDiameter,
        'padding-bottom': circleDiameter,
        'top': (windowHeight - circleDiameter)/2,
        'left': (windowWidth - circleDiameter)/2
    });
}
//设置黑球上面的时间展示（class="time"）的css样式
function setTextPlace(windowHeight) {
    $('.time').css({
        'height': windowHeight * 0.1
    });
}
//设置黑球里面的文字展示（class="circle_text"）的css样式
function setCircleTextPlace(circleDiameter) {
    var circle_text = $('.circle_text');
    var padding = (circleDiameter - circle_text.height()) / 2;
    circle_text.css({
        'padding-top': padding,
        'padding-bottom' : padding
    })
}