export async function getAsteroids() {
  try {
    const response = await fetch(
      'https://neows-proxy.vercel.app/api/asteroids'
    );

    if (!response.ok) {
      throw new Error('Ошибка загрузки');
    }

    const data = await response.json();

    const asteroidsObject =
      data.near_earth_objects;

    const asteroidsArray =
      Object.values(
        asteroidsObject
      ).flat();

    return asteroidsArray;
  } catch (error) {
    console.error(error);

    return [];
  }
}