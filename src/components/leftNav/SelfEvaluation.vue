<template>
  <section class="self-evaluation">
    <h3 class="section-title">自我评价</h3>
    <p>个性随和，跟同事相处融洽</p>
    <p>做事认真，对任务有时间观</p>
    <p>技术执着，乐于研究新技术</p>
  </section>
</template>

<script>
  export default {
    name: 'selfEvaluation',
    data() {
      return {};
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../style/common";

  .self-evaluation {

    margin: 0 40px;

    p {
      margin-bottom: 8px;
      text-align: left;
    }
  }
  @media only screen and (max-width: 400px){
    .self-evaluation {
    margin: 0 10px;
  }
  }

</style>
