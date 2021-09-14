export const getData = async () => {
  const url = 'https://poloniex.com/public?command=returnTicke';
    const response = await fetch(url);
    const json = await response.json();
    if (json.error) {
      const error = new Error('Ошибка: ' + json.error);
      throw error;
    } else {
      return json;
    }
}