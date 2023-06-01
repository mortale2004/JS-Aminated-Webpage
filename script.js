const list = document.getElementsByClassName("list")[0];
const p = document.querySelector(".main p");
const h1 = document.querySelector(".main h1");
const cloud1 = document.getElementsByClassName("cloud1")[0];
const cloud2 = document.getElementsByClassName("cloud2")[0];
const man = document.getElementsByClassName("man")[0];
const button = document.querySelector(".main button");
const leftBtns = document.getElementsByClassName("buttons")[0];
const container = document.querySelector(".container");
let click = 0;

const loadContent = ()=>{
    container.style.backgroundSize = "100%"
    list.style.transform = "translateY(0rem)";
    p.style.transform = "translateY(0rem)";
    h1.style.transform = "translateY(0rem)";
    cloud1.style.transform = "translate(-10rem, 10rem)";
    cloud2.style.transform = "translate(10rem, 10rem)";
    man.style.transform = "translateY(0rem)";
    button.style.transform = "translateY(20rem)";
    leftBtns.style.transform = "translate(0rem, -8rem)";
    man.style.backgroundPositionY = "100%";
    man.style.backgroundSize = "15%";
}

const startPosition = ()=>{
    container.style.backgroundSize = "200%"
    list.style.transform = "translateY(-10rem)";
    p.style.transform = "translateY(-10rem)";
    h1.style.transform = "translateY(-25rem)";
    cloud1.style.transform = "translate(0rem, 0rem)";
    cloud2.style.transform = "translate(0rem, 0rem)";
    man.style.transform = "translateY(0rem)";
    button.style.transform = "translateY(50rem)";
    leftBtns.style.transform = "translate(10rem, -8rem)";
    man.style.backgroundPositionY = "100%";
    man.style.backgroundSize = "10%";
}


const changeCity = (city, url)=>{

    // City Changes 
    h1.innerText = `${city}`;
    container.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 103), rgba(0, 0, 0, 0.207)) , url('${url}')`;
    container.style.backgroundSize = "100%"
    list.style.transform = "translateY(0rem)";
    p.style.transform = "translateY(0rem)";
    h1.style.transform = "translateY(0rem)";
    cloud1.style.transform = "translate(-10rem, 10rem)";
    cloud2.style.transform = "translate(10rem, 10rem)";
    man.style.transform = "translateY(0rem)";
    button.style.transform = "translateY(20rem)";
    leftBtns.style.transform = "translate(0rem, -8rem)";
    man.style.backgroundPositionY = "100%";
    man.style.backgroundSize = "15%";
}
window.addEventListener("click", ()=>{
        click++;
        if (click===1)
        {
            loadContent();
        }
        else if (click===2)
        {
            startPosition();
        }
        else if (click===3)
        {
            changeCity("Mexico", "./images/bgMexi.jpg");
        }
        else if (click==4)
        {
            startPosition();
        }
        else if (click==5)
        {
            changeCity("South Africa", "./images/bgSo.jpg")
        }
        else if (click==6)
        {
            startPosition();
        }
})
