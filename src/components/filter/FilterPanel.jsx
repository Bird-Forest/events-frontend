import React from 'react';
import { useGetEventsAllQuery } from '../../redux/EventSlice';
import { BtnFilter, WrapBtn, WrapCategory, WrapFilter } from './Filter.styled';
import FilterOrganizer from './FilterOrganizer';
import FilterSpeciality from './FilterSpeciality';
import FilterDate from './FilterDate';
import { FaSearch, FaSearchMinus } from 'react-icons/fa';

function getCategories(items, itemName) {
  if (!items) return [];
  return items.reduce((acc, item) => {
    if (!acc.includes(item[itemName])) acc.push(item[itemName]);
    return acc.sort((a, b) => a.localeCompare(b));
  }, []);
}

export default function FilterPanel() {
  const { data } = useGetEventsAllQuery();
  const organizers = getCategories(data, 'organizer');
  const specialties = getCategories(data, 'title');

  return (
    // <FilterBar>
    <WrapFilter>
      <WrapCategory>
        <FilterOrganizer organizers={organizers} />
        <FilterSpeciality specialties={specialties} />
      </WrapCategory>
      <FilterDate />
      <WrapBtn>
        <BtnFilter type="button">
          <FaSearch className="icon-search" />
        </BtnFilter>
        <BtnFilter type="button">
          <FaSearchMinus className="icon-search" />
        </BtnFilter>
      </WrapBtn>
    </WrapFilter>
    // </FilterBar>
  );
}

function filterData(data, param1, param2, param3) {
  return data.filter(item => {
    // Замените свойства объекта на те, которые вы хотите использовать для фильтрации
    const value1 = item.property1;
    const value2 = item.property2;
    const value3 = item.property3;

    // Примените условия фильтрации
    return value1 === param1 && value2 === param2 && value3 === param3;
  });
}

// Пример использования
const dataArray = [
  { id: 1, property1: 'A', property2: 'X', property3: 'Z' },
  { id: 2, property1: 'B', property2: 'Y', property3: 'Z' },
  // ... другие объекты
];

const filteredData = filterData(dataArray, 'A', 'X', 'Z');
console.log(filteredData);
