//options	==	url,data,type,timeout,success,error
function ajax(options){
	//1.整理options
	options = options || {};
	//if(!options.url) return;
	options.data =	options.data || {};
	options.timeout = options.timeout || 0;
	options.type = options.type || 'get';
	
	
	
	//2.整理data
	options.data.t=Math.random();
	var arr=[];
	for(var key in options.data){
		arr.push(key+'='+encodeURIComponent(options.data[key]));	
	}
	var str = arr.join('&');
	
	//准备ajax对象
	if(window.XMLHttpRequest){
		var oAjax=new XMLHttpRequest();
	}else{
		var oAjax=new ActiveXObject('Microsoft.XMLHTTP');
	}
	//判断了提交方式
	if(options.type=='get'){
		oAjax.open('get',options.url+'?'+str,true);//连接
		oAjax.send();//发送
	}else{
		oAjax.open('post',options.url,true);//连接
		//设置请求头信息
		oAjax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');	
		oAjax.send(str);//发送
	}
	
	
	oAjax.onreadystatechange=function(){
		if(oAjax.readyState==4){
			clearInterval(timer);
			if(oAjax.status>=200 && oAjax.status<300 || oAjax.status==304){
				options.success && options.success(oAjax.responseText);
			}else{
				options.error && options.error(oAjax.status);	
			}
		}
	};
	if(options.timeout){
		var timer=setTimeout(function(){
			alert('超时了');
			oAjax.abort();	//中断ajax请求
		},options.timeout);
	}
	
	
};