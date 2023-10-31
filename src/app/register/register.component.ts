import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../services/userService/user.service';
import { CustomValidation } from '../services/CustomValidation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private breakPoint: BreakpointObserver,private userService:UserService, private fb:FormBuilder
    , private matSnackBar:MatSnackBar, private routing: Router) { }

    DeskTopView:boolean=false;
    ngOnInit(){
      this.breakPoint.observe([Breakpoints.Handset]).subscribe(
        result => {
          this.DeskTopView = !result.matches;
        }
      )
    }
    
    

    // phonePattern = /^[7-9]\d{9}$/;
    // emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z.-]+\.[a-zA-Z]{2,4}$/;
    // passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    // passwordPattern=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

   registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z.-]+\.[a-zA-Z]{2,4}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^[7-9]\d{9}$/)]],
      password: ['' ,[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]],
      Cpassword: ['', Validators.required],
      name:['', Validators.required],
      projectList: new FormArray([])
    }, {
      validators: [CustomValidation.passwordMatchValidator]
    });

    get getEmail() {
      return this.registerForm.get('email');
    }
    
    get getPhone() {
      return this.registerForm.get('phone');
    }
    
    get getPassword() {
      return this.registerForm.get('password');
    }
    
    get getCPassword() {
      return this.registerForm.get('Cpassword');
    }
    
    get getName() {
      return this.registerForm.get('name');
    }
   
    

      // ------------- Code to register the customer finally-------------------------------------
  responsedata:any;
  registerCustomer() {
    console.log(this.registerForm.value);
    
    this.userService.regsiterCustomer(this.registerForm.value).subscribe( response=>{
      this.responsedata=response;
      console.log(this.responsedata);
      
      this.openSnackBar("Your Account Was Created Successfully Kindly Login Using Credentials", "Ok");

      this.routing.navigate(['/login'])

    }, error=>{
      this.openSnackBar("Account with the same UserName already exists", "Ok");

    })


  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action,{duration:3000});

  }


  
  canExit() {
    if (this.registerForm.dirty && this.registerForm.invalid) {
      return confirm('Are you sure you want to leave this page without saving?');
    } else {
      return true;
    }
  }
  
  
}

