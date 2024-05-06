import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from '@pages/index';
import Items from '@pages/items';
import ItemDetails from '@pages/itemDetials';
import './main.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/:id" element={<ItemDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
