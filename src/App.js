import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Hat from './components/Hat';
import MyHouse from './components/MyHouse';
import Classmates from './components/Classmates';
import Game from './components/Game';
import WizardingWorld from './components/WizardingWorld';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hat />} />
        <Route path="/myhouse" element={<MyHouse />} />
        <Route path="/classmates" element={<Classmates />} />
        <Route path="/game" element={<Game />} />
        <Route path="/wizardingworld" element={<WizardingWorld />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
