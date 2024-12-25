var http =require('http');
var fs = require('fs');

var server = http.createServer((req,res)=>{
    
    if(req.url == "/"){
        //1. File write(file write bolte aikhane notun file create kora and file er moddhe content add korake bujano hocce.) er jonno fs module tekhe fs.writeFile() method k call kore nibo.
        fs.writeFile('demo.txt','hello world',(error)=>{
            //4. jodi kono error ashe sheta ami errror parameter er maddhome peye jabo:
            if(error){
                //5. jodi error ashe tahole amra file write fail message show korabo.
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write('file write fail');
                res.end();
            }else{
                //6. successfully write hole success message dekhabo user k.
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write('Successfully written on file');
                res.end();
            }
        });//2. Akhon ai writeFile() method hocce akata asynchronous method- jta amra aghe tekei jani.And amra jani asynchronous method a obosshoi akata callback dite hoi.
        //3.Toh write file method er vitore 1st parameter hobe file er name, amader example a ami chacchi demo.txt namer text file create hok , tai ami ai name tati diye dilam. Then 2nd parameter hishebe amra diye dibo ki content thakbe sheta diye dite hobe, in our case: amra diye dilam 'hello world'. Finally amra 3rd parameter hishebe akta callback diye dibo.





       
    }

});

server.listen(4040);
console.log('Server running successfully');