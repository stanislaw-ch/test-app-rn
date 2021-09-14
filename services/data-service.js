export const getData = async () => {
  const url = 'https://poloniex.com/public?command=returnTicke';

  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log('Успех:', JSON.stringify(json));
    return json;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}