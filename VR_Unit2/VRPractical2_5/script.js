/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/

let maze = [
  "xxxxxxxxxxxxxxxxxxxxxxxxx",
  "x---------------------x-x",
  "x--------xxxxxxxxxxxxxxxx",
  "x----x----x------------xx",
  "x-----x----x----s-----x-x",
  "xxx----x----x-s----s-x--x",
  "x-----x-----------------x",
  "x-s--x------------------x",
  "x----x--s---------------x",
  "xxx---x-----------------x",
  "x-----------------------x",
  "x-----xxxxxxxxxxx-s-----x",
  "x--------x-------x------x",
  "x------s-x-s------------x",
  "x--------x--------------x",
  "x--------xxxxxxxxxxx----x",
  "x--------s---x----------x",
  "x------------x-s--------x",
  "x-s----------x------x---x",
  "x------------x--------s-x",
  "x----s-------xxx----xxxxx",
  "x-------------------x---x",
  "xxxxxxx-------------x-s-x",
  "------x-------------x---x",
  "--------------s---------x",
  "-----------s------------x",
  "xxxxxxxxxxxxxxxxxxxxxxxxx",
  
  
];



let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new House((c-12.5)*2,0,(r-12.5)*2)
      }
      else if(cols[c] == "s"){
        new Snowman((c-12.5)*2,(r-12.5)*2)
      }
      
    }
    /* Challenge 3
      Choose a technique to traverse the each character in the string.
    */ 
    /* Challenge 4
       Make an appropriate decision based on the characters you chose to enter 
       in the maze.  Create an instance of the corresponding object.
    */
  }

})