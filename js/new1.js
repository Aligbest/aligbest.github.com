function show(){
        var oBox1 = document.querySelector('.box1');
        var oBox2 = document.querySelector('.box2');
        var oMotto = document.querySelector('.motto');
        var oPhoto = document.querySelector('.photo');
        var aLi = oMotto.children;
        var oSjx1 = document.querySelector('.sjx');
        var oSjx2 = document.querySelector('.sjx2');
        var oA = document.querySelector('.totop');
        var oArticle = document.querySelector('.article');
        var oAlig = document.querySelector('.alig');

        oBox1.onmouseover=function(){
            for (var i = 0; i < aLi.length; i++) {
                aLi[i].style.opacity=1;
                oA.style.opacity = 0;
                aLi[i].style.WebkitTransform='rotateX(0deg)';
            };
            oSjx1.style.zIndex = 2;
        }
        oBox1.onmouseout=function(){
            oSjx1.style.zIndex = 0;
        }

        oBox2.onmouseover = function(){
            oA.style.opacity = oPhoto.style.opacity = 1;
            oSjx2.style.zIndex = 1;
            oAlig.style.WebkitTransform = 'rotateX(0deg)';
        }
        oBox2.onmouseout = function(){
            oSjx2.style.zIndex = -1;
            oPhoto.style.opacity = 1;
        }

        var str = " 　　一天，有位哲学家带弟子出行。途中，他问弟子：“有一种东西，跑得比光速还快，瞬间能穿越银河系，到达遥远的地方……这是什么？”弟子们争着回答：“我知道，我知道，是思想！”哲学家微笑着点点头：“那么，有另外一种东西，跑得比乌龟慢，当春花怒放时，它还停留在冬天，当头发雪白时，它仍然是个小孩子的模样，那又是什么？”弟子不知如何回答。哲学家继续说：“还有，不前进也不后退，没出生也不死亡，始终漂浮在一个定点。谁能告诉我，这又是什么？”弟子更加茫然，面面相觑。“答案都是思想！它们是思想的三种表现，换个角度来看，也可比喻成三种人生。”望着聚精会神的弟子，哲学家解释说：“第一种是积极奋斗的人生。当一个人不断力争上游，对明天永远充满希望和信心，这种人的心灵不受时空限制，他就好比一支射出的箭，总有一天会超越光速，驾驭万物之上。”“第二种是懒惰的人生。他永远落在别人的屁股后面，捡拾他人丢弃的东西，这种人注定被遗忘。”“第三种是醉生梦死的人生。当一个人放弃努力、苟且偷生时，他的命运是冰封的，没有任何机会来敲门，不快乐也无所谓痛苦。这是一个注定悲哀的人，像水母的空壳漂浮于海中，不存在于现实世界，也不在梦境里……”弟子大悟。播种怎样的人生态度，将收获怎样的生命高度和深度。人的一生中，要紧处只有几步，如何使自己的生命更有意义，态度至关重要。"

        for (var i = 0; i < str.length; i++) {
            var oSpan = document.createElement('span');
            oSpan.innerHTML = str.charAt(i);
            oArticle.appendChild(oSpan);
        };

        var aSpan = oArticle.children;
        var n = 0;
        var timer = setInterval(function(){
            n++;
            aSpan[n].style.textShadow = '0 0 0 #32ac97';
            if (n == str.length-1) {
                clearInterval(timer)
            }
        },10)
}