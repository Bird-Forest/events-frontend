import React from 'react';
import {
  WrapViewList,
  // SearchInput,
  // WrapSearch,
  // ViewWrap,
  // BtnSearch,
  // WrapInput,
} from './View.styled';
import ViewItem from './ViewItem';
import EmptyPage from 'helper/EmptyPage';
import { nanoid } from '@reduxjs/toolkit';
// import { LuSearchCheck, LuSearchSlash } from 'react-icons/lu';

export default function ViewList({ users }) {
  // const [byName, setByName] = useState(null);
  // const [byEmail, setByEmail] = useState(null);
  // const [users, setUsers] = useState(data.participants);

  // const getArrByName = () => {
  //   if (byName !== null) {
  //     const arr = users.filter(user =>
  //       user.name.toLowerCase().includes(byName)
  //     );
  //     setUsers(arr);
  //   }
  // };
  // const getArrByEmail = () => {
  //   if (byEmail !== null) {
  //     const arr = users.filter(user =>
  //       user.name.toLowerCase().includes(byEmail)
  //     );
  //     setUsers(arr);
  //   }
  // };
  // const clearName = () => {
  //   setByName('');
  // };
  // const clearEmail = () => {
  //   setByEmail('');
  // };
  const showArr = Array.isArray(users) && users.length !== 0;
  return (
    <WrapViewList>
      {showArr ? (
        users.map(item => <ViewItem key={nanoid()} item={item} />)
      ) : (
        <EmptyPage message={'Нажаль нічого не знайдено'} />
      )}
    </WrapViewList>
  );
}

// {
//   /* <WrapSearch>
//       <WrapInput>
//         <SearchInput
//           name="name"
//           type="text"
//           placeholder="search name ..."
//           onChange={evt => setByName(evt.target.value)}
//         />
//         <BtnSearch type="button" onClick={getArrByName}>
//           <LuSearchCheck className="icon-search" />
//         </BtnSearch>
//         <BtnSearch onClick={clearName}>
//           <LuSearchSlash className="icon-clear" />
//         </BtnSearch>
//       </WrapInput>
//       <WrapInput>
//         <SearchInput
//           name="email"
//           type="text"
//           placeholder="search email ..."
//           onChange={evt => setByEmail(evt.target.value)}
//         />
//         <BtnSearch type="button" onClick={getArrByEmail}>
//           <LuSearchCheck className="icon-search" />
//         </BtnSearch>
//         <BtnSearch onClick={clearEmail}>
//           <LuSearchSlash className="icon-clear" />
//         </BtnSearch>
//       </WrapInput>
//     </WrapSearch> */
// }

// {
//   /* {showArr ? (users.map(item => <ViewItem key={nanoid()} item={item} />)) :
//        ( <EmptyPage message={'Нажаль нічого не знайдено'} />)
//       } */
// }
