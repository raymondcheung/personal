import * as React from 'react';
import { FunctionComponent, useEffect, useRef, useState } from 'react';

// import './eye-tile.scss';

export interface IEyeTileProps {
  // counter: number;
  // onClick?: () => void;
}

export const EyeTile: FunctionComponent<IEyeTileProps> = (props: IEyeTileProps) => {

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

  // const {counter: propsCounter, onClick} = props;

  // const handleClick = () => {
  //   if (onClick) {
  //     onClick();
  //   }
  // };

  return <div className="eye__container">
    <div className="eye__box">
      <div className='eye__eye-container'>
        <div className="eye__eyelid">
          <div className="eye__eyes">
            <div className="eye__eye">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};