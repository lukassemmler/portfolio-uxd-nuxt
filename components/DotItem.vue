<template>
  <div class="dot-item">
    <div class="dot-item-image-container">
      <div :class="['dot-item-backdrop', background]"></div>
      <simple-image
        class="dot-item-image fit-image"
        :src="src"
        :alt="alt"
        sizes="xs:400px sm:640px md:960px lg:1200px"
        ratio="1-by-1"
      ></simple-image>
    </div>
    <div class="dot-item-label-container">
      <span class="dot-item-label">{{ label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    alt: String,
    background: String,
    label : String,
  },
};
</script>

<style lang="scss" scoped>
.dot-item {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.dot-item-image-container {
  position: relative;
  
  & > *:not(.dot-item-backdrop) {
    transition: transform 0.1s ease-in;
    &:hover {
      transform: scale(1.1);
    }
  }
}

.dot-item-backdrop {
  position: absolute;
  top: 20%;
  left: 10%;
  right: 10%;
  bottom: 0;
  border-radius: 100%;
  background-color: $gray-93;
}

.dot-item-label {
  display: block;
  height: 2.5em;
  margin-top: 1em;
  font-size: 0.9em;
  text-align: center;
  line-height: 1.25;
}
</style>