import React from 'react';
// import { useGetEventsAllQuery } from '../../redux/eventSlice';
import {
  Diagram,
  FilterBar,
  FilterMobile,
  FilterVisual,
  WrapFilter,
} from './Filter.styled';
// import FilterOrganizer from './FilterOrganizer';
// import FilterSpeciality from './FilterSpeciality';
import FilterDate from './FilterDate';
// import { FaSearch, FaSearchMinus } from 'react-icons/fa';
import FilterCategory from './FilterCategory';
import { FaFilter } from 'react-icons/fa6';
import { GiHistogram } from 'react-icons/gi';

export default function FilterPanel() {
  return (
    <FilterBar>
      <FilterMobile>
        <FaFilter className="icon-filter" />
      </FilterMobile>
      <FilterVisual>
        <WrapFilter>
          <FilterCategory />
          <FilterDate />
        </WrapFilter>
      </FilterVisual>

      {/* <WrapBtn>
        <BtnFilter type="button">
          <FaSearch className="icon-search" />
        </BtnFilter>
        <BtnFilter type="button">
          <FaSearchMinus className="icon-search" />
        </BtnFilter>
      </WrapBtn> */}
      <Diagram>
        <GiHistogram className="icon-graph" />
      </Diagram>
    </FilterBar>
  );
}
