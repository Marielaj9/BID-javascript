
class Ninja {
    constructor(nombre,salud){
        this.nombre= nombre;
        this.salud= salud || 0;
        this.velocidad= 3;
        this.fuerza= 3;

    }
    sayName (){
    console.log(`${this.nombre}`);
    }

    showStats(){
        console.log(`Nombre:${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}, Salud: ${this.salud}`);
    }
    drinkSake () {
        this.salud+=10;
        console.log(this.salud);
    }

    

}
const ninja1 = new Ninja("Hyabusa", 0);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
