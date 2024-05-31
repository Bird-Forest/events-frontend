import React from 'react';
// import { useGetEventsAllQuery } from '../../redux/eventSlice';
import { FilterBar, WrapFilter } from './Filter.styled';
// import FilterOrganizer from './FilterOrganizer';
// import FilterSpeciality from './FilterSpeciality';
import FilterDate from './FilterDate';
// import { FaSearch, FaSearchMinus } from 'react-icons/fa';
import FilterCategory from './FilterCategory';

export default function FilterPanel() {
  return (
    <FilterBar>
      <WrapFilter>
        <FilterCategory />
        <FilterDate />
      </WrapFilter>
      {/* <WrapBtn>
        <BtnFilter type="button">
          <FaSearch className="icon-search" />
        </BtnFilter>
        <BtnFilter type="button">
          <FaSearchMinus className="icon-search" />
        </BtnFilter>
      </WrapBtn> */}
    </FilterBar>
  );
}
