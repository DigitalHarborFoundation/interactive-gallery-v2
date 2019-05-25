import React, { useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const NavDrawer = props => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/submit-project">Submit</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavDrawer.propTypes = {};

export default NavDrawer;
