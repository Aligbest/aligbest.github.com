function show(){
    var oUl=document.querySelector('#ul1');
        
        var N=11;//创建li个数
        for(var i=0; i<N;i++){
            var oLi=document.createElement('li');
            oLi.style.backgroundImage='url(img3/'+(i+1)+'.jpg)';
            oUl.appendChild(oLi);
            
            oLi.style.WebkitTransition='0.5s all ease '+200*(N-i)+'ms';
            
            //变的比过渡还快 - 让它慢一些执行
            (function(oLi,i){
                setTimeout(function(){
                    oLi.style.WebkitTransform='rotateY('+360/N*i+'deg) translateZ(400px)';  
                },0);   
            })(oLi,i);
        }
        
        var aLi=oUl.children;
        var y=0;
        var x=45;
        var speedX=0;
        var speedY=0;
        var lastX=0;
        var lastY=0;
        var timer=null;
        for (var i = 0; i < aLi.length; i++) {
            aLi[i].style.backgroundSize = '100% 100%';
            aLi[i].style.background = 'url(img/3D'+i+'.png)';

            //设置aLi内容
            aLi[0].innerHTML = '<a href="av/av.html">(视、音播放器)访问</a>';
            aLi[1].innerHTML = '<a href="钟表/zb.html">(钟表)访问</a>';
            aLi[2].innerHTML = '<a href="zft.html">(投骰子)访问</a>';
            aLi[3].innerHTML = '<a href="应用商城拖拽/tz.html">(应用商城拖拽)访问</a>';
            aLi[4].innerHTML = '<a href="pbl.html">(瀑布流)访问</a>';
            aLi[5].innerHTML = '<a href="jsonp/baidu.html">(百度搜索)访问</a>';
            aLi[6].innerHTML = '<a href="jsonp/phone.html">(手机信息查询)访问</a>';
            aLi[7].innerHTML = '<a href="放大镜/Magnifier.html">(放大镜)访问</a>';
            aLi[8].innerHTML = '<a href="email.html">(邮箱校验)访问</a>';
            aLi[9].innerHTML = '<a href="Drag.html">(拖拽回放)访问</a>';
            aLi[10].innerHTML = '<a href="pb.html">(屏保)访问</a>';
        };
        
        //3D环可拖拽设置
        document.onmousedown=function(ev){
            
            clearInterval(timer);
            var disX=ev.clientX-y;
            var disY=ev.clientY-x;
            document.onmousemove=function(ev){
                y=ev.clientX-disX;
                x=ev.clientY-disY;
                change(y/3,x/3);
                
                speedX=ev.clientX-lastX;
                speedY=ev.clientY-lastY;
                
                lastX=ev.clientX;
                lastY=ev.clientY;
            };
            document.onmouseup=function(){
                document.onmouseup=null;
                document.onmousemove=null;  
                
                timer=setInterval(function(){
                    //设置摩擦力
                    speedX*=0.95;
                    speedY*=0.95;
                    y+=speedX;
                    x+=speedY;
                    
                    change(y/3,x/3);    
                    
                    if(Math.abs(speedX)<=1){
                        clearInterval(timer);                      
                    }
                    
                },30);
            
            };
            return false;
        };
        
        
        function change(y,x){
            for(var i=0; i<aLi.length;i++){
                aLi[i].style.WebkitTransition='none';
                aLi[i].style.WebkitTransform='rotateY('+(360/N*i+y)+'deg) translateZ(400px)';
                
                oUl.style.WebkitTransform='perspective(1200px) rotateX('+-x+'deg)';
                
                var scale=Math.abs(Math.abs((360/N*i+y)%360)-180)/180;
                
                scale<0.4&&(scale=0.4);
                
                aLi[i].style.opacity=scale;
            }   
        }
}