import { Conttainer } from 'App.styled';
import Loading from 'helper/Loading';
import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../pages/HomePage'));
const Register = lazy(() => import('../pages/RegisterPage'));
const View = lazy(() => import('../pages/ViewPage'));

export default function CustomRout() {
  return (
    <Conttainer>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/view" element={<View />} />
        </Routes>
      </Suspense>
    </Conttainer>
  );
}
