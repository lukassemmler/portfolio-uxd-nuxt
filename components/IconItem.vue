<template>
  <div class="icon-item-container">
    <div class="icon-item">
      <span class="icon icon-product"
        ><component v-bind:is="'Product' + iconId"></component
      ></span>
      <span class="icon-item-label">{{ label }}</span>
    </div>
  </div>
</template>

<script>
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
    iconId: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-item-container {
  width: 6em;
  height: 6em;

  &.small {
    font-size: 0.8em;
  }
}

.icon-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  //background-color: $dark-05;
  transition: background-color 0.07s ease-out;
  border-radius: 0.5rem;

  &:hover {
    background-color: $dark-10;

    .icon-product svg {
      //fill: $dusk-90;
    }
  }
}

.icon-product,
.icon-item-label {
  display: inline-block;
}

.icon-item-label {
  font-size: 0.8em;
  text-align: center;
  height: 1em;
  margin-top: 0.2em;
}

.icon-product {
  width: 3em;
  height: 3em;

  svg {
    width: 100%;
    fill: currentColor;
  }
}

.icon-item-list {
  display: flex;
  flex-flow: row wrap;
  list-style-type: none;
  padding: 0;
  margin: 0 0 2em 0;

  &.centered {
    justify-content: center;
  }
}
</style>