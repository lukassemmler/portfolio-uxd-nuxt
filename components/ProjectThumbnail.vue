<template>
  <div class="project-thumbnail">
    <nuxt-link :to="link" :title="linkTitle" class="project-thumbnail-link">
      <simple-image v-bind="$attrs" />
    </nuxt-link>
    <h3 class="project-thumbnail-title">
      <nuxt-link class="invisible-link" :to="link" :title="linkTitle">
        {{ title }}
      </nuxt-link>
    </h3>
    <p class="project-thumbnail-subtitle" v-if="subtitle">
      {{ subtitle }}
    </p>
    <p v-if="description" class="project-thumbnail-description">
      <template v-html="description"></template>
      <nuxt-link :to="link" :title="linkTitle">{{
        $t("label_continue-reading")
      }}</nuxt-link>
    </p>
    <p class="project-thumbnail-tags" v-if="tags">
      {{ tags.join(", ") }}
    </p>
  </div>
</template>

<script>
import SimpleImage from "./SimpleImage.vue";
export default {
  components: { SimpleImage },
  props: {
    link: {
      type: String,
      required: false,
      default: "",
    },
    linkTitle: {
      type: String,
      required: false,
      default: "Any title",
    },
    title: {
      type: String,
      required: false,
      default: "Any title",
    },
    description: {
      type: String,
      required: false,
      default: "",
    },
    subtitle: {
      type: String,
      required: false,
      default: "",
    },
    tags: {
      type: Array,
      required: false,
      validator: function (tags) {
        return tags.every((tag) => typeof tag === "string");
      },
    }
  },
};
</script>

<style lang="scss" scoped>
.project-thumbnail {
  text-align: center;
  margin-bottom: $sp;
}

.project-thumbnail-title {
  margin-bottom: 0.5em;
}

.project-thumbnail-link {
  display: block;
  margin-bottom: 1.5rem;
  transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out;

  img {
    display: block;
    margin: 0;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: 0 0.5rem 1rem $dark-20;
  }
}

.project-thumbnail-description {
  margin-top: 0;
}

.project-thumbnail-subtitle {
  font-style: italic;
}
</style>
