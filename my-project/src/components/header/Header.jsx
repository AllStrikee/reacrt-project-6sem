import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>ARMAGGEDON V</h1>

        <p className={styles.description}>
          Сервис мониторинга и уничтожения астероидов,
          <br />
          опасно подлетающих к Земле.
        </p>
      </div>

      <nav className={styles.nav}>
        <a href="/" className={styles.active}>
          Астероиды
        </a>

        <a href="/">Уничтожение</a>
      </nav>
    </header>
  );
}

export default Header;