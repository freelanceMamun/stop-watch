const starBtn1 = document.querySelector(".Start"),
stopBtn2 =  document.querySelector(".Stop"),
resetbtn =  document.querySelector(".Reset");


let hour = minute = second = miliSecond = "0" + 0;
let setTimer; 
      
starBtn1.addEventListener("click", starFun);   
stopBtn2.addEventListener("click", Stopfun);
resetbtn.addEventListener("click", resetfun);

function starFun(){
    starBtn1.classList.add("Star-btn");
    stopBtn2.classList.remove("Stop-timer")
      setTimer = setInterval(() => {
           miliSecond++
           miliSecond = miliSecond < 10 ? "0" + miliSecond : miliSecond ;
           if(miliSecond === 100){
              second++;
              second = second < 10 ? "0"+second : second ;
              miliSecond = "0" + 0 ;
           } 
           if(second === 60){
               minute++;
               minute = minute < 10 ? "0"+minute : minute ;
               second = "0" + 0 ;
           } 
         if(minute == 60){
             hour++
             hour =  hour < 10 ? "0"+ hour : hour
             minute = "0" + 0 ;
         }

           
           showTimerSet(); 

      }, 10); 
      
}

function Stopfun(){
 stopBtn2.classList.add("Stop-timer"); 
 starBtn1.classList.remove("Star-btn");
  clearInterval(setTimer);
}

function resetfun(){
    starBtn1.classList.remove("Star-btn");
    stopBtn2.classList.remove("Stop-timer")
    clearInterval(setTimer);
    hour = minute = second = miliSecond = "0" + 0;
    showTimerSet();

}

function showTimerSet (){
    document.querySelector(".miliSecond").innerHTML = miliSecond ;
    document.querySelector(".second").innerHTML = second ;
    document.querySelector(".minute").innerHTML =minute ;
    document.querySelector(".hour").innerHTML= hour ;

}

