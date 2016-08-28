function jsonp(options){
	//0.整理options
	options = options || {};
	if(!options.url) return;
	options.data = options.data || {};
	options.cbKey = options.cbKey || 'cb';
	options.timeout = options.timeout || 0;
	
	//1.做一个外面的全局函数,名字随机
	var cbValue='jsonp'+Math.random();
	cbValue=cbValue.replace('.','');
	window[cbValue] = function(json){
		options.success && options.success(json);
		
		clearTimeout(timer);
		document.getElementsByTagName('head')[0].removeChild(oSc);
		window[cbValue]=null;//性能考虑
	};
	
	//2.整理data
	options.data[options.cbKey]=cbValue;	//外面传了wd,没有传cb,这里指定cb=随机的cbValue
	var arr=[];
	for(var key in options.data){
		arr.push(key+'='+encodeURIComponent(options.data[key]));	
	}
	options.url=options.url+'?'+arr.join('&');
	
	//3.创建script标签 
	var oSc=document.createElement('script');
	oSc.src=options.url;
	document.getElementsByTagName('head')[0].appendChild(oSc);
	//4.超时
	if(options.timeout){
		var timer=setTimeout(function(){
			options.error && options.error();	
			window[cbValue]=function(){};
			document.getElementsByTagName('head')[0].removeChild(oSc);
		},options.timeout);	
	}
}