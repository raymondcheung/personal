import * as React from 'react';
import { FunctionComponent, useEffect, useRef, useState } from 'react';

export const WelcomeTile: FunctionComponent = () => {

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

  return <div className="welcome-tile__container">
    <header className="welcome-tile__header-wrapper">
      <h2 className="welcome-tile__header">👋  My name is Raymond, and I build web apps.</h2>
    </header>
    <p className="welcome-tile__description">
      Besides that, I also like to contribute to interesting <a>projects</a> and gaming.
    </p>
  </div>;
};