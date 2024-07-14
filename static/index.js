let reviewArray = [];
let selectedStarNumber = 0;

function createReviewElement(review) {
  const reviewEl = document.createElement(`div`);
  reviewEl.classList = ["review"];
  const reviewText = document.createElement("span");
  reviewText.innerHTML = review.text;
  const reviewRank = document.createElement(`span`);
  reviewRank.innerHTML = review.rank + "/5";

  const reviewDisplay = document.createElement("div");
  for (let i = 0; i < 5; i++) {
    const tempStar = document.createElement("img");
    tempStar.src = "empty-star.png";
    if (i < review.rank) tempStar.classList = ["selected-star"];
    reviewDisplay.appendChild(tempStar);
  }

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Remove";
  deleteButton.type = "Button";
  deleteButton.classList = ["delete-button"];
  deleteButton.onclick = () => {
    reviewArray = reviewArray.filter((curr) => {
      return curr !== review;
    });
    renderPage();
  };
  reviewEl.appendChild(reviewText);
  reviewEl.appendChild(reviewRank);
  reviewEl.appendChild(reviewDisplay);
  reviewEl.appendChild(deleteButton);
  return reviewEl;
}

function calculateAverage() {
  let ret = 0;
  if (reviewArray.length == 0) return "-";
  reviewArray.forEach((t) => (ret += parseInt(t.rank)));
  ret = ret / reviewArray.length;

  return Math.round(ret * 100) / 100;
}

function renderPage() {
  const reviewList = document.getElementById(`reviews`);
  reviewList.innerHTML = "";
  reviewArray.forEach((review) => {
    reviewList.appendChild(createReviewElement(review));
  });
  const cRank = document.getElementById("c-rank");
  cRank.innerHTML = calculateAverage() + " / 5";
  saveReviewsToLocalStorage();
}

function addReview() {
  const reviewTextInput = document.getElementById("review-text-input");
  console.log(selectedStarNumber + " " + reviewTextInput.value);
  if (reviewTextInput.value == "" || selectedStarNumber == 0) return;
  reviewArray.push({ text: reviewTextInput.value, rank: selectedStarNumber });
  reviewTextInput.value = "";
  for (let i = 0; i < 5; i++) {
    const nthStar = document.querySelector(
      `#review-rank-input img:nth-child(${i + 2})`
    );
    nthStar.classList = [];
  }
  selectedStarNumber = 0;

  saveReviewsToLocalStorage();
  renderPage();
}

function saveReviewsToLocalStorage() {
  localStorage.setItem("movie-reviews", JSON.stringify(reviewArray));
}

function loadReviewsFromLocalStorage() {
  const savedArray = localStorage.getItem("movie-reviews");
  reviewArray = JSON.parse(savedArray) || [];
}

function selectAStar(clickedNumberOfStars) {
  selectedStarNumber = clickedNumberOfStars;
  const starElements = document.querySelectorAll(`#review-rank-input img)`);
  starElements.forEach((starEl, index) => {
    if (index < selectedStarNumber) starEl.src = "filled-star.png";
    else starEl.src = "empty-star.png";
  });
  nthStar.classList = i < clickedNumberOfStars ? ["selected-star"] : [];
}

loadReviewsFromLocalStorage();
renderPage();
