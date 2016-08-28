function change(){
    var oBg = document.querySelector('.hs');
            var aHs = oBg.children;
            var oB = document.querySelector('#all');

            //换肤效果;
            aHs[0].onclick = function(){
                oB.style.background='url(img/module3.jpg)';
                oB.style.backgroundSize = '100% 100%';
            }

            aHs[1].onclick = function(){
                oB.style.background='url(img/module1.jpg) no-repeat';
                oB.style.backgroundSize = '100% 100%';
            }

            aHs[2].onclick = function(){
                oB.style.background='url(img/module2.jpg) no-repeat';
                oB.style.backgroundSize = '100% 100%';
            }

            aHs[3].onclick = function(){
                oB.style.background='url(img/module5.jpg) no-repeat';
                oB.style.backgroundSize = '100% 100%';
            }

            aHs[4].onclick = function(){
                oBg.style.WebkitTransform = 'translateX(1px)';
                aHs[4].style.display = 'none';
                aHs[5].style.display = 'block';
            }

            aHs[5].onclick = function(){
                oBg.style.WebkitTransform = 'translateX(41px)';
                aHs[5].style.display = 'none';
                aHs[4].style.display = 'block';
            }

            //划入移除效果
            aHs[4].onmouseover = aHs[5].onmouseover = function(){
                this.style.opacity = '0.7';
                this.style.color = 'white';
            }
            aHs[4].onmouseout = aHs[5].onmouseout = function(){
                this.style.opacity = '1';
                this.style.color = 'black';
            }
}