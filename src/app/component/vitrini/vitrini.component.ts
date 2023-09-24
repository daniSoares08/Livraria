

import { Component } from '@angular/core';

@Component({
  selector: 'app-vitrini',
  templateUrl: './vitrini.component.html',
  styleUrls: ['./vitrini.component.css']
})
export class VitriniComponent {

  books = [
    {
      id: 1,
      title: 'A cabana do pai Tomás',
      description: '',
      image: 'assets/IMgs/Liv1.png',
      price: 29.99
    },
    {
      id: 2,
      title: '1984',
      description: '',
      image: 'assets/IMgs/Liv2.png',
      price: 35.00
    },
    {
      id: 3,
      title: 'Hamlet',
      description: '',
      image: 'assets/IMgs/Liv3.png',
      price: 20.00
    },
    {
      id: 4,
      title: 'Romeu e Julieta',
      description: '',
      image: 'assets/IMgs/Liv4.png',
      price: 19.99,
    },
    {
      id: 5,
      title: 'Harry Potter e a Pedra Filosofal',
      description: '',
      image: 'assets/IMgs/Liv5.png',
      price: 45.90
    },
    {
      id: 6,
      title: 'O Sol é para todos',
      description: '',
      image: 'assets/IMgs/LIV6.png',
      price: 59.99
    },
    {
      id: 7,
      title: 'Homem Invisível',
      description: '',
      image: 'assets/IMgs/LIV7.png',
      price: 29.99
    },
    {
      id: 8,
      title: 'The Jungle',
      description: '',
      image: 'assets/IMgs/LIV8.png',
      price: 85.00
    },
    {
      id: 9,
      title: 'Pedro Páramo',
      description: '',
      image: 'assets/IMgs/LIV9.png',
      price: 59.99
    },
    {
      id: 10,
      title: 'Drácula',
      description: '',
      image: 'assets/IMgs/LIV10.png',
      price: 19.99
    },
  ];
}


