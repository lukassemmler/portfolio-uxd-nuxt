<template>
  <div class="content">
    <div class="container huge">
      <h2 class="sr-only">{{ $t("heading_about_presentation") }}</h2>
      <billboard-banner>
        <template v-slot:start>
          <h3 class="h3-spaced">{{ $t("heading_about_liking") }}</h3>
          <ul class="list list-none">
            <li>{{ $t("text_about_liking_1") }}</li>
            <li>{{ $t("text_about_liking_2") }}</li>
            <li>{{ $t("text_about_liking_3") }}</li>
            <li>{{ $t("text_about_liking_4") }}</li>
          </ul>
          <h3 class="h3-spaced">{{ $t("heading_about_offering") }}</h3>
          <ul class="list list-none">
            <li>{{ $t("text_about_offering_1") }}</li>
            <li>{{ $t("text_about_offering_2") }}</li>
            <li>{{ $t("text_about_offering_3") }}</li>
            <li>{{ $t("text_about_offering_4") }}</li>
          </ul>
        </template>
        <template v-slot:center>
          <simple-image class="about-image" src="lukas/lukas-working.png" alt="" />
        </template>
        <template v-slot:end>
          <h3 class="h3-spaced">{{ $t("heading_about_good-at") }}</h3>
          <ul class="list list-none">
            <li>{{ $t("text_about_good-at_1") }}</li>
            <li>{{ $t("text_about_good-at_2") }}</li>
            <li>{{ $t("text_about_good-at_3") }}</li>
            <li>{{ $t("text_about_good-at_4") }}</li>
          </ul>
          <h3 class="h3-spaced">{{ $t("heading_about_bad-at") }}</h3>
          <ul class="list list-none">
            <li>{{ $t("text_about_bad-at_1") }}</li>
            <li>{{ $t("text_about_bad-at_2") }}</li>
            <li>{{ $t("text_about_bad-at_3") }}</li>
          </ul>
        </template>
      </billboard-banner>
      <div class="pillar-container gapped-h">
        <div class="pillar-row">
          <section class="pillar-col-bg-6">
            <h2 id="work-experience">
              {{ $t("heading_about_work-experience") }}
            </h2>
            <cv-record
              iconId="business"
              :level="0"
              :title="$t('text_about_work-experience-3_organization')"
              :subtitle="$t('text_about_work-experience-3_title')"
              :timespan="$t('text_about_work-experience-3_time-span')"
              :location="$t('text_about_work-experience-3_location')"
              :description="$t('text_about_work-experience-3_description').join('')"
            ></cv-record>
            <cv-record
              iconId="business"
              :level="0"
              :title="$t('text_about_work-experience-2_organization')"
              :subtitle="$t('text_about_work-experience-2_title')"
              :timespan="$t('text_about_work-experience-2_time-span')"
              :location="$t('text_about_work-experience-2_location')"
              :description="$t('text_about_work-experience-2_description').join('')"
            ></cv-record>
            <cv-record
              iconId="business"
              :level="0"
              :title="$t('text_about_work-experience-1_organization')"
              :subtitle="$t('text_about_work-experience-1_title')"
              :timespan="$t('text_about_work-experience-1_time-span')"
              :location="$t('text_about_work-experience-1_location')"
              :description="$t('text_about_work-experience-1_description').join('')"
            ></cv-record>
          </section>
          <section class="pillar-col-bg-6">
            <h2 id="education">{{ $t("heading_about_education") }}</h2>
            <cv-record
              iconId="school"
              :level="0"
              :title="$t('text_about_education-1_organization')"
              :subtitle="$t('text_about_education-1_title')"
              :timespan="$t('text_about_education-1_time-span')"
              :location="$t('text_about_education-1_location')"
              :description="$t('text_about_education-1_description').join('')"
            ></cv-record>
            <cv-record
              iconId="school"
              :level="1"
              :title="$t('text_about_education-2_organization')"
              :subtitle="$t('text_about_education-2_title')"
              :timespan="$t('text_about_education-2_time-span')"
              :location="$t('text_about_education-2_location')"
              :description="$t('text_about_education-2_description').join('')"
              ><template v-slot:extra>
                <a href="download/BA Lukas Semmler.pdf" class="link-button">&#8594;PDF</a>
              </template></cv-record
            >
            <cv-record
              iconId="trophy"
              :level="1"
              :title="$t('text_about_education-3_organization')"
              :subtitle="$t('text_about_education-3_title')"
              :timespan="$t('text_about_education-3_time-span')"
              :location="$t('text_about_education-3_location')"
              :description="$t('text_about_education-3_description').join('')"
            ></cv-record>
            <cv-record
              iconId="trophy"
              :level="1"
              :title="$t('text_about_education-4_organization')"
              :subtitle="$t('text_about_education-4_title')"
              :timespan="$t('text_about_education-4_time-span')"
              :location="$t('text_about_education-4_location')"
            ></cv-record>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BillboardBanner from "~/components/BillboardBanner.vue";
import CvRecord from "~/components/CvRecord.vue";
import SimpleImage from "~/components/SimpleImage.vue";
export default {
  layout: "vanilla",
  components: { CvRecord, SimpleImage, BillboardBanner },
};
</script>

<style lang="scss">
</style>