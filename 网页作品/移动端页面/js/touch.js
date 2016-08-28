function touch(){
    window.addEventListener('DOMContentLoaded', function(){
            var oUl = document.querySelector('.bg ul');
            var aLi = oUl.children;
            var aBtn = document.querySelectorAll('.bg a');

            var x = -aLi[0].offsetWidth;
            var iNow = 1;//用来判断定位
            var iMax = 20;//超过这个值滑动

            var bReady = true;
            oUl.style.WebkitTransition='translateX(-14deg)';
            oUl.addEventListener('touchstart',function(ev){
                if (!bReady)return;
                bReady = false;
                oUl.style.WebkitTransition = 'none';

                var downX = ev.targetTouches[0].clientX;
                var disX = downX - x;
                function fnMove(ev){
                    x = ev.targetTouches[0].clientX-disX;
                    oUl.style.WebkitTransition = 'translateX('+x+'px)';
                }

                function fnEnd(ev){
                    var upX = ev.changedTouches[0].clientX;

                    oUl.removeEventListener('touchmove', fnMove, false);
                    oUl.removeEventListener('touchend',fnEnd,false);

                    oUl.style.WebkitTransition='0.3s all ease';
                    if (Math.abs(downX-upX) > iMax) {
                        if (downX > upX) {
                            iNow++;
                            if (iNow == aLi.length) {
                                iNow = 0;
                            };
                        }else{
                            iNow--;
                            if (iNow == -1) {
                                iNow = aLi.length - 1;
                            };
                        }
                    };
                    x = -aLi[0].offsetWidth * iNow;
                    oUl.style.WebkitTransform='translateX('+x+'px)';

                    function MoveEnd(){
                        oUl.removeEventListener('transitionend',MoveEnd,false)

                        oUl.style.WebkitTransition='none';
                        

                        if (iNow == aLi.length - 1) {
                            iNow = 1;
                        };
                        if (iNow == 0) {
                            iNow = aLi.length - 2;
                        };

                        x = -aLi[0].offsetWidth * iNow;
                        oUl.style.WebkitTransform = 'translateX('+x+'px)';
                        bReady = true;
                    }

                    oUl.addEventListener('transitionend',MoveEnd,false)
                }

                oUl.addEventListener('touchmove',fnMove,false);
                oUl.addEventListener('touchend',fnEnd,false);
            },false)
        }, false)
}