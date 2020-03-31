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

utils.rectTest = function (rect1, rect2) {
    return (rect1.x + rect1.w >= rect2.x && rect1.x <= rect2.x + rect2.w && rect1.y + rect1.h >= rect2.y && rect1.y <= rect2.y + rect2.h);
}

utils.getDistance = function (x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

utils.ballTest = function (ball1, ball2) {
    return utils.getDistance(ball1.x, ball1.y, ball2.x, ball2.y) < ball1.r + ball2.r;
}

utils.checkBallBounce = function (ball, W, H, bounce) {
    if (ball.x - ball.r <= 0) {
        ball.x = ball.r;
        ball.vx *= bounce;
    } else if (ball.x + ball.r >= W) {
        ball.x = W - ball.r;
        ball.vx *= bounce;
    }
    if (ball.y - ball.r <= 0) {
        ball.y = ball.r;
        ball.vy *= bounce;
    } else if (ball.y + ball.r >= H) {
        ball.y = H - ball.r;
        ball.vy *= bounce;
    }
};