import { Component, ElementRef, OnInit, SimpleChanges, inject } from '@angular/core';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { EyeTile } from './eye-tile';

@Component({
  selector: 'app-eye-tile',
  template: ``,
  styleUrls: ['./eye-tile.scss']
})
export class EyeTileComponent implements OnInit {

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
      createElement(EyeTile));
  }
}
