let slider = [
  "images/hero-berlin.jpg",
   "images/img-2019_07_11_12_11_09-7279-crop577.jpg", 
   "images/p00vsc8y.jpg"
  ];

let image = document.querySelector(".slider img");
image.setAttribute("src", slider[0]);
let index= 0;
let next = document.querySelector(".next");
next.addEventListener("click", function () {
     index++;
     if(index> slider.length-1){
      index=0;
     }
     image.src= slider[index];
});

function AutoPlay(){
  index++;
     if(index> slider.length-1){
      index=0;
     }
     image.src= slider[index];
}
let previous = document.querySelector(".previous");

previous.addEventListener("click", function() {
   index--;
   if(index<0){
    index = slider.length-1;
   }
   image.src = slider[index];

})
setInterval(() => {
   AutoPlay();
}, 3000);



