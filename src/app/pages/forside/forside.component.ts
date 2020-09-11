import {Component,OnInit
} from '@angular/core';
import {HttpeService
} from '../../services/httpe.service';
import {FormGroup,FormBuilder,Validators,FormControl
} from '@angular/forms';



@Component({
  selector: 'app-forside',
  templateUrl: './forside.component.html',
  styleUrls: ['./forside.component.scss']
})
export class ForsideComponent implements OnInit {
  form: FormGroup;
  products: any;
  data: any;
  news: any
  newsletterForm: FormControl;
  interests: any;

  constructor(private httpService: HttpeService, private fb: FormBuilder) {

    this.newsletterForm = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);


  }
  async ngOnInit() {
    this.products = await this.httpService.getProducts().toPromise();
this.interests =  this.products.data
    console.log(this.products)
    this.data = this.httpService.getData().pipe().subscribe(res => {
      this.data = res;
      console.log(res);
    });
    console.log(this.data)
  }

  subscribe() {
    if (this.newsletterForm.valid) {
      console.log(this.newsletterForm.value);
    }

  }


}
