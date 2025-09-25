let n=process.argv.pop();
let c3=1;
let c5=1;
for(let i=1;i<=n;i++){
    let str="";
    if(c3===3){
        str+="Fizz";
        c3=0;
    }
    if(c5===5){
        str+="Buzz";
        c5=0;
    }
    if(str===""){
        str+=i;
    }
    c3++;
    c5++;
    console.log(str);   
}