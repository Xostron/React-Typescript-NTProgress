import React, { Suspense, createContext, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import pages from './Routes';
import { IArchive } from './types/types';


interface IArchiveContext {
  archive: IArchive[],
  setArchive: (val: IArchive[]) => void
}

export const ArchiveContext = createContext<IArchiveContext>({} as IArchiveContext)

function App() {
  const [archive, setArchive] = useState<IArchive[]>([] as IArchive[])
  return (
    <BrowserRouter>
      <Navbar />
      <ArchiveContext.Provider value={{ archive, setArchive }}>
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
      </ArchiveContext.Provider>
    </BrowserRouter >
  );
}

export default App
