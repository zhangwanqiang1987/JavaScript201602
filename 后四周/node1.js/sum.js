//function queryTotal(){
//    console.log(1+1);
//}
//queryTotal();
function add(){
    var total=null;
    for(var i= 0,len=arguments.length;i<len;i++){
        var cur=Number(arguments[i]);
        if(!isNaN(cur)){
         total+=cur ;
        }
    }
    console.log(total);
}
function remove(){
    console.log("我是中国人");
}
//module.exports.add=add;//在当前模块中把add这个方法暴露出来这样的话以后其他模块只要引入sum模块就可以调取add方法了等价于我们js闭包中的return的方法了
module.exports={
    add:add,
    remove:remove

};


var module={};
module.exports=(function (){
    function add(){

    }
    function remove(){

    }
    return{
        add:add,
        remove:remove
    }
})();
