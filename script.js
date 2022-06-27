window.onscroll = function() {myFunction()};

var navbar = document.getElementsByClassName("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
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

document.getElementById('form').addEventListener('submit', function(e){
  e.preventDefault();

const userComments = document.getElementById('txt').value

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