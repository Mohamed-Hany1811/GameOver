import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GetApiService } from 'src/app/services/get-all-games-service';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {

  games:any[] =[]
  x =20;
  cat:any;
  gameRange:any;
  isLoading:boolean=true;

  constructor(private _GetApiService: GetApiService, private _ActivatedRoute:ActivatedRoute){

  }
  ngOnInit(){
this._ActivatedRoute.paramMap.subscribe((par)=>{
  this.cat=par.get('cat')
this.getGame()

})



}


getGame(){
  this._GetApiService.getGamesByCategory(this.cat).subscribe({
      next: (res:any)=>{
        this.isLoading=false;
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
    this._GetApiService.getGamesByCategory(this.cat).subscribe({
      next: (res:any)=>{
          this.isLoading=false;
        this.games=res.slice(0,this.x)
        this.gameRange=res
      },
      error: ()=>{},
      complete: ()=>{},})

    }




  }

