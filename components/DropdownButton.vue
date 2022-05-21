<template>
  <div class="dropdown-button" :aria-expanded="expanded + ''">
    <simple-button
      suffixed-icon="caret-down"
      :target="'#' + menuId"
      :id="menuButtonId"
      aria-haspopup="true"
      :aria-owns="menuListId"
      role="button"
      >Testing</simple-button
    >
    <div class="dropdown-button-menu" :id="menuId">
      <menu
        :id="menuListId"
        role="menu"
        class="dropdown-button-menu-list"
        :aria-labelledby="menuButtonId"
      >
        <li
          v-for="menuItem in menu"
          v-bind:key="menuItem.link"
          class="dropdown-button-menu-item"
          role="presentation"
        >
          <a
            :href="menuItem.link"
            :title="menuItem.label"
            class="dropdown-button-menu-link"
            role="menuitem"
            >{{ menuItem.label }}</a
          >
        </li>
      </menu>
    </div>
  </div>
</template>

<script>
// See https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role for accessible roles
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
      expanded: true,
    };
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