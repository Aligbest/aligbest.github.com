    function nav(){
        var oNav = document.getElementById('nav');
        var oNchild = oNav.children;
        var oMove = document.querySelector('.move');
        
        //导航的弹性效果
        for (var i = 0; i < oNchild.length-1; i++) {
            var nowLeft = 300;//初始位置
            var l = 0;//记录Move的当前位置
            oNchild[i].onmouseover = function(){
                move(oMove,this.offsetLeft);
            }
            oNchild[i].onmouseout = function(){
                move(oMove,nowLeft);
            }
            oNchild[i].onclick = function(){
               clearInterval(oMove.timer);
               oMove.style.left = this.offsetLeft + 'px';
               l = this.offsetLeft;
               nowLeft = this.offsetLeft;
            }
        };

        //包装导航的弹性运动
        function move(obj,iTiarget){
            var speed = 0;
            clearInterval(obj.timer);
            obj.timer = setInterval(function(){
                speed += (iTiarget-obj.offsetLeft)/6;//加速度
                speed *= 0.7;
                l = l + speed; //当前位置储存
                obj.style.left = l + 'px';
                if (iTiarget==obj.offsetLeft && Math.abs(speed) < 1) {
                    clearInterval(obj.timer);
                };

            }, 30)
        }
    }