const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});



// js code to change navbar color
document.onscroll = () => {
    if (window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
} 

document.onload = () => {
    if (window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
} 



// const img = document.querySelectorAll(".img-box");
// const win = document.querySelector(".window");
// const fullImg = document.querySelector(".full-img");

// img.forEach((imgs) => {
//   imgs.addEventListener("click", () => {
//     const val = imgs.getAttribute("data-value");
//     win.classList.add("open");
//     fullImg.src = `images/${val}.jpg`;
//   });
// });

// window.addEventListener("click", (e) => {
//   if (e.target.classList.contains("window")) {
//     win.classList.remove("open");
//   }
// });


let popup = document.getElementById("popup")
    function openPopup(){
        popup.classList.add("open-popup")
    }