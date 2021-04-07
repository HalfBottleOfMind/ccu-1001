# Интерфейс управления CCU-1001

## Системные требования

Для разработки необходимо установить `npm` и `vue-cli`

## Установка и запуск

### Установка зависимостей

`npm install`

### Запуск dev-сервера

`npm run serve`

### Сборка для продакшена

Команда `npm run build` создаст директорию `dist` с готовым статичным контентом.
[Deployment guild](https://cli.vuejs.org/guide/deployment.html#general-guidelines)

## Добавление страниц

Пример создания новой страницы:
1) создать vue-компонент `/src/components/pages/NewPage.vue`;
2) в файле `/src/App.vue` в начале скрипта добавить `import NewPage from '@/components/pages/NewPage''`;
3) в файле `/src/App.vue` в скрипте в `export default { components: { ... } }` добавить `NewPage,`;
4) в файле `/src/App.vue` в `div#content` добавить `<NewPage v-if="currentPage === 'new page'" />`;
   1) при необходимости передать внутрь страницы данные добавить директиву `v-model="store.newPageData"`;
5) в файле `/src/components/Sidebar.vue` в `div#nav` добавить
    ```vue
    <NavigateButton
       @click="$emit('navigate', 'new page')"
       :active="currentPage === 'new page'"
    >
     Новая страница
    </NavigateButton>
    ```

## Смена лого, favicon, заголовка страницы

- Для смены лого нужно заменить файл `/src/assets/logo.png`.
- Для смены favicon нужно заменить файл `/public/favicon.ico`.
- Для смены заголовка страницы нужно в файле `/public.index.html` отредактировать тег `title`.
