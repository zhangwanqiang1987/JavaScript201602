function on(ele,type,handler){
	"selfdragstart"
	if(/^self/.test(type)){
		//负责登记保存
		if(!ele["rose"+type]){
			ele["rose"+type]=[]
		}
		var a=ele["rose"+type];
		for(var i=0;i<a.length;i++){
			if(a[i]==handler)return;	
		}
		a.push(handler);
		return;	
	}
	if(ele.addEventListener){
		ele.addEventListener(type,handler,false);
		return;	
	}
	if(!ele["aEvent"+type]){
		//因为这个判断条件，在相同的事件类型上，只会成立一次。这样就避免了fire方法被重复绑定的问题了
		ele.attachEvent("on"+type,function(){fire.call(ele)});	
		ele["aEvent"+type]=[];
	}
	var a=ele["aEvent"+type];
	for(var i=0;i<a.length;i++){
		if(a[i]==handler)return;	
	}
	
	a.push(handler);
}

function fire(){
	var e=window.event;
	var type=e.type;
	
	var a=this["aEvent"+type];
	if(!e.target){
		e.target=e.srcElement;
		e.pageX=(document.documentElement.scrollLeft||document.body.scrollLeft)+e.clientX;
		e.pageY=(document.documentElement.scrollTop||document.body.scrollTop)+e.clientY;
		e.stopPropagation=function(){ e.cancelBubble=true;}
		e.preventDefault=function(){e.returnValue=false;}
		
	}
	if(a){
		for(var i=0;i<a.length;i++){
			if(typeof a[i]=="function"){
				a[i].call(this,e);	
			}else{
				a.splice(i,1);
				i--;
			}
		}
	}
}


//负责自定义事件的发布（通知）:遍历执行on保存下来的那些方法
function selfFire(selfType,e){//selfType事件类型,e是系统的事件
	var a=this["rose"+selfType];
	if(a){
		for(var i=0;i<a.length;i++){
			a[i].call(this,e);	
		}
	}
}

function off(ele,type,handler){
	if(ele.removeEventListener){
		ele.removeEventListener(type,handler,false);
		return;
	}	
	var a=ele["aEvent"+type];
	if(a){
		for(var i=0;i<a.length;i++){
			if(a[i]==handler){
				//a.splice(i,1);
				a[i]=null//
				return;	
			}
		}
	}
	
}

function processThis(fn,obj){
	return function(e){fn.call(obj,e)}
}