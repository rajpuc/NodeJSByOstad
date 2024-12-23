//index.js


var http = require('http'); 

var server= http.createServer(function (req, res){
    //1. toh dorun ami aikhane url er madhome req handle korbo: j jodi home url a req ashe shekhetre amra akta response create korbo:
    if(req.url === '/'){
        //4. akn question hocce response a ki ki thakte pare?
        //5. amra kintu uporer dewa 1 no. diagram teke dekte pacci, response a status code takbe,response header takbe,response body takbe etc takhte pare responser moddhe.
        //6. So aikhan teke j response ta jabe shekhane ami first a head diye dicci. Er jonno amra response er writeHead() method k call korbo. So head er moddhe amra response er status code dite pari,aikhane r o onk option dewa jai jemon content type diye dite pari, r bakigula amra gradually shikte takbo. Apatoto amra aikhane status code and content type dicci.

        res.writeHead(200,{ 'Content-Type': 'text/html'}) //7. content type dewar jonno ami aikhane akta object create korlam. Ei obj er vitore sudumatro content type noi er moddhe amra r o onk kicui dite parbo. Jgula amra pore shikbo.
        //9. Toh res er head er por akn amader response er body lagbo.
        //10. body dewar jonno amra res teke write() k call korbo.
        res.write('<h1>This is home page</h1>')
        //12. Akn amader jehetu response er body dewa sesh and r kicu ai muhurte dewar moto nai, tai amader k server k janate hobe j amader response dewa sesh tumi akn response k end kore daw. Er jonno amader res.end() k call korte hobe tailei hoye jabe;
        res.end();

         
    }
    //2. abr dorun amra /about jodi req ashe shetar jonno o akta response generate korbo:
    //8. Akhon ai j responser head ami home er jonno liklam sheta mai about and contact url o likhe dilam.
    //11. Ekivabe home url er j response body, sherokom body ami about and contact er jonno o likhe dite parbo.
    //13. Ekivabe ami baki url er response k o end kore dilam.
    else if(req.url == '/about'){
        res.writeHead(200,{ 'Content-Type': 'text/html'})
        res.write('<h1>This is about page</h1>');
        res.end();
    }
    //3. abr akhivabe amra /contact req er jonno akta response generate korte pari:
    else if(req.url == '/contact'){
        res.writeHead(200,{ 'Content-Type': 'text/html'})
        res.write('<h1>This is contact page</h1>');
        res.end();
    }  
    
});
//14. Remember aikhaner protiti reqeust e get request. And Protiti req er response hishebe head and body taktece.

//15. Akn amra server ta k run korte pari o/p dekhar jonno:

server.listen('5050');

console.log("Server running successfully");