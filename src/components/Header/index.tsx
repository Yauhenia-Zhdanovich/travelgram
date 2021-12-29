import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faPlus } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <header>
      <div>Logo</div>
      <input type="text" placeholder="search" />
      <nav>
        <FontAwesomeIcon icon={faHouseUser} />
        <FontAwesomeIcon icon={faPlus} />
        <div></div>
      </nav>
      <section>
        <div></div>
        <div>
          <h3>desription</h3>
        </div>
      </section>
      <section>
        <nav>
          <h3>Publications</h3>
        </nav>
      </section>
    </header>
  );
};
