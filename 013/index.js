//index.js

var http =require('http');
//1. fs module niye kaj korer jonno amra first a fs module k import kore nibo:
var fs = require('fs');

var server = http.createServer((req,res)=>{
    //2. aikhane akhon amra fs module diye file read korbo.
    //6. home.html file ta k amra server tekhe read korbo then output ta amra browser a show korabo. Taholei sheta amder Website er home page hoye jabe.
    //7. Toh fs module er kaj j sudu matro file upload ba download kora na fs module er acharaow onk kaj ache: kono akta web page k read kore sheta k show korano, kono akta web page k delete kore dewa, rename kore dewa, create kora - ekkothai management bolte ja bujai sob kicu kora jai fs module diye.
    //8.Akhon Ei home.html file k amra sever tekhe read korbo, korer por html file tekhe ja ja pabe shegula k server response akhare amder k show korabe:
    if(req.url == "/"){
        fs.readFile('./home.html',(error,data)=>{
            //11. akhon sudu mathro body write korle tho hobe na head k o write korte hobe.
            res.writeHead(200,{'Content-Type':'text/html'});
            //10. akhon ai j file read korer por amra data gula pabo shei data gula k amra response er moddhe write kore dibo. And ai data gula manei hocce amader home.html page ta.
            res.write(data);
            //12. Tahole aikhane head and body dewa hoye gelo abr response ta k sesh korte hobe:
            res.end();

        });  //9. ei mehod er moddhe pameter 3ti.1st parameter file er path, 2nd parameter hocce file er option, 3rd parameter hocce callback function. ai example a ami 2nd parameter dicci na. Callback function er bitor 2ta parameter thakbe akta hocce error(file read korer khetre kono error ashle sheta catch korbe) onnota hocce data(data mane hocce file read korer por ami j data gula pabo shei data gula).



    }

});

server.listen(4040);
console.log('Server running successfully');