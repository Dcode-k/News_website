console.log("this is index js file");
let apiKey = "0552b11b6bfe4156bb0b8a676ce40415";
let source = "bbc-news";
let country = "in";
let category = "technology";
// grab the news container
let newsAccordion = document.getElementById("newsAccordion");

// create a get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`
);

// What to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    //    console.log(this.responseText);
    //    console.log(json);
    let articles = json.articles;
    console.log(articles);
    let newsHTML=``;
    articles.forEach(function(element,index){

         console.log(element,index);
            let news = `<div class="accordion accordion-flush" id="newsAccordion">
            <div class="accordion-item">
            <h2 class="accordion-header" id="flush-heading${index}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
            ${element.title}
            </button>
            </h2>
            <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}" data-bs-parent="#newsAccordion">
            <div class="accordion-body">${element.content}. <a href="${element["url"]}" target="_blank">Read more here</a></div>
            </div>
            </div>
            
            </div>`;
            newsHTML+=news;   
        
    })
        newsAccordion.innerHTML=newsHTML;
    } 
    else {
        console.log("Some error occured");
    }
    
};

xhr.send();
