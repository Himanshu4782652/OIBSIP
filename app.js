let celciousInput=document.querySelector('#celcious>input')
let fahrenheitInput=document.querySelector('#fahrenheit>input')
let kalvinInput=document.querySelector('#kelvin>input')

let btn=document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}
/*celcious to fahrenheit and kalvin*/
celciousInput.addEventListener('input',function(){
    let cTemp=parseFloat(celciousInput.value)
    let fTemp=(cTemp*(9/5))+32
    let kTemp=cTemp+273.15
    fahrenheitInput.value=roundNumber(fTemp)
    kalvinInput.value=roundNumber(kTemp)
})
/*fahrenheit to calcious and kalvin*/
fahrenheitInput.addEventListener('input',function(){
    let fTemp=parseFloat(fahrenheitInput.value)
    let cTemp=(fTemp-32)*(5/9)
    let kTemp=(fTemp-32)
    calciousInput.value=roundNumber(cTemp)
    kalvinInput.value=roundNumber(kTemp)
})
/*kalvin to calcious and fahrenheit*/
kalvinInput.addEventListener('input',function(){
    let kTemp=parseFloat(kalvinInput.value)
    let cTemp=kTemp-273.15
    let fTemp=(kTemp-273.15)*(9/5)+32
    calciousInput.value=roundNumber(cTemp)
    fahrenheitInput.value=roundNumber(fTemp)
})
btn.addEventListener('click',()=>{
    celciousInput.value=""
    fahrenheitInput.value=""
    kalvinInput.value=""
})