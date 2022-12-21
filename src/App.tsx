import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import pages from './Routes';


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Suspense fallback={<>Loading...</>}>
          <Routes>
            <Route path="*" element={<Navigate replace to="/" />} />
            {pages.map(({ path, Element }) => {
              return (
                <Route key={path} path={path} element={<Element />} />
              )
            })}
          </Routes>
        </Suspense>
      </main>

    </BrowserRouter >
  );
}

export default App
