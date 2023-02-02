// const func1 = () => {
//     console.log("Func 1 tamamlandı.");
//     func3();
// }

// const func2 = () => {
//     console.log("Func 2 tamamlandı.");
// }

// const func3 = () => {
//     console.log("Func 3 tamamlandı.");
//     func2();
// }

// func1();

// Single thread --- JS Senkron


// let x = 5;
// console.log('1. gelen veri: ', x);

// setTimeout(() => {
//     x = x + 5;
//     console.log('2. gelen veri: ', x);    
// }, 5000);   // 5 seconds timeout

// x = x + 5;
// console.log('3. gelen veri: ', x);


const books = [
    { name: 'Kitap 1', author: 'Yazar 1'},
    { name: 'Kitap 2', author: 'Yazar 2'},
    { name: 'Kitap 3', author: 'Yazar 3'},
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    })
};

// listBooks();

const addBook = (newBook, callback) => {
    books.push(newBook);
    callback();
};

addBook({name: 'Kitap 4', author: 'Yazar 4'}, listBooks);

