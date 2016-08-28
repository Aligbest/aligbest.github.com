function zft(){
    var oBox = document.getElementById('box');

            var x = 0;
            var y = 0;
            var iSpeedX = 0;
            var iSpeedY = 0;
            var lastX = 0;
            var lastY = 0;
            var timer = null;
            document.onmousedown = function (ev) {
                clearInterval(timer);
                var disX = ev.pageX - y;
                var disY = ev.pageY - x;
                document.onmousemove = function (ev) {
                    x = ev.pageY - disY;
                    y = ev.pageX - disX;
                    oBox.style.WebkitTransform = 'perspective(800px) rotateX(' + -x / 3 + 'deg) rotateY(' + y / 3 + 'deg)';
                    oBox.style.MozTransform = 'perspective(800px) rotateX(' + -x / 3 + 'deg) rotateY(' + y / 3 + 'deg)';
                    oBox.style.msTransform = 'perspective(800px) rotateX(' + -x / 3 + 'deg) rotateY(' + y / 3 + 'deg)';
                    oBox.style.OTransform = 'perspective(800px) rotateX(' + -x / 3 + 'deg) rotateY(' + y / 3 + 'deg)';
                    oBox.style.transform = 'perspective(800px) rotateX(' + -x / 3 + 'deg) rotateY(' + y / 3 + 'deg)';
                    iSpeedX = ev.pageX - lastX;
                    iSpeedY = ev.pageY - lastY;
                    lastX = ev.pageX;
                    lastY = ev.pageY;
                };
                document.onmouseup = function () {
                    document.onmousemove = null;
                    document.onmouseup = null;
                    clearInterval(timer);
                    timer = setInterval(function () {
                        iSpeedX *= 0.95;
                        iSpeedY *= 0.95;
                        x += iSpeedY;
                        y += iSpeedX;
                        oBox.style.WebkitTransform = 'perspective(800px) rotateX(' + -x / 3 + 'deg) rotateY(' + y / 3 + 'deg)';
                        oBox.style.MozTransform = 'perspective(800px) rotateX(' + -x / 3 + 'deg) rotateY(' + y / 3 + 'deg)';
                        oBox.style.msTransform = 'perspective(800px) rotateX(' + -x / 3 + 'deg) rotateY(' + y / 3 + 'deg)';
                        oBox.style.OTransform = 'perspective(800px) rotateX(' + -x / 3 + 'deg) rotateY(' + y / 3 + 'deg)';
                        oBox.style.transform = 'perspective(800px) rotateX(' + -x / 3 + 'deg) rotateY(' + y / 3 + 'deg)';
                        if (Math.abs(iSpeedX) < 1)iSpeedX = 0;
                        if (Math.abs(iSpeedY) < 1)iSpeedY = 0;
                        if (iSpeedX == 0 && iSpeedY == 0) {
                            clearInterval(timer);
                        }
                    }, 30);
                };
                return false;
            };
}