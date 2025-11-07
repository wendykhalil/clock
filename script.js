let hour=document.getElementById("hour")
let minu=document.getElementById("min")
let sec=document.getElementById("sec")

setInterval(() => {
    const date=new Date()
    hour.innerHTML=date.getHours() <10 ? "0"+date.getHours()  :  date.getHours()
    minu.innerHTML=date.getMinutes() <10 ? "0"+date.getMinutes():date.getMinutes()
    sec.innerHTML=date.getSeconds() <10 ? "0"+date.getSeconds():date.getSeconds()
    
}, 1000);













































// let hrs=document.getElementById('hour')
// let min=document.getElementById('min')
// let sec=document.getElementById('sec')

// setInterval(()=>{
//     let currentTime=new Date()
// hrs.innerHTML=(currentTime.getHours()<10?"0":"")+currentTime.getHours();
// min.innerHTML=(currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
// sec.innerHTML=(currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();
// },1000)
