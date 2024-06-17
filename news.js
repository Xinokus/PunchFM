cityButton = document.getElementById('city');
navButton = document.getElementById('navigation');
cityButtonPressed = false
navButtonPressed = false

cityChoise = document.getElementById('nav_city_choose');
navChoise = document.getElementById('nav_navigation_choose');

cityButton.addEventListener("click", () => {
    if(cityButtonPressed == false){
        cityChoise.style.transform = "translateY(0%)";
        cityChoise.style.opacity = 1;
        cityChoise.style.visibility = "visible";
        cityButtonPressed = true
    }
    else if(cityButtonPressed == true){
        cityChoise.style.transform = "translateY(-50%)";
        cityChoise.style.opacity = 0;
        cityChoise.style.visibility = "hidden";
        cityButtonPressed = false
    }
})

navButton.addEventListener("click", () => {
    if(navButtonPressed == false){
        navChoise.style.transform = "translateY(0%)";
        navChoise.style.opacity = 1;
        navChoise.style.visibility = "visible";
        navButtonPressed = true
    }
    else if(navButtonPressed == true){
        navChoise.style.transform = "translateY(-50%)";
        navChoise.style.opacity = 0;
        navChoise.style.visibility = "hidden";
        navButtonPressed = false
    }
})

let checkPress = false

let playButtonPress = function(){
    let playButton = document.getElementById('playButton')

    if(checkPress == false){
        playButton.outerHTML = '<img src="img/pause.png" alt="" onclick="playButtonPress()" id="playButton">'
        checkPress = true
        audio.play()
    }
    else if(checkPress == true){
        playButton.outerHTML = '<img src="img/play.png" alt="" onclick="playButtonPress()" id="playButton">'
        checkPress = false
        audio.pause()
    }
}

let audio = new Audio('img/Lobotomy Corporation OST - Binah Suppression (Sephirah Meltdown Theme).mp3');

let songVolume = document.getElementById('songVolume')
let volumePercent = document.getElementById('volumePercent')
let currentVolume = document.getElementById('currentVolume')

const alwaysTrue = true

volumePercent.innerHTML = `${songVolume.value}%`
audio.volume = songVolume.value * 0.01
currentVolume.style.width = 12.0833 * (songVolume.value * 0.01) + 'vw'

let changeVolume = function(){
    currentVolume.style.width = 12.0833 * (songVolume.value * 0.01) + 'vw'
    volumePercent.innerHTML = `${songVolume.value}%`
    audio.volume = songVolume.value * 0.01
}

let heartButton = document.getElementById('heart')
let heartPressed = false

let clickHeart = function(){
    if(heartPressed == false){
        heartButton.style.backgroundImage = 'url(img/heart_active.png)'
        heartPressed = true
    }
    else if(heartPressed == true){
        heartButton.style.backgroundImage = 'url(img/heart.png)'
        heartPressed = false
    }
}