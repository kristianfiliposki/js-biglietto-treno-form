/* const km=document.querySelector("#km").value;
console.log=(`km`)
const submit=document.querySelector("invio");
const price= km * 0.21;
document.querySelector("#output").innerHTML=`${price}`; 

 */



let nkm=Number(document.getElementById("km"))
const eta=Number(document.getElementById("eta"));
let price=( nkm  * 0.21);
let youngprice = (price * 0.60);
let oldprice = (price * 0.80);

const submit=document.getElementById(`invio`);
const output=document.getElementById(`output`);


submit.addEventListener("click",function(){
output.innerHTML= nkm;
}) 


if( eta <= 18){
    output.innerHTML=`il prezzo è: (${youngprice})  €`
}

else if (eta >= 65 ){
    output.innerHTML=`il prezzo è: (${oldprice})  €`
}

else{
    output.innerHTML=` il prezzo è: ${price} €`
}


submit.addEventListener("click",function(){
    
    let nkm=parseInt(document.getElementById("km").value);
    output.innerHTML=`sono: ${nkm} km`

})



