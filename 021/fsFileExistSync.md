## **Ai tutorial amra kono file exist kore ki kore na sheta check kora dekbo fs module bebohar kore synchronous wayte.**
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

- ### file exist kore kina korer jonno ami first a root directoryte(root directory bolte `021` folder takei bojano hocce) akta `demo.txt` name er file create kore nicci and okhane kicu content likhe dilam like below:
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
        //1. file exist korce kina check korer jonno fs module tekhe fs.existsSync() method k  call korbo.Then J file ta exist kore kina check korte cacci shetar file path ta diye dibo as parameter hishebe.
        //2. ai method file jodi exist kore tahole true retrun korbe and na korle fasle return korbe. 
        let result = fs.existsSync('demo.txt');
        if(result){
            res.end('File exist');
        }else{
            res.end('File not exist');
        }
    }
});

server.listen(5050);
console.log('Server running successfully');
```
3. ### erpor amra jodi `npm start` run korai terminal a tahole amader server run hoye jabe.Erpor server a request patale amader `demo.txt` file exist kore ki kore na sheta janabe.
