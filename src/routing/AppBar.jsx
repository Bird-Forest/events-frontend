import { AppBarWrap } from 'App.styled';
import React from 'react';
import Navigate from './Navigate';
import FilterPanel from '../components/filter/FilterPanel';

export default function AppBar() {
  return (
    <AppBarWrap>
      <Navigate />
      <FilterPanel />
    </AppBarWrap>
  );
}
