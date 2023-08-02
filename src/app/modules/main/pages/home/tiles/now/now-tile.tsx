import * as React from 'react';
import { FunctionComponent, useEffect, useRef, useState } from 'react';

// import './eye-tile.scss';

export interface INowTileProps {
  // counter: number;
  // onClick?: () => void;
}

export const NowTile: FunctionComponent<INowTileProps> = (props: INowTileProps) => {

  const timerHandle = useRef<number | null>(null);
  const [stateCounter, setStateCounter] = useState(42);

  useEffect(() => {
    timerHandle.current = +setInterval(() => {
      setStateCounter(stateCounter + 1);
    }, 2500);

    return () => {
      if (timerHandle.current) {
        clearInterval(timerHandle.current);
        timerHandle.current = null;
      }
    };
  });

  return <div className="now-tile__container">
    <header className="now-tile__header">
      Now
    </header>
    <p className="now-tile__description">
      What am I up to?
    </p>
    <footer className="now-tile__actions"><a href="/now"><div className="now-tile__arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#181515" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18"></path><path d="M8 6h10v10"></path></svg></div></a></footer>
  </div>;
};