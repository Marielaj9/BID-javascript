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
        //console.log(this.salud);
    }

}

class Sensei extends Ninja{
    constructor(nombre, salud){
        super(nombre, salud);
        this.nombre= nombre;
        this.salud= salud || 200;
        this.velocidad= 10;
        this.fuerza= 10;
        this.sabiduria= 10;
    }

    speakWisdom(){
        sensei1.drinkSake();
        console.log(`"Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."`);
    }

    showStats(){
        console.log(`Nombre:${this.nombre},Salud: ${this.salud} , Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}`);
    }
}

const sensei1 = new Sensei("Master Splinter");
sensei1.speakWisdom();
sensei1.showStats();
