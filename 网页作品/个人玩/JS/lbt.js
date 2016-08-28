window.onload = function(){
    var oBox = document.getElementById('bt2u')
    var oBtn = document.getElementById('bl')
    var aDiv = oBox.children
    var ready = true

    var row = 4
    var col = 7
    var now = 0

    for (var r = 0; r < row; r++) {
         for (var c = 0; c < col; c++) {
            var oDiv = document.createElement('div')
            oDiv.style.width = oBox.offsetWidth/col + 'px'
            oDiv.style.height = oBox.offsetHeight/row + 'px'
            oBox.appendChild(oDiv)
            oDiv.style.backgroundPosition = -c * oDiv.offsetWidth + 'px' + -r*oDiv.offsetHeight + 'px';
            oDiv.c = c
            oDiv.r = r
       
         };      
    };

    oBtn.onclick = function(){
        if (!ready) return;
        ready = false
        for (var i = 0; i < aDiv.length; i++) {
            (function(index){
                setTimeout(function(){
                    startMove(aDiv[index],{opacity:0},{complete:function(){
                        if (index == aDiv.length-1) {
                            now++
                            now %= 3

                            for (var i = 0; i < aDiv.length; i++) {
                                aDiv[i].style.backgroundImage = 'url(slide-'+now+'.jpg)';
                                aDiv[i].style.opacity = 1
                            };
                            oBox.style.backgroundImage = 'url(slide-'+(now+1)%3+'.jpg)'
                            ready = true
                        };

                    }})
                    
                },(aDiv[i].c + aDiv[i].r) * 100)
            })(i)                           
        };
    }
}