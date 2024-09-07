const enddate = "10 September 2024 10:00 PM"

document.querySelector("#enddate").innerHTML = enddate
const input = document.querySelectorAll(".input")
 


function clock() {
    const end = new Date(enddate)
const now = new Date();
const diff = Math.floor((end-now)/1000)

    if(diff < 0) return;

    input[0].value = Math.floor(diff/60/60/24)
    input[1].value = Math.floor(diff/60/60%24)
    input[2].value = Math.floor(diff/60%60)
    input[3].value = Math.floor(diff%60)
    
}

setInterval(() => {
    clock()
},1000)

 

 


// 1 day = 24hrs
// 1 hr = 60min
// 1 min = 60sec