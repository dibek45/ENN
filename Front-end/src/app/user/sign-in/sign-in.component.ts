import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import {UserService} from '../../shared/user.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
serverErrorMessages: string;
  registerForm: any;
  constructor(private _userService : UserService, private router: Router,private formBuilder: FormBuilder) {

  }

model = {
  email: '',
  password: ''
}
emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
    if (this._userService.isLoggedIn) {
      this.router.navigateByUrl('/userProfile');
    }
  }

  onSubmit() {
alert(JSON.stringify(this.registerForm.value));
    this._userService.login(this.registerForm.value.usuario,this.registerForm.value.password).subscribe(
      (res) => {alert(JSON.stringify(res))
      },
      (err) => {
        console.log(JSON.stringify(err));
        this.serverErrorMessages = err.error.message;
      });
  }
}
