import React from 'react';
import { WrapPage } from './Page.styled';
import EmptyPage from 'helper/EmptyPage';

export default function NotFoundPage() {
  return (
    <WrapPage>
      <EmptyPage message={'404 NOT FOUND'} />
    </WrapPage>
  );
}
