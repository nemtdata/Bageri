import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  id: string;

  constructor(private router: Router, private authService: AuthService) { }


  ngOnInit() {
    this.id = localStorage.getItem('token');
  }

}
