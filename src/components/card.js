import axios from "axios"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
const cardDiv = document.createElement("div"),
      headlineDiv = document.createElement("div"),
      authorDiv = document.createElement("div"),
      imgDiv = document.createElement("div"),
      img = document.createElement("img"),
      span = document.createElement("span");

cardDiv.appendChild(headlineDiv);
cardDiv.appendChild(authorDiv);
authorDiv.appendChild(imgDiv);
imgDiv.appendChild(img);
authorDiv.appendChild(span);

cardDiv.classList.add("card");
headlineDiv.classList.add("headline");
authorDiv.classList.add("author");
imgDiv.classList.add("img-container");

img.src = article.authorPhoto;

headlineDiv.textContent = article.headline;
span.textContent = article.authorName;

cardDiv.addEventListener("click", () => console.log(article.headline));

return cardDiv;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get("https://lambda-times-api.herokuapp.com/articles")
       .then(res => {
         let cardData = res.data.articles
    

         //I know the following code isn't best practice or DRY, but I couldn't think of how else to do it and I was running out of time. If someone does actually check this, maybe you could help me out. Do I convert the object into an array and then manipulate it? Because I tried that with Object.entries and couldn't get it to work. I imagine I could do a forEach loop instead of doing all these separate for loops, but I couldn't get that to work either, so I ended up with this.

         for(let i = 0; i < cardData.javascript.length; i++)
         {
         const articlesInfo = cardData.javascript[i]
         const mainCardDiv = document.querySelector(selector)
         mainCardDiv.appendChild(Card(articlesInfo))
        }

        for(let i = 0; i < cardData.bootstrap.length; i++)
         {
         const articlesInfo = cardData.bootstrap[i]
         const mainCardDiv = document.querySelector(selector)
         mainCardDiv.appendChild(Card(articlesInfo))
        }

        for(let i = 0; i < cardData.jquery.length; i++)
         {
         const articlesInfo = cardData.jquery[i]
         const mainCardDiv = document.querySelector(selector)
         mainCardDiv.appendChild(Card(articlesInfo))
        }

        for(let i = 0; i < cardData.node.length; i++)
         {
         const articlesInfo = cardData.node[i]
         const mainCardDiv = document.querySelector(selector)
         mainCardDiv.appendChild(Card(articlesInfo))
        }

        for(let i = 0; i < cardData.technology.length; i++)
         {
         const articlesInfo = cardData.technology[i]
         const mainCardDiv = document.querySelector(selector)
         mainCardDiv.appendChild(Card(articlesInfo))
        }
      })
}

export { Card, cardAppender }
