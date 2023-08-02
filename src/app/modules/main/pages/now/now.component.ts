import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-now',
  templateUrl: './now.component.html',
  styleUrls: ['./now.component.scss']
})
export class NowComponent {
  lastUpdate: BehaviorSubject<string> = new BehaviorSubject("July 27th 2023");
  
  constructor() {
    console.log("YESY");
  }
}
