'use strict'
function getStyle(obj,sName){
	return (obj.currentStyle||getComputedStyle(obj,false))[sName];
}
function startMove(obj,sName,iTarget,duration){
	//1.opacity是小数。不能用parseInt。用parseFloat
	var start = parseFloat(getStyle(obj,sName));
	var dis = iTarget-start;
	var count = Math.floor(duration/30);
	var n = 0;
	
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		n++;
		//2.opacity不用设置px，要设置两个样式
		var cur = start+dis*n/count;
		if(sName=='opacity'){
			obj.style.opacity = cur;
			obj.style.filter = 'alpha(opacity:'+(cur*100)+')';
		}else{
			obj.style[sName] = cur+'px';
		}
		if(n==count){
			clearInterval(obj.timer);
		}
	},30);
}







