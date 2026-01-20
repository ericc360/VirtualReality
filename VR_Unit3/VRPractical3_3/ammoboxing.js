class amboxes{
  constructor(x,z, rotation){
    this.a = 0;
    this.da = 1;
    this.killed=false;
    this.checkrt=true;
    
    this.obj = document.createElement("a-box")
    this.obj.setAttribute("color", "green");
    this.obj.setAttribute("position",{x:x,y:2,z:z});
    this.obj.setAttribute("rotation",{x:0,y:rotation,z:0});
    scene.append(this.obj);
    
  }
  trace(x, z, rotation){
    this.a += this.da;
    this.obj.setAttribute("rotation",{x:0, y:this.a, z:0});
    if(this.killed==true){
        this.obj.setAttribute("position",{x:x, y:-7, z:z});
    } else {
        this.obj.setAttribute("position",{x:x, y:2, z:z});
    }
  }
}