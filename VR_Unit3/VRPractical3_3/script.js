let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, bullet, bulletlist = [], enemies = [], ammo_boxes = [], ammo_count = 30, enemy_killed = 0;
let x, z, radial, rotation, etika=0, ammorefill=false, timer=0;
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  time = document.getElementById("time");
  ammo = document.getElementById("ammo");

  window.addEventListener("keydown",function(e){
    //User can only fire with they press the spacebar and have sufficient ammo
    if(e.key == " " && ammo_count > 0){
      bullet = new Bullet();
      bulletlist.push(bullet);
      ammo_count--;
    }
  })
  for(let i=0; i<48; i++){
    let radial = ((Math.PI*2)/360)*(i*7.5)
    let x = Math.cos(radial)*12;
    let z = Math.sin(radial)*12;
    let rotation = i*-30;
    if(i%2==0){
      frosty = new Snowman(x, z, rotation-90);
    }
    enemies.push(frosty);
  }
  
  setInterval(loop,100);
  setInterval(countdown,1000);
  setTimeout(gunning, 250);
})

function loop(){
  for(frostys of enemies){
    if(etika%10==0){
      let radial = ((Math.PI*2)/360)*(etika*30)
      let x = camera.object3D.position.x + Math.cos(radial+etika)*12;
      let z = camera.object3D.position.z + Math.sin(radial+etika)*12;
      let rotation = etika;
      frostys.trace(x, z, rotation);
    }
    if(etika>=360){
      etika=0;
    }
    etika += 1;
  }
}
function gunning(){
  for(bullets of bulletlist){
    if(bullets){
      bullets.fire();
    }
    for(frostys of enemies){
      if(distance(bullets.obj, frostys.obj)<2){
        frostys.killed = true;
        ammorefill = true;
        if(ammorefill=true){
          ammo_count+=1;
          ammorefill = false;
        }
      }
    }
  }
  console.log(ammo_count)
  window.requestAnimationFrame(gunning);
}

function countdown(){
  timer+= 1;
  time.setAttribute("value", "Time: " + timer)
  ammo.setAttribute("value", "Ammo: " + ammo_count)
}

function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}