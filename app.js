

var root=document.querySelector("#root")
root.style.display="none";

function openpage(){
  
  root.style.display="block";
  var rootheader=document.querySelector("#rootheader").style.marginTop = "0px";
  var openbox=document.querySelector("#openbox")
  openbox.style.display="none"
  var checkbox=document.querySelector("#checkbox").style.display="none"
  let label1=document.querySelector("#label1").style.display="none"


}

 
var checkbox =document.querySelector("#checkbox")
checkbox.addEventListener('change', (event) =>{
      if (event.target.checked){
        openbox.style.display="inline-block"
        openbox.disabled = false
        openbox.style.opacity= 1;
        openbox.style.border=" 2px solid green"
      }
      else{
        openbox.disabled = true  
        openbox.style.border=" 2px solid red"                   
      }
  })



var openbox=document.querySelector("#openbox")


function darck(){

if (document.body.style.backgroundColor = "black"){
    document.body.style.color ="white"
  }
  let white=document.querySelector("#white")
  white.style.display="flex"
  let darck=document.querySelector("#darck")
  darck.style.display="none"

}

  function white(){
  
    if (document.body.style.backgroundColor = "white"){
      document.body.style.color = "black"
    }
    
    let white=document.querySelector("#white")
    white.style.display="none"
    let darck=document.querySelector("#darck")
    darck.style.display="flex"

 
  }

function showmore(){
    let section3=document.querySelector("#section3")
    section3.style.display="flex"
    let bt1=document.querySelector("#more")
    bt1.style.display="none"
    let nav123=document.querySelector("#nav123")
    nav123.style.display="flex"
    
    
}