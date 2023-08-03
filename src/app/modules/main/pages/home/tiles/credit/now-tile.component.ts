import { Component, ElementRef, OnInit, SimpleChanges, inject } from '@angular/core';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { NowTile } from './now-tile';

@Component({
  selector: 'app-now-tile',
  template: ``,
  styleUrls: ['./now-tile.scss']
})
export class NowTileComponent implements OnInit {

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
      createElement(NowTile));
  }
}
