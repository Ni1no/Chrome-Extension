"use strict";

const fromCurrency=document.querySelector('.from select');
const toCurrency=document.querySelector('.to select');
const getBtn=document.querySelector('.convert-btn');
const getSwp=document.querySelector('.swap-btn');
const exIcon=document.querySelector('.from .reverse');
const amountEL=document.querySelector('.amount input');
const exRateTxt=document.querySelector('.result');

const API_KEY = "4897290e4af7f7924f3df091";

[fromCurrency, toCurrency].forEach((select,i)=>{
    for(let curcode in Country_List){
        console.log(curcode);
        const selected = 
        (i===0&&curcode==="USD")||(i===1&&curcode==="GBP")
        ?"selected"
        :"";

        select.insertAdjacentHTML("beforeend",` <option value="${curcode}"${selected}>${curcode}</option>`)
    }


    select.addEventListener("change",()=>{
        const code= select.value;
        const imgTag=select.parentElement.querySelector("img");
        imgTag.src =`https://flagcdn.com/h20/${Country_List[code].toLowerCase()}.png`;
    });
});


async function getExchangeRate(){
    const amountValue=amountEL.value;
    exRateTxt.textContent="Please Wait......"
    try{
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency.value}`);
        const result=await response.json();

        const exRate=result.conversion_rates[toCurrency.value];
        const totalExRate=amountValue*exRate.toFixed(2);
        exRateTxt.textContent=`${amountValue} ${fromCurrency.value}=${totalExRate} ${toCurrency.value}`;






    }catch(error){
        exRateTxt.textContent="Something Went Wrong";
    }

}

getBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    getExchangeRate();
});