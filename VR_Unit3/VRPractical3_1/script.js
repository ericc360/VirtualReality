let carousel,balloon1,balloon2,surpriseBox;

window.addEventListener("DOMContentLoaded",function() {
  carousel = document.getElementById("carousel-arms");
  carousel.r = 0;
  carousel.dr = 1;
  carousel.addEventListener("mouseenter",function(){
    this.rotate = true
  })
  carousel.addEventListener("mouseleave",function(){
    this.rotate = false
  })

  balloon1 = document.getElementById("balloon1"); //blue
  balloon1.y = 5
  balloon1.dy = -0.05;
  balloon1.addEventListener("click",function(){
    this.fall = true;
  })
  surpriseBox = document.getElementById("surpriseBox");
  balloon3 = document.getElementById("balloon3"); //red
  balloon3.y = 0.5;
  balloon3.dy = 0.02;
  surpriseBox.addEventListener("click",function(){
    this.fly = true;
  })

  balloon2 = document.getElementById("balloon2"); //red
  balloon2.y = 5;
  balloon2.dy = 0.02;
  balloon2.addEventListener("click",function(){
    this.fly = true;
  })

  loop();
}) 

function loop(){
  if(carousel.rotate){
    carousel.r += carousel.dr;
    carousel.setAttribute("rotation",{x:0, y:0, z: carousel.r});
  }
  if(balloon1.fall){
    this.balloon1.y += this.balloon1.dy;
    this.balloon1.setAttribute("position",{x:4, y:this.balloon1.y, z:1})
  }
  if(balloon2.fly){
    this.balloon2.y += this.balloon2.dy;
    this.balloon2.setAttribute("position",{x:-1, y:this.balloon2.y, z:-2})
  }
  if(surpriseBox.fly){
    this.balloon3.y += this.balloon3.dy;
    this.balloon3.setAttribute("position",{x:-2, y:this.balloon3.y, z:0})
  }
  
  
  window.requestAnimationFrame( loop );
}


