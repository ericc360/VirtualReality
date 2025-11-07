let maze = [
  "TTTTTTTTTTTTTTTTTTTTTTTTTT",
  "TxxxxxxxxxxxxxxxxxxxxxxxxT",
  "T--------------x--------xT",
  "Txxxxxxxxxxx---xx-------xT",
  "Tx---------xx-----x-----xT",
  "Tx--xxxx---x--xx--xxxx--xT",
  "Tx--x--x---x------------xT",
  "Tx--x--x--x------xxxxx--xT",
  "Tx--x--x--x-----x----x--xT",
  "Tx--x--x--x----------x--xT",
  "Tx--x--x--xxxxxxxxxx----xT",
  "Tx--------------------x-xT",
  "Txxxxxxxxxxxxxxxxxxxxxx-xT",
  "TTTTTTTTTTTTTTTTTTTTTTTTTT",
];
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,1,r)
      }
      else if(cols[c] == "T"){
        new Tree(c,1,r);
      }else if(cols[c]=="o"){
        new Rock(c,1,r)
      }
    }

  }

})