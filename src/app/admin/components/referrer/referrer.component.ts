import { Component, OnInit } from '@angular/core';

export interface Referrer {
  link: string;
  views: number;
  sales: number;
  conversion: number;
  total: number;
}

@Component({
  selector: 'app-referrer',
  templateUrl: './referrer.component.html',
  styleUrls: ['./referrer.component.sass']
})
export class ReferrerComponent implements OnInit {

  referrerArr: Referrer[] = [
    {
      link: 'note.com',
      views: 54,
      sales: 12,
      conversion: 10.5,
      total: 50
    },
    {
      link: 'Direct, email, IM',
      views: 96,
      sales: 24,
      conversion: 25,
      total: 10
    },
    {
      link: 'Recommended',
      views: 5,
      sales: 5,
      conversion: 100,
      total: 10
    },
    {
      link: 'Dribbble',
      views: 1,
      sales: 0,
      conversion: 0.0,
      total: 0
    },
    {
      link: 'google.co.uk',
      views: 5,
      sales: 0,
      conversion: 0.0,
      total: 0
    },
    {
      link: 'google.com.tr',
      views: 0,
      sales: 0,
      conversion: 0.0,
      total: 0
    },
    {
      link: 'mail.google.com',
      views: 1,
      sales: 0,
      conversion: 0.0,
      total: 0
    },
    {
      link: 'facebook.com',
      views: 5,
      sales: 0,
      conversion: 0.0,
      total: 0
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
