//index.js

var http =require('http');
var fs = require('fs');

var server = http.createServer((req,res)=>{
    
    if(req.url == "/"){
        // 1.Toh file rename er jonno amra fs module thekhe fs.rename() method k use korbo.
        // 4.Erpor filer name ta ami fs.rename() function er first parameter hishebe diye dilam.Er por porer parameter hishebe ami fiel er notun name diye dilam.Then finally akta callback diye dilam.
        fs.rename('demo.txt','demoNew.txt',(error)=>{
            if(error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write('file rename fail');
                res.end();
            }else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write('Successfully file renamed');
                res.end();
            }
        })//2. method 3ta parameter nei.1st ta file tar old path, 2nd ta file tar new path and 3rd ta callback function.
        

       
    }

});

server.listen(5050);
console.log('Server running successfully');