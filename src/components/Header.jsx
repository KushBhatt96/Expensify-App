import React from 'react';
import { NavLink } from 'react-router-dom';

// NavLink is better suited than Link when you want to highlight that you are on a specific page
const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact>
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active" exact>
      Create Expense
    </NavLink>
    <NavLink to="/edit" activeClassName="is-active" exact>
      Edit Expense
    </NavLink>
    <NavLink to="/help" activeClassName="is-active" exact>
      Help Page
    </NavLink>
  </header>
);

export default Header;
