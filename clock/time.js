setInterval(setClock,1000)
const hourhand=document.querySelector('[data-hour-hand]') 
const hourminute=document.querySelector('[data-minute-hand]') 
const hoursecond=document.querySelector('[data-second-hand]') 
function setClock(){
    const currentDate=new Date()
    const secondsRatio=currentDate.getSeconds()/60
    const minutesRatio=(secondsRatio + currentDate.getMinutes   ())/60
    const hourRatio=(minutesRatio + currentDate.getHours())/12
}
function setRotation(element,rotationRatio){
    
}