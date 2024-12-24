//index.js

var http =require('http');
var fs = require('fs');

var server = http.createServer((req,res)=>{
    
    if(req.url == "/"){
        //1. Amra aghei jenechi j synchronous poddhotite kono callback functionn thake na. 
        let mydata = fs.readFileSync('home.html');// 2. method ta home.html file k read kore file tar puro content k return kore dei.
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(mydata);
        res.end();
    }

});

server.listen(4040);
console.log('Server running successfully');