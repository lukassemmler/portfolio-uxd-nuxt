<template>
  <div class="content">
    <header class="project-intro" :class="background">
      <page-header :inverted="true"></page-header>
      <h1 class ="project-title" v-if="title" v-html="title"></h1>
      <slot name="header"></slot>
    </header>
    <slot name="content"></slot>
    <page-footer></page-footer>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    background: {
      type: String,
      required: false,
      default: "bg-gray",
    },
  },
};
</script>

<style lang="scss" scoped>
.project-title {
  font-size: calc(1em + 2vw);
  text-align: center;
}

.project-intro {
  padding-bottom: $sp;
  color: $white;
}
</style>