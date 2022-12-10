<template>
  <project-template
    background="bg-gradient-orange"
    :title="$t('meta-title_power-ui')"
    :meta-name="$t('project-summary-name_power-ui')"
    :meta-tasks="$t('project-summary-tasks_power-ui')"
    :meta-format="$t('project-summary-format_power-ui')"
    :meta-lecture="$t('project-summary-client_power-ui')"
    :meta-date="$t('project-summary-date_power-ui')"
    :project-tools="[
      { iconId: 'Axure', label: 'Axure' },
      { iconId: 'AdobePhotoshop', label: 'Photoshop' },
      { iconId: 'Blender', label: 'Blender' },
      { iconId: 'Unity', label: 'Unity' },
      { iconId: 'VisualStudioCode', label: 'VS Code' },
      //{ iconId: 'Javascript', label: 'JavaScript' },
      //{ iconId: 'NodeJs', label: 'NodeJS' },
      { iconId: 'VueJs', label: 'VueJS' },
      { iconId: 'Phaser', label: 'Phaser' },
      { iconId: 'Sass', label: 'SASS' },
    ]"
    :nav-previous-title="$t('project-nav_steering-wheel')"
    :nav-previous-link="'/projects/steering-wheel'"
    :nav-previous-color="'bg-hover-green'"
  >
    <template v-slot:header>
      <div class="container huge">
        <simple-image
          class="standalone rounded fit-image"
          src="power-ui/Power-UI Color Board.png"
          :alt="$t('alt_power-ui_color-board')"
          sizes="xs:400px sm:640px md:960px lg:1200px"
          ratio="5-by-3"
        ></simple-image>
      </div>
    </template>

    <template v-slot:content>
      <section id="section-overview" class="section">
        <div class="container huge">
          <div class="container small left no-padding">
            <h2 id="overview" class="sr-only">{{ $t("heading_overview") }}</h2>
            <p>{{ $t("text_power-ui_intro-1").join("") }}</p>
            <aside class="quotation">
              <q>{{ $t("text_power-ui_intro-quote") }}</q>
            </aside>
            <markdown-block
              :markup="$t('text_power-ui_intro-2').join('')"
            ></markdown-block>
          </div>
        </div>
      </section>

      <section id="section-concept" class="section">
        <div class="container huge">
          <div class="container small left no-padding">
            <h2 id="concept">{{ $t("heading_power-ui_concept") }}</h2>
            <p
              v-html="$t('text_power-ui_concept_video-game-genre').join('')"
            ></p>
            <p v-html="$t('text_power-ui_concept_mobile-first').join('')"></p>
            <p v-html="$t('text_power-ui_concept_theme-1').join('')"></p>
            <p v-html="$t('text_power-ui_concept_theme-2').join('')"></p>
            <p v-html="$t('text_power-ui_concept_tutorial_intro').join('')"></p>
          </div>
          <div class="container medium">
            TODO Tabmenu
            <!--
      {{#extend "tab-menu-stepped"
          id="tutorial-box"
          numberOfPages=7 }}
        {{#content "cards"}}
          {{> side-card 
              id="tutorial-step-1" 
              number="1" 
              isFlipped=false 
              imgSrc="project/power-ui/Power%20UI%20-%20Tutorial%201.jpg" 
              imgAlt="" 
              imgRatio="3-by-2" 
              imgHasPlaceholder=true 
              imgLoadLazy=true 
              description=(str "text_power-ui_concept_tutorial_step-1") }}
          {{> side-card 
              id="tutorial-step-2" 
              number="2" 
              isFlipped=true 
              imgSrc="project/power-ui/Power%20UI%20-%20Tutorial%202.jpg" 
              imgAlt="" 
              imgRatio="3-by-2" 
              imgHasPlaceholder=true 
              imgLoadLazy=true 
              description=(str "text_power-ui_concept_tutorial_step-2") }}
          {{> side-card 
              id="tutorial-step-3" 
              number="3" 
              isFlipped=false 
              imgSrc="project/power-ui/Power%20UI%20-%20Tutorial%203.jpg" 
              imgAlt="" 
              imgRatio="3-by-2" 
              imgHasPlaceholder=true 
              imgLoadLazy=true 
              description=(str "text_power-ui_concept_tutorial_step-3") }}
          {{> side-card 
              id="tutorial-step-4" 
              number="4" 
              isFlipped=true 
              imgSrc="project/power-ui/Power%20UI%20-%20Tutorial%204.jpg" 
              imgAlt="" 
              imgRatio="3-by-2" 
              imgHasPlaceholder=true 
              imgLoadLazy=true 
              description=(str "text_power-ui_concept_tutorial_step-4") }}
          {{> side-card 
              id="tutorial-step-5" 
              number="5" 
              isFlipped=false 
              imgSrc="project/power-ui/Power%20UI%20-%20Tutorial%205.jpg" 
              imgAlt="" 
              imgRatio="3-by-2" 
              imgHasPlaceholder=true 
              imgLoadLazy=true 
              description=(str "text_power-ui_concept_tutorial_step-5") }}
          {{> side-card 
              id="tutorial-step-6" 
              number="6" 
              isFlipped=true 
              imgSrc="project/power-ui/Power%20UI%20-%20Tutorial%206.jpg" 
              imgAlt="" 
              imgRatio="3-by-2" 
              imgHasPlaceholder=true 
              imgLoadLazy=true 
              description=(str "text_power-ui_concept_tutorial_step-6") }}
          {{> side-card 
              id="tutorial-step-7" 
              number="7" 
              isFlipped=false 
              imgSrc="project/power-ui/Power%20UI%20-%20Tutorial%207.jpg" 
              imgAlt="" 
              imgRatio="3-by-2" 
              imgHasPlaceholder=true 
              imgLoadLazy=true 
              description=(str "text_power-ui_concept_tutorial_step-7") }}
        {{/content}}
      {{/extend}}
      -->
          </div>
          <div class="container small">
            <p>{{ $t("text_power-ui_concept_wireframes") }}</p>
          </div>
          <div class="container medium">
            <div class="pillar-container gapped-v gapped-h">
              <div class="pillar-row">
                <div
                  class="pillar-col-bg-6"
                  v-for="index in 2"
                  :key="'column-' + index"
                >
                  <simple-image
                    v-for="wireframe in columnizeArray(
                      wireframes,
                      2,
                      index - 1
                    )"
                    :key="'2-' + wireframe.id"
                    class="standalone rounded fit-image shadow-medium-faint"
                    :src="wireframe.src"
                    :alt="wireframe.alt"
                    sizes="xs:400px sm:640px md:960px lg:1200px"
                    ratio="8-by-5"
                  ></simple-image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section-design" class="section">
        <div class="container small">
          <h2 id="design">{{ $t("heading_power-ui_design") }}</h2>
          <p>{{ $t("text_power-ui_design_intro").join("") }}</p>
        </div>
        <div class="container small">
          <h3 id="icon-design">{{ $t("heading_power-ui_icon-design") }}</h3>
          <p>{{ $t("text_power-ui_design_icon-design_intro").join("") }}</p>
          <p>{{ $t("text_power-ui_design_icon-design_version-1").join("") }}</p>
        </div>
        <div class="container medium">
          <div class="icon-item-list">
            <icon-item
              v-for="(crudeIcon, index) in crudeIcons"
              :key="index"
              :label="crudeIcon.label"
              ><component v-bind:is="crudeIcon.icon"></component
            ></icon-item>
          </div>
        </div>
        <div class="container small">
          <p>{{ $t("text_power-ui_design_icon-design_version-2").join("") }}</p>
        </div>
        <div class="container medium">
          <div class="pillar-col-bg-6 icon-item-list">
            <icon-item
              v-for="(cleanIcon, index) in cleanIcons"
              :key="index"
              :label="cleanIcon.label"
              ><component v-bind:is="cleanIcon.icon"></component
            ></icon-item>
          </div>
        </div>
        <div class="container small">
          <h3 id="screen-design">{{ $t("heading_power-ui_screen-design") }}</h3>
          <p>{{ $t("text_power-ui_design_screen-design_intro").join("") }}</p>
          <p>
            {{ $t("text_power-ui_design_screen-design_contrasts").join("") }}
          </p>
          <simple-image
            class="standalone rounded fit-image shadow-medium-faint"
            src="power-ui/screendesign--smart-tv-contrasts.jpg"
            :alt="$t('alt_power-ui_screendesign_smart-tv_contrasts')"
            sizes="xs:400px sm:640px md:960px lg:1200px"
            ratio="16-by-9"
          ></simple-image>
          <p>
            {{ $t("text_power-ui_design_screen-design_smart-tv").join("") }}
          </p>
        </div>
        <div class="container medium">
          <simple-image
            class="standalone rounded fit-image shadow-medium-faint"
            src="power-ui/screendesign--smart-tv-v-1.jpg"
            :alt="$t('alt_power-ui_screendesign_smart-tv_overview')"
            sizes="xs:400px sm:640px md:960px lg:1200px"
            ratio="16-by-9"
          ></simple-image>
        </div>
        <div class="container small">
          <h3 id="terrain">{{ $t("heading_power-ui_terrain") }}</h3>
          <p>{{ $t("text_power-ui_design_terrain_intro").join("") }}</p>
          <p>{{ $t("text_power-ui_design_terrain_tools").join("") }}</p>
        </div>
        <div class="container medium">
          <!-- {{> iso-tiles-demo }} -->
        </div>
        <div class="container small">
          <h3 id="assets">{{ $t("heading_power-ui_assets") }}</h3>
          <p>{{ $t("text_power-ui_design_assets_intro").join("") }}</p>
          <p>{{ $t("text_power-ui_design_assets_categories").join("") }}</p>
          <ul class="big-markers">
            <li class="color-red-light">
              {{ $t("label_power-ui_design_assets_category_resources") }}
            </li>
            <li class="color-orange-light">
              {{ $t("label_power-ui_design_assets_category_logistics") }}
            </li>
            <li class="color-yellow-light">
              {{ $t("label_power-ui_design_assets_category_power-plants") }}
            </li>
            <li class="color-green-light">
              {{ $t("label_power-ui_design_assets_category_infrastructure") }}
            </li>
            <li class="color-blue-light">
              {{ $t("label_power-ui_design_assets_category_other-buildings") }}
            </li>
          </ul>
        </div>
        <div class="container medium">
          <div class="pillar-container gapped-h gapped-v images-only">
            <div class="pillar-row">
              <div
                class="pillar-col-6 pillar-col-bg-3"
                v-for="building in buildings"
                :key="building.id"
              >
                <dot-item
                  :src="building.src"
                  :alt="building.alt"
                  :label="building.label"
                  :background="building.background"
                ></dot-item>
              </div>
            </div>
          </div>
        </div>
        <div class="container small">
          <p class="spaced-y">
            {{ $t("text_power-ui_design_assets_sketches").join("") }}
          </p>
        </div>
        <div class="container full-bleed">
          <!-- {{> iso-world }} -->
        </div>
        <div class="container small">
          <p class="spaced-y">
            {{ $t("text_power-ui_design_assets_3d-models").join("") }}
          </p>
        </div>
      </section>

      <section id="section-implementation" class="section">
        <div class="container-small">
          <h2 id="implementation">
            {{ $t("heading_power-ui_implementation") }}
          </h2>
          <p>
            {{ $t("text_power-ui_implementation_intro") }}
          </p>
        </div>
        <div class="container-medium">
          <div class="pillar-container gapped-h spaced-y">
            <div class="pillar-row">
              <div class="pillar-col">
                <column-card
                  class="bg-pink font-white"
                  href="#prototype-axure"
                  number="1"
                  src="power-ui/prototype--axure-v0-6-overview.jpg"
                  alt=""
                  ratio="16-by-9"
                  :description="$t('heading_power-ui_axure')"
                  :icons="implementationIcons.axure"
                ></column-card>
              </div>
              <div class="pillar-col">
                <column-card
                  class="bg-green font-white"
                  href="#prototype-unity"
                  number="2"
                  src="power-ui/prototype--unity-wire-placement.jpg"
                  alt=""
                  ratio="16-by-9"
                  :description="$t('heading_power-ui_unity')"
                  :icons="implementationIcons.unity"
                ></column-card>
              </div>
              <div class="pillar-col">
                <column-card
                  class="bg-blue font-white"
                  href="#prototype-phaser-and-vue-js"
                  number="3"
                  src="power-ui/prototype--phaser-v2-1-building-placement.jpg"
                  alt=""
                  ratio="16-by-9"
                  :description="$t('heading_power-ui_phaser-and-vue-js')"
                  :icons="implementationIcons.phaser"
                ></column-card>
              </div>
            </div>
          </div>
        </div>

        <div class="container-small">
          <h3 id="prototype-axure">
            {{ $t("heading_power-ui_prototype-axure") }}
          </h3>
          <p>
            {{ $t("text_power-ui_implementation_prototype-axure_intro") }}
          </p>
          <simple-image
            class="standalone"
            src="power-ui/program--axure.png"
            alt="Axure Prototype with Logic Programming"
            caption="Axure Prototype with Logic Programming for Building menu."
            ratio="16-by-9"
          ></simple-image>
          <p class="spaced-y">
            {{
              $t("text_power-ui_implementation_prototype-axure_pros-and-cons")
            }}
          </p>
        </div>

        <div class="container bg-blue">
          <!--
      {{> phone-preview
          src="static/power-prototype-1/_showcase/preview.html" 
          id="power-ui-prototype-1" 
          background="bg-blue" }}
      -->
          <div class="container-medium">
            <div class="pillar-container gapped-h gapped-v-big images-only">
              <div
                class="pillar-row"
                v-for="screenshot in prototypeScreenshots.axure"
                v-bind:key="screenshot.id"
              >
                <div class="pillar-col">
                  <simple-image
                    class="standalone rounded fit-image shadow-big"
                    :src="screenshot.src"
                    :alt="screenshot.alt"
                    ratio="16-by-9"
                  >
                  </simple-image>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-small">
          <h3 id="prototype-unity">
            {{ $t("heading_power-ui_prototype-unity") }}
          </h3>
          <p>
            {{ $t("text_power-ui_implementation_prototype-unity_intro") }}
          </p>
          <p>
            {{ $t("text_power-ui_implementation_prototype-unity_unity") }}
          </p>
          <p>
            {{ $t("text_power-ui_implementation_prototype-unity_features") }}
          </p>
        </div>
        <div class="container-medium">
          <a href="../power-ui/unity--network-breakdown.gif">test</a>
          <div class="pillar-container gapped-h gapped-v-big images-only">
            <div class="pillar-row">
              <div
                class="pillar-col-bg-4"
                v-for="screenshot in prototypeScreenshots.unity"
                v-bind:key="screenshot.id"
              >
                <thumbnail-box
                  class="standalone rounded fit-image shadow-big"
                  :target="'/..' + screenshot.gif"
                  targetType="file"
                  :src="screenshot.src"
                  :alt="screenshot.alt"
                  sizes="xs:400px sm:640px md:960px lg:1200px"
                  ratio="16-by-9"
                  label="GIF"
                >
                  <!-- 
                    <nuxt-img> does not support animated GIFs for Nuxt 2.
                    It will prolly be fixed in later versions (presumably 
                    Nuxt 3), see https://github.com/unjs/ipx/issues/35
                  -->
                  <img :src="screenshot.gif" :alt="screenshot.alt" />
                </thumbnail-box>
              </div>
            </div>
          </div>
        </div>

        <div class="container-small">
          <h3 id="prototype-phaser-and-vue-js">
            {{ $t("heading_power-ui_prototype-phaser-and-vue-js") }}
          </h3>
          <p>
            {{ $t("text_power-ui_implementation_prototype-phaser_intro") }}
          </p>
          <p>
            {{
              $t("text_power-ui_implementation_prototype-phaser_architecture")
            }}
          </p>
          <p>
            {{ $t("text_power-ui_implementation_prototype-phaser_features") }}
          </p>
          <p class="spaced-y">
            {{ $t("text_power-ui_implementation_prototype-phaser_goal") }}
          </p>
        </div>

        <div class="container bg-yellow">
          <!--
      {{> phone-preview
          src="static/power-prototype-2/_showcase/preview.html" 
          id="power-ui-prototype-2" 
          background="bg-yellow" }}
      -->
          <div class="container-medium">
            <div class="pillar-container gapped-h gapped-v-big images-only">
              <div
                class="pillar-row"
                v-for="screenshot in prototypeScreenshots.phaser"
                v-bind:key="screenshot.id"
              >
                <div class="pillar-col">
                  <simple-image
                    class="standalone rounded fit-image shadow-big"
                    :src="screenshot.src"
                    :alt="screenshot.alt"
                    ratio="16-by-9"
                  >
                  </simple-image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section-user-testing" class="section">
        <div class="container small">
          <h2 id="user-testing">{{ $t("heading_power-ui_user-testing") }}</h2>
          <p>{{ $t("text_power-ui_user-testing_intro") }}</p>
          <p>{{ $t("text_power-ui_user-testing_test-structure") }}</p>
          <p>{{ $t("text_power-ui_user-testing_results") }}</p>
          <simple-image
            class="standalone rounded fit-image shadow-medium"
            src="power-ui/global-game-jam-group-shot.jpg"
            :alt="$t('alt_power-ui_global-game-jam_group-shot')"
            caption="The team 'Quick and Dirty' of the Global Game Jam 2020 in Ansbach. "
            ratio="4-by-3"
          >
          </simple-image>
          <p>{{ $t("text_power-ui_user-testing_global-game-jam") }}</p>
        </div>
        <div class="container-medium">
          <div class="pillar-container gapped-h gapped-v images-only spaced-y">
            <div class="pillar-row">
              <div
                class="pillar-col-6 pillar-col-bg-3"
                v-for="sheet in userTestSheets"
                v-bind:key="sheet.id"
              >
                <simple-image
                  class="standalone rounded fit-image shadow-medium"
                  :src="sheet.src"
                  :alt="sheet.alt"
                  ratio="din-a4-portrait"
                >
                </simple-image>
              </div>
              <div class="pillar-col-6 pillar-col-bg-3 flex-dir-col">
                <span class="label-xl">{{
                  $t("label_power-ui_user-testing_test-1")
                }}</span>
                <span class="label-xl">{{
                  $t("label_power-ui_user-testing_test-2")
                }}</span>
                <span class="label-2xl flex-edge-bottom">{{
                  $t("label_power-ui_user-testing_number-of-participants")
                }}</span>
                <span class="label-bg">{{
                  $t("label_power-ui_user-testing_participants")
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
  </project-template>
</template>

<script>
import IconCrudeAtomicEnergy from "~/static/power-ui/Icon_Crude_AtomicEnergy.svg?inline";
import IconCrudeBackArrow from "~/static/power-ui/Icon_Crude_BackArrow.svg?inline";
import IconCrudeBulldozer from "~/static/power-ui/Icon_Crude_Bulldozer.svg?inline";
import IconCrudeCanal from "~/static/power-ui/Icon_Crude_Canal.svg?inline";
import IconCrudeCatastrophe from "~/static/power-ui/Icon_Crude_Catastrophe.svg?inline";
import IconCrudeCoal from "~/static/power-ui/Icon_Crude_Coal.svg?inline";
import IconCrudeConstruction from "~/static/power-ui/Icon_Crude_Construction.svg?inline";
import IconCrudeCorncob from "~/static/power-ui/Icon_Crude_Corncob.svg?inline";
import IconCrudeDangerAtomic from "~/static/power-ui/Icon_Crude_DangerAtomic.svg?inline";
import IconCrudeDangerElectricity from "~/static/power-ui/Icon_Crude_DangerElectricity.svg?inline";
import IconCrudeDangerGeneric from "~/static/power-ui/Icon_Crude_DangerGeneric.svg?inline";
import IconCrudeExploreMap from "~/static/power-ui/Icon_Crude_ExploreMap.svg?inline";
import IconCrudeFactory from "~/static/power-ui/Icon_Crude_Factory.svg?inline";
import IconCrudeInsurance from "~/static/power-ui/Icon_Crude_Insurance.svg?inline";
import IconCrudeLoadShedding from "~/static/power-ui/Icon_Crude_LoadShedding.svg?inline";
import IconCrudeLoan from "~/static/power-ui/Icon_Crude_Loan.svg?inline";
import IconCrudeMine from "~/static/power-ui/Icon_Crude_Mine.svg?inline";
import IconCrudeMoney from "~/static/power-ui/Icon_Crude_Money.svg?inline";
import IconCrudeNaturalGas from "~/static/power-ui/Icon_Crude_NaturalGas.svg?inline";
import IconCrudeNuclearWaste from "~/static/power-ui/Icon_Crude_NuclearWaste.svg?inline";
import IconCrudeOil from "~/static/power-ui/Icon_Crude_Oil.svg?inline";
import IconCrudeOrganic from "~/static/power-ui/Icon_Crude_Organic.svg?inline";
import IconCrudePolitics from "~/static/power-ui/Icon_Crude_Politics.svg?inline";
import IconCrudePollution from "~/static/power-ui/Icon_Crude_Pollution.svg?inline";
import IconCrudePowerA from "~/static/power-ui/Icon_Crude_PowerA.svg?inline";
import IconCrudePowerB from "~/static/power-ui/Icon_Crude_PowerB.svg?inline";
import IconCrudePowerplantCoal from "~/static/power-ui/Icon_Crude_PowerplantCoal.svg?inline";
import IconCrudePowerPlantGeneric from "~/static/power-ui/Icon_Crude_PowerPlantGeneric.svg?inline";
import IconCrudePowerplantNuclear from "~/static/power-ui/Icon_Crude_PowerplantNuclear.svg?inline";
import IconCrudePowerplantSun from "~/static/power-ui/Icon_Crude_PowerplantSun.svg?inline";
import IconCrudePowerplantWind from "~/static/power-ui/Icon_Crude_PowerplantWind.svg?inline";
import IconCrudePowerPlug from "~/static/power-ui/Icon_Crude_PowerPlug.svg?inline";
import IconCrudePowerpole from "~/static/power-ui/Icon_Crude_Powerpole.svg?inline";
import IconCrudeQuestionMark from "~/static/power-ui/Icon_Crude_QuestionMark.svg?inline";
import IconCrudeReserach from "~/static/power-ui/Icon_Crude_Reserach.svg?inline";
import IconCrudeResources from "~/static/power-ui/Icon_Crude_Resources.svg?inline";
import IconCrudeRoad from "~/static/power-ui/Icon_Crude_Road.svg?inline";
import IconCrudeShip from "~/static/power-ui/Icon_Crude_Ship.svg?inline";
import IconCrudeSigmaSign from "~/static/power-ui/Icon_Crude_SigmaSign.svg?inline";
import IconCrudeStats from "~/static/power-ui/Icon_Crude_Stats.svg?inline";
import IconCrudeTracks from "~/static/power-ui/Icon_Crude_Tracks.svg?inline";
import IconCrudeTradingPower from "~/static/power-ui/Icon_Crude_TradingPower.svg?inline";
import IconCrudeTradingRessources from "~/static/power-ui/Icon_Crude_TradingRessources.svg?inline";
import IconCrudeTrain from "~/static/power-ui/Icon_Crude_Train.svg?inline";
import IconCrudeTrashCan from "~/static/power-ui/Icon_Crude_TrashCan.svg?inline";
import IconCrudeTruck from "~/static/power-ui/Icon_Crude_Truck.svg?inline";
import IconCrudeUranium from "~/static/power-ui/Icon_Crude_Uranium.svg?inline";
import IconCrudeWrench from "~/static/power-ui/Icon_Crude_Wrench.svg?inline";
import IconMenuBulldozer from "~/static/power-ui/Icon_Menu_Bulldozer.svg?inline";
import IconMenuBurgerMenu from "~/static/power-ui/Icon_Menu_BurgerMenu.svg?inline";
import IconMenuCoal from "~/static/power-ui/Icon_Menu_Coal.svg?inline";
import IconMenuCoin from "~/static/power-ui/Icon_Menu_Coin.svg?inline";
import IconMenuCrane from "~/static/power-ui/Icon_Menu_Crane.svg?inline";
import IconMenuEmotion1Happy from "~/static/power-ui/Icon_Menu_Emotion1Happy.svg?inline";
import IconMenuEmotion2Friendly from "~/static/power-ui/Icon_Menu_Emotion2Friendly.svg?inline";
import IconMenuEmotion3Indifferent from "~/static/power-ui/Icon_Menu_Emotion3Indifferent.svg?inline";
import IconMenuEmotion4Bad from "~/static/power-ui/Icon_Menu_Emotion4Bad.svg?inline";
import IconMenuEmotion5Angry from "~/static/power-ui/Icon_Menu_Emotion5Angry.svg?inline";
import IconMenuFinances from "~/static/power-ui/Icon_Menu_Finances.svg?inline";
import IconMenuGoal from "~/static/power-ui/Icon_Menu_Goal.svg?inline";
import IconMenuHouse from "~/static/power-ui/Icon_Menu_House.svg?inline";
import IconMenuLogistics from "~/static/power-ui/Icon_Menu_Logistics.svg?inline";
import IconMenuMail from "~/static/power-ui/Icon_Menu_Mail.svg?inline";
import IconMenuManagement from "~/static/power-ui/Icon_Menu_Management.svg?inline";
import IconMenuOtherBuildings from "~/static/power-ui/Icon_Menu_OtherBuildings.svg?inline";
import IconMenuPollution from "~/static/power-ui/Icon_Menu_Pollution.svg?inline";
import IconMenuPower from "~/static/power-ui/Icon_Menu_Power.svg?inline";
import IconMenuPowerPlant from "~/static/power-ui/Icon_Menu_PowerPlant.svg?inline";
import IconMenuPowerPole from "~/static/power-ui/Icon_Menu_PowerPole.svg?inline";
import IconMenuResearch from "~/static/power-ui/Icon_Menu_Research.svg?inline";
import IconMenuResources from "~/static/power-ui/Icon_Menu_Resources.svg?inline";
import IconMenuZoom from "~/static/power-ui/Icon_Menu_Zoom.svg?inline";

import ProductAxure from "~/assets/icons/product-axure.svg?inline";
import ProductPhaser from "~/assets/icons/product-phaser.svg?inline";
import ProductUnity from "~/assets/icons/product-unity.svg?inline";
import ProductVueJs from "~/assets/icons/product-vue-js.svg?inline";

import { columnizeArray } from "~/assets/lib/array-util";

export default {
  data: function () {
    return {
      crudeIcons: [
        {
          icon: IconCrudeAtomicEnergy,
          label: this.$t("label_power-ui_icon_crude_atomic-energy"),
        },
        {
          icon: IconCrudeBackArrow,
          label: this.$t("label_power-ui_icon_crude_back-arrow"),
        },
        {
          icon: IconCrudeBulldozer,
          label: this.$t("label_power-ui_icon_crude_bulldozer"),
        },
        {
          icon: IconCrudeCanal,
          label: this.$t("label_power-ui_icon_crude_canal"),
        },
        {
          icon: IconCrudeCatastrophe,
          label: this.$t("label_power-ui_icon_crude_catastrophe"),
        },
        {
          icon: IconCrudeCoal,
          label: this.$t("label_power-ui_icon_crude_coal"),
        },
        {
          icon: IconCrudeConstruction,
          label: this.$t("label_power-ui_icon_crude_construction"),
        },
        {
          icon: IconCrudeCorncob,
          label: this.$t("label_power-ui_icon_crude_corn-cob"),
        },
        {
          icon: IconCrudeDangerAtomic,
          label: this.$t("label_power-ui_icon_crude_danger-atomic"),
        },
        {
          icon: IconCrudeDangerElectricity,
          label: this.$t("label_power-ui_icon_crude_danger-electricity"),
        },
        {
          icon: IconCrudeDangerGeneric,
          label: this.$t("label_power-ui_icon_crude_danger-generic"),
        },
        {
          icon: IconCrudeExploreMap,
          label: this.$t("label_power-ui_icon_crude_explore-map"),
        },
        {
          icon: IconCrudeFactory,
          label: this.$t("label_power-ui_icon_crude_factory"),
        },
        {
          icon: IconCrudeInsurance,
          label: this.$t("label_power-ui_icon_crude_insurance"),
        },
        {
          icon: IconCrudeLoadShedding,
          label: this.$t("label_power-ui_icon_crude_load-shedding"),
        },
        {
          icon: IconCrudeLoan,
          label: this.$t("label_power-ui_icon_crude_loan"),
        },
        {
          icon: IconCrudeMine,
          label: this.$t("label_power-ui_icon_crude_mine"),
        },
        {
          icon: IconCrudeMoney,
          label: this.$t("label_power-ui_icon_crude_money"),
        },
        {
          icon: IconCrudeNaturalGas,
          label: this.$t("label_power-ui_icon_crude_natural-gas"),
        },
        {
          icon: IconCrudeNuclearWaste,
          label: this.$t("label_power-ui_icon_crude_nuclear-waste"),
        },
        {
          icon: IconCrudeOil,
          label: this.$t("label_power-ui_icon_crude_crude-oil"),
        },
        {
          icon: IconCrudeOrganic,
          label: this.$t("label_power-ui_icon_crude_organic"),
        },
        {
          icon: IconCrudePolitics,
          label: this.$t("label_power-ui_icon_crude_politics"),
        },
        {
          icon: IconCrudePollution,
          label: this.$t("label_power-ui_icon_crude_pollution"),
        },
        {
          icon: IconCrudePowerA,
          label: this.$t("label_power-ui_icon_crude_power-a"),
        },
        {
          icon: IconCrudePowerB,
          label: this.$t("label_power-ui_icon_crude_power-b"),
        },
        {
          icon: IconCrudePowerplantCoal,
          label: this.$t("label_power-ui_icon_crude_power-plant-coal"),
        },
        {
          icon: IconCrudePowerPlantGeneric,
          label: this.$t("label_power-ui_icon_crude_power-plant-generic"),
        },
        {
          icon: IconCrudePowerplantNuclear,
          label: this.$t("label_power-ui_icon_crude_power-plant-nuclear"),
        },
        {
          icon: IconCrudePowerplantSun,
          label: this.$t("label_power-ui_icon_crude_power-plant-sun"),
        },
        {
          icon: IconCrudePowerplantWind,
          label: this.$t("label_power-ui_icon_crude_power-plant-wind"),
        },
        {
          icon: IconCrudePowerPlug,
          label: this.$t("label_power-ui_icon_crude_power-plug"),
        },
        {
          icon: IconCrudePowerpole,
          label: this.$t("label_power-ui_icon_crude_power-pole"),
        },
        {
          icon: IconCrudeQuestionMark,
          label: this.$t("label_power-ui_icon_crude_question-mark"),
        },
        {
          icon: IconCrudeReserach,
          label: this.$t("label_power-ui_icon_crude_research"),
        },
        {
          icon: IconCrudeResources,
          label: this.$t("label_power-ui_icon_crude_resources"),
        },
        {
          icon: IconCrudeRoad,
          label: this.$t("label_power-ui_icon_crude_road"),
        },
        {
          icon: IconCrudeShip,
          label: this.$t("label_power-ui_icon_crude_ship"),
        },
        {
          icon: IconCrudeSigmaSign,
          label: this.$t("label_power-ui_icon_crude_sigma-sign"),
        },
        {
          icon: IconCrudeStats,
          label: this.$t("label_power-ui_icon_crude_stats"),
        },
        {
          icon: IconCrudeTracks,
          label: this.$t("label_power-ui_icon_crude_tracks"),
        },
        {
          icon: IconCrudeTradingPower,
          label: this.$t("label_power-ui_icon_crude_trading-power"),
        },
        {
          icon: IconCrudeTradingRessources,
          label: this.$t("label_power-ui_icon_crude_trading-ressources"),
        },
        {
          icon: IconCrudeTrain,
          label: this.$t("label_power-ui_icon_crude_train"),
        },
        {
          icon: IconCrudeTrashCan,
          label: this.$t("label_power-ui_icon_crude_trash-can"),
        },
        {
          icon: IconCrudeTruck,
          label: this.$t("label_power-ui_icon_crude_truck"),
        },
        {
          icon: IconCrudeUranium,
          label: this.$t("label_power-ui_icon_crude_uranium"),
        },
        {
          icon: IconCrudeWrench,
          label: this.$t("label_power-ui_icon_crude_wrench"),
        },
      ],
      cleanIcons: [
        {
          icon: IconMenuBulldozer,
          label: this.$t("label_power-ui_icon_menu_bulldozer"),
        },
        {
          icon: IconMenuBurgerMenu,
          label: this.$t("label_power-ui_icon_menu_burger-menu"),
        },
        {
          icon: IconMenuCoal,
          label: this.$t("label_power-ui_icon_menu_coal"),
        },
        {
          icon: IconMenuCoin,
          label: this.$t("label_power-ui_icon_menu_coin"),
        },
        {
          icon: IconMenuCrane,
          label: this.$t("label_power-ui_icon_menu_crane"),
        },
        {
          icon: IconMenuEmotion1Happy,
          label: this.$t("label_power-ui_icon_menu_emotion-1-happy"),
        },
        {
          icon: IconMenuEmotion2Friendly,
          label: this.$t("label_power-ui_icon_menu_emotion-2-friendly"),
        },
        {
          icon: IconMenuEmotion3Indifferent,
          label: this.$t("label_power-ui_icon_menu_emotion-3-indifferent"),
        },
        {
          icon: IconMenuEmotion4Bad,
          label: this.$t("label_power-ui_icon_menu_emotion-4-bad"),
        },
        {
          icon: IconMenuEmotion5Angry,
          label: this.$t("label_power-ui_icon_menu_emotion-5-angry"),
        },
        {
          icon: IconMenuFinances,
          label: this.$t("label_power-ui_icon_menu_finances"),
        },
        {
          icon: IconMenuGoal,
          label: this.$t("label_power-ui_icon_menu_goal"),
        },
        {
          icon: IconMenuHouse,
          label: this.$t("label_power-ui_icon_menu_house"),
        },
        {
          icon: IconMenuLogistics,
          label: this.$t("label_power-ui_icon_menu_logistics"),
        },
        {
          icon: IconMenuMail,
          label: this.$t("label_power-ui_icon_menu_mail"),
        },
        {
          icon: IconMenuManagement,
          label: this.$t("label_power-ui_icon_menu_management"),
        },
        {
          icon: IconMenuOtherBuildings,
          label: this.$t("label_power-ui_icon_menu_other-buildings"),
        },
        {
          icon: IconMenuPollution,
          label: this.$t("label_power-ui_icon_menu_pollution"),
        },
        {
          icon: IconMenuPower,
          label: this.$t("label_power-ui_icon_menu_power"),
        },
        {
          icon: IconMenuPowerPlant,
          label: this.$t("label_power-ui_icon_menu_power-plant"),
        },
        {
          icon: IconMenuPowerPole,
          label: this.$t("label_power-ui_icon_menu_power-pole"),
        },
        {
          icon: IconMenuResearch,
          label: this.$t("label_power-ui_icon_menu_research"),
        },
        {
          icon: IconMenuResources,
          label: this.$t("label_power-ui_icon_menu_resources"),
        },
        {
          icon: IconMenuZoom,
          label: this.$t("label_power-ui_icon_menu_zoom"),
        },
      ],
      wireframes: [
        {
          id: "overview",
          src: "power-ui/sketch--concept-mobile--overview.jpg",
          alt: this.$t("alt_power-ui_sketch_concept-mobile_overview"),
        },
        {
          id: "research-tree",
          src: "power-ui/sketch--concept-mobile--research--tree.jpg",
          alt: this.$t("alt_power-ui_sketch_concept-mobile_research_tree"),
        },
        {
          id: "power-production",
          src: "power-ui/sketch--concept-mobile--power--current-production.jpg",
          alt: this.$t(
            "alt_power-ui_sketch_concept-mobile_power_current-production"
          ),
        },
        {
          id: "power-facilities",
          src: "power-ui/sketch--concept-mobile--power--facility-list.jpg",
          alt: this.$t(
            "alt_power-ui_sketch_concept-mobile_power_facility-list"
          ),
        },
        {
          id: "finances-history",
          src: "power-ui/sketch--concept-mobile--finances--history.jpg",
          alt: this.$t("alt_power-ui_sketch_concept-mobile_finances_history"),
        },
        {
          id: "finances-assets",
          src: "power-ui/sketch--concept-mobile--finances--asset-list.jpg",
          alt: this.$t(
            "alt_power-ui_sketch_concept-mobile_finances_asset-list"
          ),
        },
        {
          id: "detail-view",
          src: "power-ui/sketch--concept-mobile--detail-view--variant-b.jpg",
          alt: this.$t(
            "alt_power-ui_sketch_concept-mobile_detail-view_variant-b"
          ),
        },
        {
          id: "resources-trading",
          src: "power-ui/sketch--concept-mobile--resources--trading.jpg",
          alt: this.$t("alt_power-ui_sketch_concept-mobile_resources_trading"),
        },
      ],
      buildings: [
        {
          id: "civilian-building-1",
          src: "power-ui/asset--sketch-civilian-building-1.png",
          alt: this.$t("alt_power-ui_asset-sketch_civilian-building-1"),
          label: this.$t("label_power-ui_asset-sketch_civilian-building-1"),
          background: "bg-blue-light",
          category: "other",
        },
        {
          id: "wind-turbine",
          src: "power-ui/asset--sketch-wind-turbine.png",
          alt: this.$t("alt_power-ui_asset-sketch_wind-turbine"),
          label: this.$t("label_power-ui_asset-sketch_wind-turbine"),
          background: "bg-yellow-light",
          category: "power",
        },
        {
          id: "civilian-building-2",
          src: "power-ui/asset--sketch-civilian-building-2.png",
          alt: this.$t("alt_power-ui_asset-sketch_civilian-building-2"),
          label: this.$t("label_power-ui_asset-sketch_civilian-building-2"),
          background: "bg-blue-light",
          category: "other",
        },
        //{
        //  id: "civilian-building-3",
        //  src: "power-ui/asset--sketch-civilian-building-3.png",
        //  alt: this.$t("alt_power-ui_asset-sketch_civilian-building-3"),
        //  label: this.$t("label_power-ui_asset-sketch_civilian-building-3"),
        //  background: "bg-blue-light",
        //  category: "other",
        //},
        {
          id: "corn-field",
          src: "power-ui/asset--sketch-corn-field.png",
          alt: this.$t("alt_power-ui_asset-sketch_corn-field"),
          label: this.$t("label_power-ui_asset-sketch_corn-field"),
          background: "bg-red-light",
          category: "resources",
        },
        {
          id: "bucket-excavator",
          src: "power-ui/asset--sketch-bucket-excavator.png",
          alt: this.$t("alt_power-ui_asset-sketch_bucket-excavator"),
          label: this.$t("label_power-ui_asset-sketch_bucket-excavator"),
          background: "bg-red-light",
          category: "resources",
        },
        {
          id: "canal",
          src: "power-ui/asset--sketch-canal.png",
          alt: this.$t("alt_power-ui_asset-sketch_canal"),
          label: this.$t("label_power-ui_asset-sketch_canal"),
          background: "bg-green-light",
          category: "infrastructure",
        },
        {
          id: "tracks",
          src: "power-ui/asset--sketch-tracks.png",
          alt: this.$t("alt_power-ui_asset-sketch_tracks"),
          label: this.$t("label_power-ui_asset-sketch_tracks"),
          background: "bg-green-light",
          category: "infrastructure",
        },
        {
          id: "road",
          src: "power-ui/asset--sketch-road.png",
          alt: this.$t("alt_power-ui_asset-sketch_road"),
          label: this.$t("label_power-ui_asset-sketch_road"),
          background: "bg-green-light",
          category: "infrastructure",
        },
        {
          id: "freight-port",
          src: "power-ui/asset--sketch-freight-port.png",
          alt: this.$t("alt_power-ui_asset-sketch_freight-port"),
          label: this.$t("label_power-ui_asset-sketch_freight-port"),
          background: "bg-orange-light",
          category: "logistics",
        },
        {
          id: "hydro-electric-dam",
          src: "power-ui/asset--sketch-hydro-electric-dam.png",
          alt: this.$t("alt_power-ui_asset-sketch_hydro-electric-dam"),
          label: this.$t("label_power-ui_asset-sketch_hydro-electric-dam"),
          background: "bg-yellow-light",
          category: "power",
        },
        {
          id: "natural-gas-rig",
          src: "power-ui/asset--sketch-natural-gas-rig.png",
          alt: this.$t("alt_power-ui_asset-sketch_natural-gas-rig"),
          label: this.$t("label_power-ui_asset-sketch_natural-gas-rig"),
          background: "bg-red-light",
          category: "resources",
        },
        {
          id: "nuclear-fuel-factory",
          src: "power-ui/asset--sketch-nuclear-fuel-factory.png",
          alt: this.$t("alt_power-ui_asset-sketch_nuclear-fuel-factory"),
          label: this.$t("label_power-ui_asset-sketch_nuclear-fuel-factory"),
          background: "bg-red-light",
          category: "resources",
        },
        {
          id: "nuclear-waste-disposal",
          src: "power-ui/asset--sketch-nuclear-waste-disposal.png",
          alt: this.$t("alt_power-ui_asset-sketch_nuclear-waste-disposal"),
          label: this.$t("label_power-ui_asset-sketch_nuclear-waste-disposal"),
          background: "bg-red-light",
          category: "resources",
        },
        {
          id: "plant-biogas",
          src: "power-ui/asset--sketch-plant-biogas.png",
          alt: this.$t("alt_power-ui_asset-sketch_plant-biogas"),
          label: this.$t("label_power-ui_asset-sketch_plant-biogas"),
          background: "bg-yellow-light",
          category: "power",
        },
        {
          id: "plant-coal",
          src: "power-ui/asset--sketch-plant-coal.png",
          alt: this.$t("alt_power-ui_asset-sketch_plant-coal"),
          label: this.$t("label_power-ui_asset-sketch_plant-coal"),
          background: "bg-yellow-light",
          category: "power",
        },
        {
          id: "plant-garbage-incineration",
          src: "power-ui/asset--sketch-plant-garbage-incineration.png",
          alt: this.$t("alt_power-ui_asset-sketch_plant-garbage-incineration"),
          label: this.$t(
            "label_power-ui_asset-sketch_plant-garbage-incineration"
          ),
          background: "bg-yellow-light",
          category: "power",
        },
        {
          id: "plant-gas-turbine",
          src: "power-ui/asset--sketch-plant-gas-turbine.png",
          alt: this.$t("alt_power-ui_asset-sketch_plant-gas-turbine"),
          label: this.$t("label_power-ui_asset-sketch_plant-gas-turbine"),
          background: "bg-yellow-light",
          category: "power",
        },
        {
          id: "plant-nuclear-power",
          src: "power-ui/asset--sketch-plant-nuclear-power.png",
          alt: this.$t("alt_power-ui_asset-sketch_plant-nuclear-power"),
          label: this.$t("label_power-ui_asset-sketch_plant-nuclear-power"),
          background: "bg-yellow-light",
          category: "power",
        },
        {
          id: "plant-oil",
          src: "power-ui/asset--sketch-plant-oil.png",
          alt: this.$t("alt_power-ui_asset-sketch_plant-oil"),
          label: this.$t("label_power-ui_asset-sketch_plant-oil"),
          background: "bg-yellow-light",
          category: "power",
        },
        {
          id: "plant-photovoltaic",
          src: "power-ui/asset--sketch-plant-photovoltaic.png",
          alt: this.$t("alt_power-ui_asset-sketch_plant-photovoltaic"),
          label: this.$t("label_power-ui_asset-sketch_plant-photovoltaic"),
          background: "bg-yellow-light",
          category: "power",
        },
        {
          id: "plant-pumped-storage",
          src: "power-ui/asset--sketch-plant-pumped-storage.png",
          alt: this.$t("alt_power-ui_asset-sketch_plant-pumped-storage"),
          label: this.$t("label_power-ui_asset-sketch_plant-pumped-storage"),
          background: "bg-yellow-light",
          category: "power",
        },
        {
          id: "powerpole",
          src: "power-ui/asset--sketch-powerpole.png",
          alt: this.$t("alt_power-ui_asset-sketch_powerpole"),
          label: this.$t("label_power-ui_asset-sketch_powerpole"),
          background: "bg-green-light",
          category: "infrastructure",
        },
        {
          id: "pumpjack",
          src: "power-ui/asset--sketch-pumpjack.png",
          alt: this.$t("alt_power-ui_asset-sketch_pumpjack"),
          label: this.$t("label_power-ui_asset-sketch_pumpjack"),
          background: "bg-red-light",
          category: "resources",
        },
        {
          id: "recycling-depot",
          src: "power-ui/asset--sketch-recycling-depot.png",
          alt: this.$t("alt_power-ui_asset-sketch_recycling-depot"),
          label: this.$t("label_power-ui_asset-sketch_recycling-depot"),
          background: "bg-red-light",
          category: "resources",
        },
        {
          id: "research-center",
          src: "power-ui/asset--sketch-research-center.png",
          alt: this.$t("alt_power-ui_asset-sketch_research-center"),
          label: this.$t("label_power-ui_asset-sketch_research-center"),
          background: "bg-blue-light",
          category: "other",
        },
        {
          id: "refinery",
          src: "power-ui/asset--sketch-refinery.png",
          alt: this.$t("alt_power-ui_asset-sketch_refinery"),
          label: this.$t("label_power-ui_asset-sketch_refinery"),
          background: "bg-red-light",
          category: "resources",
        },
        {
          id: "trading-center",
          src: "power-ui/asset--sketch-trading-center.png",
          alt: this.$t("alt_power-ui_asset-sketch_trading-center"),
          label: this.$t("label_power-ui_asset-sketch_trading-center"),
          background: "bg-blue-light",
          category: "other",
        },
        {
          id: "train-station",
          src: "power-ui/asset--sketch-train-station.png",
          alt: this.$t("alt_power-ui_asset-sketch_train-station"),
          label: this.$t("label_power-ui_asset-sketch_train-station"),
          background: "bg-orange-light",
          category: "logistics",
        },
        {
          id: "truck-station",
          src: "power-ui/asset--sketch-truck-station.png",
          alt: this.$t("alt_power-ui_asset-sketch_truck-station"),
          label: this.$t("label_power-ui_asset-sketch_truck-station"),
          background: "bg-orange-light",
          category: "logistics",
        },
        {
          id: "uranium-mine",
          src: "power-ui/asset--sketch-uranium-mine.png",
          alt: this.$t("alt_power-ui_asset-sketch_uranium-mine"),
          label: this.$t("label_power-ui_asset-sketch_uranium-mine"),
          background: "bg-red-light",
          category: "resources",
        },
        {
          id: "pipeline",
          src: "power-ui/asset--sketch-pipeline.png",
          alt: this.$t("alt_power-ui_asset-sketch_pipeline"),
          label: this.$t("label_power-ui_asset-sketch_pipeline"),
          background: "bg-green-light",
          category: "infrastructure",
        },
        {
          id: "warehouse",
          src: "power-ui/asset--sketch-warehouse.png",
          alt: this.$t("alt_power-ui_asset-sketch_warehouse"),
          label: this.$t("label_power-ui_asset-sketch_warehouse"),
          background: "bg-orange-light",
          category: "logistics",
        },
      ],
      implementationIcons: {
        axure: [ProductAxure],
        unity: [ProductUnity],
        phaser: [ProductPhaser, ProductVueJs],
      },
      prototypeScreenshots: {
        axure: [
          {
            id: "placing-building",
            src: "power-ui/prototype--axure-v0-6-placing-building.jpg",
            alt: this.$t("alt_power-ui_prototype_axure_placing-building"),
          },
          {
            id: "finance-management",
            src: "power-ui/prototype--axure-v0-5-finance-management.jpg",
            alt: this.$t("alt_power-ui_prototype_axure_finance-management"),
          },
          {
            id: "overview",
            src: "power-ui/prototype--axure-v0-6-overview.jpg",
            alt: this.$t("alt_power-ui_prototype_axure_overview"),
          },
          {
            id: "info-window-power-plant",
            src: "power-ui/prototype--axure-v0-6-info-window-power-plant.jpg",
            alt: this.$t(
              "alt_power-ui_prototype_axure_info-window-power-plant"
            ),
          },
          {
            id: "demolishing-building-modal",
            src: "power-ui/prototype--axure-v0-6-demolishing-building-modal.jpg",
            alt: this.$t(
              "alt_power-ui_prototype_axure_demolishing-building-modal"
            ),
          },
          {
            id: "power-overview",
            src: "power-ui/prototype--axure-v0-5-power-overview.jpg",
            alt: this.$t("alt_power-ui_prototype_axure_power-overview"),
          },
        ],
        unity: [
          {
            id: "network-breakdown",
            src: "power-ui/unity--network-breakdown--preview.jpg",
            alt: this.$t("alt_power-ui_prototype_unity_network-breakdown"),
            gif: "/power-ui/unity--network-breakdown.gif", // The leading slash '/' is required
          },
          {
            id: "network-formation",
            src: "power-ui/unity--network-formation--preview.jpg",
            alt: this.$t("alt_power-ui_prototype_unity_network-formation"),
            gif: "/power-ui/unity--network-formation.gif", // The leading slash '/' is required
          },
          {
            id: "powerplant-dragging",
            src: "power-ui/unity--powerplant-dragging--preview.jpg",
            alt: this.$t("alt_power-ui_prototype_unity_powerplant-dragging"),
            gif: "/power-ui/unity--powerplant-dragging.gif", // The leading slash '/' is required
          },
        ],
        phaser: [
          {
            id: "overview",
            src: "power-ui/prototype--phaser-v2-1-overview.jpg",
            alt: this.$t("alt_power-ui_prototype_phaser_overview"),
          },
          {
            id: "power-plant-info",
            src: "power-ui/prototype--phaser-v2-1-power-plant-info.jpg",
            alt: this.$t("alt_power-ui_prototype_phaser_power-plant-info"),
          },
          {
            id: "build-menu-modal",
            src: "power-ui/prototype--phaser-v2-1-build-menu-modal.jpg",
            alt: this.$t("alt_power-ui_prototype_phaser_build-menu-modal"),
          },
          {
            id: "build-menu",
            src: "power-ui/prototype--phaser-v2-1-build-menu.jpg",
            alt: this.$t("alt_power-ui_prototype_phaser_build-menu"),
          },
          {
            id: "building-placement",
            src: "power-ui/prototype--phaser-v2-1-building-placement.jpg",
            alt: this.$t("alt_power-ui_prototype_phaser_building-placement"),
          },
          {
            id: "finances-window",
            src: "power-ui/prototype--phaser-v2-1-finances-window.jpg",
            alt: this.$t("alt_power-ui_prototype_phaser_finances-window"),
          },
        ],
      },
      userTestSheets: [
        {
          id: "title",
          src: "power-ui/user-test-2--1-title.png",
          alt: this.$t("alt_power-ui_user-test_1-title"),
        },
        {
          id: "time-sheet",
          src: "power-ui/user-test-2--2-time-sheet.png",
          alt: this.$t("alt_power-ui_user-test_2-time-sheet"),
        },
        {
          id: "datenschutzerklaerung",
          src: "power-ui/user-test-2--3-datenschutzerklaerung.png",
          alt: this.$t("alt_power-ui_user-test_3-data-agreement"),
        },
        {
          id: "personendaten",
          src: "power-ui/user-test-2--4-personendaten.png",
          alt: this.$t("alt_power-ui_user-test_4-participant-data"),
        },
        {
          id: "use-cases",
          src: "power-ui/user-test-2--5-use-cases.png",
          alt: this.$t("alt_power-ui_user-test_5-use-cases"),
        },
        {
          id: "ueq",
          src: "power-ui/user-test-2--6-ueq.png",
          alt: this.$t("alt_power-ui_user-test_6-ueq"),
        },
        {
          id: "sus",
          src: "power-ui/user-test-2--7-sus.png",
          alt: this.$t("alt_power-ui_user-test_7-sus"),
        },
      ],
    };
  },
  methods: {
    columnizeArray: columnizeArray,
  },
};
</script>

<style lang="scss" scoped>
</style>