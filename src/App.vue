<template>
  <div id="app">
    <leftNav></leftNav>
    <mainBoard></mainBoard>
  </div>
</template>

<script>
  import LeftNav from './components/LeftNav';
  import MainBoard from './components/MainBoard';

  export default {
    name: 'app',
    components: {
      LeftNav,
      MainBoard,
    },
  };
</script>

<style lang="scss">
  @import "style/common";

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: $common-black;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  img {
    @include no-select;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
  }

  h1, h2, h3, h4, h5 {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    font-size: 32px;
  }

  h3 {
    font-size: 20px;
  }

  h4 {
    font-size: 18px;
  }
  @media only screen and (max-width: 400px){
    h1 {
      font-size: 24px;
    }

    h3 {
      font-size: 16px;
    }

    h4 {
      font-size: 10px;
    }
    html,body{
      font-size: 10px;
    }
  }
</style>
