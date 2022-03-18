<template>
  <div class="content">
    <header class="intro">
      <page-header></page-header>
      <slot name="header"></slot>
    </header>
    <slot name="content"></slot>
    <page-footer></page-footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>