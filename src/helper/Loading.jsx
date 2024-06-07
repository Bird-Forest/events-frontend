import React from 'react';
import { Loader, WrapLoading } from './Helper.styled';

export default function Loading() {
  return (
    <WrapLoading>
      <Loader />
    </WrapLoading>
  );
}
