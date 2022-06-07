<template>
  <aside class="project-tools">
    <!-- Rename heading locale key to 'project-meta' -->
    <h2 class="sr-only">{{ $t("label_project-summary_tools") }}</h2>
    <ul class="project-tools-list">
      <li
        class="project-tools-item"
        v-for="tool in tools"
        v-bind:key="tool.iconId"
      >
        <icon-item :label="tool.label" :class="size"
          ><component v-bind:is="'Product' + tool.iconId"></component
        ></icon-item>
      </li>
    </ul>
  </aside>
</template>

<script>
import IconItem from "./IconItem.vue";
import { validateIconItemList } from "~/assets/lib/icon-item-list";

import ProductAdobeAfterEffects from "~/assets/icons/product-adobe-after-effects.svg?inline";
import ProductAdobeAnimate from "~/assets/icons/product-adobe-animate.svg?inline";
import ProductAdobeAudition from "~/assets/icons/product-adobe-audition.svg?inline";
import ProductAdobeIllustrator from "~/assets/icons/product-adobe-illustrator.svg?inline";
import ProductAdobeIndesign from "~/assets/icons/product-adobe-indesign.svg?inline";
import ProductAdobeLightroom from "~/assets/icons/product-adobe-lightroom.svg?inline";
import ProductAdobeMediaEncoder from "~/assets/icons/product-adobe-media-encoder.svg?inline";
import ProductAdobePhotoshop from "~/assets/icons/product-adobe-photoshop.svg?inline";
import ProductAdobePremierePro from "~/assets/icons/product-adobe-premiere-pro.svg?inline";
import ProductAdobeXd from "~/assets/icons/product-adobe-xd.svg?inline";
import ProductAndroid from "~/assets/icons/product-android.svg?inline";
import ProductAxure from "~/assets/icons/product-axure.svg?inline";
import ProductBlender from "~/assets/icons/product-blender.svg?inline";
import ProductCSharp from "~/assets/icons/product-c-sharp.svg?inline";
import ProductCinema4d from "~/assets/icons/product-cinema-4d.svg?inline";
import ProductGit from "~/assets/icons/product-git.svg?inline";
import ProductGodot from "~/assets/icons/product-godot.svg?inline";
import ProductGulp from "~/assets/icons/product-gulp.svg?inline";
import ProductHtml from "~/assets/icons/product-html.svg?inline";
import ProductJava from "~/assets/icons/product-java.svg?inline";
import ProductJavascript from "~/assets/icons/product-javascript.svg?inline";
import ProductJira from "~/assets/icons/product-jira.svg?inline";
import ProductMicrosoftPowerPoint from "~/assets/icons/product-microsoft-power-point.svg?inline";
import ProductMicrosoftWord from "~/assets/icons/product-microsoft-word.svg?inline";
import ProductMysql from "~/assets/icons/product-mysql.svg?inline";
import ProductNodeJs from "~/assets/icons/product-node-js.svg?inline";
import ProductPhaser from "~/assets/icons/product-phaser.svg?inline";
import ProductSass from "~/assets/icons/product-sass.svg?inline";
import ProductUnity from "~/assets/icons/product-unity.svg?inline";
import ProductVisualStudioCode from "~/assets/icons/product-visual-studio-code.svg?inline";
import ProductVueJs from "~/assets/icons/product-vue-js.svg?inline";
import ProductWebstorm from "~/assets/icons/product-webstorm.svg?inline";

export default {
  components: {
    IconItem,
    ProductAdobeAfterEffects,
    ProductAdobeAnimate,
    ProductAdobeAudition,
    ProductAdobeIllustrator,
    ProductAdobeIndesign,
    ProductAdobeLightroom,
    ProductAdobeMediaEncoder,
    ProductAdobePhotoshop,
    ProductAdobePremierePro,
    ProductAdobeXd,
    ProductAndroid,
    ProductAxure,
    ProductBlender,
    ProductCSharp,
    ProductCinema4d,
    ProductGit,
    ProductGodot,
    ProductGulp,
    ProductHtml,
    ProductJava,
    ProductJavascript,
    ProductJira,
    ProductMicrosoftPowerPoint,
    ProductMicrosoftWord,
    ProductMysql,
    ProductNodeJs,
    ProductPhaser,
    ProductSass,
    ProductUnity,
    ProductVisualStudioCode,
    ProductVueJs,
    ProductWebstorm,
  },
  props: {
    tools: {
      type: Array,
      required: true,
      validator: validateIconItemList,
      default: function () {
        return [{ iconId: "Godot", label: "Godot" }];
      },
    },
    size: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.project-tools-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
}
</style>