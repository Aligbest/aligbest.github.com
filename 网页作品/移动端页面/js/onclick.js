function show(){
    var aBtn = document.querySelectorAll('.bg a');
    var oUl = document.querySelector('.bg ul')
    var aLi = oUl.children;

    var a = -14;
    aBtn[0].onclick = function(){
        a += 14;
        if(a == 14){
            a = -28;
        }
        oUl.style.WebkitTransform = 'translateX('+a+'rem)';
    }

    
    aBtn[1].onclick = function(){
        a -= 14;
        if (a < -28) {
            a = 0;
        };
        oUl.style.WebkitTransform = 'translateX('+a+'rem)';
    }
}