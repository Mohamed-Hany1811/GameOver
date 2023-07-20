import { Games } from "./games.module.js";

$(document).ready(()=>{
    let loading = document.querySelector(".loader");
    loading.classList.replace("d-block","d-none");
})
let game=new Games;
