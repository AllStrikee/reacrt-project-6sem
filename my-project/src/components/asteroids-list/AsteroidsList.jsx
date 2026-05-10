import AsteroidCard from '../asteroid-card/AsteroidCard';

import asteroidBig from '../../assets/asteroid-big.png';
import asteroidMedium from '../../assets/asteroid-medium.png';
import asteroidSmall from '../../assets/asteroid-small.png';

import styles from './AsteroidsList.module.css';

function AsteroidsList({
  asteroids,
  showDangerousOnly,
  distanceMode,
}) {
  const filteredAsteroids = Array.isArray(
    asteroids
  )
    ? showDangerousOnly
      ? asteroids.filter(
          asteroid =>
            asteroid.is_potentially_hazardous_asteroid
        )
      : asteroids
    : [];

  const images = [
    asteroidBig,
    asteroidMedium,
    asteroidSmall,
  ];

  return (
    <div className={styles.list}>
      {filteredAsteroids.map(
        (item, index) => (
          <AsteroidCard
            key={item.id}
            name={item.name}
            date={
              item.close_approach_data &&
              item.close_approach_data
                .length > 0
                ? item.close_approach_data[0]
                    .close_approach_date
                : 'Нет даты'
            }
            distanceKm={
              item.close_approach_data &&
              item.close_approach_data
                .length > 0
                ? Math.round(
                    Number(
                      item
                        .close_approach_data[0]
                        .miss_distance
                        .kilometers
                    )
                  )
                : 0
            }
            size={`${Math.round(
              item.estimated_diameter
                ?.meters
                ?.estimated_diameter_max || 0
            )} м`}
            danger={
              item.is_potentially_hazardous_asteroid
                ? 'опасен'
                : 'не опасен'
            }
            bg={
              item.is_potentially_hazardous_asteroid
                ? 'red'
                : 'green'
            }
            image={
              images[index % images.length]
            }
            distanceMode={distanceMode}
          />
        )
      )}
    </div>
  );
}

export default AsteroidsList;