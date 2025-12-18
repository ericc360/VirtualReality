class House{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
    
    let wall = document.createElement("a-box");
    wall.setAttribute("width","4");
    wall.setAttribute("depth","0.1");
    wall.setAttribute("height","3");
    wall.setAttribute("position","0 1.5 2")
    this.obj.append( wall );

    let wall2 = document.createElement("a-box");
    wall2.setAttribute("width","4");
    wall2.setAttribute("depth","0.1");
    wall2.setAttribute("height","3");
    wall2.setAttribute("position","0 1.5 -2")
    this.obj.append( wall2 );

    let wall3 = document.createElement("a-box");
    wall3.setAttribute("width","0.1");
    wall3.setAttribute("depth","4");
    wall3.setAttribute("height","3");
    wall3.setAttribute("position","-2 1.5 0")
    this.obj.append( wall3 );

    let wall4 = document.createElement("a-box");
    wall4.setAttribute("width","0.1");
    wall4.setAttribute("depth","4");
    wall4.setAttribute("height","3");
    wall4.setAttribute("position","2 1.5 0")
    this.obj.append( wall4 );

    let wall5 = document.createElement("a-box");
    wall5.setAttribute("width","4");
    wall5.setAttribute("depth","4");
    wall5.setAttribute("height","0.1");
    wall5.setAttribute("position","0 3 0") 
    this.obj.append( wall5 );

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}