console.log("this is index js file");
let apiKey = "pub_2659581f55f944d72ca138b2f1727420b1fec";
let source = "bbc-news";
let language="en"
let category = "technology";
// grab the news container
let newsAccordion = document.getElementById("newsAccordion");

// create a get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsdata.io/api/1/news?apikey=${apiKey}&language=${language}`
);

// What to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
      //  console.log(this.responseText);
      //  console.log(json);
    let articles = json.results;
    console.log(articles);
    let newsHTML=``;
    articles.forEach(function(element,index){

        //  console.log(element,index);
            let news = `<div class="accordion accordion-flush" id="newsAccordion">
            <div class="accordion-item">
            <h2 class="accordion-header" id="flush-heading${index}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
            ${element.title}
            </button>
            </h2>
            <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}" data-bs-parent="#newsAccordion">
            <div class="accordion-body">${element.content.slice(0,1000)}. <a href="${element.link}" target="_blank">Read more here</a></div>
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
