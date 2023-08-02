import * as React from 'react';
import { FunctionComponent, useEffect, useRef, useState } from 'react';

export interface IProjectTileProps {
  url: string;
  description: string;
  name: string;
  lastUpdated: string;
}

export const ProjectTile: FunctionComponent<IProjectTileProps> = (props: IProjectTileProps) => {
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

  return <div className="project-tile__container">
    <header className="project-tile__header">
      <h2>{props.name}</h2>
    </header>
    <p className="project-tile__description">{props.description}</p>
    <footer className="project-tile__actions"><a href={`${props.url}`}><div className="project-tile__arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18"></path><path d="M8 6h10v10"></path></svg></div></a></footer>
  </div>;
};