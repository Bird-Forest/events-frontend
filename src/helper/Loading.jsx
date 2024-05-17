import React from 'react';
import { WrapLoading } from './Helper.styled';
import { Watch } from 'react-loader-spinner';

export default function Loading() {
  return (
    <WrapLoading>
      <Watch
        visible={true}
        height="160"
        width="160"
        radius="96"
        color="#00838f"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </WrapLoading>
  );
}
