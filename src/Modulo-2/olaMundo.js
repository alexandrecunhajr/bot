
var restify=require("restify");
var builder=require("botbuilder");


var server=restify.createServer();
var port=process.env.port || process.env.PORT || 3978;
server.listen(port,function(){
    console.log('%s Aplicação está em execução na porta  %s',server.name,server.url);
});

var connector=new builder.ChatConnector({
    appId:'',
    appPassword:''
});

server.post('/api/messages',connector.listen());


var bot= new builder.UniversalBot(connector,function(session){
    console.log(session);
    session.send('Você dissessssssssssssssssssssssssssssssssssssssssss: %s',session.message.text);
});
