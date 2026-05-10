import Header from '../../components/header/Header';

function DestructionPage() {
  return (
    <>
      <Header />

      <div
        style={{
          padding: '40px',
          textAlign: 'center',
        }}
      >
        <h1>Страница уничтожения</h1>

        <p>
          Здесь будет список астероидов
          для уничтожения
        </p>
      </div>
    </>
  );
}

export default DestructionPage;