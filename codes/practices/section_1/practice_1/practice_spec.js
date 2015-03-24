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
        expect(getInt(textHeight / 4)).toBe(getInt(windowHeight * 0.1 / 4));
        expect(getInt(textLeft / 2 + textWidth / 4)).toBe(getInt(windowWidth / 4));
        expect(circleTextTop).toBe(circleTextBottom);
        expect(getInt((circleTextTop + circleTextBottom + circleTextHeight) / 4)).toBe(getInt(circleDiameter / 4));
        expect(getInt(circleLeft / 2 + circleDiameter / 4)).toBe(getInt(windowWidth / 4));
        expect(getInt(circleTop / 2 + circleDiameter / 4)).toBe(getInt(windowHeight / 4));
    });

    function sizeToNum(size) {
        return Number(size.substring(0, size.length - 2));
    }

    function getInt(num) {
        return Math.floor(num)
    }

    it("当浏览器宽高为（1200， 600）", function () {
        expect(getCircleDiameter(1200, 600)).toBe(360);
    });

    it("当浏览器宽高为（600， 800）", function () {
        expect(getCircleDiameter(600, 800)).toBe(240);
    });
});