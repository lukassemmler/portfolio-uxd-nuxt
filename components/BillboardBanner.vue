<template>
  <div class="billboard-banner">
    <div class="billboard-banner-container">
      
      <div class="billboard-banner-center">
        <div class="billboard-banner-content">
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
export default {

}
</script>

<style lang="scss">

.billboard-banner {
  //display: flex;
  //flex-direction: row;
  //align-items: center;
  border-radius: 3em;
  padding-top: 1em;
  padding-bottom: 1em;
  margin-top: 5em;
  margin-bottom: 3em;
  padding: 1em;
  background-color: $dark-05;

  & > * {
    flex: 1 1 0%;
  }

  & > *:not(:last-child) {
    margin-right: 1em;
  }
}

.billboard-banner-container {
  position: relative;
}

/*
.about-image {
  margin-left: auto;
  margin-right: auto;
}
*/

.billboard-banner-start,
.billboard-banner-end {
  //position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  flex: 1 1 0;
}

.billboard-banner-start {
  left: 0;
  padding-right: 1em;
  box-sizing: border-box;
  text-align: right;

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
}

.billboard-banner-end {
  right: 0;
  padding-left: 1em;
  box-sizing: border-box;
}

.billboard-banner-center {
  display: flex;
  align-items: center;
  justify-content: center;
  //flex-grow: 2;
  //flex-basis: 100%;
  margin-top: -6em;
}

.billboard-banner-text {
  display: flex;
  flex-direction: row;
}

.billboard-banner-content {
  display: flex;
  max-width: 30em;
  align-items: center;
  justify-content: center;
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
  margin-top: unset;
  margin-left: -10em;
}

  .billboard-banner-start {
    order: 1;
  }
  .billboard-banner-end {
    order: 2;
  }
}
</style>