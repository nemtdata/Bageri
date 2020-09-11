
import { Component, OnInit } from '@angular/core';
import { HttpeService } from '../../services/httpe.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.scss']
})
export class KategoriComponent implements OnInit {
  data: any;
  commentCount: any;
  configUrlComments = 'https://api.mediehuset.net/bakeonline/comments/';


  constructor(private httpService: HttpeService, private http: HttpClient) {
  }

  ngOnInit(): void {}
}
