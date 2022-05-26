# Migration guide 
Created on 26th May 2022

* Passing all events from component to parent component: 
  * Vue 2: `v-on="$listeners"`
  * Vue 3: `v-bind="$attrs"`
  * Source: https://stackoverflow.com/a/64610207/how-to-pass-all-events-to-parent-in-vuejs
* `ref` inside `v-for` migration from Vue 2 to Vue 3: https://v3.vuejs.org/guide/migration/array-refs.html#migration-strategy
