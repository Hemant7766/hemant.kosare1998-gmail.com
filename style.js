// --------------------------------- User choice ---------------------------------

var visibility, userchoice
var select=document.querySelectorAll(".select")

function disableall(visibility){
    for(let x=0 ;x<select.length;x++){
    select[x].disabled=visibility
    }
}

select[0].addEventListener("click",()=>{
      var selectchoice= select[0].value
      if(selectchoice!=""){
        disableall(visibility = true)
        }
        userchoice= selectchoice
  })  
select[1].addEventListener("click",()=>{
      var selectchoice= select[1].value
      if(selectchoice!=""){
        disableall(visibility = true)
        }
        userchoice= selectchoice
  })  
select[2].addEventListener("click",()=>{
      var selectchoice= select[2].value
      if(selectchoice!=""){
        disableall(visibility = true)
        }
        userchoice= selectchoice
  })  
select[3].addEventListener("click",()=>{
      var selectchoice= select[3].value
      if(selectchoice!=""){
        disableall(visibility = true)
        }
        userchoice= selectchoice
  })  
select[4].addEventListener("click",()=>{
      var selectchoice= select[4].value
      if(selectchoice!=""){
        disableall(visibility = true)
        }
        userchoice= selectchoice
  })  
select[5].addEventListener("click",()=>{
      var selectchoice= select[5].value
      if(selectchoice!=""){
        disableall(visibility = true)
        }
        userchoice= selectchoice
  })  
select[6].addEventListener("click",()=>{
      var selectchoice= select[6].value
      if(selectchoice!=""){
        disableall(visibility = true)
        }
        userchoice= selectchoice
  })  
select[7].addEventListener("click",()=>{
      var selectchoice= select[7].value
      if(selectchoice!=""){
        disableall(visibility = true)
        }
        userchoice= selectchoice
  })  
select[8].addEventListener("click",()=>{
      var selectchoice= select[8].value
      if(selectchoice!=""){
        disableall(visibility = true)
        }
        userchoice= selectchoice
  })  
select[9].addEventListener("click",()=>{
      var selectchoice= select[9].value
      if(selectchoice!=""){
        disableall(visibility = true)
        }
        userchoice= selectchoice
  })  
select[10].addEventListener("click",()=>{
      var selectchoice= select[10].value
      if(selectchoice!=""){
        disableall(visibility = true)
        }
        userchoice= selectchoice
  })  
select[11].addEventListener("click",()=>{
      var selectchoice= select[11].value
      if(selectchoice!=""){
        disableall(visibility = true)
        }
        userchoice= selectchoice
  })  
select[12].addEventListener("click",()=>{
      var selectchoice= select[12].value
      if(selectchoice!=""){
        disableall(visibility = true)
        }
        userchoice= selectchoice
  })  



// --------------------------------- Random number ---------------------------------





function randomchoiceappear(randomnumber){

if(randomnumber==1 ||randomnumber==3 ||randomnumber==7 ||randomnumber==9 ){
    let color1="green" , color2="green"
    return{ color1 ,color2 , randomnumber}
}
else if(randomnumber==2 ||randomnumber==4 ||randomnumber==6 ||randomnumber==8 ){
    let color1="red" , color2="red"
    return{ color1 ,color2 , randomnumber}
}
else if (randomnumber==5 )
{
    let color1="green" , color2="rgb(114, 38, 222)"
    return{ color1 ,color2 , randomnumber}
}
else if (randomnumber==0){
    let color1="red" , color2="rgb(114, 38, 222)"
    return{ color1 ,color2 , randomnumber}
}


}

// --------------------------------- resultlogic section ---------------------------

var popupbox=document.querySelector(".popup_box")
var popupimg=document.querySelector(".popupimg")
function resultofchoice(a,b,c){
    var finalres 
    if(a==undefined){
      
      return finalres="undefine"
  }

   else if(a==b ){
      popupbox.setAttribute("style","display:inline-block")
      popupimg.src="images/win.jpg"
var p=setInterval(function popup(){
  popupbox.setAttribute("style","display:none")
  clearInterval(p)
},1200)
a=undefined
        return finalres="win"
    }
    else if(a==c ){
      popupbox.setAttribute("style","display:inline-block")
      popupimg.src="images/win.jpg"
      var p=setInterval(function popup(){
        popupbox.setAttribute("style","display:none")
        clearInterval(p)
      },1200)
    a=undefined
        return finalres="win"
    }
  
  
    else{
      popupbox.setAttribute("style","display:inline-block")
      popupimg.src="images/lose.jpg"
      var p=setInterval(function popup(){
        popupbox.setAttribute("style","display:none")
        clearInterval(p)
      },1200)
        return finalres="loose"
    }
  

}
// --------------------------------- result section ---------------------------------

var displayresult=document.querySelector(".displayresult")


function displaycolorandnumberonscreen(period,returncolorvalueone, returncolorvalue , returnnumbervalue)
{

  var divconatyinerres=document.createElement("div")
  displayresult.appendChild(divconatyinerres)
  divconatyinerres.className="divconatyinerres"

  var periodtile = document.createElement("div")
  divconatyinerres.appendChild(periodtile)
    periodtile.className="periodvalue"
  periodtile.innerHTML=period
    
var container = document.createElement("div")
divconatyinerres.appendChild(container)
  container.className ="displayconatiner";

  var leftcolor=document.createElement("div")
  var rightcolor=document.createElement("div")
  container.appendChild(leftcolor)
  container.appendChild(rightcolor)
  leftcolor.className="leftcolor"
  rightcolor.className="rightcolor"

  var numbervalue=document.createElement("div")
  rightcolor.appendChild(numbervalue)
  numbervalue.className="numbervalue"
  numbervalue.innerHTML=returnnumbervalue

  leftcolor.setAttribute("style","background-color:"+returncolorvalueone+"")
  rightcolor.setAttribute("style","background-color:"+returncolorvalue+"")



}



// --------------------------------- Timer section ---------------------------------

// ------------------ stop watch query declaration ------------------
var watchnumber = document.querySelector(".watch-number")

var periodno = document.querySelector(".period-number")

var period = 0;
var countdownsec =30;

watchnumber.innerHTML=`00:${countdownsec}`

var clock=setInterval(clocking,1000)
function clocking(){
var date= new Date()
let obtaintime = date.toLocaleTimeString()
if(obtaintime=="00:00:00 PM")
{
period=0
}
return {date , obtaintime}
}

    var countdown = setInterval(function thirthsec(){
        countdownsec--
      
        var rrr=clocking()
        var re=rrr.date
        var dr=rrr.obtaintime
        periodval(period)
        displaytime(countdownsec)
     
        if(countdownsec<=0){
            
            disableall(visibility = false)

            let randomnumber=Math.floor(Math.random()*10)
            var returnvalue=randomchoiceappear(randomnumber)
            let returncolorvalueone= returnvalue.color1
            let returncolorvalues= returnvalue.color2
            let returnnumbervalue=returnvalue.randomnumber
            
         var finalresult= resultofchoice(userchoice,returncolorvalues,returnnumbervalue)
      
        userchoice=undefined
        var showresultonscreen= displaycolorandnumberonscreen(period,returncolorvalueone,returncolorvalues,returnnumbervalue)
      
      clearInterval(countdown)
       countdownsec =30
       countdown = setInterval(thirthsec,1000);
       period=period+1
       periodval(period)
        }
    
    },1000)
   

    // ------------------ stop watch function ------------------
    function displaytime(second){
        const min=Math.floor(second / 60)
        const sec=Math.floor(second % 60)
        watchnumber.innerHTML=`${min<10 ? '0' :''}${min}:${sec<10 ?'0':''}${sec}`

    }

    function periodval(period){
    periodno.innerHTML=period
    }
  







 

  

  
    
   
