import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetApiService } from 'src/app/services/get-all-games-service';


@Component({
  selector: 'app-platform-view',
  templateUrl: './platform-view.component.html',
  styleUrls: ['./platform-view.component.css']
})
export class PlatformViewComponent implements OnInit {
  games:any[] =[]
  x =20;
  plat:any;
  isLoading:boolean=true;
  gameRange:any;

  constructor(private _GetApiService: GetApiService, private _ActivatedRoute:ActivatedRoute){

  }

  ngOnInit(){
this._ActivatedRoute.paramMap.subscribe((par)=>{
  this.plat=par.get('name')
    this.getgames()

})


  }


  getgames(){
    this._GetApiService.getGamesByPlatform(this.plat).subscribe({
      next: (res:any)=>{
        this.isLoading=false;
        this.games=res.slice(0,this.x)
        this.gameRange=res;
      },
      error: ()=>{},
      complete: ()=>{},

    })
  }

  addmore():void{
    this.isLoading=true
    this.x+=20
    this._GetApiService.getGamesByPlatform(this.plat).subscribe({
      next: (res:any)=>{
        this.isLoading=false;
        this.games=res.slice(0,this.x)
        this.gameRange=res;

      },
      error: ()=>{},
      complete: ()=>{},})

      console.log(this.games);

    }


  }

