import { Component, OnInit, Input } from '@angular/core';
import { HttpeService } from '../../services/httpe.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders  } from '@angular/common/http';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],


})


export class ProductComponent implements OnInit {
  singleData: any;
  ingredients: any;

comment: any;

  constructor(private httpService: HttpeService, private router: Router, private http: HttpClient) {

  }

  ngOnInit(): void {


    const id = this.router.url.replace('/product/', '');

   this.httpService.getSingleData(id).subscribe(res => {
      this.singleData = res;

    });
  };

}


