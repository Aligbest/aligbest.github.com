/*时间*/
function time(){
    var oTime=document.querySelector('.time');
    //开始获取日期时间
    var oDate=new Date();
    var iY=oDate.getFullYear();
    var iM=oDate.getMonth()+1;
    var iD=oDate.getDate();
    var iH=oDate.getHours();
    var iN=oDate.getMinutes();
    var iS=oDate.getSeconds();

    /* 0 自动补位*/
    function tm(n){
        return n<10 ? "0"+n : ""+n;
    };

    //实时时间
    oTime.innerHTML=iY+' 年 '+iM+' 月 '+iD+' 日 '+tm(iH)+':'+tm(iN)+':'+tm(iS);

    //鼠标滑入样式改变
    oTime.onmouseover=function(){
        this.style.transform='perspective(800px) rotateX(-360deg) translateZ(100px)';
        this.style.color='black';
    }

    //鼠标离开恢复默认样式
    oTime.onmouseout=function(){
        this.style.transform='perspective(0) rotateX(0deg) translateZ(0px)';
        this.style.color='white';
    }   
}