//1. akhon ai j index.js, index.js er moddhe amra prothomei boleci server make korbo.
//2. R server make korer jonno amader nodejs er core module - http module dorkar.
//3. So first a amader k http module k use korer jonno shei module import kore niye ashte hobe: 

var http = require('http') //4. require() function amader k shei module ta ene dei,jta amra takhe () er moddhe ene dewar jonno bolbo. Ai khetre sha amader k http module ene dibe.

//5. akhon ai http module tekhe amra server create korer jonno createServer() namer akta method ace sheta k call kore divo.

//6. ai createServer() method parameter hishebe akta callback function nei. Ai call back function abr 2 ta parameter nei: 1ta hocce request and onnota hocce response.

//7.Amra jani server a 2 doroner ghotona ghote. Server 1st a request jai and shei req er against a server akta response generate kore. Toh server a j request ta jabe shei req ta k handle korer jonno callback function er "req" parameter use hoi, and server tekhe finally j response ta generate hobe shei response manage korer jonno "res" parameter callback a use hoi.

//11. toh port diye run korer jonno amra ai j server ta create korlam sheta k akta variable er moddhe rekhe dibo. 
var server= http.createServer(function (req, res){
    //8.By the way, aikhane callback er j parameter shegular nam req,res dite hobe bishoita moteow erokom na,apni caile ja khushi tai dite paren.

    //9. amra boleci amader server akta "hello world" response generatoe korbe. Toh sheta korer jonno amra res.end() function use korbo. Jta kina amra, j parameter dibo sheta clienter kache patai dibe.
    res.end("hello world");
});

//10. finally amra j server ta create koreci sheta k amader k run korate hobe akta port diye. Amra jani server er port takhe : 4000, 5000, 8080 erokom bibinno dhoroner port takhe.Toh amra jta korbo akn, ai server ta k port diye run korabo. 

//12. amader server create kora sesh. But baki ache takhe listen korano- j tumi akta port k shobshomoy pahara diye takba and jokoni tumi kono req paba tokoni tumi response pataba.

//13. so ai j listen korbe amader server shetar jonno amra server.listent() function ta use korbo. And ai function parameter hishebe port number ta nibe j sha kon port a listen korte takhbe.

server.listen('5050');

//14. Akhon server k j run korabo sheta run hoyece kina sheta bujar jonno amra simply akta consolelog diye dite pari:

console.log("Server running successfully");

//15. akhon ai index.js file k run korer jonno amra simply "node index.js" command ta terminal run korabo.

//16. Akhno ai j server ta amader run holo sheta k amra kothi pabo? - Pabo hocce localhost a.

//17. So akn server er output dekhar jonno browser a simply search korbo "localhost:portnumber". In our case it will be "localhost:5050"