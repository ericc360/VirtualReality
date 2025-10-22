class Cloud{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let s1 = document.createElement("a-sphere");
    s1.setAttribute("position","0 0 0");
    s1.setAttribute("radius","1.25");
    this.obj.append( s1 );
  
    let s2 = document.createElement("a-sphere");
    s2.setAttribute("position","1 0 1");
    s2.setAttribute("radius","1.25");;
    this.obj.append( s2 );

      
    let s3 = document.createElement("a-sphere");
    s3.setAttribute("position","-1 0 1");
     s3.setAttribute("radius","1.25");
    this.obj.append( s3 );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}