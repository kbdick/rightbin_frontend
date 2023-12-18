import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.scss']
})

export class EmailLoginComponent implements OnInit {
  form: UntypedFormGroup;
  loading = false;
  serverMessage: string;

  constructor(private fb: UntypedFormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(8), Validators.required]],
    });

    // No need to unsubscribe
    this.userService.currentUser.subscribe(user => {
      if (user) {
        this.router.navigate(['/collect_form']);
      }
    })
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  async onSubmit() {
    this.loading = true;
    const email = this.email.value;
    const password = this.password.value;

    this.userService.signIn(email, password);

    this.loading = false;
  }
}
