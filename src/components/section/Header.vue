<template>
  <div class="bg-header">
    <div class="content">
      <div class="content_text text-end">
        <h1 class="white--text display-3">GENARO PRETILL</h1>
        <h3 class="primario--text display-4">FRONT-END DEVELOPER</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.bg-header{
  background-image: url("https://material-portfolio-dark.vuetifyjs.com/img/hero.e530afc6.png");
  height: 100vh;
  background-position: center center;
  background-size: cover;
}
</style>
<style lang="scss" scoped>
.content{
  height: 100%;
    position: relative;
  &_text{
    position: absolute;
    bottom: 0;
    right: 0;
     margin-right: 1rem;
    @media screen and (max-width:600px){
      bottom: 70px;
      width: 70%;
      margin-right: .5rem;
    }
    & h1{
      @media screen and (max-width:600px){
        font-size: 2rem !important;
        font-weight: 500;
      }
    }
    & h3{
       @media screen and (max-width:600px){
        font-size: 2.5rem !important;
        line-height: 1;
        font-weight: 500;
      }
    }
  }
}

</style>