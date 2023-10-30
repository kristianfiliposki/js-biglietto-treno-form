let km=document.getElementById(`kmdone`);
let age=document.getElementById(`eta`)
const submit = document.getElementById('invio');
const output= document.getElementById('prigenerator');


document.getElementById("invio").addEventListener("click",function () {
    
    let km=document.getElementById(`kmdone`).value;
    let age=document.getElementById(`eta`).value;
    console.log(`hai ${age} anni`);

     if(age <= 18){
        let price= (km * 0.21) * 0.8; 
        document.getElementById("priceGenerator").innerHTML = (`Il prezzo è: ${price} €`);
        
    }
    
    else if(age >= 65){
        let price=(km * 0.21) * 0.6;
        document.getElementById("priceGenerator").innerHTML = (`Il prezzo è: ${price} €`);
        
    }
    
    else{
        let price= km * 0.21;
        document.getElementById("priceGenerator").innerHTML = (`Il prezzo è: ${price} €`);
        
    } 
})
