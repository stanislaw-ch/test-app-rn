# Test task for React Native developer
Test task for React Native developer

## Table of contents
- Overview
- Technologies
- Tasks

## Overview
<img src="https://user-images.githubusercontent.com/57729597/133765429-51e721a7-9294-4f23-8825-446a6a4f5c20.png" width="350">
<img src="https://user-images.githubusercontent.com/57729597/133766590-39d6a1c7-1099-4f1c-aa84-5a4813016631.png" width="350">

## Tasks
### Общие сведения

Приложение должно состоять из двух экранов:

1.  Экран “О приложении” (первый, показывается при запуске).
2.  Экран “Котировки” (отображает таблицу котировок, обновляемую в фоне).
3.  Для навигации используется react-navigation
4.  Сборка, запуск и отладка возможна на основе expo либо приложение является натив-компилируемым
5.  Под таблицей подразумевается использование не готовых компонент табличного вида, а мини-реализация своего под конкретные нужды.
6.  (опционально) для типизации возможно использование TypeScript в целом по проекту
7.  (опционально, плюс) вместо навигации на каждом экране рассмотреть использование tab-ов, где элементом tab-а и является описанный экран
8.  (опционально, плюс) возможно рассмотреть использование mobx + mobx-react как в приложении в целом, так  и под конкретные нужды вроде нотификаций о изменении “таблицы”.
9.  (опционально, плюс) возможно рассмотреть использование rxjs для организации observable потока данных

### Экран "О приложении"
Содержит:
1.  Элемент навигации, позволяющий перейти на экран Котировки

### Экран "Котировки"
Содержит:
1.  Элемент навигации, позволяющий перейти на экран О приложении
2.  Таблицу, содержащую котировки с биржи poloniex, обновляемые в фоне по таймеру. В ячейке показывать имя тикера, last, highestBid и percentChange.

Замечания по реализации:
1.  Данные в таблице обновляются по таймеру раз в 5 секунд
2.  Данные не обновляются когда экран не активен (т.е. открыт экран О приложении)
3.  В случае ошибки получения данных или парсинга их (т.е. в целом при любой ошибке), индикатируем об этом в верхней части таблицы показывая **спец ячейку** содержащую текст “ошибка”, в консоль логируем детали. В случае когда ошибка пропадает (например на следующей итерации таймера), индикацию ошибки скрываем.
4.  (опционально, плюс) анимация обновления значений в элементах таблицы
5.  (опционально, плюс) спиннер при начальной загрузке данных (до момента получения первого пакета данных либо ошибки таблицей; после открытия экрана).

### Ссылки
Публичное API  Poloniex  [https://poloniex.com/support/api/](https://poloniex.com/support/api/), запрос, который нам нужен [https://poloniex.com/public?command=returnTicker](https://poloniex.com/public?command=returnTicker)

react-navigation [http://reactnavigation.org/](http://reactnavigation.org/)

## Technologies
The stack used for this project was:
- React Native
- mobx
- Git
