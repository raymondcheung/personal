import * as React from 'react';
import { FunctionComponent, useEffect, useRef, useState } from 'react';

// import './eye-tile.scss';

export interface IGithubTileProps {
  // counter: number;
  // onClick?: () => void;
}

export const GithubTile: FunctionComponent<IGithubTileProps> = (props: IGithubTileProps) => {

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

  return <div className="github__container">
    <header className="github__header">
      Github!  My name is Raymond Cheung, and I build web applications.
    </header>
    <p className="github__description">
      Besides that, I also like to contribute to interesting <a>projects</a> and gaming.
    </p>
  </div>;
};