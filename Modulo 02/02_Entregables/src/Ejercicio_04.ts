/* Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro. 
Un libro es un objeto con title como string y isRead como booleano.
En caso de no existir el libro devolver false
TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón. */

interface Book {
    title: string;
    isRead: boolean;
}

const books: Book[]= [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
    { title: "Git GitHub", isRead: true },
    { title: "Nunca estuvimos allí", isRead: false },
    { title: "Tenemos que hablar", isRead: false},
];
    
function isBookRead(books : Book[], title: string) { 
    const book = books.find(book => book.title === title);
    return book ? book.title + " => ¿Ha sido leído? => " + book.isRead : "El libro no existe: => " + false; 
}

// return false
console.log(isBookRead(books, "Tenemos que hablar"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
// return true
console.log(isBookRead(books, "Git GitHub"));
console.log(isBookRead(books, "Harry Potter y la piedra filosofal"));
// return false no existe 
console.log(isBookRead(books, "Mortadelo y Filemón"));
console.log(isBookRead(books, "Mafalda"));