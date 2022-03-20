<template>
  <figure class="gallery">
    <div class="grid" :class="gridModifiers">
      <slot></slot>
    </div>
  </figure>
</template>

<script>
export default {
  props: {
    gridModifiers: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  margin: 0 0 ($sp * 2);

  p {
    margin: 0;
  }

  img {
    width: 100%;
    height: auto;
  }

  &:after {
    padding-top: $sp * 2;
  }

  h2:first-child {
    margin-top: 0;
  }
}

span.gallery-heading {
  @extend %font-weight-bold;

  font-size: 1.25em;
  margin: ($sp * 2) 0 ($sp * 1);
  display: block;
}

aside.summary table {
  tr td,
  tr th {
    vertical-align: top;
  }

  tr th:nth-of-type(1) {
    padding-right: $sp * 2;
    text-align: left;
  }
}

.headline-intro {
  margin-bottom: 0.5em;
}

div.preview {
  overflow: hidden;
  height: 0;
  box-sizing: content-box;
  padding-bottom: 56.25%;
}

.main-gallery {
  margin-top: $sp * 2;
  margin-bottom: $sp;
}
</style>