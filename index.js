let a =prompt("How many friends are there ? :");
let b = [];
for (let i=0;i<a;i++){
    
    b[i] = prompt("Enter the names");
}

let c = Math.random()*a;
document.getElementById("1").innerHTML= "Bill will be paid by "+b[parseInt(c)];


