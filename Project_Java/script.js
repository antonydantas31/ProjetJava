//Moviment Animatio to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const sneaker = document.querySelector(".sneaker img");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /12;
    let yAxis = (window.innerHeight / 2 - e.pageY) /12;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //popout
sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
});

//Animate out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popback
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
});