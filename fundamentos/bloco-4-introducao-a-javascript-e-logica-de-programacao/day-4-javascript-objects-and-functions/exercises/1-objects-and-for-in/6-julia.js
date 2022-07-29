//🚀 6 -Access the name, surname and title keys, which is inside the favorite books key, and make a console.log in the following format: "Julia Pessoa's favorite book is called 'O Worst Day of All'".

let reader = {
    name: 'Julia',
    lastname: 'Pessoa',
    age: 21,
    favoriteBooks: [
      {
        title: 'The Worst Day Ever',
        author: 'Daniela Kopsch',
        publisher: 'Tordesillas',
      },
    ],
  };

console.log(reader.name + ' ' + reader.lastname + "'s favorite book is called " + reader.favoriteBooks[0].title )

//🚀 7 -Add a new favorite book in the Favoritebooks key, which is an array. Assign to this key an object containing the following information:
reader.favoriteBooks[1] = {
    titulo: 'Harry Potter and the Prisoner of Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }

//🚀 8 -Access the keys name and Favorite books and make a console.log in the following format: "Julia has 2 favorite books".
console.log(reader.name + ' has ' + reader.favoriteBooks.length + ' favorite books')

