

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],

})
export class SlideshowComponent implements OnInit {

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: 'assets/IMgs/Promocao1.png',
      title: '',
      subtitle: ''
    };
    this.slides[1] = {
      id: 1,
      src: 'assets/IMgs/promocao2.png',
      title: '',
      subtitle: ''
    }
    this.slides[2] = {
      id: 2,
      src: 'assets/IMgs/Promocao3.png',
      title: '',
      subtitle: ''
    }
  }
}

