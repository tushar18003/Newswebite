console.log("kese ho")
//0b87cce2461c48f49beaa80c6860982f
let newsacc = document.getElementById("accordionExample")

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=0b87cce2461c48f49beaa80c6860982f', true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let art = json.articles
        console.log(art)
       // art = art.slice(0,3)
        let blank = "";
        
            
          
        art.forEach(function (element, index) {
            let nee =
                `<div class="accordion" id="accordionExample">
    <div class="card">
        <div class="card-header" id="heading${index}">
            <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                    aria-expanded="true" aria-controls="collapse${index}">
                    <b> Breaking News ${index} </b>${element["title"]}
                </button>
            </h2>
        </div>
    
        <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}"
            data-parent="#accordionExample">
            <div class="card-body">
            ${element["content"]}.<a href="${element.url}" target = "_blank">read more....</a>
            </div>
        </div>
    </div>
    
    </div>
    `
            blank += nee
        });
        newsacc.innerHTML = blank;


    }
    
    else {
        console.log("some error occured")
    }
}
xhr.send()

