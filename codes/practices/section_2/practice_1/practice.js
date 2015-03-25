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

function setCirclePlace(circleDiameter, windowHeight, windowWidth) {
    $('.circle').css({
        'width': circleDiameter,
        'padding-bottom': circleDiameter,
        'top': (windowHeight - circleDiameter)/2,
        'left': (windowWidth - circleDiameter)/2
    });
}

function setTextPlace(windowHeight) {
    $('.time').css({
        'height': windowHeight * 0.1
    });
}

function setCircleTextPlace(circleDiameter) {
    $('.circle_text').css({
        'height': circleDiameter * 0.2,
        'padding-top': circleDiameter * 0.4,
        'padding-bottom': circleDiameter * 0.4
    })
}