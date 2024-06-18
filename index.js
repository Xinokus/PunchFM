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

buttonFirst = document.getElementById('one');
buttonSecond = document.getElementById('two');
buttonThird = document.getElementById('three');
buttonFourth = document.getElementById('four');
buttonFifth = document.getElementById('five');

slider = document.getElementById('slider');

moveLeft = 68.666

buttonFirst.addEventListener("click", () => {
    slider.style.left = -86.666 + "vw"

    buttonFirst.style.backgroundColor = "#dd0426"
    buttonSecond.style.backgroundColor = "#959595"
    buttonThird.style.backgroundColor = "#959595"
    buttonFourth.style.backgroundColor = "#959595"
    buttonFifth.style.backgroundColor = "#959595"
})
buttonSecond.addEventListener("click", () => {
    slider.style.left = -86.666 + -moveLeft + "vw"

    buttonFirst.style.backgroundColor = "#959595"
    buttonSecond.style.backgroundColor = "#dd0426"
    buttonThird.style.backgroundColor = "#959595"
    buttonFourth.style.backgroundColor = "#959595"
    buttonFifth.style.backgroundColor = "#959595"
})
buttonThird.addEventListener("click", () => {
    slider.style.left = -86.666 + -moveLeft * 2 + "vw"

    buttonFirst.style.backgroundColor = "#959595"
    buttonSecond.style.backgroundColor = "#959595"
    buttonThird.style.backgroundColor = "#dd0426"
    buttonFourth.style.backgroundColor = "#959595"
    buttonFifth.style.backgroundColor = "#959595"
})
buttonFourth.addEventListener("click", () => {
    slider.style.left = -86.666 + -moveLeft * 3 + "vw"

    buttonFirst.style.backgroundColor = "#959595"
    buttonSecond.style.backgroundColor = "#959595"
    buttonThird.style.backgroundColor = "#959595"
    buttonFourth.style.backgroundColor = "#dd0426"
    buttonFifth.style.backgroundColor = "#959595"
})
buttonFifth.addEventListener("click", () => {
    slider.style.left = -86.666 + -moveLeft * 4 + "vw"

    buttonFirst.style.backgroundColor = "#959595"
    buttonSecond.style.backgroundColor = "#959595"
    buttonThird.style.backgroundColor = "#959595"
    buttonFourth.style.backgroundColor = "#959595"
    buttonFifth.style.backgroundColor = "#dd0426"
})

peopleSlider = document.getElementById('peopleSlider');

buttonOne = document.getElementById('sliderPeopleOne');
buttonTwo = document.getElementById('sliderPeopleTwo');
buttonThree = document.getElementById('sliderPeopleThree');

moveRight = 100

buttonOne.addEventListener("click", () => {
    peopleSlider.style.right = 0 + "%"

    buttonOne.style.backgroundColor = "#dd0426"
    buttonTwo.style.backgroundColor = "#9F9F9F"
    buttonThree.style.backgroundColor = "#9F9F9F"
})
buttonTwo.addEventListener("click", () => {
    peopleSlider.style.right = moveRight + "%"

    buttonOne.style.backgroundColor = "#9F9F9F"
    buttonTwo.style.backgroundColor = "#dd0426"
    buttonThree.style.backgroundColor = "#9F9F9F"
})
buttonThree.addEventListener("click", () => {
    peopleSlider.style.right = moveRight * 2 + "%"

    buttonOne.style.backgroundColor = "#9F9F9F"
    buttonTwo.style.backgroundColor = "#9F9F9F"
    buttonThree.style.backgroundColor = "#dd0426"
})

podcastSlider = document.getElementById('sliderPodcast');

buttonPodcastOne = document.getElementById('sliderPodcastOne');
buttonPodcastTwo = document.getElementById('sliderPodcastTwo');
buttonPodcastThree = document.getElementById('sliderPodcastThree');

movePodcastRight = 100

buttonPodcastOne.addEventListener("click", () => {
    podcastSlider.style.right = 0 + "%"

    buttonPodcastOne.style.backgroundColor = "#dd0426"
    buttonPodcastTwo.style.backgroundColor = "#9F9F9F"
    buttonPodcastThree.style.backgroundColor = "#9F9F9F"
})
buttonPodcastTwo.addEventListener("click", () => {
    podcastSlider.style.right = movePodcastRight + "%"

    buttonPodcastOne.style.backgroundColor = "#9F9F9F"
    buttonPodcastTwo.style.backgroundColor = "#dd0426"
    buttonPodcastThree.style.backgroundColor = "#9F9F9F"
})
buttonPodcastThree.addEventListener("click", () => {
    podcastSlider.style.right = movePodcastRight * 2 + "%"

    buttonPodcastOne.style.backgroundColor = "#9F9F9F"
    buttonPodcastTwo.style.backgroundColor = "#9F9F9F"
    buttonPodcastThree.style.backgroundColor = "#dd0426"
})
//linear-gradient(180deg, hsla(0, 0%, 100%, 0), #000000);

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