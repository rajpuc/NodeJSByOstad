## **Goto tutorial a amra fs module use kore asynchronous wayte file rename kora shikhechi. Ai tutorial a amra synchronous wayte file rename kora dekhbo**
- ### Er jonno ami agher tutorial er mothoi hubohu package.json, demo.txt file make kore nibo. And ai khtre synchronous wayte file rename er jonno amader sudu index.js file a modification korte hobe:

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

```text
<!-- demo.txt -->
Hello Rajesh

```

```javascript

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
```

- ### erpor amra jodi `npm start` run korai terminal a tahole amader server run hoye jabe.Erpor server a request patale amader  `demo.txt` file ta rename hoye jabe like below:
```text
<!-- demoNew.txt-->
Hello Rajesh

```