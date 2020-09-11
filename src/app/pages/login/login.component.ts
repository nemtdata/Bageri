import { HttpeService } from 'src/app/services/httpe.service';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';



@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  loginForm: FormGroup;

constructor(private cookie: CookieService, private httpe:  HttpeService, private fb: FormBuilder) {
}
ngOnInit(): void {
  this.loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
}
 onSubmit() {
this.httpe.getLogin(this.loginForm.value).subscribe(
  (response: any) => {
    console.log(response.access_token);
    if (response.access_token) {
      this.cookie.set('token', response.access_token, 7);
      this.cookie.set('user_id', response.user_id, 7);
      window.location.href = '/forside';
      return true;
    } else {

      return;
    }
  },
  error => {
    const err = document.getElementsByTagName('form')[0] as unknown as HTMLElement;
    console.log(err);
    if (!document.getElementsByClassName('error')[0]) {
      err.insertAdjacentHTML('afterbegin', `<p class="error">Der er noget der er gået helt galt!</p>`);
    }
  }
);


}
}
