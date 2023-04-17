import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetApiService } from 'src/app/services/get-all-games-service';
@Component({
  selector: 'app-sort-view',
  templateUrl: './sort-view.component.html',
  styleUrls: ['./sort-view.component.css']
})
export class SortViewComponent implements OnInit{
  games:any[] =[]
  x =20;
  sort:any;
  isLoading:boolean=true;
  gameRange:any;
  constructor(private _GetApiService: GetApiService, private _ActivatedRoute:ActivatedRoute){

  }
  ngOnInit(){
this._ActivatedRoute.paramMap.subscribe((par)=>{
  this.sort=par.get('specs')
  this.getGame()
})

  }


  getGame(){
    this._GetApiService.getSortedGames(this.sort).subscribe({
      next: (res:any)=>{
        this.isLoading=false
        this.games=res.slice(0,this.x)
        this.gameRange=res
      },
      error: ()=>{},
      complete: ()=>{},

    })

  }
  addmore():void{
    this.isLoading=true;
    this.x+=20
    this._GetApiService.getSortedGames(this.sort).subscribe({
      next: (res:any)=>{
        this.isLoading=false
        this.games=res.slice(0,this.x)
        this.gameRange=res
      },
      error: ()=>{},
      complete: ()=>{},})

      console.log(this.games);

    }


  }

