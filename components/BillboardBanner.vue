<template>
  <div class="billboard-banner">
    <div class="billboard-banner-container">
      <div class="billboard-banner-center">
        <div class="billboard-banner-figure">
          <slot name="center"></slot>
        </div>
      </div>
      <div class="billboard-banner-text">
        <aside class="billboard-banner-start">
          <slot name="start"></slot>
        </aside>
        <aside class="billboard-banner-end">
          <slot name="end"></slot>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.billboard-banner {
  margin-top: 5em;
  margin-bottom: 3em;
  padding: 1em;
  background-color: $dark-05;
  border-radius: 3em;
}

.billboard-banner-start,
.billboard-banner-end {
  box-sizing: border-box;
  text-align: center;
  flex: 1 1 0;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.billboard-banner-center {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -7em;
  margin-bottom: -1em;
}

.billboard-banner-figure {
  display: flex;
  max-width: 30em;
  align-items: center;
  justify-content: center;
}

@include breakpoint-upwards($breakpoint-semi-big) {
  .billboard-banner-start {
    padding-right: 1em;
    text-align: right;

    ul {
      align-items: flex-end;
    }
  }

  .billboard-banner-end {
    padding-left: 1em;
    text-align: left;

    ul {
      align-items: flex-start;
    }
  }

  .billboard-banner-text {
    display: flex;
    flex-direction: row;
  }
}

@include breakpoint-upwards($breakpoint-xl) {
  .billboard-banner-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .billboard-banner {
    margin-top: unset;
    margin-left: 10em;
  }

  .billboard-banner-center {
    margin-top: -2em;
    margin-left: -10em;
  }
}
</style>