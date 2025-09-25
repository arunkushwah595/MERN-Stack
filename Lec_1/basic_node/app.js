console.log("Welcome to Node JS");

let l=process.argv.pop();
let name=process.argv.pop();

for(let i=0;i<l;i++){
    console.log(name);   
}