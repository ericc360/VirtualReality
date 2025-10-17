let scene;

function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createTree(x,0,z);
  }
   //Task 2: Use the createCloud(...)  to add several clouds to the scene at various positions.
  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createCloud(x,7,z);
  }
   
   //Task 4: Use the createHouse(...)  to add several houses to the scene at various positions.
   
   for(let i = 0; i < 10; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createHouse(x,0,z);
  }
  
})

/* Task 1: Create a function createCloud that,
      1) Accept an x, y and z position for where to place the cloud "entity"
      2) Create an entity to store all the components that will make up the cloud
      3) Create three sphere, or some other appropriate component that can slightly overlap.         
      4) Adjust the attributes appropriately.  Add each sphere to the cloud entity
      5) Set cloud entities position to those passed in to the function.
      6) Add the cloud entity to the scene
*/
function createCloud(x,y,z){
  let cloud = document.createElement("a-entity");

  let s1 = document.createElement("a-sphere");
  s1.setAttribute("position","0 0 0");
  s1.setAttribute("radius","1.25");
  cloud.append(s1);

  let s2 = document.createElement("a-sphere");
  s2.setAttribute("position","1 0 1");
  s2.setAttribute("radius","1.25");
  cloud.append(s2);  

  let s3 = document.createElement("a-sphere");
  s3.setAttribute("position","-1 0 1");
  s3.setAttribute("radius","1.25");
  cloud.append(s3);

  cloud.setAttribute("position",{x:x, y:y, z:z});
  scene.append( cloud )

}
/* Task 3: Create a function createHouse that,
      1) Accept an x and z position for where to place the house "entity"
      2) Create an entity to store all the components that will make up the house
      3) Create box for the base of the house.  Add base to the entity.
      4) Create triangular prism from a cylinder for the roof.  Add the roof to the entity.
      5) Adjust the attributes appropriately.
      5) Set house entities position to those passed in to the function.
      6) Add the house entity to the scene
*/
function createHouse(x, y, z){
  let house = document.createElement("a-entity");
  
  let wall = document.createElement("a-box");
  wall.setAttribute("width","4");
  wall.setAttribute("depth","0.1");
  wall.setAttribute("height","3");
  wall.setAttribute("position","0 1.5 2")
  house.append( wall );

  let wall2 = document.createElement("a-box");
  wall2.setAttribute("width","4");
  wall2.setAttribute("depth","0.1");
  wall2.setAttribute("height","3");
  wall2.setAttribute("position","0 1.5 -2")
  house.append( wall2 );

  let wall3 = document.createElement("a-box");
  wall3.setAttribute("width","0.1");
  wall3.setAttribute("depth","4");
  wall3.setAttribute("height","3");
  wall3.setAttribute("position","-2 1.5 0")
  house.append( wall3 );

  let wall4 = document.createElement("a-box");
  wall4.setAttribute("width","0.1");
  wall4.setAttribute("depth","4");
  wall4.setAttribute("height","3");
  wall4.setAttribute("position","2 1.5 0")
  house.append( wall4 );

 let wall5 = document.createElement("a-box");
  wall5.setAttribute("width","4");
  wall5.setAttribute("depth","4");
  wall5.setAttribute("height","0.1");
  wall5.setAttribute("position","0 3 0") 
  house.append( wall5 );

  let door = document.createElement("a-box");
  door.setAttribute("width","1.5");    
  door.setAttribute("depth","0.5"); 
  door.setAttribute("height","2");   
  door.setAttribute("position","0 1 1.9");
  door.setAttribute("color", "saddlebrown");
  house.append( door );



  house.setAttribute("position",{x:x, y:y, z:z});
  scene.append( house )
}

function createTree(x, y, z){
  let tree = document.createElement("a-entity");
  
  let pines = document.createElement("a-cone");
  pines.setAttribute("color","green");
  pines.setAttribute("position","0 2 0");
  pines.setAttribute("height","2");
  tree.append( pines );

  let stump = document.createElement("a-cylinder");
  stump.setAttribute("position","0 1 0");
  stump.setAttribute("color","brown");
  stump.setAttribute("radius","0.25");
  tree.append( stump );

  tree.setAttribute("position",{x:x, y:y, z:z});
  scene.append( tree )
}



