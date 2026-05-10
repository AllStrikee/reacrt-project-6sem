import { useEffect, useState, useCallback, } from 'react';

import { getAsteroids } from '../../api/asteroidController';

import Header from '../../components/header/Header';
import AsteroidsList from '../../components/asteroids-list/AsteroidsList';
import Footer from '../../components/footer/Footer';

import space from '../../assets/space.png';

function AsteroidsPage() {
  const [asteroids, setAsteroids] = useState([]);

  const [showDangerousOnly, setShowDangerousOnly] =
    useState(false);

  const [distanceMode, setDistanceMode] =
    useState('km');

  const [loading, setLoading] = useState(true);

  const handleKmClick = useCallback(() => {
  setDistanceMode('km');
}, []);

const handleLunarClick =
  useCallback(() => {
    setDistanceMode('lunar');
  }, []);

  useEffect(() => {
    async function loadAsteroids() {
      const data = await getAsteroids();

      setAsteroids(data);

      setLoading(false);
    }

    loadAsteroids();
  }, []);

  if (loading) {
    return <h1>Загрузка...</h1>;
  }

  return (
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

          Показать только опасные
        </label>

        <div className="distance-switch">
          <span>Расстояние </span>

          <span
            className={
              distanceMode === 'km'
                ? 'activeLink'
                : 'link'
            }
            onClick={handleKmClick}
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
            onClick={handleLunarClick}
          >
            в дистанциях до Луны
          </span>
        </div>
      </div>

      <img
        src={space}
        alt="space"
        className="hero-image"
      />

      <AsteroidsList
        asteroids={asteroids}
        showDangerousOnly={
          showDangerousOnly
        }
        distanceMode={distanceMode}
      />

      <Footer />
    </div>
  );
}

export default AsteroidsPage;