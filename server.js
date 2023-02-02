var express=require("express");
var path=require("path");
var app=express();

app.use(express.static(path.join(__dirname,'public')));

app.get("/",function(request,response){

    response.sendFile(path.join(__dirname,"/index.html"));

});

app.get("/hello",function(request,response){

        var person={
                first_name:"Monika",
                last_name:"Jadhav",
                age:30

        }
        response.send();
});

//var server=app.listen(8000,function(){ Console.log("Server started at port 8000");});


var server = app.listen(8000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://localhost:8000", host, port)
});