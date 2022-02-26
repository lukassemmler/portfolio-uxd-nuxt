<template>
  <article class="cv-record-item" :class="'level-' + level">
    <div class="cv-record-header">
      <span class="icon icon-business cv-record-icon" v-if="iconId">
        <component v-bind:is="iconId + '-icon'"></component>
      </span>
      <h3>{{ title }}</h3>
      <span class="cv-record-subtitle">{{ subtitle }}</span>
    </div>
    <div class="cv-record-body">
      <span class="cv-record-details" v-if="details" v-html="details"></span>
      <p class="cv-record-description" v-if="description">
        {{ description }}
        <slot name="extra"></slot>
      </p>
    </div>
  </article>
</template>

<script>
import schoolIcon from "~/assets/icons/material-school.svg?inline";
import businessIcon from "~/assets/icons/material-business-center.svg?inline";
import trophyIcon from "~/assets/icons/material-emoji-events.svg?inline";

export default {
  components: { schoolIcon, businessIcon, trophyIcon },
  props: {
    iconId: {
      type: String,
      required: false,
      default: "business",
      validator: function (value) {
        return ["school", "business", "trophy"].includes(value);
      },
    },
    level: {
      type: Number,
      required: false,
      default: 0,
    },
    title: {
      type: String,
      required: false,
      default: "Any title",
    },
    subtitle: {
      type: String,
      required: false,
      default: "Any subtitle",
    },
    timespan: {
      type: String,
      required: false,
      default: "",
    },
    location: {
      type: String,
      required: false,
      default: "",
    },
    description: {
      type: String,
      required: false,
      default: "",
    },
  },
  computed: {
    details: function () {
      if (this.timespan.length === 0 && this.location.length === 0) return "";
      const details = [];
      if (this.timespan.length > 0) details.push(this.timespan);
      if (this.location.length > 0) details.push(this.location);
      return details.join(" / ");
    },
  },
};
</script>

<style lang="scss">
.cv-record-item {
  position: relative;
  margin-bottom: 2em;
  padding-left: 2em;

  &.level-1 {
    margin-left: 2em;
    font-size: 0.9em;
  }
  &.level-2 {
    margin-left: 4em;
    font-size: 0.8em;
  }
}

.cv-record-header {
  margin-bottom: 0.5em;
  line-height: 1;

  & > * {
    margin-bottom: 0.4em;
  }

  & > *:not(:last-child) {
    margin-right: 0.8em;
  }
}

.cv-record-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 1.2em;
  height: 1.2em;
}

.cv-record-subtitle {
  display: inline-block;
  font-size: 1.2em;
  font-weight: bold;
  color: $gray-50;
}

.cv-record-body {
  & > *:not(:last-child) {
    margin-bottom: 0.6em;
  }
  p {
    margin: 0;
  }
}

.cv-record-details {
  display: inline-block;
  font-size: 0.9em;
  font-weight: 500;
  color: $gray-50;
}

.cv-record-description {
  font-weight: 500;
  color: $gray-60;
}

@include breakpoint-upwards($breakpoint-semi-big) {
  .cv-record-header {
    display: flex;
    flex-flow: row wrap;
    align-items: baseline;
  }
}
</style>