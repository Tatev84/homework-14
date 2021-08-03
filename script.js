/* 
let data=[1,2,3]
let[a,,b,c=4]=data

console.log(a)
console.log(b)
console.log(c) */

/* console.log(`${a} ${b} ${c}`)  */

/* let data={
    f1:"v1",
    f2:"v2",
    f3:"v3"
}
let {f1,f2:field2,f3,f4="v4"}=data
console.log(f1)
console.log(field2)
console.log(f3)
console.log(f4) */


let book={
    bookTitle:"Մատանիների տիրակալ",
    bookAuthor:"J.R.R Tolkien",
    day:29,
    month:"July", 
    year:1955

}
let{bookTitle, bookAuthor}=book
document.write(`${bookTitle} ${"գիրքը գրվել է"} ${bookAuthor}${"-ի"} ${"կողմից"}`)


