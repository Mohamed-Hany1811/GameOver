import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
isLoading:boolean= false;
apiError:string='';
constructor(private _AuthService:AuthService, private _Router:Router){}
   registerForm:FormGroup= new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    });

    handleRegister(registerForm:FormGroup){
this.isLoading=true;
if(registerForm.valid){
this._AuthService.register(registerForm.value).subscribe({
  next:(res=>{
    if(res.message === 'success'){
      console.log(res);

      this.isLoading=false;
      this._Router.navigate(['/login'])
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




