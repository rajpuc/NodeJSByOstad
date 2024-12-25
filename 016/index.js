//index.js

var http =require('http');
var fs = require('fs');

var server = http.createServer((req,res)=>{
    
    if(req.url == "/"){
        //1. Toh synchronous poddhotite file write korer jonno amra writeFileSync method ta use korbo:
        let error = fs.writeFileSync('demoSync.txt','Welcome to File sync')//2. Er agher lecture a amra j async function ta use korecilam shetar callback function er parameter hishebe a amra j error ta peyecilam aikhaneo ai method ta shei value tai return korbe jokon tar execution complete hoye jabe.Then baki kaj agher tutorial er fs.writeFile() methoder callback function a ja korecilam shetai:
        if(error){
           
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('file write fail');
            res.end();
        }else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('Successfully written on file');
            res.end();
        }
    }

});

server.listen(5050);
console.log('Server running successfully');