let reviewArray = [{text: "proba", rank: 4}];

function createReviewElement(review) {
    const reviewEl = document.createElement(`div`);
    reviewEl.classList = ['review'];
    const reviewText = document.createElement('span');
    reviewText.innerHTML = review.text;
    const reviewRank = document.createElement(`span`);
    reviewRank.innerHTML = review.rank + '/5';
    reviewEl.appendChild(reviewText);
    reviewEl.appendChild(reviewRank);
    return reviewEl;
}


function renderPage() {
    const reviewList = document.getElementById(`reviews`);
    reviewList.innerHTML = "";
    reviewArray.forEach((review) => {
        reviewList.appendChild(createReviewElement(review));
    });
}

function addReview() {
    const reviewTextInput = document.getElementById('review-text-input');
    const reviewRankInput = document.getElementById(`review-rank-input`);
    reviewArray.push({text: reviewTextInput.value, rank: reviewRankInput.value});
    saveReviewsToLocalStorage();
    renderPage();
}

function saveReviewsToLocalStorage() {
    localStorage.setItem("movie-reviews", JSON.stringify(reviewArray));
}

function loadReviewsFromLocalStorage() {
    const savedArray = localStorage.getItem("movie-reviews");
    reviewArray = JSON.parse(savedArray);
    if(reviewArray == undefined) reviewArray = [];
}

loadReviewsFromLocalStorage();
renderPage();

