⭕ profi.ru

Клиент-сераерное приложение для сокращения URL-ссылок, этот репозиторий серверной части, ссылка на клиент: https://github.com/Zhihorka/profiru-frontend . Клиент веб-приложения представляет из себя UI интерфейс для просмотра сгенерированных сервером ссылок, и отправки запросов на сервер для генерации новых коротких ссылок. Для создания элементов интерфейсов была использована библиотека ReactJS, отправка запросов происходит через fetch(). Backend часть создана на основе Express сервера, который предоставляет API для обработки URL-ссылок, задействованные ссылки сохраняются в таблицу через СУБД MongoDB.

Интерфейс для отправки запросов:

▶ /urlsList (GET) - Получение всех сохраненных URL

▶ /:shortUrl (GET) - При перемещении по короткой ссылке находит её полноразмерный аналог в БД и переходит по найденному адресу

▶ /shrinkURL (POST) body = полный URL - случайная генерация короткого URL

▶ /shrinkCustomURL (POST) body = полный URL, желаемый URL - генерирует заданный короткий URL

⚠ инструкция по запуску приложения ⚠

⃣Для работы приложения необходимо выполнить следующие требования : ☑ установить Node.Js ☑ установить MongoDB ☑ загрузить оба репозитория этого приложения

⃣ После того как репозитории скачаны, необходимые пакеты можно установит командой npm install / yarn install (должен быть установлен yarn)

⃣ запуск сервера происходит по команде node server.ts Сервер по умолчания находится по адресу localhost:5000

⃣запуск клиента происходит по команде npm run start Клиент по умолчанию находится по адресу localhost:3000

⃣веб-приложение открывает бразуер автоматически, если этого не произошло самостоятельно введиье адрес localhost:3000

⃣ веб приложение обладает интуитивно понятным интерфейсом,
с его помощью вы можете просматривать и создавать укороченные URL - ссылки.

Фичи приложения: ✅ Интуитивно понятный интерфейс ✅ Валидация URL ✅ Возможность задать пользовательский короткий URL ✅ Типизауия с помощью TypeScript

Что будет добавлено в будущем;: 📦 Автоматическое тестирование работы кода 📦 Размещение приложения на хостинге 
