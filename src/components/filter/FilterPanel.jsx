import React from 'react';
import { useGetEventsAllQuery } from '../../redux/EventSlice';
import { BiSolidSearchAlt2 } from 'react-icons/bi';
import { BtnFilter, FilterBar, WrapFilter } from './Filter.styled';
import FilterOrganizer from './FilterOrganizer';
import FilterSpeciality from './FilterSpeciality';
import FilterDate from './FilterDate';

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
    <FilterBar>
      <WrapFilter>
        <FilterOrganizer organizers={organizers} />
        <FilterSpeciality specialties={specialties} />
        <FilterDate />
        <BtnFilter type="button">
          <BiSolidSearchAlt2 className="icon-search" />
        </BtnFilter>
      </WrapFilter>
    </FilterBar>
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
