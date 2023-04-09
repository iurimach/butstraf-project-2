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