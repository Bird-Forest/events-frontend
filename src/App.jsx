import { Container } from 'App.styled';
import Loading from 'helper/Loading';
import { Suspense } from 'react';
// import AppBar from 'routing/AppBar';
import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/HomePage'));
const Register = lazy(() => import('./pages/RegisterPage'));
const View = lazy(() => import('./pages/ViewPage'));
const Charts = lazy(() => import('./pages/ChartPage'));
const NotFound = lazy(() => import('./pages/NotFoundPage'));

export default function App() {
  return (
    <>
      <Container>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id/register" element={<Register />} />
            <Route path="/:id/view" element={<View />} />
            <Route path="/chart" element={<Charts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}
