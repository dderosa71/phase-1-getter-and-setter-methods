// Add your Circle class here
const pi = Math.PI

class Circle{
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return this.radius * 2
    }

    get circumference(){
        return this.radius * 2 * pi
    }

    get area(){
        return pi * this.radius**2
    }

    set diameter(diameter){
         this.radius = diameter / 2
    }

    // This seems to break all my tests.
    set circumference(circumference){
        this.radius =  circumference / 2 / pi
    }

    set area(area){
         this.radius =  Math.sqrt(area / pi)
    }
}

    