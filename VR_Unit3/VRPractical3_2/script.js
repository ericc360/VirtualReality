let scene, rockets=[];
let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene")
  for(let i = 0; i < 100; i++){
    let x = rnd(-50, 50);
    let y = rnd(-0, 0); 
    let z = rnd(-50, 50);
    let newRocket = new Rocket(x, y, z);
    rockets.push(newRocket);
  }

      
  loop();
})

function loop(){
  for(let i = 0; i < rockets.length; i++){
    rockets[i].update();
  }
    
  window.requestAnimationFrame(loop);
}