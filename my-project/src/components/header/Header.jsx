import { Link } from 'react-router-dom';

import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>
          ARMAGGEDON V
        </h1>

        <p className={styles.description}>
          Сервис мониторинга и уничтожения
          астероидов,
          <br />
          опасно подлетающих к Земле.
        </p>
      </div>

      <nav className={styles.nav}>
        <Link
          to="/"
          className={styles.active}
        >
          Астероиды
        </Link>

        <Link to="/destruction">
          Уничтожение
        </Link>
      </nav>
    </header>
  );
}

export default Header;