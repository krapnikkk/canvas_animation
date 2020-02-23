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
utils.rectTest = function (point, rect){ 
    // x < divx1 || x > divx2 || y < divy1 || y > divy2
    return (point.x >= rect.x + rect.w/2 || point.x <= rect.x - rect.w/2 || point.y  >= rect.y+ rect.h/2 || point.y <= rect.y - rect.h/2);
  };