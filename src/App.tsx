import React, { Suspense, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { ArchiveContext } from './context/ArchiveContext';
import pages from './Routes';
import { IArchive } from './types/types';




function App() {
  const [archive, setArchive] = useState<IArchive[]>([] as IArchive[])
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Suspense fallback={<>Loading...</>}>
          <ArchiveContext.Provider value={{ archive, setArchive }}>
            <Routes>

              <Route path="*" element={<Navigate replace to="/" />} />
              {pages.map(({ path, Element }) => {
                return (
                  <Route key={path} path={path} element={<Element />} />
                )
              })}

            </Routes>
          </ArchiveContext.Provider>
        </Suspense>
      </main>

    </BrowserRouter >
  );
}

export default App
