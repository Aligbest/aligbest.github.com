
function show(){
    var oUl = document.getElementById('btu1');
    var oLi = oUl.children;
    
    for (var i = 0; i < oLi.length; i++) {
        oLi[i].onmouseover = function(){
            this.style.opacity = "0.5";
        }
        oLi[i].onmouseout = function(){
            this.style.opacity = 1;
        }
    };

    var oBtul = document.getElementById('btul');
    var oBtul1 = document.getElementById('btul1');
    var oLi3 = document.getElementById('li3');
    var oBtul2 = document.getElementById('btul2');
    var oJs = document.getElementById('js');

    
  
    oBtul.onmouseover = function(){
        oBtul1.style.display = "block";
        oJs.style.opacity = '0.8';
        oJs.style.color = '#717171';
        oJs.style.fontSize = '20px';
    }
    oBtul.onmouseout = function(){
        oBtul1.style.display = "none";
        oJs.style.opacity = 1;
        oJs.style.color = '';
        oJs.style.fontSize = '';
    }

    oLi3.onmouseover = function(){
        oBtul2.style.display = "block";
    }
    oLi3.onmouseout = function(){
        oBtul2.style.display = "none";
    }
};
//自动换图
function show1(){
    var oBl = document.getElementById('bl');
    var oBr = document.getElementById('br');
    var oTp = document.getElementById('tp');
    var now = 0;
    var timer = null;
    oBr.onclick = function(){
        now++;
        oTp.innerHTML = '<img src="img/slide-'+now%3+'.jpg" alt="图1"/>';
    };
    oBl.onclick = function(){
        now--;
        if (now == -1) {
            now = 2;
        };
        oTp.innerHTML = '<img src="img/slide-'+now%3+'.jpg" alt="图1"/>';
    }
    timer = setInterval(function(){
            now++;
            oTp.innerHTML = '<img src="img/slide-'+now%3+'.jpg" alt="图'+now%3+'"/>';
        }, 2000);
    oTp.onmouseout = function(){
        timer = setInterval(function(){
            now++;
            oTp.innerHTML = '<img src="img/slide-'+now%3+'.jpg" alt="图'+now%3+'"/>';
        }, 2000)
    }
    oTp.onmouseover = function(){
        clearInterval(timer);
    }
}
