    function data(){
        //JS数据条；
        var a = 0;
        var timer = setInterval(function(){
            var oD1 = document.querySelector('.data1');
            a += 10;
            if (a > 820) {
                clearInterval(timer)
            };
            oD1.style.width=a+'px';
            oD1.innerHTML=a/10+8+'%';
        }, 30)


        //CSS3数据条；
        var b = 0;
        var timer1 = setInterval(function(){
            var oD2 = document.querySelector('.data2');
            b += 10;
            if (b > 850) {
                clearInterval(timer1)
            };
            oD2.style.width = b + 'px';
            oD2.innerHTML = b/10+8 + '%';
        }, 30)

        //HTML数据条；
        var c = 0;
        var timer2 = setInterval(function(){
            var oD3 = document.querySelector('.data3');
            c += 10;
            if (c > 800) {
                clearInterval(timer2)
            };
            oD3.style.width = c + 'px';
            oD3.innerHTML = c / 10+7 + '%';
        }, 30)
    }