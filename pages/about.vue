<template>
  <div class="container huge">
    <h2>Presentation</h2>

    <h3>Things I <em>like</em></h3>
    <ul>
      <li>UI design</li>
      <li>illustration</li>
      <li>frontend coding</li>
      <li>game development</li>
    </ul>

    <h3>What I can <em>offer</em></h3>
    <ul>
      <li>friendly and reliable</li>
      <li>small ideas and questions</li>
      <li>well-structured UI design</li>
      <li>robust concepts and design</li>
    </ul>

    <h3>Things I'm <em>good</em> at</h3>
    <ul>
      <li>big projects with high complexity</li>
      <li>organizing information (wikis and documentation)</li>
      <li>design following accessability guidelines</li>
      <li>automation of unefficient work steps</li>
    </ul>

    <h3>Things I'm <em>bad</em> at</h3>
    <ul>
      <li>quick-fire projects</li>
      <li>dealing with uncertainty</li>
      <li>straight-forward, repetitive tasks</li>
    </ul>

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
</template>

<script>
import CvRecord from "~/components/CvRecord.vue";
export default {
  layout: "vanilla",
  components: { CvRecord },
};
</script>

<style>
</style>