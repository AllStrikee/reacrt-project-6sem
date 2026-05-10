import AsteroidCard from '../asteroid-card/AsteroidCard';

import small from '../../assets/asteroid-small.png';
import medium from '../../assets/asteroid-medium.png';
import big from '../../assets/asteroid-big.png';

import styles from './AsteroidsList.module.css';

function AsteroidsList() {
  const asteroids = [
    {
      id: 1,
      name: '2021 FQ',
      date: '12 сентября 2021',
      distance: '7 235 024 км',
      size: '85 м',
      danger: 'не опасен',
      bg: 'green',
      image: small,
    },
    {
      id: 2,
      name: '2021 ER',
      date: '2 ноября 2021',
      distance: '9 331 775 км',
      size: '300 м',
      danger: 'не опасен',
      bg: 'green',
      image: medium,
    },
    {
      id: 3,
      name: '2022 QQ',
      date: '3 марта 2022',
      distance: '2 866 012 км',
      size: '850 м',
      danger: 'опасен',
      bg: 'red',
      image: big,
    },
  ];

  return (
    <div className={styles.list}>
      {asteroids.map((item) => (
        <AsteroidCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default AsteroidsList;