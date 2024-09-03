let preloader = document.getElementById('preloader')
let hh = document.getElementById('hh');
window.addEventListener("load", ()=>{
    setTimeout(()=>{hh.style.animationDelay="1.2s";}, 0)
    setTimeout(()=>{preloader.style.display="none";}, 1500)
    setTimeout(()=>{preloader.style.transform="translateY(-100vh)";preloader.style.transition="1s ease";}, 500)
})