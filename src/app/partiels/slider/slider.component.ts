import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  images = [];
  current: number = 0;
  width = window.innerWidth;


  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.images.length)
    const path = '../../assets/images/';

    switch(this.router.url) {
          case '/forside':

           this.images = [path + 'slide1.jpg', path + 'slide2.jpg', path + 'slide3.jpg']
         break;

       }

    }

  prev() {
    const slides = document.querySelectorAll('.slider figure') as NodeListOf<HTMLElement>;
    this.current = (this.current >= 1) ? (this.current - 1) % - this.images.length : this.images.length - 1;
    slides.forEach(slide => slide.style.transform = `translateX(-${this.width * this.current}px)`)
  }
  next() {
    const slides = document.querySelectorAll('.slider figure') as NodeListOf<HTMLElement>;
    this.current = (this.current + 1) % this.images.length;
    slides.forEach(slide => slide.style.transform = `translateX(-${this.width * this.current}px)`)
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = window.innerWidth;


  }



}
