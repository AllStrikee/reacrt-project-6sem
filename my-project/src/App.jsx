import './App.css';

import Header from './components/header/Header';
import AsteroidsList from './components/asteroids-list/AsteroidsList';
import Footer from './components/footer/Footer';

import space from './assets/space.png';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />

        <div className="toolbar">
          <label className="checkbox">
            <input type="checkbox" />
            <span>Показать только опасные</span>
          </label>

          <div className="distance">
            <span>Расстояние </span>
            <b>в километрах</b>,
            <span className="link">в дистанциях до луны</span>
          </div>
        </div>

        <img src={space} alt="Space" className="hero" />

        <AsteroidsList />

        <Footer />
      </div>
    </div>
  );
}

export default App;