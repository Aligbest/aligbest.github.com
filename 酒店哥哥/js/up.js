function Up(){
    var oNav1 = document.getElementById('nav');
    var oNav2 = document.getElementById('nav-2')

    var navT = oNav1.offsetTop;

    window.onscroll = function(){
        
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        if (navT < scrollTop) {
            oNav2.style.position = 'fixed';
            oNav2.style.top = '0';
            oNav2.style.left = '0';
            oNav2.style.display = 'block';
        }else{
            oNav2.style.position = " ";
            oNav2.style.display = 'none';
        }
    }
}