## **Goto tutorial a amra shikhecilam j kivabe asynchronous poddhotithe file read kora jai, tik ekhi file amra kintu synchronous poddhotithe o read korte pari jta ai tutorial a alochona kora hobe**

- ### Agher lecture dekhe asho taholei valo vabe bujte parbe. Bakhi shob same thakbe sudu `index.js` file tate modifiaction hobe:

```javascript
// package.json

{
  "name": "014",
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

```html
<!-- home.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
</head>
<body>
    <h1>This is home page.</h1>
    <button onclick="AlertMe()">Click me</button>
    <script>
        function AlertMe(){
            alert("Hello");
        }
    </script>
</body>
</html>

```

```javascript
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

```