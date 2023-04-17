import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
isLoading:boolean= false;
apiError:string='';
constructor(private _AuthService:AuthService, private _Router:Router){
  _AuthService.checkLocalStorage()
}
   loginForm:FormGroup= new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
    });

    handleLogin(loginForm:FormGroup){
this.isLoading=true;
if(loginForm.valid){
this._AuthService.login(loginForm.value).subscribe({
  next:(res=>{
    if(res.message === 'success'){
      localStorage.setItem('token', res.token)
      this._AuthService.checkLocalStorage()
      this.isLoading=false;
    this._Router.navigate(['/home'])
    }
  }),
  error: (err=>{
    this.isLoading=false;
    console.log(err);
    this.apiError= err.error.message

  }),
  })
}


}

}




function getItem(arg0: string): import("rxjs").BehaviorSubject<null> {
  throw new Error('Function not implemented.');
}

function next(arg0: string | null) {
  throw new Error('Function not implemented.');
}

