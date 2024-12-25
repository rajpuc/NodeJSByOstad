//index.js

var http =require('http');
var fs = require('fs');

var server = http.createServer((req,res)=>{
    
    if(req.url == "/"){
        //1. Asynchronous wayte file delete er jonno amra first a fs module teke fs.unlink() method k use korbo.Then parameter hishbe j file k delete korbo tar path diye dibo, and jehetu ata Asynchronous way te hocce tai amader akta callback dite hobe. and callback er majhe amra error parameter ta peye jabo:
        fs.unlink('demo.txt',(error)=>{
            if(error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write('file delete fail');
                res.end();
            }else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write('Successfully file deleted');
                res.end();
            }
        })

        
    }

});

server.listen(5050);
console.log('Server running successfully');