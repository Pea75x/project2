import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Hat from './components/Hat';
import MyHouse from './components/MyHouse';
import Classmates from './components/Classmates';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hat />} />
        <Route path="/myhouse" element={<MyHouse />} />
        <Route path="/classmates" element={<Classmates />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
