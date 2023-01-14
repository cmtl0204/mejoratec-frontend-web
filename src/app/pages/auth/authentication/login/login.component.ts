import {Component, OnInit} from '@angular/core';
import {AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../../../services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  formLogin: UntypedFormGroup;
  progressBar: boolean = false;
  isPasswordReset = false;
  transaction: string = 'login';
  scrollNumber: number = 0;

  constructor(private formBuilder: UntypedFormBuilder,
              private router: Router,
              private authService: AuthService,) {
    this.formLogin = this.newFormLogin();
  }

  ngOnInit(): void {

  }

  newFormLogin(): UntypedFormGroup {
    return this.formBuilder.group({
      // username: ['kfc@gmail.com', [Validators.required]],
      username: [null, [Validators.required]],
      // password: ['12345678', [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  onSubmit() {
    this.login();
    if (this.formLogin.valid) {
      this.login();
    } else {
      this.formLogin.markAllAsTouched();
    }
  }

  login() {
    this.progressBar = true;
    this.authService.isLoggIn = true;
    this.router.navigate(['/mejoratec/home']);
  }
}
