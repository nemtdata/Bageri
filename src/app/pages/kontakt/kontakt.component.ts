import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from  '@angular/forms';
import { ValidationService } from './Validation.service';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent  {
  userForm: any;

  constructor(private formBuilder: FormBuilder) {

    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      profile: ['', [Validators.required, Validators.minLength(10)]]
    });

    console.log(this.userForm);
  }

  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email} Profile: ${this.userForm.value.profile} ` );

// this.httpe.post nyhedsbrev api
// postcontact(){
  //   this.httpe.postcontact(this.userForm.value).subscribe(
  //     (response: any) => {
  //  console.log(response)
  //         window.location.href = '/forside';
  //         return true;
  //       }
  //   );
// }
    }
  }
}

