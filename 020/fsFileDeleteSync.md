## **Ai tutorial amra file delete kora dekbo fs module bebohar kore synchronous wayte.**
- ### ai jonno ami first a `package.json` file create kore nibo then necessary changes kore nibo jate `npm start` cmnd likhe termainal a run korate pari like below:
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

- ### file k delete korer jonno ami first a root directoryte akta `demo.txt` name er file create kore nicci and okhane kicu content likhe dilam like below:
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
        //1. aikhane agher tutorial er mothoi sob tik thakbe sudu method er moddhe otirikto akta prefix "Sync" add hobe. and ata ageher tutorial er method er callback a j error parameter petam shetai return korbe.
        let error=fs.unlinkSync('demo.txt');
        if(error){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('file delete fail');
            res.end();
        }else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('Successfully file deleted');
            res.end();
        }

    }

});

server.listen(5050);
console.log('Server running successfully');
```
2. ### erpor amra jodi `npm start` run korai terminal a tahole amader server run hoye jabe.Erpor server a request patale amader  `demo.txt` file ta delete hoye jabe.

3. ### Rajesh tumi jodi future a aikhane ata porte asho tahole ai tutorial er directoryte tumi kono demo.txt namer file dekthe parbe na cause ami code run koranor fole sheta delete hoye gece as expected.