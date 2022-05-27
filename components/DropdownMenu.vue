<template>
  <div
    class="dropdown-menu"
    :id="menuId"
    :class="orientation"
    v-on="$listeners"
  >
    <menu
      :id="menuListId"
      role="menu"
      class="dropdown-menu-list"
      :aria-labelledby="labelledBy"
      @keydown.tab="onTab"
      @keydown.up="onArrowUp"
      @keydown.down="onKeyArrowDown"
      @keydown.esc="onEscape"
      ref="menu"
    >
      <dropdown-menu-item
        v-for="(menuItem, index) in menu"
        v-bind:key="menuItem.link ? menuItem.link : index"
        tag="li"
        :label="menuItem.label"
        :link="menuItem.link"
        :focusable="index === focusIndex"
      ></dropdown-menu-item>
    </menu>
  </div>
</template>

<script>
import { positiveModulo } from "~/assets/lib/math-util";
import DropdownMenuItem from "./DropdownMenuItem.vue";

// TODO: `ref` inside `v-for` migration from Vue 2 to Vue 3: https://v3.vuejs.org/guide/migration/array-refs.html#migration-strategy
// I tried using a function ref in Vue 2, but for some reason it didn't work. So just remember to migrate later on with Vue 3.

export default {
  components: { DropdownMenuItem },
  expose: ["resetFocus", "focus"],
  props: {
    menuId: {
      type: String,
      required: true,
    },
    menuListId: {
      type: String,
      required: true,
    },
    labelledBy: {
      type: String,
      required: true,
    },
    menu: {
      type: Array,
      required: false,
      validator: function (value) {
        const errors = [];
        if (!Array.isArray(value))
          errors.push(
            `Menu should be an Array, but is type '${typeof value}'. `
          );
        for (const menuItem of value) {
          if (typeof menuItem !== "object")
            errors.push(
              `Menu item should be type 'object', but is type '${typeof menuItem}'. `
            );
          const { label, link } = menuItem;
          if (!label) errors.push(`Menu item does not have property 'label'. `);
          if (typeof label !== "string")
            errors.push(
              `Label should be type 'string', but is type '${typeof label}'. `
            );
          if (label !== "---") {
            if (!link) errors.push(`Menu item does not have property 'link'. `);
            if (typeof link !== "string")
              errors.push(
                `Link should be type 'string', but is type '${typeof link}'. `
              );
          }
        }
        for (const error of errors) console.error("Dropdown button: " + error);
        return errors.length === 0;
      },
      default: function () {
        return [{ label: "Any link", link: "#" }];
      },
    },
    orientation: {
      type: String,
      required: false,
      validator: function (value) {
        return [
          "top-left",
          "top-right",
          "bottom-left",
          "bottom-right",
        ].includes(value);
      },
      default: "bottom-right", // This default value is necessary, or refitting might not work.
    },
  },
  data: function () {
    return {
      focusIndex: 0,
    };
  },
  computed: {
    navigatableMenuItems: function () {
      const navigatableItems = [];
      const menu = this.$refs.menu;
      const menuItems = menu.querySelectorAll(".dropdown-menu-link");
      for (const menuItem of menuItems) {
        const role = menuItem.getAttribute("role");
        console.log(role);
        if (role !== "menuitem") continue;
        navigatableItems.push(menuItem);
      }
      console.log(navigatableItems);
      return navigatableItems;
    },
  },
  methods: {
    onTab: function (event) {
      this.$emit("tabbed", event);
    },
    onEscape: function () {
      this.$emit("escaped");
    },
    onArrowUp: function (event) {
      this.moveItemFocus(-1);
      event.preventDefault();
    },
    onKeyArrowDown: function (event) {
      this.moveItemFocus(1);
      event.preventDefault();
    },
    focusItemAtIndex: function (index) {
      this.focusIndex = index;
      this.$nextTick(() => {
        this.navigatableMenuItems[index].focus();
      });
    },
    moveItemFocus: function (distance) {
      // Positive means going up in index (0, 1, 2), negative means going down in index (2, 1, 0)
      const numberOfItems = this.navigatableMenuItems.length;
      const newFocus = positiveModulo(
        this.focusIndex + distance,
        numberOfItems
      );
      this.focusItemAtIndex(newFocus);
    },
    resetFocus: function () {
      this.focusIndex = 0;
    },
    focus: function () {
      this.focusItemAtIndex(this.focusIndex);
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown-menu {
  position: absolute;
  display: block;
  z-index: $z-index-dropdown;
  min-width: 100%;
  max-width: 90vw;
  box-shadow: 0 0.3rem 1rem $dark-20;
  padding: 0.5em 0;
  background-color: $white;
  border-radius: 0.5em;

  // This is a fallback, so the menu can at least be opened, when JavaScript is disabled.
  &:target,
  &:focus-within {
    display: block;
  }

  &.top-left {
    bottom: 100%;
    right: 0;
  }

  &.top-right {
    bottom: 100%;
    left: 0;
  }

  &.bottom-left {
    top: 100%;
    right: 0;
  }

  &.bottom-right {
    top: 100%;
    left: 0;
  }
}

.dropdown-menu-list {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
</style>
