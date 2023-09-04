import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() name: string;
  @Output() nameChange = new EventEmitter<string>();
  
  public day = (new Date()).toLocaleDateString('en-US',{weekday: 'long'});

  public ngOnInit(): void {
    setTimeout(() => {
      this.nameChange.emit("changed!")
    }, 3000)
  }
}
