<template>
  <div id="leftNav">
    <img id="avatar" src="../assets/myPhoto.png">
    <h1>钟泽川</h1>
    <h3>前端开发工程师</h3>
    <aboutMe></aboutMe>
    <contact></contact>
    <self-evaluation></self-evaluation>
  </div>
</template>

<script>
  import AboutMe from './leftNav/AboutMe';
  import Contact from './leftNav/Contact';
  import SelfEvaluation from './leftNav/SelfEvaluation';

  export default {
    name: 'leftNav',
    components: {
      AboutMe,
      Contact,
      SelfEvaluation,
    },
    data() {
      return {};
    },
    beforeUpdate() {

    },
    mounted() {
      window.onresize = function WindowOnresize() {
        if (document.getElementById('leftNav').clientHeight <= document.getElementById('mainBoard').clientHeight) {
          document.getElementById('leftNav').style.height = `${document.getElementById('mainBoard').clientHeight}px`;
        }
      };
    },
  };
</script>

<style lang="scss">
  @import "../style/common";

  #leftNav {
    width: 288px;
    // width: 19%;
    height: auto;
    float: left;
    // margin-left: -100%;
    padding: 35px 0 15px;
    background-color: $common-blue;

    h1 {
      color: $common-white;
      margin-top: 10px;
    }

    section.aboutMe, section.contact, section.self-evaluation {

      margin-top: 24px;

      h3.section-title {
        color: $common-white;
        @include title-underline($common-white);
        margin-bottom: 10px;
      }

      ul {
        text-align: left;
        margin-left: 40px;

        li {
          line-height: 2;

          i {
            margin-right: 6px;
            font-size: 18px;
            width: 20px;
          }
        }
      }

    }

  }

  #avatar {
    height: 128px;
    background-color: $common-white;
    border-radius: 50%;
    box-shadow: 1px 1px 1px $common-black;
  }
  @media only screen and (max-width: 1000px){
    #leftNav {
      //width:288px;
      width: 42%;
      height: auto;
      float: left;
      // margin-left: -100%;
      padding: 35px 0 15px;
      background-color: $common-blue;

      h1 {
        color: $common-white;
        margin-top: 10px;
      }

      section.aboutMe, section.contact, section.self-evaluation {

        margin-top: 24px;

        h3.section-title {
          color: $common-white;
          @include title-underline($common-white);
          margin-bottom: 10px;
        }

        ul {
          text-align: left;
          margin-left: 10px;

          li {
            line-height: 2;

            i {
              margin-right: 3px;
              font-size: 18px;
              width: 20px;
            }
          }
        }

      }

    }
    #avatar {
      height: 70px;
      background-color: $common-white;
      border-radius: 50%;
      box-shadow: 1px 1px 1px $common-black;
    }

  }
</style>
