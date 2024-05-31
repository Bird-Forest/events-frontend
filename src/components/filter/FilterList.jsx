// import React from 'react';
// import { ListFilter } from './Filter.styled';
// import Event from 'components/events/Event';
// import { nanoid } from '@reduxjs/toolkit';
// import EmptyPage from 'helper/EmptyPage';

// export default function FilterList({ data, location }) {
//   const showArr = Array.isArray(data) && data.length !== 0;
//   return (
//     <ListFilter>
//       {showArr ? (
//         data.map(item => (
//           <Event key={nanoid()} item={item} location={location} />
//         ))
//       ) : (
//         <EmptyPage message={'There is nothing here yet'} />
//       )}
//     </ListFilter>
//   );
// }
