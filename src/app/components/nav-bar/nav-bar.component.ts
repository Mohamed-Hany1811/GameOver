import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent{
  pc:string= 'pc'



isLogged:boolean=false;
constructor(private _AuthService:AuthService, private _Router:Router){
_AuthService.userData.subscribe({
next:()=> {
  console.log(_AuthService.userData.getValue());

  if(_AuthService.userData.getValue()!== null){
  this.isLogged=true
}else{
  this.isLogged=false


}
}
})
}
logOut(){
  this._AuthService.logOut()
}
}
