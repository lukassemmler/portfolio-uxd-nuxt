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
      { iconId: 'AdobeIndesign', label: $t('label_product_adobe-indesign') },
      { iconId: 'AdobeIllustrator', label: $t('label_product_adobe-illustrator') },
    ]"
    nav-id="projects.infotainmentSystem"
  >
    <template v-slot:header>
      <div class="container huge">
        <div class="main-gallery fullscreen-viewbox">
          <div class="pillar-container gapped-v gapped-h">
            <div class="pillar-row">
              <div class="pillar-col-bg-6">
                <h2 class="text-center">
                  {{ $t("heading_infotainment-system_google") }}
                </h2>
                <simple-image
                  v-for="screen in screensGoogle"
                  :key="screen.key"
                  class="standalone rounded fit-image shadow-medium-faint"
                  :src="screen.src"
                  :alt="screen.alt"
                  sizes="xs:400px sm:640px md:960px lg:1200px"
                  ratio="64-by-45"
                ></simple-image>
              </div>
              <div class="pillar-col-bg-6">
                <h2 class="text-center">
                  {{ $t("heading_infotainment-system_mercedes") }}
                </h2>
                <simple-image
                  v-for="screen in screensMercedes"
                  :key="screen.key"
                  class="standalone rounded fit-image shadow-medium-faint"
                  :src="screen.src"
                  :alt="screen.alt"
                  sizes="xs:400px sm:640px md:960px lg:1200px"
                  ratio="64-by-45"
                ></simple-image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:content>
      <section id="section-overview" class="section">
        <div class="container huge">
          <div class="container small left no-padding">
            <h2 id="overview" class="sr-only">{{ $t("heading_overview") }}</h2>
            <p>{{ $t("text_infotainment-system_intro").join("") }}</p>
          </div>
        </div>
      </section>

      <section id="section-concept" class="section">
        <div class="container huge">
          <h2 id="concept">{{ $t("heading_infotainment-system_concept") }}</h2>
          <div class="pillar-container gapped-h">
            <div class="pillar-row">
              <div class="pillar-col-bg-6">
                <simple-image
                  class="standalone rounded fit-image shadow-medium-faint"
                  src="infotainment-system/Wireframing Sketch.png"
                  :alt="$t('alt_infotainment-system_wireframes')"
                  sizes="xs:400px sm:640px md:960px lg:1200px"
                  ratio="4-by-3"
                ></simple-image>
              </div>
              <div class="pillar-col-bg-6">
                <simple-image
                  class="standalone rounded fit-image shadow-medium-faint"
                  src="infotainment-system/Prototype - Radio.png"
                  :alt="$t('alt_infotainment-system_prototype')"
                  sizes="xs:400px sm:640px md:960px lg:1200px"
                  ratio="4-by-3"
                ></simple-image>
              </div>
            </div>
          </div>
          <p v-html="$t('text_infotainment-system_background').join('')"></p>
        </div>
      </section>

      <section id="section-icon-design" class="section">
        <div class="container huge">
          <h2 id="icon-design">
            {{ $t("heading_infotainment-system_icon-design") }}
          </h2>
          <p v-html="$t('text_infotainment-system_icons').join('')"></p>
          <div class="pillar-container gapped-h">
            <div class="pillar-row">
              <div class="pillar-col-bg-6">
                <!-- TODO: Change image format to something more common -->
                <simple-image
                  class="standalone rounded fit-image shadow-medium-faint"
                  src="infotainment-system/Google - Icons.png"
                  :alt="$t('alt_infotainment-system_icons-finished')"
                  sizes="xs:400px sm:640px md:960px lg:1200px"
                  ratio=""
                  :caption="$t('caption_infotainment-system_icons-finished')"
                ></simple-image>
              </div>
              <div class="pillar-col-bg-6">
                <simple-image
                  class="standalone rounded fit-image shadow-medium-faint"
                  src="infotainment-system/Mercedes - Icons - Sketch.jpg"
                  :alt="$t('alt_infotainment-system_icons-sketch')"
                  sizes="xs:400px sm:640px md:960px lg:1200px"
                  ratio="16-by-9"
                  :caption="$t('caption_infotainment-system_icons-sketch')"
                ></simple-image>
              </div>
            </div>
          </div>
          <p v-html="$t('text_infotainment-system_background').join('')"></p>
        </div>
      </section>

      <section id="section-screen-design" class="section">
        <div class="container huge">
          <h2 id="screen-design">
            {{ $t("heading_infotainment-system_screen-design") }}
          </h2>
          <p
            v-html="$t('text_infotainment-system_screen-design_grid').join('')"
          ></p>
          <!-- TODO: Change image format to something more common -->
          <simple-image
            class="standalone rounded fit-image shadow-medium-faint"
            src="infotainment-system/Sketch of Grid.jpg"
            :alt="$t('alt_infotainment-system_grid')"
            sizes="xs:400px sm:640px md:960px lg:1200px"
            ratio=""
            :caption="$t('caption_infotainment-system_grid')"
          ></simple-image>
          <p
            v-html="$t('text_infotainment-system_screen-design_style').join('')"
          ></p>
          <h3>
            {{ $t("heading_infotainment-system_screen-design_wip") }}
          </h3>
          <div class="pillar-container gapped-h spaced-y">
            <div class="pillar-row">
              <div class="pillar-col-bg-6">
                <simple-image
                  class="standalone rounded fit-image shadow-medium-faint"
                  src="infotainment-system/screen/making-of/Google - Screen - Making Of - Beginning.jpg"
                  :alt="$t('alt_infotainment-system_making-of_google_first')"
                  sizes="xs:400px sm:640px md:960px lg:1200px"
                  ratio="64-by-45"
                ></simple-image>
                <simple-image
                  class="standalone rounded fit-image shadow-medium-faint"
                  src="infotainment-system/screen/making-of/Google - Screen - Making Of - Final.jpg"
                  :alt="$t('alt_infotainment-system_making-of_google_last')"
                  sizes="xs:400px sm:640px md:960px lg:1200px"
                  ratio="64-by-45"
                ></simple-image>
              </div>
              <div class="pillar-col-bg-6">
                <simple-image
                  class="standalone rounded fit-image shadow-medium-faint"
                  src="infotainment-system/screen/making-of/Mercedes - Screen - Making Of - Beginning.jpg"
                  :alt="$t('alt_infotainment-system_making-of_mercedes_first')"
                  sizes="xs:400px sm:640px md:960px lg:1200px"
                  ratio="64-by-45"
                ></simple-image>
                <simple-image
                  class="standalone rounded fit-image shadow-medium-faint"
                  src="infotainment-system/screen/making-of/Mercedes - Screen - Making Of - Final.jpg"
                  :alt="$t('alt_infotainment-system_making-of_mercedes_last')"
                  sizes="xs:400px sm:640px md:960px lg:1200px"
                  ratio="64-by-45"
                ></simple-image>
              </div>
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
  data: function () {
    return {
      screensGoogle: [
        {
          id: "playlist",
          src: "infotainment-system/screen/Google - Screen - Listening to Playlist.jpg",
          alt: this.$t("alt_screendesign-google_playlist"),
        },
        //{
        //  id: "start",
        //  src: "infotainment-system/screen/Google - Screen - Start.jpg",
        //  alt: this.$t("alt_screendesign-google_landing-screen"),
        //},
        {
          id: "radio",
          src: "infotainment-system/screen/Google - Screen - Listening to Radio.jpg",
          alt: this.$t("alt_screendesign-google_radio"),
        },
        {
          id: "climate-control",
          src: "infotainment-system/screen/Google - Screen - Climate Control.jpg",
          alt: this.$t("alt_screendesign-google_climate"),
        },
        {
          id: "contact-list",
          src: "infotainment-system/screen/Google - Screen - Contact List.jpg",
          alt: this.$t("alt_screendesign-google_contacts"),
        },
        {
          id: "dialing-number",
          src: "infotainment-system/screen/Google - Screen - Dialing Number.jpg",
          alt: this.$t("alt_screendesign-google_dial"),
        },
        {
          id: "calling",
          src: "infotainment-system/screen/Google - Screen - Calling.jpg",
          alt: this.$t("alt_screendesign-google_call"),
        },
      ],
      screensMercedes: [
        {
          id: "playlist",
          src: "infotainment-system/screen/Mercedes - Screen - Listening to Playlist.jpg",
          alt: this.$t("alt_screendesign-mercedes_playlist"),
        },
        //{
        //  id: "start",
        //  src: "infotainment-system/screen/Mercedes - Screen - Start.jpg",
        //  alt: this.$t("alt_screendesign-mercedes_landing-screen"),
        //},
        {
          id: "radio",
          src: "infotainment-system/screen/Mercedes - Screen - Listening to Radio.jpg",
          alt: this.$t("alt_screendesign-mercedes_radio"),
        },
        {
          id: "climate-control",
          src: "infotainment-system/screen/Mercedes - Screen - Climate Control.jpg",
          alt: this.$t("alt_screendesign-mercedes_climate"),
        },
        {
          id: "contact-list",
          src: "infotainment-system/screen/Mercedes - Screen - Contact List.jpg",
          alt: this.$t("alt_screendesign-mercedes_contacts"),
        },
        {
          id: "dialing-number",
          src: "infotainment-system/screen/Mercedes - Screen - Dialing Number.jpg",
          alt: this.$t("alt_screendesign-mercedes_dial"),
        },
        {
          id: "calling",
          src: "infotainment-system/screen/Mercedes - Screen - Calling.jpg",
          alt: this.$t("alt_screendesign-mercedes_call"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>