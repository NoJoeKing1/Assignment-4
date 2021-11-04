window.addEventListener("load", function() {
    let myMusic = document.getElementById("myMusic");
    let playBtn = document.getElementById("playBtnPlay");
    function playMusic() {
        myMusic.play();
    }
    function pauseMusic() {
        myMusic.pause();
    }
    playBtn.addEventListener("mouseover", function () {
        playBtn.style.opacity = 0.7;
    })
    playBtn.addEventListener("mouseleave", function () {
        playBtn.style.opacity = 0.9;
    });
    playBtn.addEventListener("click", function () {
        if (myMusic.paused) {
            playMusic();
            playBtn.setAttribute("id", "playBtnPause");
        }
        else {
            pauseMusic();
            playBtn.setAttribute("id", "playBtnPlay")
            
        }
    });
    
});