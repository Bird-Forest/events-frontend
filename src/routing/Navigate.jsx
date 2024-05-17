import React from 'react';
import { NavWrap } from './Navigate.styled';
import { NavLink } from 'react-router-dom';

export default function Navigate() {
  return (
    <NavWrap>
      <NavLink className="navigate" to="/">
        Home
      </NavLink>
      <NavLink className="navigate" to="/filter">
        Filter
      </NavLink>
      {/* <NavLink className="navigate" to="/view">
        View
      </NavLink> */}
      {/* <h4 className="title-top">Choose an event</h4> */}
    </NavWrap>
  );
}
