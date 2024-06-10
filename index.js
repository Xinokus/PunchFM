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