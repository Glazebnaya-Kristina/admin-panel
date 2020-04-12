import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.sass']
})
export class ProgressBarComponent implements OnInit {

  @Input() limit;
  @Input() wholeAmount;
  @Input() percent;

  constructor() { }

  ngOnInit(): void {
  }
}
