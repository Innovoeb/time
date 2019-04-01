



// my first running clock
 let myClock = setInterval(function(){
   let time = moment().format("h:mm:ss")
   document.querySelector(".digits").innerHTML = time;
 }, 1000)
