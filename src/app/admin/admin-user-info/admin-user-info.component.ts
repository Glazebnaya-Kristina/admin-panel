import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder, FormControl, FormControlName, FormGroupName} from '@angular/forms';

export interface UserInfo {
  name: string;
  description: string;
  limit: number;
  percent: number;
  wholeAmount: number;
  bio: string;
  skills: object;
  event: object;
}

@Component({
  selector: 'app-admin-user-info',
  templateUrl: './admin-user-info.component.html',
  styleUrls: ['./admin-user-info.component.sass']
})

export class AdminUserInfoComponent implements OnInit {

  userInfo: UserInfo = {
    name: 'Jordan Jackson',
    description: 'Beta Tester | Ultimate User',
    limit: 580,
    wholeAmount: 750,
    percent: 75,
    bio: 'Jordan graduated from Cornell University in 2004 with a Bachelor degree in computer science and a specialization in mathematics. While there, he published two articles on Code-project.',
    skills: [
      {
        id: 1,
        skill: 'Photography',
        class: 'photography'
      },
      {
        id: 2,
        skill: 'Teacher',
        class: 'teacher'
      },
      {
        id: 3,
        skill: 'Traveler',
        class: 'traveler'
      },
      {
        id: 4,
        skill: 'ios',
        class: 'ios'
      },
    ],
    event: [
      {
        title: 'Super Photography 2016',
        dataTime: 'January 13th, Vienna - 6:30 PM',
        skills: [
          {
            skill: 'Photography',
            class: 'photography'
          }
        ],
      },
      {
        title: 'Photox Expo',
        dataTime: 'March 28th, Paris - 7:30 PM',
        skills: [
          {
            skill: 'Design',
            class: 'design'
          }
        ],
      }
    ]
  };

  buttonEdit = false;
  // info = {
  //   email: 'jordan.jackson@dashboard.com',
  //   tel: '+44 (0) 7887 665 588',
  //   skillLvl: 'Senior (50K+)'
  // };

  formUserInfo: FormGroup;
  // TEL_REGULAR = /(\+44)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g;
  // TEL_REGULAR = /^\+\d{2}\(\d{1}\)\d{4}-\d{3}-\d{3}$/;
  TEL_REGULAR = /^\+\d{2}\s\(\d{1}\)\s\d{4}\s\d{3}\s\d{3}$/;

  constructor(private formBuilder: FormBuilder) {
    this.formUserInfo = formBuilder.group({
      userEmail: ['jordan.jackson@dashboard.com', [Validators.required, Validators.email]],
      userTel: ['+44 (0) 7887 665 588', [Validators.required, Validators.pattern(this.TEL_REGULAR)]],
      userSkill: ['Senior (50K+)', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  removeClassPointEven() {
    this.buttonEdit = !this.buttonEdit;
  }
}
