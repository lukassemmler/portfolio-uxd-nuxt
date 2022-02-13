<template>
  <article class="post-teaser">
    <nuxt-link :to="link" :title="linkTitle" class="post-teaser-link">
      <simple-image v-bind="$attrs" />
    </nuxt-link>
    <header class="post-teaser-header">
      <h3 class="post-teaser-title">
        <nuxt-link
          class="invisible-link"
          :to="link"
          :title="linkTitle"
          v-html="title"
        >
        </nuxt-link>
      </h3>
      <p class="post-teaser-subtitle" v-if="subtitle">
        {{ subtitle }}
      </p>
    </header>
    <p v-if="description" class="post-teaser-description">
      <span v-html="description"></span>
      <nuxt-link :to="link" :title="linkTitle">{{
        $t("label_continue-reading")
      }}</nuxt-link>
    </p>
    <div class="post-teaser-tags" v-if="tags">
      <ul class="post-teaser-tags-list">
        <li v-for="tag in tags" :key="tag">
          <simple-tag :text="tag"></simple-tag>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
import SimpleImage from "./SimpleImage.vue";
import SimpleTag from "./SimpleTag.vue";
export default {
  components: { SimpleImage, SimpleTag },
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
    },
  },
};
</script>

<style lang="scss" scoped>
.post-teaser {
  margin-bottom: $sp;

  &.centered {
    text-align: center;

    .post-teaser-tags-list {
      justify-content: center;
    }
  }
}

.post-teaser-title {
  font-size: 2.5rem;
  margin-bottom: 0.4rem;
}

.post-teaser-subtitle {
  font-style: italic;
  font-size: 1.75rem;
  line-height: 1.25;
  margin-top: 0;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.post-teaser-header {
  margin-bottom: 1.5rem;

  & >:last-child{
    margin-bottom: 0;
  }
}

.post-teaser-description {
  font-style: italic;
  margin-top: 0;
}

.post-teaser-link {
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

.post-teaser-tags-list {
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
  padding: 0;

  & > *:not(:last-child) {
    margin-right: 0.5rem;
  }
}
</style>
