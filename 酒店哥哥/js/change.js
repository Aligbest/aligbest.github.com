/*免费帮你找会场/自己找会场   选项切换*/
function Change(){
    var oT1 = document.getElementById('t1');
    var oT2 = document.getElementById('t2');
    var oList1 = document.getElementById('list1');
    var oList2 = document.getElementById('list2');

    oT1.onclick=function(){

        this.className = 't1 section_on';
        oList1.style.display = 'block';
        oT2.className = 't2';
        oList2.style.display = 'none';
    }

    oT2.onclick=function(){
        
        this.className = 't2 section_on';
        oList2.style.display = 'block';
        oT1.className = 't1';
        oList1.style.display = 'none';
    }
}
