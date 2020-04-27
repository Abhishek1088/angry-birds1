class Slingshot {
constructor(bodyA,pointB){
    var options ={
        bodyA : bodyA,
        pointB : pointB,
        length : 20,
        stiffness : 1
    }
  
    this.sling = Matter.Constraint.create(options)
    World.add(world,this.sling)
}
fly(){

   this.sling.bodyA=null

}
display(){
    if(this.sling.bodyA){

    var a = this.sling.bodyA.position
    var b = this.sling.pointB
    line(a.x,a.y,b.x,b.y)
    }
}
}