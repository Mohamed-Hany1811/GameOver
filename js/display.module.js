/// <reference path="../typings/globals/jquery/index.d.ts" />
export class DisplayGames{
    display(dataforgat){
      let loading = document.querySelector(".loading");
      //  loading.classList.add("d-none");
        let temp=''
        dataforgat.forEach((ele)=> {
          temp+=
          `<div class="col">
        
          <div  id="${ele.id}" class="card p-3  h-100 bg-transparent" style="width: 100%;" >
        
          <figure class="position-relative">
            <img class="card-img-top object-fit-cover h-100" src="${ele.thumbnail}" />
         </figure>    
            <div class="card-body">
                <div class="hstack justify-content-between">
                <h3 class="h6 small">${ele.title}</h3>
                <span class=" text-bg-primary small p-1 rounded-4">Free</span>
                </div>
        
                <p class="card-text small text-center opacity-50">
                ${ele.short_description.split(" ",8)}
                </p>
            </div>
            <div class="card-footer d-flex justify-content-between">
           
            <span class="rounded-pill bg-win p-1 small">${ele.genre}</span>
            <span class="rounded-pill bg-win p-1 small">${ele.platform}</span>
            </div>
          </div>
        </div>`
        })
        document.getElementById('myrow').innerHTML=temp;
        
        
        }


        displayDetails(data) {
            let temp = 
            `<div class="col-md-4">
            <img src="${data.thumbnail}" class="w-100" alt="image details" />
            </div>
            <div class="col-md-8">
            <h3>Title: ${data.title}</h3>
            <p>Category: <span class="rounded-3 text-bg-info badge"> ${data.genre}</span> </p>
            <p>Platform: <span class="rounded-3 text-bg-info badge"> ${data.platform}</span> </p>
            <p>Status: <span class="rounded-3 text-bg-info badge"> ${data.status}</span> </p>
            <p class="small">${data.description}</p>
            <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
            </div>`;
            document.getElementById("Details").innerHTML = temp;
         }


         

}



