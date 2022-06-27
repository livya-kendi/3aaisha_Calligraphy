
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

function loadReviews (){
  const fetchData = fetch("http://localhost:3000/reviews")
  .then(response => response.json())
  .then(reviewsData => reviewsData.forEach(review => renderReviews(review)));
  

  return fetchData
}

function renderReviews(reviews) {

  const commentsContainer = document.querySelector('#reviewscontainer');
  const li = document.createElement('li');
  li.className = "review-list"
  li.innerHTML = reviews.review;
  // debugger
  commentsContainer.append(li);
 
}

//Post review

const reviewForm = document.querySelector('#form');

reviewForm.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault();

  let reviewObject = {
    review:  event.target.txt.value
  }

  renderReviews(reviewObject)
  addReview(reviewObject)
  reviewForm.reset()
}

function addReview(reviewObject){
  fetch("http://localhost:3000/reviews", {
    method: "POST",
    headers: {
      "content-type": "application/json",

    },
    body: JSON.stringify(reviewObject),
  })
  .then(response => response.json())
  .then(reviewData => console.log(reviewData))
  .catch(err => console.error(err))
}


loadReviews()
renderReviews()
addReview()