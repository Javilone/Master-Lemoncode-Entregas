//-------------------------------------------------------------------------------------------//
// Crea una función que reciba una frase en formato string y devuelva la palabra más larga.  //
// En caso de haber varias con longitud máxima que devuelva siempre la primera.Ten en cuenta //
// que consideramos una palabra a aquello que esté separado por espacios.                    //
//-------------------------------------------------------------------------------------------//

function biggestWord(phrase : string) : string {
    let wordList : string[]= phrase.trim().split(' ');
    let longestWord : string = "";

    for (let i = 0; i < wordList.length; i++) {
        if (wordList[i].length > longestWord.length) {
            longestWord = wordList[i];
        }
    }

    return longestWord;
}

export const prueba : string = biggestWord("  Hola Javilone qué tal estas  ")