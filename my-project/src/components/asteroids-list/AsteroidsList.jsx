import AsteroidCard from '../asteroid-card/AsteroidCard';

import small from '../../assets/asteroid-small.png';
import medium from '../../assets/asteroid-medium.png';
import big from '../../assets/asteroid-big.png';

import styles from './AsteroidsList.module.css';

function AsteroidsList({
  showDangerousOnly,
  distanceMode,
}) {
  const asteroids = [
    {
      id: 1,
      name: '2021 FQ',
      date: '12 сентября 2021',
      distanceKm: 7235024,
      size: '85 м',
      danger: 'не опасен',
      bg: 'green',
      image: small,
    },
    {
      id: 2,
      name: '2021 ER',
      date: '2 ноября 2021',
      distanceKm: 9331775,
      size: '300 м',
      danger: 'не опасен',
      bg: 'green',
      image: medium,
    },
    {
      id: 3,
      name: '2022 QQ',
      date: '3 марта 2022',
      distanceKm: 2866012,
      size: '850 м',
      danger: 'опасен',
      bg: 'red',
      image: big,
    },
  ];

  const filteredAsteroids =
    showDangerousOnly
      ? asteroids.filter(
          (item) =>
            item.danger === 'опасен'
        )
      : asteroids;

  return (
    <div className={styles.list}>
      {filteredAsteroids.map((item) => (
        <AsteroidCard
          key={item.id}
          {...item}
          distanceMode={distanceMode}
        />
      ))}
    </div>
  );
}

export default AsteroidsList;