const books = [
    { title: 'El Quijote', author: 'Miguel de Cervantes', description: 'Una novela clásica de la literatura española.' },
    { title: 'Cien Años de Soledad', author: 'Gabriel García Márquez', description: 'Una obra maestra del realismo mágico.' },
    { title: 'Don Quijote de la Mancha', author: 'Miguel de Cervantes', description: 'La historia de un hidalgo y sus aventuras.' },
    { title: 'La Casa de los Espíritus', author: 'Isabel Allende', description: 'Una novela que mezcla la realidad y lo sobrenatural.' },
    { title: 'Debolsillo Crónica de una muerte anunciada', author: 'Gabriel García Márquez', description: 'Literatura,toques de realismo mágico y relato policial.' }
];

/**
 * Función para mostrar los libros en la página
 * @param {Array} books - Lista de libros a mostrar
 */
function displayBooks(books) {
    const booksList = document.getElementById('books-list');
    booksList.innerHTML = '';

    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';
        
        const title = document.createElement('h3');
        title.textContent = book.title;
        
        const author = document.createElement('p');
        author.className = 'author';
        author.textContent = `Autor: ${book.author}`;
        
        const description = document.createElement('p');
        description.className = 'description';
        description.textContent = book.description;
        
        bookDiv.appendChild(title);
        bookDiv.appendChild(author);
        bookDiv.appendChild(description);
        
        booksList.appendChild(bookDiv);
    });
}

/**
 * Función para buscar libros basados en la entrada del usuario
 */
function searchBook() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(query) || 
        book.author.toLowerCase().includes(query)
    );
    displayBooks(filteredBooks);
}

// Mostrar todos los libros al cargar la página
displayBooks(books);
/**
 COMENTARIO SCRIPT 
 */