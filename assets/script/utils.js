let utils = {};

utils.getOffset = function (ele) {
    let mouse = { x: 0, y: 0 };
    ele.addEventListener("mousemove", (e) => {
        let { x, y } = utils.eventWrapper(e);
        mouse.x = x;
        mouse.y = y;
    })
    return mouse;
}

utils.eventWrapper = function (e) {
    let { pageX, pageY, target } = e;
    let { left, top } = target.getBoundingClientRect();
    return { x: pageX - left, y: pageY - top };
}

utils.toRadian = function (angle) {
    return angle * Math.PI / 180;
}

utils.toAngle = function (radian) {
    return radian * 180 / Math.PI;
}
utils.rectTest = function (point, rect) {
    return (point.x >= rect.x + rect.w / 2 || point.x <= rect.x - rect.w / 2 || point.y >= rect.y + rect.h / 2 || point.y <= rect.y - rect.h / 2);
};

utils.randomPoint = function (arr, int) {
    const max = Math.max(...arr),
        min = Math.min(...arr),
        num = Math.random() * (max - min) + min;
    return int ? Math.round(num) : num;
}

utils.randomColor = function () {
    return `rgb(${utils.randomPoint([55, 255], true)}, ${utils.randomPoint([55, 255], true)}, ${utils.randomPoint([55, 255], true)})`;
}