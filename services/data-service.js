export const getData = async () => {
  const url = 'https://poloniex.com/public?command=returnTicke';

  try {
    const response = await fetch(url);
    const json = await response.json();
    if (json.error) {
      console.error('Ошибка: ' + json.error);
      return
    }
    console.log('Успех:', JSON.stringify(json));
    return json;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}