<template>
  <div class="post-item">
    <aside class="post-item-figure">
      <nuxt-link :to="localePath(link)" :title="linkTitle" class="post-item-link">
        <simple-image class="post-item-image rounded" v-bind="$attrs" />
      </nuxt-link>
    </aside>
    <main class="post-item-content">
      <div class="post-item-header">
        <h3 class="post-item-title">
          <nuxt-link class="invisible-link" :to="link" :title="linkTitle" v-html="title"> </nuxt-link>
        </h3>
        <p class="post-item-subtitle" v-if="subtitle">
          {{ subtitle }}
        </p>
        <div class="post-item-tags" v-if="tags">
          <ul class="list-tags">
            <li v-for="tag in tags" :key="tag.value">
              <simple-tag
                :text="tag.value"
                :class="{ active: tag.active }"
                @click="$emit('tag-clicked', tag.id)"
              ></simple-tag>
            </li>
          </ul>
        </div>
      </div>
      <div class="post-item-footer">
        <simple-button :to="link" :title="linkTitle">{{ $t("label_continue-reading") }}</simple-button>
        <time v-if="datetimeValue" class="post-item-date" datetime="datetimeValue">{{ datetimeString }}</time>
      </div>
    </main>
  </div>
</template>

<script>
import SimpleButton from "./SimpleButton.vue";
export default {
  components: { SimpleButton },
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
      // Should have shape `{ id: "someId", value: "some-string", active: false }`
      type: Array,
      required: false,
      validator: function (tags) {
        return tags.every((tag) => typeof tag === "object");
      },
    },
    datetimeValue: String,
    datetimeString: String,
  },
  methods: {
    isActiveTag: function (tag) {
      const tagMatch = this.$props.activeTags.find((activeTag) => activeTag === tag);
      return !!tagMatch;
    },
  },
};
</script>

<style lang="scss">
.post-item {
  display: flex;
  flex-direction: column;
}

.post-item-content {
  display: flex;
  flex-direction: column;
  padding: 1em 0;
  flex-grow: 1;

  & > *:not(:last-child) {
    margin-right: 1em;
  }
}

.post-item-header {
  display: flex;
  flex-direction: column;

  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > *:not(:last-child) {
    margin-bottom: 0.2em;
  }
}

.post-item-title {
  font-size: 1.75rem;
  margin-bottom: 0.4rem;
  line-height: 1.125;
}

.post-item-subtitle {
  font-style: italic;
  font-size: 1.25rem;
  line-height: 1.125;
  margin-top: 0;
  margin-bottom: 1rem;
  color: $dusk-60;
}

.post-item-figure {
  width: 100%;
}

.post-item-tags {
  font-size: 0.9em;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.post-item-date {
  opacity: 0.4;
}

.post-item-footer {
  display: flex;
  flex-direction: row;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 0.5em;
  }
}

@include breakpoint-upwards($breakpoint-semi-big) {
  .post-item-title {
    font-size: 2.5rem;
  }

  .post-item-subtitle {
    font-size: 1.75rem;
  }

  .post-item,
  .post-item-content {
    flex-direction: row;
    align-items: center;
  }

  .post-item-content {
    padding: 1em;
  }

  .post-item-figure {
    width: 12em;
    flex-shrink: 0;
  }

  .post-item-footer {
    flex-direction: column;
    align-items: center;
    margin-left: auto;

    & > *:not(:last-child) {
      margin-right: unset;
      margin-bottom: 0.2em;
    }
  }
}
</style>