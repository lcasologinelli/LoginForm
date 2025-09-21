colors = ['yellow', 'red', 'green']
let colorIndex = 0;
let pokeIndex = 0;


let starsCircle1Bg = document.querySelectorAll(".stars-circle1-bg");
let pokeballBorder = document.querySelectorAll(".a");

function changeStarColor(){
    
    starsCircle1Bg.forEach((el) => {
    el.style.stroke = colors[colorIndex];
    el.style.filter = `drop-shadow(0 -6px 10px ${colors[colorIndex]})`;
    })
    colorIndex = (colorIndex + 1)%colors.length;
}

function pokeballBorderColor(){
    
    pokeballBorder.forEach((el) =>{
        el.style.stroke = colors[pokeIndex];
        el.style.filter = `drop-shadow(0 -6px 10px ${colors[pokeIndex]})`;
    })
    pokeIndex = (pokeIndex + 1)%colors.length;
}

setInterval(pokeballBorderColor,4000)




