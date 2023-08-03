import { Component, ElementRef, OnInit, SimpleChanges, inject } from '@angular/core';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { LinkedinTile } from './linkedin-tile';

@Component({
  selector: 'app-linkedin-tile',
  template: ``,
  styleUrls: ['./linkedin-tile.scss']
})
export class LinkedinTileComponent implements OnInit {

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
      createElement(LinkedinTile));
  }
}
