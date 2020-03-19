<template>
  <section class="container">
    <v-row class="content-title">
      <h2 class="font-weight-bold primario--text display-2">Acerca de mí</h2>
    </v-row>
    <v-row>
      <v-col cols="12" xs="12" sm="6" md="4" lg="4" xl="4" >
        <p class="white--text">
          Soy egresado de la carrera de Ingeniería de Sistemas de la Universidad Nancional “San Luis Gonzaga”, especializado en desarrollo web, front-end y full stack javascript con node.js express y base de datos NoSQL y SQL.
        </p>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="4" lg="4" xl="4">
       <ul class="list-datos">
         <li class="white--text font-weight--medium"><span class="primario--text font-weight-bold text-uppercase">Pais</span>Perú</li>
         <li class="white--text font-weight--medium"><span  class="primario--text font-weight-bold text-uppercase">Email</span>genaropretill@gmail.com</li>
         <li class="white--text font-weight--medium"><span class="primario--text font-weight-bold text-uppercase">Teléfono</span>945 335 795</li>
       </ul>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="4" lg="4" xl="4">
        <div class="text-end brand">
          <h2 class="white--text display-1">FRONT-END DEVELOPER</h2>
          <h3 class="primario--text headline">GENARO PRETILL</h3>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    name:'about',
    data(){
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
.list-datos{
  & li {
    list-style: none;
    display: flex;
    margin: 1rem 0;
    & span{
      width: 30%;
    }
  }
}
.brand{
  & h2{
    font-size: 1.8rem !important;
  }
}
</style>