## **Ai tutorial amra file rename kora dekbo fs module bebohar kore asynchronous wayte.**
- ### ai jonno ami first a `package.json` file create kore nibo then necessary changes kore nibo like below:
```javascript
// package.json
{
  "name": "017",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
```Javascript
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
```

3. ### file k rename korer jonno ami first a root directory the akta `demo.txt` name er file create kore nicci and okhane kicu content likhe dilam like below:
```text
<!-- demo.txt -->
Hello Rajesh

```
5. ### erpor amra jodi `npm start` run korai terminal a tahole amader server run hoye jabe.Erpor server a request patale amader  `demo.txt` file ta rename hoye jabe like below:
```text
<!-- demoNew.txt-->
Hello Rajesh

```