module.exports = function(el) {
    var x = 0;
    var y = 0;

    while (el) {
        x += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        y += (el.offsetTop - el.scrollTop + el.clientTop);
        el = el.offsetParent;
    }

    return { left: x, top: y };
};
