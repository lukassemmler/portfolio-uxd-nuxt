<template>
  <project-template
    background="bg-gradient-red"
    :title="$t('meta-title_infotainment-system')"
    :meta-name="$t('project-summary-name_infotainment-system')"
    :meta-tasks="$t('project-summary-tasks_infotainment-system')"
    :meta-format="$t('project-summary-format_infotainment-system')"
    :meta-lecture="$t('project-summary-client_infotainment-system')"
    :meta-date="$t('project-summary-date_infotainment-system')"
    :project-tools="[
      { iconId: 'AdobeIndesign', label: 'Indesign' },
      { iconId: 'AdobeIllustrator', label: 'Illustrator' },
    ]"
    :nav-previous-title="$t('project-nav_steering-wheel')"
    :nav-previous-link="'projects/steering-wheel'"
    :nav-previous-color="'bg-hover-green'"
  >
    <template v-slot:header>
      <div class="container huge">
        <div class="main-gallery fullscreen-viewbox">
          <span class="gallery-heading">{{
            $t("heading_infotainment-system_google")
          }}</span>
          <div class="pillar-container gapped-v gapped-h">
            <div class="pillar-row">
              <div class="pillar-col">
                <simple-image
                  class="standalone rounded fit-image shadow-medium-faint"
                  src="infotainment-system/screen/Google - Screen - Listening to Playlist.jpg"
                  :alt="$t('alt_screendesign-google_playlist')"
                  sizes="xs:400px sm:640px md:960px lg:1200px"
                  ratio="64-by-45"
                ></simple-image>
              </div>
            </div>
            <div class="pillar-row">
              <div class="pillar-col">
                <simple-image
                  class="standalone rounded fit-image shadow-medium-faint"
                  src="infotainment-system/screen/Google - Screen - Start.jpg"
                  :alt="$t('alt_screendesign-google_landing-screen')"
                  sizes="xs:400px sm:640px md:960px lg:1200px"
                  ratio="64-by-45"
                ></simple-image>
              </div>
              <div class="pillar-col">
                <simple-image
                  class="standalone rounded fit-image shadow-medium-faint"
                  src="infotainment-system/screen/Google - Screen - Listening to Radio.jpg"
                  :alt="$t('alt_screendesign-google_radio')"
                  sizes="xs:400px sm:640px md:960px lg:1200px"
                  ratio="64-by-45"
                ></simple-image>
              </div>
              <div class="pillar-col">
                <simple-image
                  class="standalone rounded fit-image shadow-medium-faint"
                  src="infotainment-system/screen/Google - Screen - Climate Control.jpg"
                  :alt="$t('alt_screendesign-google_climate')"
                  sizes="xs:400px sm:640px md:960px lg:1200px"
                  ratio="64-by-45"
                ></simple-image>
              </div>
            </div>
            <div class="pillar-row">
              <div class="pillar-col">
                <simple-image
                  class="standalone rounded fit-image shadow-medium-faint"
                  src="infotainment-system/screen/Google - Screen - Contact List.jpg"
                  :alt="$t('alt_screendesign-google_contacts')"
                  sizes="xs:400px sm:640px md:960px lg:1200px"
                  ratio="64-by-45"
                ></simple-image>
              </div>
              <div class="pillar-col">
                <simple-image
                  class="standalone rounded fit-image shadow-medium-faint"
                  src="infotainment-system/screen/Google - Screen - Dialing Number.jpg"
                  :alt="$t('alt_screendesign-google_dial')"
                  sizes="xs:400px sm:640px md:960px lg:1200px"
                  ratio="64-by-45"
                ></simple-image>
              </div>
              <div class="pillar-col">
                <simple-image
                  class="standalone rounded fit-image shadow-medium-faint"
                  src="infotainment-system/screen/Google - Screen - Calling.jpg"
                  :alt="$t('alt_screendesign-google_call')"
                  sizes="xs:400px sm:640px md:960px lg:1200px"
                  ratio="64-by-45"
                ></simple-image>
              </div>
            </div>
          </div>

          <span class="gallery-heading">{{
            $t("heading_infotainment-system_mercedes")
          }}</span>
          <div class="pillar-container gapped-v gapped-h">
            <div class="pillar-row">
              <div class="pillar-col">
                <simple-image
                  class="standalone rounded fit-image shadow-medium-faint"
                  src="infotainment-system/screen/Mercedes - Screen - Listening to Playlist.jpg"
                  :alt="$t('alt_screendesign-mercedes_playlist')"
                  sizes="xs:400px sm:640px md:960px lg:1200px"
                  ratio="64-by-45"
                ></simple-image>
              </div>
            </div>
            <div class="pillar-row">
              <div class="pillar-col">
                <simple-image
                  class="standalone rounded fit-image shadow-medium-faint"
                  src="infotainment-system/screen/Mercedes - Screen - Start.jpg"
                  :alt="$t('alt_screendesign-mercedes_landing-screen')"
                  sizes="xs:400px sm:640px md:960px lg:1200px"
                  ratio="64-by-45"
                ></simple-image>
              </div>
              <div class="pillar-col">
                <simple-image
                  class="standalone rounded fit-image shadow-medium-faint"
                  src="infotainment-system/screen/Mercedes - Screen - Listening to Radio.jpg"
                  :alt="$t('alt_screendesign-mercedes_radio')"
                  sizes="xs:400px sm:640px md:960px lg:1200px"
                  ratio="64-by-45"
                ></simple-image>
              </div>
              <div class="pillar-col">
                <simple-image
                  class="standalone rounded fit-image shadow-medium-faint"
                  src="infotainment-system/screen/Mercedes - Screen - Climate Control.jpg"
                  :alt="$t('alt_screendesign-mercedes_climate')"
                  sizes="xs:400px sm:640px md:960px lg:1200px"
                  ratio="64-by-45"
                ></simple-image>
              </div>
            </div>
            <div class="pillar-row">
              <div class="pillar-col">
                <simple-image
                  class="standalone rounded fit-image shadow-medium-faint"
                  src="infotainment-system/screen/Mercedes - Screen - Contact List.jpg"
                  :alt="$t('alt_screendesign-mercedes_contacts')"
                  sizes="xs:400px sm:640px md:960px lg:1200px"
                  ratio="64-by-45"
                ></simple-image>
              </div>
              <div class="pillar-col">
                <simple-image
                  class="standalone rounded fit-image shadow-medium-faint"
                  src="infotainment-system/screen/Mercedes - Screen - Dialing Number.jpg"
                  :alt="$t('alt_screendesign-mercedes_dial')"
                  sizes="xs:400px sm:640px md:960px lg:1200px"
                  ratio="64-by-45"
                ></simple-image>
              </div>
              <div class="pillar-col">
                <simple-image
                  class="standalone rounded fit-image shadow-medium-faint"
                  src="infotainment-system/screen/Mercedes - Screen - Calling.jpg"
                  :alt="$t('alt_screendesign-mercedes_call')"
                  sizes="xs:400px sm:640px md:960px lg:1200px"
                  ratio="64-by-45"
                ></simple-image>
              </div>
            </div>
          </div>

          <!--
          <span class="gallery-heading">{{str "heading_infotainment-system_google"}}</span> 
          {{#embed "gallery" gridModifiers="cols-2" }}
            {{#content "images"}}
              <div class="cell span-2-cols">
                {{> image 
                    src="project/infotainment-system/screen/Google - Screen - Listening to Playlist.jpg" 
                    alt=(str "alt_screendesign-google_playlist") 
                    ratio="16-by-9" 
                    hasPlaceholder=true 
                    loadLazy=true 
                    isResized=true }}
              </div>
              <div class="cell">
                {{> image 
                    src="project/infotainment-system/screen/Google - Screen - Start.jpg" 
                    alt=(str "alt_screendesign-google_landing-screen") 
                    ratio="16-by-9" 
                    hasPlaceholder=true 
                    loadLazy=true 
                    isResized=true }}
              </div>
              <div class="cell">
                {{> image 
                    src="project/infotainment-system/screen/Google - Screen - Listening to Radio.jpg" 
                    alt=(str "alt_screendesign-google_radio") 
                    ratio="16-by-9" 
                    hasPlaceholder=true 
                    loadLazy=true 
                    isResized=true }}
              </div>
              <div class="cell">
                {{> image 
                    src="project/infotainment-system/screen/Google - Screen - Climate Control.jpg" 
                    alt=(str "alt_screendesign-google_climate") 
                    ratio="16-by-9" 
                    hasPlaceholder=true 
                    loadLazy=true 
                    isResized=true }}
              </div>
              <div class="cell">
                {{> image 
                    src="project/infotainment-system/screen/Google - Screen - Contact List.jpg" 
                    alt=(str "alt_screendesign-google_contacts") 
                    ratio="16-by-9" 
                    hasPlaceholder=true 
                    loadLazy=true 
                    isResized=true }}
              </div>
              <div class="cell">
                {{> image 
                    src="project/infotainment-system/screen/Google - Screen - Dialing Number.jpg" 
                    alt=(str "alt_screendesign-google_dial") 
                    ratio="16-by-9" 
                    hasPlaceholder=true 
                    loadLazy=true 
                    isResized=true }}
              </div>
              <div class="cell">
                {{> image 
                    src="project/infotainment-system/screen/Google - Screen - Calling.jpg" 
                    alt=(str "alt_screendesign-google_call") 
                    ratio="16-by-9" 
                    hasPlaceholder=true 
                    loadLazy=true 
                    isResized=true }}
              </div>
            {{/content}}
          {{/embed}}
  
          <span class="gallery-heading">{{str "heading_infotainment-system_mercedes"}}</span> 
          {{#embed "gallery" gridModifiers="cols-2" }}
            {{#content "images"}}
              <div class="cell span-2-cols">
                {{> image 
                    src="project/infotainment-system/screen/Mercedes - Screen - Listening to Playlist.jpg" 
                    alt=(str "alt_screendesign-mercedes_playlist") 
                    ratio="16-by-9" 
                    hasPlaceholder=true 
                    loadLazy=true 
                    isResized=true }}
              </div>
              <div class="cell">
                {{> image 
                    src="project/infotainment-system/screen/Mercedes - Screen - Start.jpg" 
                    alt=(str "alt_screendesign-mercedes_landing-screen") 
                    ratio="16-by-9" 
                    hasPlaceholder=true 
                    loadLazy=true 
                    isResized=true }}
              </div>
              <div class="cell">
                {{> image 
                    src="project/infotainment-system/screen/Mercedes - Screen - Listening to Radio.jpg" 
                    alt=(str "alt_screendesign-mercedes_radio") 
                    ratio="16-by-9" 
                    hasPlaceholder=true 
                    loadLazy=true 
                    isResized=true }}
              </div>
              <div class="cell">
                {{> image 
                    src="project/infotainment-system/screen/Mercedes - Screen - Climate Control.jpg" 
                    alt=(str "alt_screendesign-mercedes_climate") 
                    ratio="16-by-9" 
                    hasPlaceholder=true 
                    loadLazy=true 
                    isResized=true }}
              </div>
              <div class="cell">
                {{> image 
                    src="project/infotainment-system/screen/Mercedes - Screen - Contact List.jpg" 
                    alt=(str "alt_screendesign-mercedes_contacts") 
                    ratio="16-by-9" 
                    hasPlaceholder=true 
                    loadLazy=true 
                    isResized=true }}
              </div>
              <div class="cell">
                {{> image 
                    src="project/infotainment-system/screen/Mercedes - Screen - Dialing Number.jpg" 
                    alt=(str "alt_screendesign-mercedes_dial") 
                    ratio="16-by-9" 
                    hasPlaceholder=true 
                    loadLazy=true 
                    isResized=true }}
              </div>
              <div class="cell">
                {{> image 
                    src="project/infotainment-system/screen/Mercedes - Screen - Calling.jpg" 
                    alt=(str "alt_screendesign-mercedes_call") 
                    ratio="16-by-9" 
                    hasPlaceholder=true 
                    loadLazy=true 
                    isResized=true }}
              </div>
            {{/content}}
          {{/embed}}
  -->
        </div>
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
              {{
                $t("heading_data-visualization_data-collection-and-evaluation")
              }}
            </h2>
            <p>{{ $t("text_data-visualization_data-collection").join("") }}</p>
            <p>{{ $t("text_data-visualization_data-evaluation").join("") }}</p>
          </div>
        </div>

        <div class="container huge pillar-container gapped-h">
          <div class="pillar-row">
            <div class="pillar-col-bg">
              <simple-image
                class="
                  standalone
                  rounded
                  fit-image
                  shadow-medium-faint
                  height-40
                "
                src="data-visualization/Questionnaire.jpg"
                :alt="$t('alt_data-visualization_questionnaire')"
                sizes="xs:400px sm:640px md:960px lg:1200px"
                :caption="$t('caption_data-visualization_questionnaire')"
              ></simple-image>
            </div>
            <div class="pillar-col-bg">
              <simple-image
                class="standalone rounded fit-image shadow-medium-faint"
                src="data-visualization/Data Analysis - Dataset.png"
                :alt="$t('alt_data-visualization_data-analysis')"
                :caption="$t('caption_data-visualization_data-analysis')"
              ></simple-image>
            </div>
            <div class="pillar-col-bg">
              <simple-image
                class="standalone rounded fit-image shadow-medium-faint"
                src="data-visualization/Data Analysis - Pivot Table.png"
                :alt="$t('alt_data-visualization_data-pivot')"
                :caption="$t('caption_data-visualization_data-pivot')"
              ></simple-image>
            </div>
          </div>
        </div>
      </section>
      <!--
      <section id="section-concept" class="section">
        <div class="container huge">
          <h2 id="concept">{{ $t("heading_data-visualization_concept") }}</h2>
          <p>{{ $t("text_data-visualization_concepts").join("") }}</p>
        </div>
        <div class="container huge pillar-container gapped-h">
          <div class="pillar-row">
            <div class="pillar-col">
              <simple-image
                class="standalone rounded fit-image shadow-medium-faint"
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
                class="standalone rounded fit-image shadow-medium-faint"
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
                class="standalone rounded fit-image shadow-medium-faint"
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
                <icon-item :label="$t('label_data_visualization_icon_cost')"
                  ><icon-cost></icon-cost
                ></icon-item>
                <icon-item :label="$t('label_data_visualization_icon_commute')"
                  ><icon-commute></icon-commute
                ></icon-item>
                <icon-item
                  :label="
                    $t('label_data_visualization_icon_living-with-parents')
                  "
                  ><icon-living-with-parents></icon-living-with-parents
                ></icon-item>
                <icon-item
                  :label="$t('label_data_visualization_icon_living-in-dorm')"
                  ><icon-living-in-dorm></icon-living-in-dorm
                ></icon-item>
                <icon-item
                  :label="$t('label_data_visualization_icon_living-single')"
                  ><icon-living-single></icon-living-single
                ></icon-item>
                <icon-item
                  :label="
                    $t('label_data_visualization_icon_living-with-partner')
                  "
                  ><icon-living-with-partner></icon-living-with-partner
                ></icon-item>
                <icon-item
                  :label="
                    $t(
                      'label_data_visualization_icon_living-in-shared-community'
                    )
                  "
                  ><icon-living-in-shared-community></icon-living-in-shared-community
                ></icon-item>
                <icon-item
                  :label="$t('label_data_visualization_icon_driving-alone')"
                  ><icon-driving-alone></icon-driving-alone
                ></icon-item>
                <icon-item
                  :label="$t('label_data_visualization_icon_driving-car-pool')"
                  ><icon-driving-car-pool></icon-driving-car-pool
                ></icon-item>
                <icon-item
                  :label="$t('label_data_visualization_icon_going-by-foot')"
                  ><icon-going-by-foot></icon-going-by-foot
                ></icon-item>
                <icon-item
                  :label="$t('label_data_visualization_icon_going-by-bike')"
                  ><icon-going-by-bike></icon-going-by-bike
                ></icon-item>
                <icon-item
                  :label="$t('label_data_visualization_icon_going-by-car')"
                  ><icon-going-by-car></icon-going-by-car
                ></icon-item>
                <icon-item
                  :label="$t('label_data_visualization_icon_going-by-bus')"
                  ><icon-going-by-bus></icon-going-by-bus
                ></icon-item>
                <icon-item
                  :label="$t('label_data_visualization_icon_going-by-train')"
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
                class="standalone rounded fit-image shadow-medium-faint"
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
                class="standalone rounded fit-image shadow-medium-faint"
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
                class="standalone rounded fit-image shadow-medium-faint"
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
      -->
    </template>
  </project-template>
</template>

<script>
import ProjectTemplate from "~/components/ProjectTemplate.vue";
/*
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
*/
export default {
  components: {
    ProjectTemplate,
    /*
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
    */
  },
};
</script>

<style lang="scss" scoped>
</style>