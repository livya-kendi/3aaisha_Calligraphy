window.onscroll = function() {myFunction()};

var header = document.getElementsByClassName("header");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky");
  }
}

var field = document.querySelector('textarea');
var backUp = field.getAttribute('placeholder');
var commentsbtn = document.querySelector('.commentsbtn');
var  clear = document.getElementById('clear');

field.onfocus = function(){
  this.setAttribute('placeholder', '');
  commentsbtn.style.display = 'block'
}

field.onblur = function(){
  this.setAttribute('placeholder', backUp)
}

clear.onclick = function() {
  commentsbtn.style.display = 'none';
  field.value = '';
}

const form =document.getElementById('form')
form.addEventListener('submit', function(e){
  e.preventDefault();

const userComments = e.target.txt.value

const formData = new FormData();
formData.append('user-comments', userComments);

fetch('http://localhost:3000/posts' ,{
 method: "POST",
 body: formData,
})

.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err));

})

const reviewscontainer = document.getElementsByClassName("reviewscontainer")
function addReview(review){
  const list = document.createElement('li')
    .reviewscontainer. append'li'
}