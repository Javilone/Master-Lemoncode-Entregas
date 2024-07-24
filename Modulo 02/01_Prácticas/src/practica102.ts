// Dada la calificación de alumnos de una clase en forma de objeto como el siguiente:

// Implementa una función que muestre la media de la clase de forma textual, es decir, siguiendo el sistema de calificación español:

// Matrícula de Honor = 10
// Sobresaliente = entre 9 y 10
// Notable = entre 7 y 9
// Bien = entre 6 y 7
// Suficiente = entre 5 y 6
// Insuficiente = entre 4 y 5
// Muy deficiente = por debajo de 4

import { values } from "./practica114";

const eso2o = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
};

const totalAlumns = Object.keys(eso2o).length;  // Total de alumnos por el que será dividida la suma de las notas
const totalCalific: {} = values(eso2o)   // Almaceno las notas de los valores del objeto usando la función de practica114.ts
const totalSum : number = sumCalific(totalCalific);  // Sumo todas las calificaciones (En este ejemplo obtengo 45.75)
const average : number = getAverage(totalSum, totalAlumns); // Obtengo la media (En este ejemplo obtengo 7.625)
const message : string = getMessage(average); // Obtengo el texto respecto de la calificacion
export const print : string = printAverage();  // Imprimo el mensaje con la nota de la clase

function sumCalific(total) : number {
    let sum : number = 0;
    for (let i = 0; i < total.length; i++){
        sum = sum + total[i];
    }
    
    return sum;
}

function getAverage(sum : number, alumns : number){
    return sum  /= alumns;
}

function getMessage(average : number) {
    let message : string = "";
    if (average === 10) {
        message = "Matrícula de honor";
    } else if (average >= 9 && average <= 10) {
        message = "Sobresaliente";
    } else if (average >= 7 && average <= 9) {
        message = "Notable";
    } else if (average > 6 && average < 7) {
        message = "Bien";
    } else if (average >= 5 && average < 6) {
        message = "Suficiente";
    } else if (average > 4 && average < 5) {
        message = "Insuficiente";
    } else if (average < 4) {
        message = "Muy deficiente";
    }
    return message
}

function printAverage() {
    return `La clase ha obtenido la nota de ${message}`;
}