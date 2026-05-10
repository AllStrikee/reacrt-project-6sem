import { useState } from 'react';

import './App.css';

import Header from './components/header/Header';
import AsteroidsList from './components/asteroids-list/AsteroidsList';
import Footer from './components/footer/Footer';

import space from './assets/space.png';

function App() {
  const [showDangerousOnly, setShowDangerousOnly] =
    useState(false);

  const [distanceMode, setDistanceMode] =
    useState('km');

  return (
    <div className="app">
      <div className="container">
        <Header />

        <div className="toolbar">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={showDangerousOnly}
              onChange={() =>
                setShowDangerousOnly(
                  !showDangerousOnly
                )
              }
            />

            <span>Показать только опасные</span>
          </label>

          <div className="distance">
            <span>Расстояние </span>

            <span
              className={
                distanceMode === 'km'
                  ? 'activeLink'
                  : 'link'
              }
              onClick={() =>
                setDistanceMode('km')
              }
            >
              в километрах
            </span>

            <span>, </span>

            <span
              className={
                distanceMode === 'lunar'
                  ? 'activeLink'
                  : 'link'
              }
              onClick={() =>
                setDistanceMode('lunar')
              }
            >
              в дистанциях до луны
            </span>
          </div>
        </div>

        <img
          src={space}
          alt="Space"
          className="hero"
        />

        <AsteroidsList
          showDangerousOnly={
            showDangerousOnly
          }
          distanceMode={distanceMode}
        />

        <Footer />
      </div>
    </div>
  );
}

export default App;