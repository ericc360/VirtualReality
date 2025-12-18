let rnd = (l,u) => Math.random()*(u-l) + l;
let scene;
window.onload = function(){
  scene = document.querySelector("a-scene");
  // Challenge: Create 10 random lamps
  for(let i = 0; i < 10; i++){
    let x = rnd(-20,20);
    let y = rnd(1,1);
    let z = rnd(-20,20);
    let lamp = new Lamp(x,y,z)
  }
  
}

