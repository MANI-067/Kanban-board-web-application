import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/userService/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProjectService } from '../services/projectService/project.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router ,private authService:AuthService,  
    private userService:UserService,
    private _snackBar: MatSnackBar
    ,private project:ProjectService
    ) { }

  loginForm:any|FormGroup;

  loginStatus:any;

  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  hide = true;

  ngOnInit() {
    // alert(`ngOnInit msg ${this.authService.getLoginStatus()}`);
   if(!this.authService.getLoginStatus()){
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required)
    });
   }else{
    this.loginForm = new FormGroup({
      userName: new FormControl(this.userService.getUser()),
      password: new FormControl('Password')
    });
   }
  }

  ngDoCheck(){
    this.loginStatus = this.authService.getLoginStatus();     
  }
  
 
  responsedata:any;
  loginCustomer() {   
    this.userService.loginUser(this.loginForm.value).subscribe( response=>{
      this.responsedata=response;
      console.log(this.responsedata);
      
      localStorage.setItem("jwt", this.responsedata.Token);

      // this.loginStatus=false;

      this.openSnackBar("Your Login was successful", "Ok") 
      console.log(this.loginForm.get('userName').value);
      localStorage.setItem("currentUser", this.loginForm.get('userName').value)
      
      this.userService.setUser(this.loginForm.get('userName').value); 
      this.authService.setLoginStatus();
      // this.loginStatus = true;
      
      this.router.navigate(['/boardView']);
  
    }, error=> {

      this.openSnackBar("There was error Login Try again", "Ok")  

    })
  }
  logout(){   
  
    this.authService.setLogOutStatus();
    this.userService.resetUser()
    this.loginForm.reset();
    this.project.setProjectName(undefined);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/login']);
  })
}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{duration:1000});
  }

  // Route to register page

  toRegisterPage(){
    this.authService.setLogOutStatus();
    this.userService.resetUser()
    this.loginForm.reset();
    this.project.setProjectName(undefined);
   this.router.navigate(['/register']); 
  }


// function openSnackBar(message: any, string: any, action: any, string1: any) {
//   throw new Error('Function not implemented.');
// }

// function toRegisterPage() {
//   throw new Error('Function not implemented.');
// }
}

