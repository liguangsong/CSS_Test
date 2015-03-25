describe('practice-1-1', function () {

    it("居中", function () {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        var text = $('.time');
        var circle = $('.circle');
        var circleText = $('.circle_text');
        var textHeight = text.height();
        var textWidth = text.width();
        var textLeft = text.offset().left;
        var circleDiameter = circle.width();
        var circleLeft = circle.offset().left;
        var circleTop = circle.offset().top;
        var circleTextWidth = circleText.width();
        var circleTextHeight = circleText.height();
        var circleTextTop = sizeToNum(circleText.css('padding-top'));
        var circleTextBottom = sizeToNum(circleText.css('padding-bottom'));
        expect(checkSizeRightOrNo(textHeight, (windowHeight * 0.1))).toBe(true);
        expect(checkSizeRightOrNo((textLeft * 2 + textWidth), windowWidth)).toBe(true);
        expect(checkSizeRightOrNo(circleTextTop, circleTextBottom)).toBe(true);
        expect(checkSizeRightOrNo((circleTextTop + circleTextBottom + circleTextHeight), circleDiameter)).toBe(true);
        expect(checkSizeRightOrNo((circleLeft * 2 + circleDiameter), windowWidth)).toBe(true);
        expect(checkSizeRightOrNo((circleTop * 2 + circleDiameter), windowHeight)).toBe(true);

    });

    function checkSizeRightOrNo(x, y) {
        if ((x - y) <= 4) return true;
        return false;
    }

    function sizeToNum(size) {
        return Number(size.substring(0, size.length - 2));
    }

    function getInt(num) {
        return Math.round(num)
    }

    it("当浏览器宽高为（1200， 600）", function () {
        expect(getCircleDiameter(1200, 600)).toBe(360);
    });

    it("当浏览器宽高为（600， 800）", function () {
        expect(getCircleDiameter(600, 800)).toBe(240);
    });

});