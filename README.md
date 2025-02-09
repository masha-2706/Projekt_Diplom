# Параметры оценивания нашего проекта:

## Качество кода:
- К коду добавлены релевантные комментарии
- Код соответствует принципу DRY
- Код соответствует принципу separation of concerns
- Отсутствует излишняя вложенность (циклов, условий, структур данных)
- Названия переменных, функций, классов отражают их назначение в коде
- Семантичный html-код
- Верстка сделана с учетм web accessibility
- Для нейминга CSS классов применена BEM конвенция
- Релевантно применены абсолютные и относительные единицы измерения в CSS
    `Отступы и шрифты прописываем в rem. 1rem=16px`
- Для JavaScript кода используется нотация Camel Case
- Для React кода используется нотация Pascal Case
- Функции соответствуют принципу single responsibility
- Модульные и reusable React компоненты
- Изображения в проекте адаптированы под разные размеры экранов
- Изображения в проекте адаптированы под Mac OS (поддерживают high density screens)
- Изображения оптимизированы (modern image formats, svg, размеры фото)
- Оптимизированы лишние http-запросы (например, используются CSS sprites)

## Работа в Git:
- Есть регулярные коммиты
- Сообщения в коммитах информативные
- Все пул-реквесты одобрены другими членами команды
- Конструктивная и уважительная коммуникация в комментариях пул-реквестов
- В gitignor добавлены необходимые папки и файлы, которые не нужно отслеживать
- Для работы над задачами создаются отдельные ветки

### Логика наименования рабочей ветки:
`feature/sprint` актуальный номер спринта `_` номер задачи в Jira `/` имя блока или элемента
- Пример `feature/QF-1_QF-2/discount-form_button`

### Логика наименования рабочей ветки- корректировки своего кода после обсуждения командой:
- Пример `feature/QF-5/discount-form_button/correction`

