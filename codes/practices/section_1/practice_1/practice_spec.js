describe('practice-1-1', function () {

    it("关于圆上文字的居中", function () {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        var text = $('.time');
        var textHeight = text.height();
        var textWidth = text.width();
        var textLeft = text.offset().left;
        var textFontSize = sizeToNum(text.css('font-size'));

        expect(checkTextSize(textFontSize, (getWindowMinSize(windowWidth, windowHeight)*0.06))).toBe(true);
        expect(checkSizeRightOrNo(textHeight, (windowHeight * 0.1))).toBe(true);
        expect(checkSizeRightOrNo((textLeft * 2 + textWidth), windowWidth)).toBe(true);

    });

    it("关于圆的居中", function () {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        var circle = $('.circle');
        var circleDiameter = circle.width();
        var circleLeft = circle.offset().left;
        var circleTop = circle.offset().top;
        expect(circle.css('border-radius')).toBe('50%');
        expect(checkSizeRightOrNo(circle.height(), 0)).toBe(true);
        expect(checkSizeRightOrNo((circleLeft * 2 + circleDiameter), windowWidth)).toBe(true);
        expect(checkSizeRightOrNo((circleTop * 2 + circleDiameter), windowHeight)).toBe(true);

    });

    it("关于圆文字的居中", function () {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        var circle = $('.circle');
        var circleText = $('.circle_text');
        var circleDiameter = circle.width();
        var circleTextHeight = circleText.height();
        var circleTextFontSize = sizeToNum(circleText.css('font-size'));
        var circleTextTop = sizeToNum(circleText.css('padding-top'));
        var circleTextBottom = sizeToNum(circleText.css('padding-bottom'));

        expect(circleText.css('margin')).toBe('0px');
        expect(checkTextSize(circleTextFontSize, (getWindowMinSize(windowWidth, windowHeight)*0.06))).toBe(true);
        expect(checkSizeRightOrNo(circleTextTop, circleTextBottom)).toBe(true);
        expect(checkSizeRightOrNo((circleTextTop + circleTextBottom + circleTextHeight), circleDiameter)).toBe(true);

    });



    function getWindowMinSize(windowWidth, windowHeight) {
        if (windowWidth > windowHeight) return windowHeight;
        return windowWidth;
    }

    function checkSizeRightOrNo(x, y) {
        if (Math.abs(x - y) <= 2) return true;
        return false;
    }

    function checkTextSize(x, y) {
        if (Math.abs(x - y) <= 1) return true;
        return false;
    }

    function sizeToNum(size) {
        return Number(size.substring(0, size.length - 2));
    }

    it("当浏览器宽高为（1200， 600）", function () {
        expect(getCircleDiameter(1200, 600)).toBe(360);
    });

    it("当浏览器宽高为（600， 800）", function () {
        expect(getCircleDiameter(600, 800)).toBe(240);
    });

});