const cardlist = document.querySelectorAll(".card-slider");
const back = document.querySelector(".back");
const forward = document.querySelector(".forward");

var offset = 1;
const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const increment = () => {
    offset += 1;
};
const slidder = (list, offset, intial) => {
    var start = 0 + offset;
    var end = intial + offset;
    var filterlist = [];
    filterlist = list.filter((val) => start <= val && val < end);
    return filterlist;
};

let i = 0;
let filterCard = slidder(list, 0, 3);
back.addEventListener("click", () => {
    i += 1;
    filterCard.forEach((val, index) => {
        cardlist[index].classList.add("invisible");
    });
    filterCard = slidder(list, i, 3);
    filterCard.forEach((val, index) => {
        let mid=0+2/2;
        cardlist[index].classList.add("visible");
        cardlist[mid].classList.add("hovers");
        console.log(mid);
    });
    console.log(i, filterCard);
});
console.log(i, filterCard);
filterCard.forEach((val, index) => {
        let mid=0+2/2;
    cardlist[index].classList.add("visible");
    cardlist[mid].classList.add("hovers");
});
cardlist.forEach((card) => {
    card.classList.add("invisible");
});

var hovercard=document.querySelector(".card-slider.hovers");
hovercard.style.backgroundColor = "red"; // Add red background color to hovercard
var card=document.querySelectorAll(".invisible");
card.forEach((val)=>{
    val.style.display="none";
})
var card=document.querySelectorAll(".visible");
card.forEach((val)=>{
    val.style.display="flex";
})