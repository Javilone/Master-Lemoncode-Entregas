/* Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
const concat = (a, b) => {}; // Implementation here. */

const firstArray: string[] = ["Estos", "ejercicios", "sirven", "para", "repasar. "];
const secondArray : string[] = ["Espero", "estar", "haciéndolos", "todos", "bien!!"];

const concat = (a : string[], b : string[])  => {
    return [...a, ...b];
}
console.log(concat(firstArray, secondArray));