## **ei tutorial a amra dekhbo kivabe synchronous wayte amra file write korte pari. Aikheter agher tutorial er sathe partokkho takbhe sudu index.js file a baki sob same takbhe.**
- ### ai jonno ami first a `package.json` file create kore nibo then necessary changes kore nibo like below:
```javascript
// package.json
{
  "name": "016",
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

```javascript
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
```
- ### akon file ta k run korer por, server a req patale root directoryte akta `demoSync.txt` namer file create hobe as expected:
```text
<!-- demoSync.txt -->
Welcome to File sync
```