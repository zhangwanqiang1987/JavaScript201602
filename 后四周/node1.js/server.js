var http=require("http");
var url=require("url");
//url.parse:把一个URL地址进行解析的（是个对象）还支持第二个参数true(这样的话问号后面传递的参数值都会被解析成对象键值对的方式来存储url.parse(request.url,true))
var fs=require("fs");
//使用node创建一个服务器环境：协议--HTTP 域名--localhost 端口号---1234
var server=http.createServer(function (request,response){
    //request:操作的是客户端给服务器端发送的请求信息
    //request.url:获取到的是客户端请求的url地址（包含问号后面传递进来的参数值）
    //response:操作的是服务器端范湖给客户端的信息
    //回调函数在客户端发送请求（http://localhost:1234）就可以把我们的回调匿名函数执行
    //console.log("好人一生平安");
    console.dir(arguments.length);//arguments.length=2
});
//设置一个监听的端口号：设置成功后执行后面的回调函数
server.listen(1234,function (){
    console.log("正在监听1234这个端口号");//如果是80的话，在搜索栏值接写localhost就行

});

//前端路由：服务器端接收到客户端的请求内容，根据请求 的不一样，我们返回给客户端不同的内容-->这个就是服务器的主要职责之一
//前端路由判断
if (pathname==="/index.html"){
    //客户端请求的地址是http

}