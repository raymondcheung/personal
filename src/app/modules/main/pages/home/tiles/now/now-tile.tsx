import * as React from 'react';
import { FunctionComponent } from 'react';


export interface INowTileProps {
}

export const NowTile: FunctionComponent<INowTileProps> = (props: INowTileProps) => {

  return <div className="tile now-tile__container">
    <header className="now-tile__header">
      Now
    </header>
    <p className="now-tile__description">
      What am I up to?
    </p>
    <footer className="now-tile__actions"><a href="/now"><div className="now-tile__arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#181515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18"></path><path d="M8 6h10v10"></path></svg></div></a></footer>
  </div>;
};