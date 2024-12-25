//index.js

var http =require('http');
var fs = require('fs');

var server = http.createServer((req,res)=>{
    
    if(req.url == "/"){
        //1. file exist korce kina check korer jonno fs module tekhe fs.existsSync() method k  call korbo.Then J file ta exist kore kina check korte cacci shetar file path ta diye dibo as parameter hishebe.
        //2. ai method file jodi exist kore tahole true retrun korbe and na korle fasle return korbe. 
        let result = fs.existsSync('demo.txt');
        if(result){
            res.end('File exist');
        }else{
            res.end('File not exist');
        }
    }
});

server.listen(5050);
console.log('Server running successfully');