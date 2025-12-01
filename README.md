## Запуск проекта
- Установить и запустить Docker версии не меньше 28
- запуск: docker compose up
- отсановка: docker compose down
- пересобрать контейнер docker compose build --no-cache

## Функционал проекта

- Авторизация и регистрация пользователей
- Создание группы пользователей(обмен сообщениями, добавление продуктов в лист закупок, уведомление членов группы о изменениях в листе закупок)

## API Endpoints

- POST /user/register регистрация нового пользователя
- POST /user/login вход по паролю
- GET /user/profile проверка авторизации на сервере
- PATCH /user/update обновление данных о пользователе

- POST /group/register создание группы пользователей
- DELETE /group/delete удаление группы пользователей

- POST /group/join-group приглашение для вступления в группу

- GET /group/request-group запрос для пользователя на вступление в группу

- POST /group/aprove одобрения на вступление
- POST /group/reject отклонение запроса

- POST /products/add добавление продукта в лист закупок
- DELETE /products/delete добавление продукта в лист закупок
- GET /products/ олучение списка из листа закупок

## Схема таблиц

- users (id, username, password)
- groups ()
- products ()

## Структура проекта

```
└── MR/
   ├── mobile/                 # React Native приложение
   │   ├── src/
   │   │   ├── components/     # Переиспользуемые компоненты
   │   │   ├── screens/        # Экраны приложения
   │   │   ├── navigation/     # Конфигурация навигации
   │   │   ├── store/          # Redux store
   │   │   ├── services/       # API вызовы
   │   │   └── utils/          # Вспомогательные функции
   │   ├── android/           # Android специфичные файлы
   │   ├── ios/               # iOS специфичные файлы
   │   └── package.json
   ├── web/                    # React веб-приложение
   │   ├── src/
   │   │   ├── app/
   │   │   ├── assets/
   │   │   ├── components/
   │   │   ├── pages/
   |   │   │   ├──MainPage
   |   │   │   └──RegistrationPage 
   │   │   └── utils/
   │   └── package.json
   ├── backend/                # Node.js сервер
   │   ├── src/
   │   │   └── app.js         # 
   │   └── package.json
   └── compose.yml  