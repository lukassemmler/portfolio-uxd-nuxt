<template>
  <div
    class="dropdown-button"
    :aria-expanded="expanded + ''"
    v-click-outside="onOutsideClick"
  >
    <simple-button
      :prefixed-icon="prefixedIcon"
      suffixed-icon="caret-down"
      :target="'#' + menuId"
      :id="menuButtonId"
      aria-haspopup="true"
      :aria-owns="menuListId"
      role="button"
      @click.prevent="onButtonClick"
      @keydown.space.prevent=""
      @keydown.enter.prevent=""
      @keyup.space.prevent="onSpace"
      @keyup.enter.prevent="onEnter"
      ref="button"
      >Testing</simple-button
    >
    <div
      class="dropdown-button-menu"
      :id="menuId"
      :class="orientation"
      ref="menu"
    >
      <menu
        :id="menuListId"
        role="menu"
        class="dropdown-button-menu-list"
        :aria-labelledby="menuButtonId"
        @keydown.tab="onTab"
        @keydown.esc="onEscape"
        @keydown.up="onArrowUp"
        @keydown.down="onKeyArrowDown"
      >
        <li
          v-for="(menuItem, index) in menu"
          v-bind:key="menuItem.link"
          class="dropdown-button-menu-item"
          role="presentation"
          ref="menuItems"
        >
          <a
            :href="menuItem.link"
            :title="menuItem.label"
            class="dropdown-button-menu-link"
            role="menuitem"
            :tabindex="index === focusIndex ? '' : -1"
            >{{ menuItem.label }}</a
          >
        </li>
      </menu>
    </div>
  </div>
</template>

<script>
import { positiveModulo } from "~/assets/lib/math-util";
import {
  getScrollParent,
  getBoundingClientRectRelativeToParent,
} from "~/assets/lib/dom-util";

// Control is inspired by the Dropdown Button in "WinUI 2 Gallery" (https://github.com/microsoft/WinUI-Gallery)

// TODO To build a complete menu element, we would have to add full keyboard support. Because of time restraints, we will not do that for now.
// See https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role for accessible roles

// TODO: `ref` inside `v-for` migration from Vue 2 to Vue 3: https://v3.vuejs.org/guide/migration/array-refs.html#migration-strategy
// I tried using a function ref in Vue 2, but for some reason it didn't work. So just remember to migrate later on with Vue 3.

export default {
  props: {
    menuId: {
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
          if (!link) errors.push(`Menu item does not have property 'link'. `);
          if (typeof link !== "string")
            errors.push(
              `Link should be type 'string', but is type '${typeof link}'. `
            );
        }
        for (const error of errors) console.error("Dropdown button: " + error);
        return errors.length === 0;
      },
      default: function () {
        return [{ label: "Any link", link: "#" }];
      },
    },
    prefixedIcon: {
      type: String,
      required: false,
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
    refitMenuIfBlocked: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  computed: {
    menuButtonId: function () {
      return this.menuId + "-button";
    },
    menuListId: function () {
      return this.menuId + "-menu";
    },
  },
  data: function () {
    return {
      expanded: false,
      focusIndex: 0,
    };
  },
  methods: {
    onTab: function (event) {
      if (!this.expanded) return;
      this.close();
      if (event.shift) this.$refs.button.focus();
    },
    onSpace: function () {
      this.toggle();
    },
    onEnter: function () {
      this.toggle();
    },
    onButtonClick: function () {
      this.toggle();
    },
    onArrowUp: function (event) {
      if (!this.expanded) return;
      this.moveItemFocus(-1);
      event.preventDefault();
    },
    onKeyArrowDown: function (event) {
      if (!this.expanded) return;
      this.moveItemFocus(1);
      event.preventDefault();
    },
    onOutsideClick: function () {
      if (!this.expanded) return;
      this.close();
      this.$refs.button.focus();
    },
    onEscape: function () {
      console.log("Escape!");
      if (!this.expanded) return;
      this.close();
    },
    open: function () {
      this.expanded = true;
      this.focusItemAtIndex(0);
      this.$nextTick(() => {
        if (this.refitMenuIfBlocked) this.refitMenu();
      });
    },
    close: function () {
      this.expanded = false;
      this.focusIndex = 0;
    },
    toggle: function () {
      if (this.expanded) {
        this.close();
        return;
      }
      this.open();
    },
    focusItemAtIndex: function (index) {
      this.focusIndex = index;
      this.$nextTick(() => {
        this.$refs.menuItems[index]
          .querySelector(".dropdown-button-menu-link")
          .focus();
      });
    },
    moveItemFocus: function (distance) {
      // Positive means going up in index (0, 1, 2), negative means going down in index (2, 1, 0)
      const numberOfItems = this.$refs.menuItems.length;
      const newFocus = positiveModulo(
        this.focusIndex + distance,
        numberOfItems
      );
      this.focusItemAtIndex(newFocus);
    },
    refitMenu: function () {
      // TODO If we later want to add the option to display the dropdown left or right to the button (instead of top or bottom)
      // we would have to extend this method a little.
      const menu = this.$refs.menu;
      const scrollParent = getScrollParent(menu);
      //const button = this.$refs.button;
      //const buttonBounds = button.getBoundingClientRect();
      const menuBounds = menu.getBoundingClientRect();
      const parentBounds = scrollParent.getBoundingClientRect();
      console.log(menuBounds);
      console.log(parentBounds);
      const overflowFactorsRaw = Object.freeze({
        top: menuBounds.top - parentBounds.top,
        right: scrollParent.clientWidth - menuBounds.x - menuBounds.width,
        bottom: scrollParent.clientHeight - menuBounds.y - menuBounds.height,
        left: menuBounds.left - parentBounds.left,
      });
      console.log("overflow factors: ", overflowFactorsRaw);
      
      const initialOrientation = this.orientation;
      const overflowFactorsWithButtonRaw = {... overflowFactorsRaw};
      //if (initialOrientation.startsWith("top-"))
      //  overflowFactorsWithButtonRaw.bottom = overflowFactorsRaw - 
    },
  },
};
</script>

<style lang="scss">
.dropdown-button {
  position: relative;
  display: inline-block;

  &[aria-expanded="true"] {
    .dropdown-button-menu {
      display: block;
    }
  }
}

.dropdown-button-menu {
  position: absolute;
  z-index: $z-index-dropdown;
  display: none;
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

.dropdown-button-menu-list {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.dropdown-button-menu-link {
  display: block;
  padding: 0.5em 1em;
  border-bottom: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: $black;

  &:hover {
    background-color: $dark-10;
    color: $black;
  }

  &:focus-visible {
    outline-offset: -0.2rem;
  }
}
</style>