import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {
  constructor(private httpClient:HttpClient) { }
   keys = {
   method: 'GET',
   headers: {
       'X-RapidAPI-Key': 'be5f12c4e7msh7641d518f2b8159p17462ejsnaa33ca7cf139',
       'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
   }
  };
  baseUrl='https://free-to-play-games-database.p.rapidapi.com/api/games?'
  getAllGames():Observable <any>{
    return this.httpClient.get(this.baseUrl,this.keys )
  }
  getGameDetails(id:any):Observable <any>{
    return this.httpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,this.keys )
  }

  getGamesByCategory(category:any):Observable <any>{
        return this.httpClient.get(this.baseUrl+`category=${category}`,this.keys )


  }
  getGamesByPlatform(platform:string):Observable <any>{
        return this.httpClient.get(this.baseUrl+ `platform=${platform}`,this.keys )


  }
  getSortedGames(sort:string):Observable <any>{
        return this.httpClient.get(this.baseUrl+ `sort-by=${sort}`,this.keys )


  }


}
