// Add your Circle class here


class Circle{
    constructor(radius){
        this.radius = radius;
    }

    pi(){
    return Math.PI
    }

    get diameter(){
        return this.radius * 2
    }

    get circumference(){
        return this.radius * 2 * this.pi()
    }

    get area(){
        return this.pi() * this.radius**2
    }

    set diameter(diameter){
         this.radius = diameter / 2
    }

    // This seems to break all my tests.
    set circumference(circumference){
        this.radius =  circumference / 2 / this.pi()
    }

    set area(area){
         this.radius =  Math.sqrt(area / this.pi())
    }
}

    