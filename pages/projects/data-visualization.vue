<template>
  <project-template
    background="bg-gradient-blue"
    headerBackground="bg-ocean"
    :title="$t('meta-title_data-visualization')"
    :meta-name="$t('project-summary-name_data-visualization')"
    :meta-tasks="$t('project-summary-tasks_data-visualization')"
    :meta-format="$t('project-summary-format_data-visualization')"
    :meta-lecture="$t('project-summary-client_data-visualization')"
    :meta-date="$t('project-summary-date_data-visualization')"
    :project-tools="[
      { iconId: 'AdobeIndesign', label: 'Indesign' },
      { iconId: 'AdobeIllustrator', label: 'Illustrator' },
    ]"
    :nav-previous-title="$t('project-nav_power-ui')"
    :nav-previous-link="'projects/power-ui'"
    :nav-previous-color="'bg-hover-yellow'"
    :nav-next-title="$t('project-nav_design-booklet')"
    :nav-next-link="'projects/design-booklet'"
    :nav-next-color="'bg-hover-gray'"
  >
    <template v-slot:header>
      <div class="container huge">
        <simple-image
          class="rounded"
          src="data-visualization/Poster Data Visualization.jpg"
          :alt="$t('alt_data-visualization_poster-final')"
          ratio="din-a4-portrait"
          sizes="xs:400px sm:640px md:960px lg:1200px"
        ></simple-image>
      </div>
    </template>
    <template v-slot:content>
      <section id="section-overview" class="section">
        <div class="container small">
          <h2 id="overview" class="sr-only">{{ $t("heading_overview") }}</h2>
          <p>{{ $t("text_data-visualization_intro").join("") }}</p>
        </div>
      </section>

      <section id="section-data-collection-and-evaluation" class="section">
        <div class="container small">
          <h2 id="data-collection-and-evaluation">
            {{
              $t("heading_data-visualization_data-collection-and-evaluation")
            }}
          </h2>
          <p>{{ $t("text_data-visualization_data-collection").join("") }}</p>
          <p>{{ $t("text_data-visualization_data-evaluation").join("") }}</p>
        </div>

        <div class="pillar-container">
          <div class="pillar-row">
            <div class="pillar-col-bg-5">
              <simple-image
                class="standalone rounded fit-image"
                src="data-visualization/Questionnaire.jpg"
                :alt="$t('alt_data-visualization_questionnaire')"
                sizes="xs:400px sm:640px md:960px lg:1200px"
                :caption="$t('caption_data-visualization_questionnaire')"
              ></simple-image>
            </div>
            <div class="pillar-col-bg-7">
              <simple-image
                class="standalone rounded fit-image"
                src="data-visualization/Data Analysis - Dataset.png"
                :alt="$t('alt_data-visualization_data-analysis')"
                :caption="$t('caption_data-visualization_data-analysis')"
              ></simple-image>
              <simple-image
                class="standalone rounded fit-image"
                src="data-visualization/Data Analysis - Pivot Table.png"
                :alt="$t('alt_data-visualization_data-pivot')"
                :caption="$t('caption_data-visualization_data-pivot')"
              ></simple-image>
            </div>
          </div>
        </div>
      </section>

      <section id="section-concept" class="section">
        <div class="container-small">
          <h2 id="concept">{{ $t("heading_data-visualization_concept") }}</h2>
          <p>{{ $t("text_data-visualization_concepts").join("") }}</p>
        </div>
        <div class="pillar-container gapped-h">
          <div class="pillar-row">
            <div class="pillar-col">
              <simple-image
                class="standalone rounded fit-image"
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
                class="standalone rounded fit-image"
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
                class="standalone rounded fit-image"
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
        <div class="container-small">
          <h2 id="implementation">
            {{ $t("heading_data-visualization_implementation") }}
          </h2>
          <p>{{ $t("text_data-visualization_implementation").join("") }}</p>
          <h3>{{ $t("heading_data-visualization_icon-design") }}</h3>
          <p>{{ $t("text_data-visualization_icon-design").join("") }}</p>
        </div>

        <!--
        <icon-item
          :iconId="tool.iconId"
          :label="tool.label"
          :class="size"
        ></icon-item>
        -->

        <!--

    <div class="container-medium">
      <ul class="icon-item-list centered spaced-y">
        <li>
          {{> icon-item
              iconId="project/data-visualization/icon--cost" 
              label=(str "label_data_visualization_icon_cost") }}
        </li>
        <li>
          {{> icon-item
              iconId="project/data-visualization/icon--commute" 
              label=(str "label_data_visualization_icon_commute") }}
        </li>
        <li>
          {{> icon-item
              iconId="project/data-visualization/icon--living-with-parents" 
              label=(str "label_data_visualization_icon_living-with-parents") }}
        </li>
        <li>
          {{> icon-item
              iconId="project/data-visualization/icon--living-in-dorm" 
              label=(str "label_data_visualization_icon_living-in-dorm") }}
        </li>
        <li>
          {{> icon-item
              iconId="project/data-visualization/icon--living-single" 
              label=(str "label_data_visualization_icon_living-single") }}
        </li>
        <li>
          {{> icon-item
              iconId="project/data-visualization/icon--living-with-partner" 
              label=(str "label_data_visualization_icon_living-with-partner") }}
        </li>
        <li class="pillar-break-bg"></li>
        <li>
          {{> icon-item
              iconId="project/data-visualization/icon--living-in-shared-community" 
              label=(str "label_data_visualization_icon_living-in-shared-community") }}
        </li>
        {{!-- 
        <li>
          {{> icon-item
              iconId="project/data-visualization/icon--driving-alone" 
              label=(str "label_data_visualization_icon_driving-alone") }}
        </li>
        <li>
          {{> icon-item
              iconId="project/data-visualization/icon--driving-car-pool" 
              label=(str "label_data_visualization_icon_driving-car-pool") }}
        </li>
        --}}
        <li>
          {{> icon-item
              iconId="project/data-visualization/icon--going-by-foot" 
              label=(str "label_data_visualization_icon_going-by-foot") }}
        </li>
        <li>
          {{> icon-item
              iconId="project/data-visualization/icon--going-by-bike" 
              label=(str "label_data_visualization_icon_going-by-bike") }}
        </li>
        <li>
          {{> icon-item
              iconId="project/data-visualization/icon--going-by-car" 
              label=(str "label_data_visualization_icon_going-by-car") }}
        </li>
        <li>
          {{> icon-item
              iconId="project/data-visualization/icon--going-by-bus" 
              label=(str "label_data_visualization_icon_going-by-bus") }}
        </li>
        <li>
          {{> icon-item
              iconId="project/data-visualization/icon--going-by-train" 
              label=(str "label_data_visualization_icon_going-by-train") }}
        </li>
      </ul>
    </div>
  -->
      </section>

      <section id="section-design-process" class="section">
        <div class="container-small last">
          <h2 id="design-process">
            {{ $t("heading_data-visualization_design-process") }}
          </h2>
        </div>

        <div class="pillar-container gapped-h">
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
    </template>
  </project-template>
</template>

<script>
import ProjectTemplate from "~/components/ProjectTemplate.vue";
export default {
  components: {
    ProjectTemplate,
  },
};
</script>

<style lang="scss" scoped>
</style>