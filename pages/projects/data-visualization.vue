<template>
  <project-template
    background="bg-gradient-blue"
    :title="$t('meta-title_data-visualization')"
    :meta-name="$t('project-summary-name_data-visualization')"
    :meta-tasks="$t('project-summary-tasks_data-visualization')"
    :meta-format="$t('project-summary-format_data-visualization')"
    :meta-lecture="$t('project-summary-client_data-visualization')"
    :meta-date="$t('project-summary-date_data-visualization')"
    :meta-title="$t('meta-title_data-visualization')"
    :meta-author="$t('meta-author_data-visualization')"
    :meta-description="$t('meta-description_data-visualization')"
    :meta-keywords="$t('meta-keywords_data-visualization')"
    :project-tools="[
      { iconId: 'AdobeIndesign', label: $t('label_product_adobe-indesign') },
      { iconId: 'AdobeIllustrator', label: $t('label_product_adobe-illustrator') },
    ]"
    nav-id="projects.dataVisualization"
  >
    <template v-slot:header>
      <div class="container huge">
        <simple-image
          class="rounded height-80"
          :width="1920"
          :height="2715"
          src="data-visualization/Poster Data Visualization.jpg"
          :alt="$t('alt_data-visualization_poster-final')"
          sizes="xs:400px sm:640px md:960px lg:1200px"
        ></simple-image>
        <parallax-box class="zero-height background" :speed-factor="0.12"
          ><icon-living-with-parents
            class="icon font-white size-6 bottom-27 left-15 opacity-20 rotate-neg-5"
          ></icon-living-with-parents
        ></parallax-box>
        <parallax-box class="zero-height background" :speed-factor="0.2"
          ><icon-going-by-car class="icon font-white size-10 bottom-4 rotate-5 right-0 opacity-40"></icon-going-by-car
        ></parallax-box>
        <parallax-box class="zero-height background" :speed-factor="0.18"
          ><icon-living-with-partner
            class="icon font-white size-9 bottom-2 left-5 opacity-40"
          ></icon-living-with-partner
        ></parallax-box>
        <parallax-box class="zero-height background" :speed-factor="0.2"
          ><icon-going-by-bike class="icon font-white size-10 rotate-neg-10 bottom-12 opacity-50"></icon-going-by-bike
        ></parallax-box>
        <parallax-box class="zero-height background" :speed-factor="0.12"
          ><icon-going-by-bus class="icon font-white size-6 bottom-30 right-30 opacity-20 rotate-5"></icon-going-by-bus
        ></parallax-box>
        <parallax-box class="zero-height background" :speed-factor="0.08"
          ><icon-going-by-train class="icon font-white size-4 bottom-12 right-40 opacity-30"></icon-going-by-train
        ></parallax-box>
        <parallax-box class="zero-height background" :speed-factor="0.14"
          ><icon-commute class="icon font-white size-7 bottom-16 right-20 opacity-30"></icon-commute
        ></parallax-box>
        <parallax-box class="zero-height background" :speed-factor="0.14"
          ><icon-living-in-shared-community
            class="icon font-white size-7 bottom-12 left-20 opacity-20 rotate-10"
          ></icon-living-in-shared-community
        ></parallax-box>
        <parallax-box class="zero-height background" :speed-factor="0.14"
          ><icon-driving-car-pool
            class="icon font-white size-7 top-0 right-30 opacity-20 rotate-10"
          ></icon-driving-car-pool
        ></parallax-box>
      </div>
    </template>
    <template v-slot:content>
      <section id="section-overview" class="section">
        <div class="container huge">
          <div class="container small left no-padding">
            <h2 id="overview" class="sr-only">{{ $t("heading_overview") }}</h2>
            <p>{{ $t("text_data-visualization_intro").join("") }}</p>
          </div>
        </div>
      </section>

      <section id="section-data-collection-and-evaluation" class="section">
        <div class="container huge">
          <div class="container small left no-padding">
            <h2 id="data-collection-and-evaluation">
              {{ $t("heading_data-visualization_data-collection-and-evaluation") }}
            </h2>
            <p>{{ $t("text_data-visualization_data-collection").join("") }}</p>
            <p>{{ $t("text_data-visualization_data-evaluation").join("") }}</p>
          </div>
        </div>

        <div class="container huge pillar-container gapped-h">
          <div class="pillar-row">
            <div class="pillar-col-bg">
              <simple-image
                class="standalone rounded fit-image shadow-medium-faint pad-caption height-40"
                src="data-visualization/Questionnaire.jpg"
                :alt="$t('alt_data-visualization_questionnaire')"
                sizes="xs:400px sm:640px md:960px lg:1200px"
                :caption="$t('caption_data-visualization_questionnaire')"
              ></simple-image>
            </div>
            <div class="pillar-col-bg">
              <simple-image
                class="standalone rounded fit-image shadow-medium-faint pad-caption"
                src="data-visualization/Data Analysis - Dataset.png"
                :alt="$t('alt_data-visualization_data-analysis')"
                :caption="$t('caption_data-visualization_data-analysis')"
              ></simple-image>
            </div>
            <div class="pillar-col-bg">
              <simple-image
                class="standalone rounded fit-image shadow-medium-faint pad-caption"
                src="data-visualization/Data Analysis - Pivot Table.png"
                :alt="$t('alt_data-visualization_data-pivot')"
                :caption="$t('caption_data-visualization_data-pivot')"
              ></simple-image>
            </div>
          </div>
        </div>
      </section>

      <section id="section-concept" class="section">
        <div class="container huge">
          <h2 id="concept">{{ $t("heading_data-visualization_concept") }}</h2>
          <p>{{ $t("text_data-visualization_concepts").join("") }}</p>
        </div>
        <div class="container huge pillar-container gapped-h">
          <div class="pillar-row">
            <div class="pillar-col">
              <simple-image
                class="standalone rounded fit-image shadow-medium-faint pad-caption"
                src="data-visualization/Sketch - Traffic Map.jpg"
                :alt="$t('alt_data-visualization_sketch_traffic')"
                sizes="xs:400px sm:640px md:960px lg:1200px"
                ratio="din-a4-portrait"
                :caption="
                  '<strong>' +
                  $t('heading_data-visualization_sketch_traffic') +
                  '</strong>: ' +
                  $t('caption_data-visualization_sketch_traffic')
                "
              ></simple-image>
            </div>
            <div class="pillar-col">
              <simple-image
                class="standalone rounded fit-image shadow-medium-faint pad-caption"
                src="data-visualization/Sketch - Sunburst.jpg"
                :alt="$t('alt_data-visualization_sketch_sunburst')"
                sizes="xs:400px sm:640px md:960px lg:1200px"
                ratio="din-a4-portrait"
                :caption="
                  '<strong>' +
                  $t('heading_data-visualization_sketch_sunburst') +
                  '</strong>: ' +
                  $t('caption_data-visualization_sketch_sunburst')
                "
              ></simple-image>
            </div>
            <div class="pillar-col">
              <simple-image
                class="standalone rounded fit-image shadow-medium-faint pad-caption"
                src="data-visualization/Sketch - Means of Transport.jpg"
                :alt="$t('alt_data-visualization_sketch_transport-means')"
                sizes="xs:400px sm:640px md:960px lg:1200px"
                ratio="din-a4-portrait"
                :caption="
                  '<strong>' +
                  $t('heading_data-visualization_sketch_transport-means') +
                  '</strong>: ' +
                  $t('caption_data-visualization_sketch_transport-means')
                "
              ></simple-image>
            </div>
          </div>
        </div>
      </section>

      <section id="section-implementation" class="section">
        <div class="container huge">
          <h2 id="implementation">
            {{ $t("heading_data-visualization_implementation") }}
          </h2>
          <div class="pillar-container gapped-h">
            <div class="pillar-row">
              <div class="pillar-col-bg-6">
                <div class="container small left no-padding">
                  <p>
                    {{ $t("text_data-visualization_implementation").join("") }}
                  </p>
                  <h3>{{ $t("heading_data-visualization_icon-design") }}</h3>
                  <p>
                    {{ $t("text_data-visualization_icon-design").join("") }}
                  </p>
                </div>
              </div>
              <div class="pillar-col-bg-6 icon-item-list">
                <icon-item :label="$t('label_data_visualization_icon_cost')"><icon-cost></icon-cost></icon-item>
                <icon-item :label="$t('label_data_visualization_icon_commute')"
                  ><icon-commute></icon-commute
                ></icon-item>
                <icon-item :label="$t('label_data_visualization_icon_living-with-parents')"
                  ><icon-living-with-parents></icon-living-with-parents
                ></icon-item>
                <icon-item :label="$t('label_data_visualization_icon_living-in-dorm')"
                  ><icon-living-in-dorm></icon-living-in-dorm
                ></icon-item>
                <icon-item :label="$t('label_data_visualization_icon_living-single')"
                  ><icon-living-single></icon-living-single
                ></icon-item>
                <icon-item :label="$t('label_data_visualization_icon_living-with-partner')"
                  ><icon-living-with-partner></icon-living-with-partner
                ></icon-item>
                <icon-item :label="$t('label_data_visualization_icon_living-in-shared-community')"
                  ><icon-living-in-shared-community></icon-living-in-shared-community
                ></icon-item>
                <icon-item :label="$t('label_data_visualization_icon_driving-alone')"
                  ><icon-driving-alone></icon-driving-alone
                ></icon-item>
                <icon-item :label="$t('label_data_visualization_icon_driving-car-pool')"
                  ><icon-driving-car-pool></icon-driving-car-pool
                ></icon-item>
                <icon-item :label="$t('label_data_visualization_icon_going-by-foot')"
                  ><icon-going-by-foot></icon-going-by-foot
                ></icon-item>
                <icon-item :label="$t('label_data_visualization_icon_going-by-bike')"
                  ><icon-going-by-bike></icon-going-by-bike
                ></icon-item>
                <icon-item :label="$t('label_data_visualization_icon_going-by-car')"
                  ><icon-going-by-car></icon-going-by-car
                ></icon-item>
                <icon-item :label="$t('label_data_visualization_icon_going-by-bus')"
                  ><icon-going-by-bus></icon-going-by-bus
                ></icon-item>
                <icon-item :label="$t('label_data_visualization_icon_going-by-train')"
                  ><icon-going-by-train></icon-going-by-train
                ></icon-item>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section-design-process" class="section">
        <div class="container huge last">
          <h2 id="design-process">
            {{ $t("heading_data-visualization_design-process") }}
          </h2>
        </div>

        <div class="container huge pillar-container gapped-h spaced-bottom">
          <div class="pillar-row">
            <div class="pillar-col">
              <simple-image
                class="standalone rounded fit-image shadow-medium-faint pad-caption"
                src="data-visualization/Making Of 1.jpg"
                :alt="$t('alt_data-visualization_making-of-1')"
                sizes="xs:400px sm:640px md:960px lg:1200px"
                ratio="din-a4-portrait"
              >
                <h3 class="text-center">
                  <span class="sr-only">{{ $t("label_step") }}</span>
                  <span class="big-letter">1</span>
                </h3>
                <p v-html="$t('caption_data-visualization_making-of-1')"></p>
              </simple-image>
            </div>
            <div class="pillar-col">
              <simple-image
                class="standalone rounded fit-image shadow-medium-faint pad-caption"
                src="data-visualization/Making Of 2.jpg"
                :alt="$t('alt_data-visualization_sketch_sunburst')"
                sizes="xs:400px sm:640px md:960px lg:1200px"
                ratio="din-a4-portrait"
              >
                <h3 class="text-center">
                  <span class="sr-only">{{ $t("label_step") }}</span>
                  <span class="big-letter">2</span>
                </h3>
                <p v-html="$t('caption_data-visualization_making-of-2')"></p>
              </simple-image>
            </div>
            <div class="pillar-col">
              <simple-image
                class="standalone rounded fit-image shadow-medium-faint pad-caption"
                src="data-visualization/Making Of 3.jpg"
                :alt="$t('alt_data-visualization_sketch_transport-means')"
                sizes="xs:400px sm:640px md:960px lg:1200px"
                ratio="din-a4-portrait"
              >
                <h3 class="text-center">
                  <span class="sr-only">{{ $t("label_step") }}</span>
                  <span class="big-letter">3</span>
                </h3>
                <p v-html="$t('caption_data-visualization_making-of-3')"></p>
              </simple-image>
            </div>
          </div>
        </div>
      </section>
    </template>
  </project-template>
</template>

<script>
import ProjectTemplate from "~/components/ProjectTemplate.vue";

import IconCost from "~/static/data-visualization/icon--cost.svg?inline";
import IconCommute from "~/static/data-visualization/icon--commute.svg?inline";
import IconLivingWithParents from "~/static/data-visualization/icon--living-with-parents.svg?inline";
import IconLivingInDorm from "~/static/data-visualization/icon--living-in-dorm.svg?inline";
import IconLivingSingle from "~/static/data-visualization/icon--living-single.svg?inline";
import IconLivingWithPartner from "~/static/data-visualization/icon--living-with-partner.svg?inline";
import IconLivingInSharedCommunity from "~/static/data-visualization/icon--living-in-shared-community.svg?inline";
import IconDrivingAlone from "~/static/data-visualization/icon--driving-alone.svg?inline";
import IconDrivingCarPool from "~/static/data-visualization/icon--driving-car-pool.svg?inline";
import IconGoingByFoot from "~/static/data-visualization/icon--going-by-foot.svg?inline";
import IconGoingByBike from "~/static/data-visualization/icon--going-by-bike.svg?inline";
import IconGoingByCar from "~/static/data-visualization/icon--going-by-car.svg?inline";
import IconGoingByBus from "~/static/data-visualization/icon--going-by-bus.svg?inline";
import IconGoingByTrain from "~/static/data-visualization/icon--going-by-train.svg?inline";
export default {
  components: {
    ProjectTemplate,
    IconCost,
    IconCommute,
    IconLivingWithParents,
    IconLivingInDorm,
    IconLivingSingle,
    IconLivingWithPartner,
    IconLivingInSharedCommunity,
    IconDrivingAlone,
    IconDrivingCarPool,
    IconGoingByFoot,
    IconGoingByBike,
    IconGoingByCar,
    IconGoingByBus,
    IconGoingByTrain,
  },
};
</script>

<style lang="scss" scoped>
</style>