// Menu Slider
// let menu = document.getElementById('menu').addEventListener("click", menuSlide);
// let move = document.getElementById('slide');
// function menuSlide() {

//   if(move.style.right === "-2500px"){
//   move.style.right = "0px";
//   move.style.transition = "0.5s ease"
//   }
//   else{
//     move.style.right = "-2500px"
//   }
// }

$(document).ready(function(){
  $("#menu").click(function(){
      $("#slide").toggleClass("show");
  })
});

// let previousPosition = window.pageYOffset || document.documentElement.scrollTop;

// window.onscroll = function() {
//   let currentPosition = window.pageYOffset || document.documentElement.scrollTop;
//   if (previousPosition > currentPosition) {
//     move.style.top = "80px";
//     move.style.transition = "2s ease"
//   } else {
//     move.style.top = "0px";
//     move.style.transition = "1s ease"
//   }

//   previousPosition = currentPosition;
// };

const slider = document.getElementById("slide")

// slider.onscroll = slideMe()

// function slideMe(e){




//   e.preventDefault()
// }

window.onscroll = function(ev) {
  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
    slider.style.top = 0;
    slider.style.transition = "0.5s ease";
  }
  else{
    slider.style.top = "80px";
    slider.style.transition = "0.5s ease";
  }
};