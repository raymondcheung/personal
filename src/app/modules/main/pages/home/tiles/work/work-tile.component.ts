import { Component, ElementRef, OnInit, SimpleChanges, inject } from '@angular/core';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { WorkTile } from './work-tile';

@Component({
  selector: 'app-work-tile',
  template: ``,
  styleUrls: ['./work-tile.scss']
})
export class WorkTileComponent implements OnInit {

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
      createElement(WorkTile));
  }
}
