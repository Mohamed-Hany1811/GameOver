import { Component } from '@angular/core';
import { GetApiService } from 'src/app/services/get-all-games-service';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {
  games:any[] =[]
  x =20;
  isLoading:boolean=true;
  gameRange:any;

  constructor(private _GetApiService: GetApiService){

  }
  ngOnInit(){
    this._GetApiService.getAllGames().subscribe({
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
    this.isLoading=true
    this.x+=20
    this._GetApiService.getAllGames().subscribe({
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
