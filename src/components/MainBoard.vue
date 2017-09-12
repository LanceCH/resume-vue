<template>
  <div id="mainBoard">
    <div class="inner">
      <skills></skills>
      <experience></experience>
      <projects></projects>
    </div>
  </div>
</template>

<script>
  import Skills from './main/Skills';
  import Experience from './main/Experience';
  import Projects from './main/Projects';

  export default {
    name: 'mainBoard',
    components: {
      Experience,
      Skills,
      Projects,
    },
    data() {
      return {};
    },
  };
</script>

<style lang="scss">
  @import "../style/common";

  #mainBoard {
    width: 100%;
    padding: 10px 30px 0px 40px;
    float: left;

    .inner {
      margin-left: 288px;
      min-width: 480px;
    }

  }

  .skills, .experience, .projects {

    text-align: left;

    .section-title {

      position: relative;
      width: 80px;
      margin: 25px 0 20px 0;
      @include title-absolute-underline($common-blue);

      h3 {
        color: $common-blue;
      }
    }

  }
</style>
