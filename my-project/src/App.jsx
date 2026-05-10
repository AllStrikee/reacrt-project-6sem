import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import AsteroidsPage from './pages/asteroids/AsteroidsPage';
import DestructionPage from './pages/destruction/DestructionPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AsteroidsPage />} />

        <Route
          path="/destruction"
          element={<DestructionPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;