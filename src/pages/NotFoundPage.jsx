import React from 'react';
import { WrapHomePage } from './Page.styled';
import EmptyPage from 'helper/EmptyPage';

export default function NotFoundPage() {
  return (
    <WrapHomePage>
      <EmptyPage message={'404 NOT FOUND'} />
    </WrapHomePage>
  );
}
