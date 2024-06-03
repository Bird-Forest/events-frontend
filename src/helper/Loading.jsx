import React from 'react';
import { Loader, WrapLoading } from './Helper.styled';
// import { RevolvingDot } from 'react-loader-spinner';

export default function Loading() {
  return (
    <WrapLoading>
      <Loader />
    </WrapLoading>
  );
}
// export default function Loading() {
//   return (
//     <WrapLoading>
//       <RevolvingDot
//         visible={true}
//         height="80"
//         width="80"
//         color="#00acc1"
//         ariaLabel="revolving-dot-loading"
//         wrapperStyle={{}}
//         wrapperClass=""
//       />
//     </WrapLoading>
//   );
// }
