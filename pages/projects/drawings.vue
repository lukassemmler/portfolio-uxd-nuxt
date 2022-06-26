<template>
  <project-template>
    <template v-slot:header> Hallo! </template>
    <template v-slot:content>
      <div class="drawing-showcase grid cols-4">
        <div class="cell span-2x2 drawing-showcase-item">
          <simple-image src="drawing/dragon-pilot-2020-05.jpg"></simple-image>
        </div>
        <div class="cell drawing-showcase-item">
          <simple-image
            src="drawing/miniature-train-man-2019-12.jpg"
          ></simple-image>
        </div>
        <div class="cell drawing-showcase-item">
          <simple-image src="drawing/kronky-bear-2020-06.jpg"></simple-image>
        </div>
        <div class="cell drawing-showcase-item">
          <simple-image src="drawing/lion-doctor-2020-05.jpg"></simple-image>
        </div>
        <div class="cell drawing-showcase-item">
          <simple-image src="drawing/shiba-2020-05.jpg"></simple-image>
        </div>
        <div class="cell drawing-showcase-item">
          <simple-image src="drawing/froggies-2020-11.jpg"></simple-image>
        </div>
        <div class="cell drawing-showcase-item">
          <simple-image src="drawing/round-glasses-2020-07.jpg"></simple-image>
        </div>
        <div class="cell span-2x2 drawing-showcase-item">
          <simple-image
            src="drawing/bunny-thumbs-up-2020-07.jpg"
          ></simple-image>
        </div>
        <div class="cell drawing-showcase-item">
          <simple-image src="drawing/alice-vink-2020-03.jpg"></simple-image>
        </div>
        <div class="cell drawing-showcase-item">
          <simple-image
            src="drawing/tank-guy-thumbnail-2020-05.jpg"
          ></simple-image>
        </div>
      </div>
    </template>
  </project-template>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
