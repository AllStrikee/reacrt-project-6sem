import styles from './AsteroidCard.module.css';

import dinosaur from '../../assets/dinosaur.png';

function AsteroidCard({
  name,
  date,
  distanceKm,
  size,
  danger,
  bg,
  image,
  distanceMode,
}) {
  const lunarDistance = Math.round(
    distanceKm / 384400
  );

  const formattedDistance =
    distanceMode === 'km'
      ? `${distanceKm.toLocaleString('ru-RU')} км`
      : `${lunarDistance} дистанций`;

  return (
    <div
      className={`${styles.card} ${
        bg === 'red'
          ? styles.red
          : styles.green
      }`}
    >
      <div className={styles.left}>
        <img
          src={image}
          className={`
            ${styles.asteroid}
            ${
              image.includes('big')
                ? styles.big
                : image.includes('medium')
                ? styles.medium
                : styles.small
            }
          `}
        />

        <img
          src={dinosaur}
          
          className={styles.dinosaur}
        />
      </div>

      <div className={styles.info}>
        <h2>{name}</h2>

        <div className={styles.row}>
          <span>Дата</span>
          <span>{date}</span>
        </div>

        <div className={styles.row}>
          <span>Расстояние</span>

          <span>{formattedDistance}</span>
        </div>

        <div className={styles.row}>
          <span>Размер</span>
          <span>{size}</span>
        </div>
      </div>

      <div className={styles.right}>
        <div>
          <p>Оценка:</p>

          <b
            className={
              danger === 'опасен'
                ? styles.danger
                : styles.safe
            }
          >
            {danger}
          </b>
        </div>

        <button>На уничтожение</button>
      </div>
    </div>
  );
}

export default AsteroidCard;