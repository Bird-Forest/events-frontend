import React, { useState } from 'react';
import {
  BtnMobile,
  Diagram,
  FilterBar,
  FilterMob,
  WrapFilter,
} from './Filter.styled';
import FilterDate from './FilterDate';
import FilterCategory from './FilterCategory';
import { FaFilter } from 'react-icons/fa6';
import { GiHistogram } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import WindowWidth from '../../helper/WindowWidth';

export default function FilterPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const widthVP = WindowWidth();

  return (
    <FilterBar>
      <BtnMobile onClick={() => setIsOpen(!isOpen)}>
        <FaFilter className="icon-filter" />
      </BtnMobile>
      {widthVP < 1100 ? (
        <FilterMob
          style={{
            display: isOpen ? 'block' : 'none',
          }}
        >
          <WrapFilter>
            <FilterCategory />
            <FilterDate />
          </WrapFilter>
        </FilterMob>
      ) : (
        <WrapFilter>
          <FilterCategory />
          <FilterDate />
        </WrapFilter>
      )}
      <Link to="chart">
        <Diagram>
          <GiHistogram className="icon-graph" />
        </Diagram>
      </Link>
    </FilterBar>
  );
}
