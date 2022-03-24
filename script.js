const play = document.getElementById("play");
const pause = document.getElementById("pause");
const vid = document.getElementById("vid");

play.onclick = () =>{
        
        vid.play();
        pause.style.display = "block"
        play.style.display = "none"
        x=1
}
vid.onmouseover=()=>{
    pause.onclick = () =>{
        
        pause.style.display = "none"
        vid.pause();
        pause.style.display = "none"
        play.style.display = "block"
        x=1
    }
    
}

const mini_navbar = document.getElementById("mini_navbar");
const ham_img = document.getElementById("ham-img");
ham_img.onclick = () =>{
    if (mini_navbar.style.position == "absolute") {
        mini_navbar.style.position = "relative";
        mini_navbar.style.transform = "translateY(0)"
        mini_navbar.style.zIndex = "-9"
    }else{
        mini_navbar.style.position = "absolute";
        mini_navbar.style.transform = "translateY(-130%)"
    }
}