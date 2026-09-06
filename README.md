# Heim Yoga

Сайт-візитка для домашньої йоги в Vanylven, Norge.

## Сторінки

- **Hjem / Home** — головна з цитатою та кнопкою контакту
- **Om meg / About me** — про інструктора та освіту
- **Yoga** — типи занять
- **Kontakt / Contact** — контактна інформація

## Мови

Норвезька (NO) та англійська (EN). Перемикач у навігації.

## Локальний перегляд

Відкрийте `index.html` у браузері або запустіть локальний сервер:

```bash
python3 -m http.server 8080
```

Потім перейдіть на http://localhost:8080

## GitHub Pages

1. Запуште репозиторій на GitHub
2. Перейдіть у **Settings → Pages**
3. У **Source** оберіть гілку `main` і папку `/ (root)`
4. Збережіть — сайт буде доступний за адресою `https://<username>.github.io/<repo>/`

## Структура

```
├── index.html      # Головна
├── about.html      # Про мене
├── yoga.html       # Типи йоги
├── contact.html    # Контакт
├── css/style.css
├── js/i18n.js      # Переклади
├── js/main.js      # Логіка
└── assets/         # Зображення
```
