## Функционал проекта

- Авторизация и регистрация пользователей
- Создание группы пользователей(обмен сообщениями, добавление продуктов в лист закупок, уведомление членов группы о изменениях в листе закупок)

## API Endpoints

- POST /user/ регистрация нового пользователя
- GET /user/ проверка авторизации на сервере
- PATCH /user/ обновление данных о пользователе

- POST /group/ создание группы пользователей

- POST /group/join создать запрос для вступления в группу

- GET /group/join запрос для пользователя на вступление в группу

- POST /group/aprove одобрения на вступление
- POST /group/reject отклонение запроса

- POST /products/ добавление продукта в лист закупок
- GET /products/ олучение списка из листа закупок

## Базы данных

- users (id, username,)
- groups (id, groupname, users)
- products (id, productname, quantity, image, message)

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
   │   │   ├── components/
   │   │   ├── pages/
   │   │   ├── hooks/
   │   │   └── utils/
   │   └── package.json
   ├── backend/                # Node.js сервер
   │   ├── src/
   │   │   ├── controllers/    # Логика обработки запросов
   │   │   ├── routes/         # Маршруты API
   │   │   ├── middleware/     # Промежуточное ПО
   │   │   ├── utils/          # Вспомогательные функции
   │   │   └── config/         # Конфигурации
   │   ├── prisma/            # Схема и миграции БД
   │   └── package.json
   └── docker-compose.yml  