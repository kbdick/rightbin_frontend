import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators, AbstractControl } from '@angular/forms';
import { map, take, debounceTime } from 'rxjs/operators';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm: UntypedFormGroup

  constructor(private fb: UntypedFormBuilder, public userService: UserService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email:['', [
        Validators.required,
        Validators.email
        ]],
      username:  ['',
        Validators.required
        ],
    });
  }

    get email() {
      return this.loginForm.get('email')
    }

    get username() {
      return this.loginForm.get('username')
    }
}


