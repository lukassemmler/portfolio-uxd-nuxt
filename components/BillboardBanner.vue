<template>
  <div class="billboard-banner">
    <div class="billboard-banner-top">
      <div class="billboard-banner-content">
        <slot name="center"></slot>
      </div>
    </div>
    <aside class="billboard-banner-start">
      <slot name="start"></slot>
    </aside>
    <div class="billboard-banner-center">
      <div class="billboard-banner-content">
        <slot name="center"></slot>
      </div>
    </div>
    <aside class="billboard-banner-end">
      <slot name="end"></slot>
    </aside>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.billboard-banner {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 3em;
  padding-top: 1em;
  padding-bottom: 1em;
  margin-bottom: 2em;
  padding: 1em;
  background-color: $dark-05;

  & > * {
    flex: 1 1 0%;
  }

  & > *:not(:last-child) {
    margin-right: 1em;
  }
}
/*
.about-image {
  margin-left: auto;
  margin-right: auto;
}
*/

.billboard-banner-start {
  text-align: right;

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
}

.billboard-banner-center {
  display: flex;
  align-items: center;
  justify-content: center;
  //flex-grow: 2;
  flex-basis: 100%;
}

.billboard-banner-content {
  display: flex;
  max-width: 30em;
  align-items: center;
  justify-content: center;
}

@include breakpoint-upwards($breakpoint-semi-big) {
  .billboard-banner-start {
    order: 1;
  }
  .billboard-banner-end {
    order: 2;
  }
}
</style>