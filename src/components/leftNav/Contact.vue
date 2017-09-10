<template>
  <section class="contact">
    <h3 class="section-title">联系方式</h3>
    <ul>
      <li v-for="item in info">
        <i :class="item.icon"></i>
        <span v-text="item.text"></span>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'contact',
    data() {
      return {
        info: [
          {
            icon: 'fa fa-phone',
            title: '手机',
            text: '15521316296',
          },
          {
            icon: 'fa fa-envelope',
            title: '邮箱',
            text: '15521316296@163.com',
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../style/common";
  @import "../../assets/css/font-awesome.min.css";

  .contact {

  }
</style>
