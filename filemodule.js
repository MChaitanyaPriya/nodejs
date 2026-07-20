const fs=require("fs");
//synchronization
//fs.writeFileSync('./text.txt',"this is mohana");
//asynchronization
//-----fs.writeFile('./text.txt',"hi madhuri");// there should be an error
// we must have to add another arguments
/*
fs.writeFile('./text.txt',"hi madhuri from hyderbad",function (err){
if(err){
    console.log("there is an error");
}
});
*/
// read file in synchronization
/*
const data=fs.readFileSync('./text.txt');
//output <Buffer 68 69 20 6d 61 64 68 75 72 69 20 66 72 6f 6d 20 68 79 64 65 72 62 61 64> 
console.log(data);
*/
/*
const data=fs.readFileSync('./text.txt',"utf-8");
//output hi madhuri from hyderbad 
console.log(data);
*/

const data=fs.readFile('./text.txt',"utf-8",function (err,result){
    if(err){
        console.log("there is an error while reading the file");
    }
    console.log(result);
});
console.log(data);

// creating a folder
//fs.mkdir("newfolder",function (err){
   // if(err){
   //     console.log(err);
   // }
//});
// creating sub folder
/*
fs.mkdir('newfolder/a',function (err){
    if(err){
        console.log(err);
    }
})
    */

/*
fs.mkdir('newfolder/a/aa',{recursive:true},function(err){
    if(err){
        console.log(err);
    }
});
*/
// append file synchronization
/*
fs.appendFileSync('text.txt'," good evening");
*/
// append file asynchronization
/*
fs.appendFile('text.txt',"hi priya file module is completed",function (err){
    if(err){
        console.log(err);
    }
});
*/
// stat synchronization
//console.log(fs.statSync('text.txt'));
// asynchronization
/*
fs.stat('text.txt',function(err,result){
    if(err){
        console.log(err);
    }
    console.log(result);
});
*/
// diff in sync and async
//synch
/*
console.log("1");
const data =fs.readFileSync('text.txt','utf-8');
console.log(data);
console.log("2");
*/
//asynchron
/*
console.log("1");
fs.readFile('text.txt','utf-8',function(err,result){
    if(err){
        console.log(err);
    }
    console.log(result);
});
console.log("2");
*/
// finding cpus in our os
/*
const os=require("os");
console.log(os.cpus.length);*/