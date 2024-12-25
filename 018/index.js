//index.js

var http =require('http');
var fs = require('fs');

var server = http.createServer((req,res)=>{
    
    if(req.url == "/"){
        //1. aikhane agher tutorial er mothoi sob tik thakbe sudu method er moddhe otirikto akta prefix "Sync" add hobe. and ata ageher tutorial er method er callback j error parameter petam shetai return korbe.
        let error = fs.renameSync('demo.txt','demoNew.txt');
        if(error){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('file rename fail');
            res.end();
        }else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('Successfully file renamed');
            res.end();
        }
    }

});

server.listen(5050);
console.log('Server running successfully');