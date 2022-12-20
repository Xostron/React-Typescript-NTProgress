import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { ArchivePage } from './pages/ArchivуPage';
import { TradingPage } from './pages/TradingPage';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route element={<TradingPage />} path='/' />
          <Route element={<ArchivePage />} path='/archive' />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
