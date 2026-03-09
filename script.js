let books=[]
function addBook(){
let title=document.getElementById("title").value
let author=document.getElementById("author").value
let genre=document.getElementById("genre").value
let status=document.getElementById("status").value
let rating=document.getElementById("rating").value
if(title==="") return
let book={
title,
author,
genre,
status,
rating
}
books.push(book)
displayBooks()
clearForm()
}
function clearForm(){
document.getElementById("title").value=""
document.getElementById("author").value=""
document.getElementById("genre").value=""
document.getElementById("rating").value=""
}
function displayBooks(list=books){
let container=document.getElementById("bookList")
container.innerHTML=""
list.forEach((book,index)=>{
let card=document.createElement("div")
card.className="col-md-4"
let completedClass=book.status==="Completed"?"completed":""
card.innerHTML=`
<div class="card-book ${completedClass}">
<h5>${book.title}</h5>
<p><b>Author:</b> ${book.author}</p>
<p><b>Genre:</b> ${book.genre}</p>
<p><b>Status:</b>
<select onchange="changeStatus(${index},this.value)">
<option ${book.status==="To Read"?"selected":""}>To Read</option>
<option ${book.status==="In the middle of reading "?"selected":""}>Reading</option>
<option ${book.status==="Completed"?"selected":""}>Completed</option>
</select>
</p>
<p><b>Rating:</b> ${book.rating}</p>
<button class="btn btn-danger delete-btn" onclick="deleteBook(${index})">
Delete
</button>
</div>
`;
container.appendChild(card)
})
}
function deleteBook(index){
books.splice(index,1)
displayBooks()
}
function changeStatus(index,newStatus){
books[index].status=newStatus
if(newStatus==="Completed"){
alert("Congratulations! You finished a book!")
}
displayBooks()
}
function searchBooks(){
let keyword=document.getElementById("search").value.toLowerCase()
let filtered=books.filter(book=>
book.title.toLowerCase().includes(keyword)||
book.author.toLowerCase().includes(keyword)
)
displayBooks(filtered)
}
