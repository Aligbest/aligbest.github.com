 function Carousel(){   
    var oCarousel = document.getElementById('carousel');
    var aLi = oCarousel.children[2].children;
    var oUl = oCarousel.children[3];
    var oNext = document.getElementById('next');
    var oPrev = document.getElementById('prev');
    var ready = true;
    var now = 0;

    oNext.style.display=oPrev.style.display='none';
    oUl.innerHTML = oUl.innerHTML + oUl.innerHTML;
    oUl.style.width = oUl.children.length * 485 + 'px';
    
    function time(){

        now++;
        startMove(oUl,{left:-now*485},{complete:function(){

            ready = true;
            if (now == 3) {
                oUl.style.left = 0;
                now = 0;
            };
        }})
        tab()
    }

    var timer = setInterval(time, 3000);

    oUl.onmouseover = oNext.onmouseover = oPrev.onmouseover =function(){

        clearInterval(timer);
        oNext.style.display=oPrev.style.display='block';
    };

    oUl.onmouseout = function(){
        timer = setInterval(time,3000);
        oNext.style.display=oPrev.style.display='none';
    }
    for (var i = 0; i < aLi.length; i++) {

        (function(index){

            aLi[i].onmouseover = function(){
                now = index;
                tab();
            }
        })(i);
    };

    function tab(){

        for (var i = 0; i < aLi.length; i++) {

            aLi[i].className = '';
        };
        if (now == 3) {

            aLi[0].className = 'active1';
        }else{

            aLi[now].className = 'active1';
        };

        startMove(oUl,{left:-now*485},{complete:function(){

            ready = true;
            if (now == 3) {
                oUl.style.left = 0;
                now = 0;
            };
        }})
    }

    oNext.onclick = function(){

        if (!ready) {return};
        ready = false;
        now++;
        tab();
    }

    oPrev.onclick = function(){

        if (!ready) {return};
        ready = false;
        if (now == 0) {

            oUl.style.left = -oUl.offsetWidth +'px';
            now = 2;
        }else{
            now--;
        }
        tab();
    }
}
