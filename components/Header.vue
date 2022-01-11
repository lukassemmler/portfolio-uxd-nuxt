<template>
{{! Header classes are: "on-background" and "inversed" }}
<header id="page-header" {{{optionalClasses stylingClasses}}}> 
  <div class="container-medium">
    <div class="page-header-inner">
      <a href="{{link ""}}"><span class="logo">{{{str "label_logo"}}}</span></a>
      <nav class="header-nav">
        <ul>
          {{#each nav.main}}
            {{#if this.isVisible}}
              <li>
                <a {{#whenBlock (when ../currentPage "===" this.path) "||" (when ../navActiveLink "===" this.path)}}class="active"{{/whenBlock}} 
                    href="{{link this.path}}">
                  {{str this.label}}
                </a>
              </li>
            {{/if}}
          {{/each}}
        </ul>
      </nav>
      <div id="lang-menu">
        <div class="lang-menu-current-lang">
          <a id="lang-menu-open-link" href="#lang-menu" title="{{str "label_select-language"}}">
            <div class="current-lang-row">
              <span class="icon icon-flag">{{{icon "icon/material-flag"}}}</span>
              <span class="lang-label">
                {{~#if (when lang "===" "en")~}}
                  {{{str "label_lang_const_english"}}}
                {{~else if (when lang "===" "de")~}}
                  {{{str "label_lang_const_german"}}}
                {{~else~}}
                  {{{str "label_lang_default"}}}
                {{~/if~}}
              </span>
              <span class="icon icon-dropdown">{{{icon "icon/material-keyboard-arrow-down"}}}</span>
            </div>
          </a>
        </div>
        <div class="lang-menu-options">
          <ul>
            <li>
              <a class="lang-menu-option-single{{#whenBlock lang "===" "de"}} active{{/whenBlock}}" 
                  href="
                    {{~#if (when currentPage "===" "index")}}
                      {{~link "" "de"}}
                    {{~else}}
                      {{~link currentPage "de"}}
                    {{~/if~}}
                  ">{{{str "label_lang_const_german"}}}</a>
              </li>
            <li>
              <a class="lang-menu-option-single{{#whenBlock lang "===" "en"}} active{{/whenBlock}}" 
                  href="
                    {{~#if (when currentPage "===" "index")}}
                      {{~link "" "en"}}
                    {{~else}}
                      {{~link currentPage "en"}}
                    {{~/if~}}
                  ">{{{str "label_lang_const_english"}}}</a>
              </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</header>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#page-header { 
  position: relative;
  z-index: $z-index-header;
  // margin-top causes the <body> to be offset (because the header is on top of page) 
  // So instead there is a vertical padding 
  margin-bottom: $sp * 1; 
  padding-top: $sp;
  padding-bottom: $sp;
  width: 100%; 
  box-sizing: border-box;

  .page-header-inner {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: stretch;
    align-items: center;

    & > *:not(:last-child) {
      margin-right: $sp;
    }
  }

  .logo { 
    @extend %white-font-on-dark-background; 
    width: 3em;
    box-sizing: border-box;
    display: inline-block;
    background-color: $gray-90; 
    padding: $sp ($sp * 0.5); 
    text-align: center;
    white-space: nowrap;
  }
    
  .full-name {
    display: none;
  }

  .header-nav { 
    display: inline-block;

    ul {
      display: flex; 
      flex-direction: row;
      flex-wrap: nowrap;
      margin: 0; 
      padding: 0;

      li {
        list-style-type: none; 
        display: inline-block; 
        
        &:not(:last-child) {
          margin-right: $sp;
        }
      }
    }

    a {
      display: inline-block;
      padding: $sp 0; 
      border-bottom-width: 0;
      &:hover {
        background-image: linear-gradient(to top, $orange 0%, $orange 3%, transparent 3%);
      }
    }
  }

  &.inversed { 

    span.logo { 
      background: none; 
      outline: 0.1em solid $white; 
    }

    &, 
    a { 
      color: $white; 
    }
  }

  &.on-background { 
    position: absolute; 
    top: 0; 
  }

  @media screen and (min-width: $breakpoint-semi-big) {
    .page-header-inner > *:not(:last-child) {
      margin-right: $sp * 1.5;
    }
    .logo {
      width: auto;
      padding: $sp ($sp * 1.5); 
    }
    .full-name {
      display: inline;
    }
  }
} 
</style>