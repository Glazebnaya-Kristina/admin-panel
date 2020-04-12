import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics-card',
  templateUrl: './statistics-card.component.html',
  styleUrls: ['./statistics-card.component.sass']
})
export class StatisticsCardComponent implements OnInit {

  cards = [
    {
      value: '3,594',
      description: 'New orders',
      percent: '13',
      motion: 'increase'
    },
    {
      value: '105,990',
      description: 'TOTAL SALES',
      percent: '4',
      motion: 'increase'
    },
    {
      value: '50,890',
      iscurrency: true,
      description: 'Total Paid Out',
      percent: '21',
      motion: 'DECREASE'
    },
    {
      value: '453',
      description: 'NEW CUSTOMERS',
      percent: '5',
      motion: 'DECREASE'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  ckeckClass(card): string {
    return card.motion === 'DECREASE' ? 'statistics-card__wrapper-icon statistics-card__wrapper-icon--down' : 'statistics-card__wrapper-icon';
  }
}
