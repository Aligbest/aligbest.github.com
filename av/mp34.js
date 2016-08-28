//视频
function vIdeo(){
        var aBtn=document.querySelectorAll('.box2 input');
        var oV=document.querySelector('.box2 video');
        var oSpan=document.querySelector('.box2 .loadingbar .tip');
        
        //播放
        aBtn[0].onclick=function(){
            oV.play();
        };
        
        //暂停
        aBtn[1].onclick=function(){
            oV.pause();
        };
        
        //快进
        aBtn[2].onclick=function(){
            oV.currentTime++;
        };
        
        //快退
        aBtn[3].onclick=function(){
            oV.currentTime--;
        };
        
        //音量+
        aBtn[4].onclick=function(){
            oV.volume+=0.1;
        };
        
        //音量-
        aBtn[5].onclick=function(){
            oV.volume-=0.1;
        };
        
        //静音
        var bSign=true;
        aBtn[6].onclick=function(){
            if(bSign){
                this.value='取消静音';
                oV.muted=true;
            }else{
                this.value='静音';
                oV.muted=false;
            }
            bSign=!bSign;
        };
        
        //当视频播放时间发生变化的时候 （播放视频时）
        oV.ontimeupdate=function(){
            var scale=oV.currentTime/oV.duration;
            
            oSpan.style.width=scale*100+'%';
                
        };
        
        //当视频播放完毕时
        oV.onended=function(){
            alert('播放完毕');  
        };
        
        
        aBtn[7].onclick=function(){
            oV.currentTime=0;
            oV.pause();
        };
        
        aBtn[8].onclick=function(){
            oV.webkitRequestFullScreen();
        };      
};
//音频
function aUdio(){
    var aLi=document.querySelectorAll('li');
        var oA=document.querySelector('#oA');
        var aBtn=document.querySelectorAll('input');
        
        //定义播放状态
        var playState=1;
        
        //定义当前是第几首歌
        var iNow=0;
        
        //切换播放状态
        for(var i=0; i<aBtn.length;i++){
            (function(index){
                aBtn[index].onclick=function(){
                    playState=index;    
                };  
            })(i);
        }
        
        //歌曲数组
        var songArr=[
            'Generate',
            'Calvin Harris-Summer',
            'BEYOED-谁来主宰',
            '王菲 - 流年',
            'BEYOED-无声的告别'
        ];
        
        //给每一个li添加一个（双击）点击事件
        for(var i=0; i<aLi.length;i++){
            aLi[i].index=i;
            aLi[i].ondblclick=function(){
                //切换当前播放第几首歌
                iNow=this.index;
                //执行播放音乐任务
                play();
            };
        }
        
        
        function play(){
            //切换li的样式
            for(var i=0; i<aLi.length;i++){
                aLi[i].classList.remove('now');
            }
            aLi[iNow].classList.add('now');
            
            oA.src='mp3/'+songArr[iNow]+'.mp3';
            oA.play();
        }
        
        //监测音频是否播放完毕
        oA.onended=function(){
            //alert('播放完毕');
            
            //alert(playState); 
            switch(playState){
                case 0:
                    play();
                break;
                case 1:
                    iNow++;
                    if(iNow<aLi.length){
                        play();     
                    }
                break;
                case 2:
                    iNow=rnd(0,aLi.length);
                    play();     
                break;
                case 3:
                    iNow++;
                    iNow%=aLi.length;
                    play();     
                break;  
            }
            
        };
}