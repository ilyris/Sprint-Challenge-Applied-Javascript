// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function ArticleComponents(articlesObject) {
    const cardContainer = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imageContainer = document.createElement("div");
    const image = document.createElement("img");
    const span = document.createElement("span");

    cardContainer.appendChild(headline);
    cardContainer.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(image);
    author.appendChild(span);

    cardContainer.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imageContainer.classList.add("img-container");

    headline.textContent = `${articlesObject.headline}`;
    image.src = `${articlesObject.authorPhoto}`;
    span.textContent = `${articlesObject.authorName}`;

    return cardContainer;
}

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then( response => {
    console.log(response.data.articles);
    const articles = response.data.articles;
    const cardsWrapper = document.querySelector(".cards-container");

    // another way of doing it.. put the objects values in
    const newArray = Object.values(articles);
    // Loop through all those arrays in our new array.
        newArray.forEach(moreArticles => {
            // then loop through each of those array's arrays
            moreArticles.forEach( articles => {
                // then return those arrays content
            return cardsWrapper.appendChild(ArticleComponents(articles));

            });
        });

    // Loop through the values of the article object to get the arrays in those properties
    // for (index in articles) {
    //     console.log(articles[index]);
    //     // Loop through those arrays
    //     articles[index].forEach( articlesContent => {
    //         console.log(articlesContent);
    //         // return our Article Components as were passing in the articlesContent data.
    //         return cardsWrapper.appendChild(ArticleComponents(articlesContent));
    //     })
    // }
    // articles.forEach( moreArticles => {
    //     console.log(moreArticles);
    // });

})
.catch(error => {
    return error;
})