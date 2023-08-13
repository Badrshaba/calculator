var myBody = document.querySelector(".haeder")
 var hide = document.querySelector(".Hide")
 var screen = document.querySelector(".screen")
 var cleer = document.querySelector(".calc")
 var del = document.querySelector(".del")
 var eqwal = document.querySelector(".eqwal")
 var number = document.querySelectorAll(".number")
let btnMood = document.querySelector(".mood")



let bodyHeight = true
hide.addEventListener("click",()=>{
if(bodyHeight){
    bodyHeight = false
    myBody.style. height ="50px"
    hide.innerHTML="Un hide"
}else{
    bodyHeight = true
    myBody.style. height ="555px"
    hide.innerHTML="Hide"
}
})



number.forEach((r)=>{
   r.addEventListener("click",(w)=>{
    
    screen.innerHTML+= w.target.dataset.nember
    
   })
   
})

function myDelete(){
    screen.innerHTML=" "
}
del.addEventListener("click",myDelete)

function clean(){
    
    let arr = screen.innerHTML.split("")
    arr.pop()
    
    screen.innerHTML= arr.join('')
    console.log(arr);
}
cleer.addEventListener("click",clean)


function calc(){
    screen.innerHTML=eval(screen.innerHTML)
}


eqwal.addEventListener("click", calc  )

let mood = "light"

btnMood.addEventListener("click",()=>{
    if(mood=="light"){
        mood="dark"
        document.body.style.background="black"
        btnMood.innerHTML="light"
        myBody.style.border="white solid"
    }else{
        mood="light"
        document.body.style.background="white"
        btnMood.innerHTML="dark"
        myBody.style.border="black solid"
    }
    
})
