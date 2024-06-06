import React, { useState } from 'react';
import {
  BtnMobile,
  Diagram,
  FilterBar,
  FilterVisual,
  WrapFilter,
} from './Filter.styled';
import FilterDate from './FilterDate';
import FilterCategory from './FilterCategory';
import { FaFilter } from 'react-icons/fa6';
import { GiHistogram } from 'react-icons/gi';
import { Link } from 'react-router-dom';

export default function FilterPanel() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <FilterBar>
      <BtnMobile onClick={() => setIsOpen(!isOpen)}>
        <FaFilter className="icon-filter" />
      </BtnMobile>
      <FilterVisual
        style={{
          display: !isOpen ? 'none' : 'block',
        }}
      >
        <WrapFilter>
          <FilterCategory />
          <FilterDate />
        </WrapFilter>
      </FilterVisual>
      <Link to="chart">
        <Diagram>
          <GiHistogram className="icon-graph" />
        </Diagram>
      </Link>
    </FilterBar>
  );
}
