import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Hat from './components/Hat';
import MyHouse from './components/MyHouse';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hat />} />
        <Route path="/myhouse" element={<MyHouse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
