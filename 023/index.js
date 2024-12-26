//index.js

var http =require('http');
var fs = require('fs');

var server = http.createServer((req,res)=>{
    if(req.url==='/'){
        let data = fs.readFileSync('home.html','utf-8'); //aikhane ami kon file read korbe shetar sathe character set 'utf-8' diye dilam. 'utf-8' jodi na dei kon file k method ta read korce sheta local host a bujthe parle o real server a giye bujte parbe na.
        res.end(data); 
    }else if(req.url==='/contact'){
        let data = fs.readFileSync('contact.html','utf-8'); 
        res.end(data); 
    }else if(req.url==='/about'){
        let data = fs.readFileSync('about.html','utf-8'); 
        res.end(data);      
    }else if(req.url==='/terms'){
        let data = fs.readFileSync('terms.html','utf-8'); 
        res.end(data);    
    }
});

server.listen(5050);
console.log('Server running successfully');