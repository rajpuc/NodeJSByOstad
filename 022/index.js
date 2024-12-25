//index.js

var http =require('http');
var fs = require('fs');

var server = http.createServer((req,res)=>{
    
    if(req.url == "/"){
        //1. file exist korce kina check korer jonno fs module tekhe fs.exists() method k  call korbo.Then J file ta exist kore kina check korte cacci shetar file path ta diye dibo as parameter hishebe. Er por ami akta callback diye dibo as it is asynchronous way.
        //2. ai callback function a ami akta parameter pabo jtate file jodi exist kore tahole tar value true hobe and exist na korle fasle hobe. 
        fs.exists('demo.txt',(result)=>{
            if(result){
                res.end('File exist');
            }else{
                res.end('File not exist');
            }
        });

    }
});

server.listen(5050);
console.log('Server running successfully');