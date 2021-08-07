// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius;
        // pi = Math.PI;
    }

     pi(){
        return Math.PI
    }

    get diameter(){
        return this.radius * 2
    }

    get circumference(){
        return this.radius * 2 * pi()
    }

    get area(){
        return this.radius*2*(pi**2)
    }

    set diameter(diameter){
         this.radius = diameter / 2
    }

    //This seems to break all my tests.
    // set radius(radius){
    //      this.radius = radius
    // }

    set area(area){
         this.radius = Math.sqrt(area / this.radius)
    }
}

    