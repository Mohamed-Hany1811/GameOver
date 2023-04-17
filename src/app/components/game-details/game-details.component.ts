import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetApiService } from 'src/app/services/get-all-games-service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as $ from 'jquery';
@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
isLoading:boolean=true;
  gameDetail:any;
  backgroundSrc:any;
removePic(){

$('#gameImg').addClass('d-none')
$('#gameVid').attr('autoplay', '1')

}
addPic(){

$('#gameImg').removeClass('d-none')
$('#gameVid').removeAttr('autoplay')
}

constructor(private _GetApiService:GetApiService, private _ActivatedRoute:ActivatedRoute){}
id: any= null;
ngOnInit(): void {



this._ActivatedRoute.paramMap.subscribe((par)=>{
  this.id= par.get('id')
  this._GetApiService.getGameDetails(this.id).subscribe({
    next:(res)=>{
      console.log(res);

      this.gameDetail= res
      this.isLoading=false

this.backgroundSrc= `https://www.freetogame.com/g/${res.id}/background.jpg`

    }
})
})



}


customOptions: OwlOptions = {
  autoplay:true,
  autoplaySpeed:500,
  smartSpeed: 100,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 1,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: false
  }



}


