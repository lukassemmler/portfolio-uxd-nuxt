# Migration guide 
Created on 26th May 2022

* Passing all events from component to parent component: 
  * Vue 2: `v-on="$listeners"`
  * Vue 3: `v-bind="$attrs"`
  * Source: https://stackoverflow.com/a/64610207/how-to-pass-all-events-to-parent-in-vuejs
* `ref` inside `v-for` migration from Vue 2 to Vue 3: https://v3.vuejs.org/guide/migration/array-refs.html#migration-strategy


## vue-i18n

* The package `@nuxtjs/i18n` v7.2.0 uses `vue-i18n` v8 under the hood.
* There are some breaking changes from `vue-i18n` v8 to `vue-i18n` v9+.
* One of them is that we can no longer use `$t('messageKey')[0]` to return items of a message array. 
* See https://vue-i18n.intlify.dev/guide/migration/breaking.html#translation-api-return-value.
