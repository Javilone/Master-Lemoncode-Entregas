/* El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. 
Cada máquina tragaperras(instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.

Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que representarán
el estado de las 3 ruletas.

El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:
"Congratulations!!!. You won <número de monedas> coins!!";
y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. 

En caso contrario deberá mostrar otro mensaje:
"Good luck next time!!". */

class SlotMachine {
    private coins: number;

    constructor() {
        this.coins = 0;
    }

    // Obtengo aleatoriamente true o false
    private getRandomBoolean(): boolean {
        return Math.random() >= 0.5;
    }

    play(): void {
        this.coins++;

        const machine1 = this.getRandomBoolean();
        const machine2 = this.getRandomBoolean();
        const machine3 = this.getRandomBoolean();

        // El usuario habrá ganado en caso de que los tres booleanos sean true
        if (machine1 && machine2 && machine3) {
            console.log(`Congratulations!!! You won ${this.coins} coins!!`);
            this.coins = 0;
        } else {
            console.log("Good luck next time!!");
        }
    }
}

const machine = new SlotMachine();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
