import * as React from 'react';
import { FunctionComponent } from 'react';

export interface IWorkTileProps {
}

export const WorkTile: FunctionComponent<IWorkTileProps> = (props: IWorkTileProps) => {

  return <div className="tile work-tile__container">
    <header className="work-tile__header">
      <h2>Work</h2>
    </header>
    <footer className="work-tile__actions"><a href="/work"><div className="work-tile__arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#181515" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18"></path><path d="M8 6h10v10"></path></svg></div></a></footer>
  </div>;
};