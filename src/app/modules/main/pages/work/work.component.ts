import { Component, OnInit } from '@angular/core';
import { workData } from './work-data';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  public workData = workData;
  public years: string[] = [];
  
  constructor() { }

  ngOnInit(): void {
    for (let data of this.workData) {
      if (!this.years.includes(data.lastUpdate.year)) {
        this.years.push(data.lastUpdate.year);
      }
    }
    console.log(this.years);
  }
}
