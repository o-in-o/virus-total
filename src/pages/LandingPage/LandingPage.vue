<template lang="pug">
  #landing-page
    h1 Сервис позволяет проанализировать подозрительные файлы, домены, IP-адреса и URL-адреса
    hr
    h2 Что сделано:
    ul
      li Подключен Vuex
        ul
          li Стор разделен на модули
          li  Используется декораторы
      li Подключен Vue-router
      li Подключен Typescript
      li Используется шаблонизатор (pug)
      li Добавлены "красивости"
        ul
          li Создана основная палетка цветов
          li Подключены иконки
          li Подключены глобальные стили
      li Сделана кастомная кнопка
      li Сделан кастомный инпут
    h2 Что должно быть реализовано:
    ul
      li Адаптив
      li Доработать структуру роутов
      li Добавить базовые стили
      li Доработать кастомный инпут (добавить возможность выбора чекбокса)
      li Написать различные тесты. Как для компонентов, так для методов и сервисов
      li Переписать на работу с firebase
        ul
          li Добавить простую авторизацию (логин/пароль)
          li Добавить гостевой просмотр
    h2 Комментарии
    ul
      li Структура проекта создавалась с расчётом на large-scale проект
      li Текущее расположение папок/файлов сделано осознано с целью прослеживания роста проекта по пул-реквестам
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class LandingPage extends Vue {}
</script>

<style scoped lang="scss">
#landing-page {
  width: 768px;
}

h2 {
  color: map-get(map-get($pallete, neutral), 500);
}

ul {
  li {
    list-style: "- ";

    & {
      text-align: left;
      margin: 0;
    }
  }
}
</style>
