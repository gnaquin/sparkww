import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    direction: 'horizontal',
    speed: 100,
    spaceBetween: 1,
    slidesPerView: 1.5,
    loop: true,
  };

  constructor() { }

  ngOnInit() {
  }

}
