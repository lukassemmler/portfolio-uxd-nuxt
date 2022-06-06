<template>
  <div class="wrapper">
    <header class="page-intro">
      <header class="page-header">
        <div class="logo">Lukas Semmler</div>
      </header>
      <div class="container padded-v">
        <aside class="blog-intro">Lukas Semmler / Jun 5, 2022</aside>
        <h1 class="headline">How to Waste Your Time on a Portfolio</h1>
      </div>
    </header>
    <div class="col-row container huge">
      <div class="col-3">
        <aside class="toc">
          <h2>Table of Contents</h2>
          <ol class="secondary-text">
            <li>Introduction</li>
            <li>Unit summaries</li>
            <li>Pixels</li>
            <li>Ems</li>
            <li>Rems</li>
            <li>Accessibility considerations</li>
            <li>Strategic unit deployment</li>
            <li>Media queries</li>
            <li>Vertical margins</li>
            <li>Widths and heights</li>
            <li>Test your intuition</li>
            <li>Quick tricks vs. mental models</li>
            <li>Bonus: Rem quality of life</li>
            <li>The 62.5% trick</li>
            <li>Calculated values</li>
            <li>Leveraging CSS variables</li>
          </ol>
        </aside>
      </div>
      <div class="col-9">
        <main class="blog-body">
          <div class="container">
            <p class="lead">
              »Einer Bundestagsvizepräsidentin unwürdig« – FDP und Grüne
              streiten mit harschen Worten, wie man sich auf eine neue
              Coronawelle im Herbst vorbereiten soll. Dabei warnen Experten: Es
              könnte schon im Sommer so weit ein.
            </p>
            <hr class="text-separator" />
            <p class="text">
              In der Debatte über mögliche Coronamaßnahmen für den Herbst wird
              der Ton in der Ampelregierung rauer. Grünenchef Omid Nouripour
              fordert eine rasche Änderung des Infektionsschutzgesetzes, um für
              die kältere Jahreszeit vorbereitet zu sein – dafür hat sich auch
              Bundestagsvizepräsidentin Katrin Göring-Eckardt (Grüne)
              ausgesprochen. FDP-Politiker Wolfgang Kubicki erinnert hingegen
              daran, dass es einen gesetzlichen Auftrag gebe, Coronamaßnahmen
              zunächst zu evaluieren. Nur auf der Grundlage eines entsprechenden
              Berichts könnten evidenzbasierte Entscheidungen getroffen werden.
            </p>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
$carmin-red: #9b2321;

.container {
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;

  &.big {
    max-width: 75rem;
  }
  
  &.huge {
    max-width: 100rem;
  }
}

.page-intro {
  background-color: $carmin-red;
  color: white;
}

.headline {
  font-size: 5rem;
  line-height: 1.2;
  font-weight: normal;
  margin: 0;
}

.padded-v {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.lead {
  font-size: 2rem;
  line-height: 1.4;
  font-style: italic;
}

.text {
  font-size: 1.5rem;
  line-height: 1.6;
}

.secondary-text {
  font-size: 0.9em;
  line-height: 1.5;
}

.text-separator {
  color: $carmin-red;
  opacity: 0.3;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.col-row {
  display: flex;
  flex-direction: row;
}

.col {
  flex: 1 1 0;
}

.col-9 {
  flex: 1 1 75%;
}

.col-8 {
  flex: 1 1 67%;
}

.col-4 {
  flex: 1 1 33%;
}

.col-3 {
  flex: 1 1 25%;
}
</style>