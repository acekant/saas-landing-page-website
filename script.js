let barIcon = document.getElementsByClassName("fa-solid fa-bars")
let links = document.getElementsByClassName("links w-[45%] max-md:hidden")
links = links[0]
barIcon = barIcon[0]



barIcon.addEventListener("click",()=>{
    console.log(links)
    barIcon.classList.toggle("fa-xmark")
    links.classList.toggle("max-md:hidden")
})