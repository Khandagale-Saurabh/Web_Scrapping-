// let fs=require('fs');
// let frp=fs.promises.readFile("f1.txt");
// console.log("Before");
// let thenkap=frp.then(cb);
// console.log("then ka promise",thenkap);
// function cb(data)
// {
// console.log("data ",data);
// return fs.promises.readFile("f2.txt");
// } 
// thenkap.then(function (data){
// console.log("",data);
// })


let fs=require("fs");
let arr=["f1.txt","f2.txt","f3.txt"];
let fr=fs.promises.readFile(arr[0]);
for(let i=0;i<arr.length;i++)
{
 fr=fr.then(function(data){
console.log(""+data);
return fs.promises.readFile(arr[i]);
 })
 console.log("after");
}