import { Component, ElementRef, OnInit, SimpleChanges, inject } from '@angular/core';
import { createElement } from 'react';
import { WelcomeTile } from './welcome-tile';
import { createRoot } from 'react-dom/client';

@Component({
  selector: 'app-welcome-tile',
  template: ``,
  styleUrls: ['./welcome-tile.scss']
})
export class WelcomeTileComponent implements OnInit {

  private root = createRoot(inject(ElementRef).nativeElement);

  public constructor() {}

  ngOnInit(): void {
    this.render();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }

  ngAfterViewInit(): void {
    this.render();
  }

  private render(): void {
    this.root.render(
      createElement(WelcomeTile));
  }
}
