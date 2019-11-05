(function () {
    'use strict';

    var W = window.innerWidth;
    var wrapDiv = document.createElement('div');
    wrapDiv.id = 'page-curtain';
    var wrapDivStyle = {
        width: '50vw',
        height: '100vh',
        backgroundColor: '#efefef',
        zIndex: 1000,
        position: 'absolute',
        right: 0,
        top: 0,
    };
    Object.assign(wrapDiv.style, wrapDivStyle);
    var tong = document.createElement('div');
    var tongStyle = {
        width: '5px',
        height: '100vh',
        backgroundColor: '#dcdcdc',
        zIndex: 1001,
        position: 'absolute',
        left: 0,
        top: 0,
        cursor: 'col-resize',
        boxShadow: '1px 0px 1px #00000040'
    };
    Object.assign(tong.style, tongStyle);
    wrapDiv.append(tong);
    var isDragging = false;
    document.addEventListener('mouseup', function () {
        isDragging = false;
    });
    document.addEventListener('mousemove', function (e) {
        var x = e.x;
        var w = W - x;
        if (isDragging && x > 20 && w > 20) {
            wrapDiv.style.width = w + 'px';
        }
    });
    tong.addEventListener('mousedown', function () {
        isDragging = true;
    });
    document.body.append(wrapDiv);

}());
