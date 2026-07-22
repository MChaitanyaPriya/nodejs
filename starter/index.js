const http=require("http");
const fs=require("fs");
const url=require('url');
//overview replace template
const overviewreplacetemplate=require("./modules/overviewtemplatereplace");
//productcardtemplate
const productcardtemplate=require("./modules/productcardreplacetemplate");
// indexhtml 
const indexhtmlpage=fs.readFileSync(`${__dirname}/templates/indexhtml.html`,"utf-8");
//overview html
const overviewhtmlpage=fs.readFileSync(`${__dirname}/templates/overview.html`,"utf-8");
//productcardhtml
const productcardhtmlpage=fs.readFileSync(`${__dirname}/templates/productscard.html`,"utf-8");
//data.json
let productsdata=fs.readFileSync(`${__dirname}/data.json`,"utf-8");
productsdata=JSON.parse(productsdata);
console.log(productsdata);
const server=http.createServer(function(req,res){
    const {pathname,query}=url.parse(req.url,true);
    if(pathname==='/'){
    res.writeHead(200,{'Content-type':'text/html'});
    const cardshtml=productsdata.map((product,index)=>
        productcardtemplate(productcardhtmlpage,product,index)
    ).join('');
    let output=indexhtmlpage.replace(/{%PRODUCTCARDS%}/g,cardshtml);
    res.end(output);
    }
    else if(pathname==='/product'){
        res.writeHead(200,{'Content-type':'text/html'});
        const product=productsdata[query.id -1];
        let output=overviewreplacetemplate(overviewhtmlpage,product);
        res.end(output);
    }
    else{
        res.end('<h1>Pge Not Found</h1>')
    }
});
server.listen(8000,function(){
    console.log("listening to the portnumber 8000");
});
