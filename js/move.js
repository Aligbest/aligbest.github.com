/*运动框架*/
function getStyle(obj,sName){
    return (obj.currentStyle||getComputedStyle(obj,false))[sName];
}
function startMove(obj,json,duration,easing){
    var start = {};
    var dis = {};
    for(var name in json){
        start[name] = parseFloat(getStyle(obj,name));
        dis[name] = json[name] - start[name];
    }
    var count = Math.floor(duration/30);
    var n = 0;
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        n++;
        for(var name in json){
            switch(easing){
                case 'linear':
                    var cur = start[name]+dis[name]*n/count;
                    break;
                case 'ease-in':
                    var a = n/count;
                    var cur = start[name]+dis[name]*Math.pow(a,3);
                    break;
                case 'ease-out':
                    var a = 1-n/count;
                    var cur = start[name]+dis[name]*(1-Math.pow(a,3));
                    break;
            }
            
            
            if(name=='opacity'){
                obj.style.opacity = cur;
                obj.style.filter = 'alpha(opacity:'+cur*100+')';
            }else{
                obj.style[name] = cur+'px';
            }
        }
        if(n==count){
            clearInterval(obj.timer);
        }
    },30);
}
