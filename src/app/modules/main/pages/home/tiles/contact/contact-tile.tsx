import * as React from 'react';
import { FunctionComponent } from 'react';

export interface IContactTileProps {
}

export const ContactTile: FunctionComponent<IContactTileProps> = (props: IContactTileProps) => {

  return <div className="tile contact-tile__container">
    <header className="contact-tile__header">
      Say Hello!
    </header>
    <p className="contact-tile__description">
      Reach out to me, for collaboration, say hi, or anything else.
    </p>
    <footer><a href=""><div className="contact-tile__button">darkray16@gmail.com</div></a></footer>
  </div>;
};