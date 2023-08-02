import { Component, ElementRef, Input, OnInit, SimpleChanges, inject } from '@angular/core';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { ProjectTile } from './project-tile';

@Component({
  selector: 'app-project-tile',
  template: ``,
  styleUrls: ['./project-tile.scss']
})
export class ProjectTileComponent implements OnInit {
  @Input()
  props: any = {};

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
      createElement(ProjectTile, this.props));
  }
}
