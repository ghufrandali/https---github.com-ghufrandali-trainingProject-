import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor( private service: AuthService ) { }

  ngOnInit(): void {
  }

  login = new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  }) 

  submit(){
    
    this.service.login(this.login.value).subscribe( response=>{
      this.service.Auth();
      console.log(response.headers)
    }
    );
  }
}
