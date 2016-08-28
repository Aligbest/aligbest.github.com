//网页切换
function show2(){
    var aLi=document.querySelectorAll('.box .list li');
    var aBtn=document.querySelectorAll('.box input');

    
    var arrCname=[];//装class名
    for(var i=0; i<aLi.length;i++){
        arrCname.push(aLi[i].className);//添入class名
    }
        

    //下一个点击切换class名
    var bReady=true;
    aBtn[1].onclick=function(){
        if (!bReady) return;
        bReady=false
        arrCname.unshift(arrCname.pop());
        for(var i=0; i<aLi.length;i++){
            aLi[i].className=arrCname[i];  
            aLi[i].addEventListener('transitionend',function(){
                bReady=true;
            },false)
        }
    }; 


    //上一个点击切换class名
    var bReady1=true;
    aBtn[0].onclick=function(){
        if (!bReady1) return;
        bReady1=false
        arrCname.push(arrCname.shift());
        for(var i=0; i<aLi.length;i++){
            aLi[i].className=arrCname[i];
            aLi[i].addEventListener('transitionend',function(){
                bReady1=true;
            },false) 
        };  
    };   
};