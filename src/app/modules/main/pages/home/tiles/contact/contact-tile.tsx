import * as React from 'react';
import { FunctionComponent, useEffect, useRef, useState } from 'react';

// import './eye-tile.scss';

export interface IContactTileProps {
  // counter: number;
  // onClick?: () => void;
}

export const ContactTile: FunctionComponent<IContactTileProps> = (props: IContactTileProps) => {

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

  return <div className="contact-tile__container">
    <header className="contact-tile__header">
      Say Hello!
    </header>
    <p className="contact-tile__description">
      Reach out to me, for collaboration, say hi, or anything else.
    </p>
    <footer><a href=""><div className="contact-tile__button">darkray16@gmail.com</div></a></footer>
  </div>;
};