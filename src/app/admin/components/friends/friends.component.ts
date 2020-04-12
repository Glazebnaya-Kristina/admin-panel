import {Component, Input, OnInit} from '@angular/core';
import {Friend} from '../../aside/aside.component';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.sass']
})
export class FriendsComponent implements OnInit {
  @Input() friend: Friend;

  constructor() {
  }
  ngOnInit(): void {
  }

}
