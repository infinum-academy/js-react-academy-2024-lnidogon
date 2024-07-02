let reviewArray = [{text: "proba", rank: 4}];

function createReviewElement(review) {
    const reviewEl = document.createElement(`div`);
    reviewEl.classList = ['review'];
    const reviewText = document.createElement('span');
    reviewText.innerHTML = review.text;
    const reviewRank = document.createElement(`span`);
    reviewRank.innerHTML = review.rank + '/5';
    const deleteButton = document.createElement('input');
    deleteButton.value = "Remove";
    deleteButton.type = "Button";
    deleteButton.classList = ['delete-button'];
    deleteButton.onclick = () => {
        reviewArray = reviewArray.filter((curr)=>{
            return curr !== review; 
        });
        renderPage();
    }
    reviewEl.appendChild(reviewText);
    reviewEl.appendChild(reviewRank);
    reviewEl.appendChild(deleteButton);
    return reviewEl;
}

function calculateAverage() {
    let ret = 0;
    reviewArray.forEach((t) => (ret += parseInt(t.rank)));
    ret = ret / reviewArray.length;
    return Math.round(ret * 100)/100;
}

function renderPage() {
    const reviewList = document.getElementById(`reviews`);
    reviewList.innerHTML = "";
    reviewArray.forEach((review) => {
        reviewList.appendChild(createReviewElement(review));
    });
    const cRank = document.getElementById("c-rank");
    cRank.innerHTML = calculateAverage() + " / 5";
}

function addReview() {
    const reviewTextInput = document.getElementById('review-text-input');
    const reviewRankInput = document.getElementById(`review-rank-input`);
    if(reviewRankInput.value == "" || reviewTextInput.value == "") return;
    reviewArray.push({text: reviewTextInput.value, rank: reviewRankInput.value});
    reviewTextInput.value = "";
    reviewRankInput.value = "";
    
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

