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

      <div>
        <h1>Power-UI</h1>
        <div class="pillar-col-bg-6 icon-item-list">
          <icon-item
            v-for="(crudeIcon, index) in crudeIcons"
            :key="index"
            :label="crudeIcon.label"
            ><component v-bind:is="crudeIcon.icon"></component
          ></icon-item>
        </div>
        <div class="pillar-col-bg-6 icon-item-list">
          <icon-item
            v-for="(cleanIcon, index) in cleanIcons"
            :key="index"
            :label="cleanIcon.label"
            ><component v-bind:is="cleanIcon.icon"></component
          ></icon-item>
        </div>
      </div>
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
    };
  },
};
</script>

<style lang="scss" scoped>
</style>