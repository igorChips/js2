let kvad=document.querySelector('.kvad')
let top222=document.querySelector('.top')
let bottom222=document.querySelector('.bottom')
let left222=document.querySelector('.left')
let right222=document.querySelector('.right')

let dd=10
    top222.addEventListener("click",()=>{
        kvad.style.marginTop+= dd+"px"
         
    })
    bottom222.addEventListener("click",()=>{
        kvad.style.marginBottom+= dd+"px"
         
    })
    left222.addEventListener("click",()=>{
        kvad.style.marginLeft+= dd+"px"
         
    })
    right222.addEventListener("click",()=>{
        kvad.style.marginRight+= dd+"px"
         
    })