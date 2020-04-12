import {Component, OnInit} from '@angular/core';

export interface Friend {
  urlFoto: string;
  name: string;
  specialty: string;
  mode?: string;
  smsQuantity?: number;
  writes: boolean;
}

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.sass']
})

export class AsideComponent implements OnInit {

  friendArr: Friend[] = [
    {
      urlFoto: 'friend-2',
      name: 'Caroline',
      specialty: 'Designer',
      mode: 'online',
      smsQuantity: 2,
      writes: true
    },
    {
      urlFoto: 'friend-1',
      name: 'Claire',
      specialty: 'Designer',
      mode: 'online',
      writes: false
    },
    {
      urlFoto: 'user',
      name: 'Lina',
      specialty: 'Sales Manager',
      mode: 'offline',
      writes: false
    },
    {
      urlFoto: 'friend-2',
      name: 'Jason',
      specialty: 'CTO',
      mode: 'online',
      smsQuantity: 8,
      writes: false
    },
    {
      urlFoto: 'user',
      name: 'Dash',
      specialty: 'Design Lead',
      mode: 'offline',
      writes: false
    },
    {
      urlFoto: 'friend-1',
      name: 'Jessica',
      specialty: 'Designer',
      mode: 'online',
      writes: true
    },
  ];

  invite = 54;
  toggleAside = false;

  constructor() { }

  ngOnInit(): void {
  }

  openNavigation(){
    if (screen.width < 1400) {
      this.toggleAside = !this.toggleAside;
    }
  }
}
