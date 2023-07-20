/// <reference path="../typings/globals/jquery/index.d.ts" />

import { Description } from "./description.module.js";
import { DisplayGames } from "./display.module.js";


 export class Games{
    constructor() {
        this.ApiforCateory("mmorpg");

        $(".nav-link").click(function(){
            $(this).addClass("active")
            $(this).parent().siblings().children().removeClass("active");
        })

        document.querySelectorAll(".navbar-nav a").forEach((a) => {
           a.addEventListener("click", (e) => {
              this.ApiforCateory(e.target.getAttribute("category"));
               let loading = document.querySelector(".loader");
               loading.classList.remove("d-none");
           });
        });
  
        this.DisplayGames=new DisplayGames ()
     }
    
 
    async ApiforCateory(category){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'be5f12c4e7msh7641d518f2b8159p17462ejsnaa33ca7cf139',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
        let datalist=await api.json()
        
        this.DisplayGames.display(datalist);
        this.getIdfordes();
       
    }

getIdfordes() {
    document.querySelectorAll(".card").forEach((ele) => {
    ele.addEventListener("click", () => {
    let id=ele.getAttribute('id')

    let details = new Description(id);
    document.getElementById("home").classList.add("d-none");
    document.getElementById("detail").classList.remove("d-none");
       });
    });
 }


  

}



