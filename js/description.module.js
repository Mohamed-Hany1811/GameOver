import { DisplayGames } from "./display.module.js";
export class Description{
    constructor(id){
    this.display=new DisplayGames()
        document.getElementById("closeBtn").addEventListener("click", () => {
        document.getElementById("home").classList.remove("d-none");
        document.getElementById("detail").classList.add("d-none");
     });

     this.ApiforDetails(id);
    
    }
    async ApiforDetails(id){

        let loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'be5f12c4e7msh7641d518f2b8159p17462ejsnaa33ca7cf139',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
        let api= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
        let  desc=await api.json()
        this.display.displayDetails(desc)
        loading.classList.add("d-none");
    }


}

