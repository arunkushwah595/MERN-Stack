// const path = require('path')
// console.log(path.join('arun','kushwah','aap','kese','ho'));   //this is used common module


const fs=require('fs');

//CREATE FILE

// let data ="namaste India!"
// fs.writeFile('sam.txt', data, {
//     encoding: "utf-8",
//     flag: 'w'
// }, (err)=>{
//     if(err){throw err}
//     console.log("file created successfully");
    
// })




//READ FILE


// fs.readFile('sam.txt',{
//     encoding: 'utf-8'   // for readable form otherwise it will show in buffer
// },(err,data)=>{
//     if(err){throw err}
//     console.log(data);  
// })

// fs.readFile('sam.txt',{},(err,data)=>{
//     if(err){throw err}
//     console.log(data.toString());  
// })




//UPDATE FILE

// fs.appendFile('sam.txt', 'ye update kiya hai', {}, (err)=>{
//     if(err){throw err}
//     console.log("data edited successfully");
    
// })



// DELETE FILE

// fs.unlink('sam.txt', (err)=>{
//     if(err){throw err}
//     console.log("file delete successfully");
    
// })