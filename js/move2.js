function move2(){
    var oBox = document.getElementById('box');
    var aLi = oBox.children;
    var W = oBox.offsetWidth;
    var defaultW = 40;
    for(var i=1;i<aLi.length;i++){
        aLi[i].style.left = W-(aLi.length-i)*defaultW+'px';
    }
    for(var i=0;i<aLi.length;i++){
        (function(index){
            aLi[i].onmouseover=function(){
                for(var i=0;i<aLi.length;i++){
                    if(i<=index){
                        //aLi[i].style.left = i*defaultW+'px';
                        startMove(aLi[i],{left:i*defaultW},300,'ease-out');
                    }else{
                        //aLi[i].style.left = W-(aLi.length-i)*defaultW+'px';
                        startMove(aLi[i],{left:W-(aLi.length-i)*defaultW},300,'ease-out');
                    }
                }
            };
        })(i);
    }
}