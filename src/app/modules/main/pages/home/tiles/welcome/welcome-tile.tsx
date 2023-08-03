import * as React from 'react';
import { FunctionComponent } from 'react';

export const WelcomeTile: FunctionComponent = () => {

  return <div className="tile welcome-tile__container">
    <header className="welcome-tile__header-wrapper">
      <h2 className="welcome-tile__header">👋  My name is Raymond, and I build web apps.</h2>
    </header>
    <p className="welcome-tile__description">
      Besides that, I also like to contribute to interesting <a>projects</a> and gaming.
    </p>
  </div>;
};