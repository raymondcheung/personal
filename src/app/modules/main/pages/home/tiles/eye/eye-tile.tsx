import * as React from 'react';
import { FunctionComponent } from 'react';

export interface IEyeTileProps {}

export const EyeTile: FunctionComponent<IEyeTileProps> = (props: IEyeTileProps) => {

  return <div className="tile eye__container">
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