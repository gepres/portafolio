<template>
  <section class="container">
     <v-row class="content-title">
      <h2 class="font-weight-bold primario--text display-2">¿Qué te puedo ofrecer?</h2>
    </v-row>
    <v-row>
      <v-col cols="12" xs="12" sm="5" md="6" lg="6" xl="5">
        <v-row justify="center">
          <v-expansion-panels popout>
            <v-expansion-panel
              v-for="(item,i) in services"
              :key="i"
              class="negro1 white--text"
            >
              <v-expansion-panel-header class="titulo">{{item.title}}</v-expansion-panel-header>
              <v-expansion-panel-content class="grey--text lighten-2">
                {{item.text}}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    name:'services',
    data(){
      return {
        services:[
          {
            title: 'Desarrrollo Web',
            text:'Realización de diseño y maquetados web con preprocesadores html  y css: pug, handlebars , ejs , scss.'
          },
          {
            title: 'Desarrrollo Front End',
            text:'Realización de proyectos desde cero con Vue js y React js, con consumo de web services ( API REST ), además de manejos de herramientas para SRR y PWA para una mejor desplazamiento de SEO de las aplicaciones.'
          },
          {
            title: 'Desarrrollo Back End',
            text:'Realización de proyectos desde cero con Node js y Express js con base de datos no relacional con MongoDB y firebase, y base de datos relacional con MySQL y PostgreSQL.'
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
.titulo{
  font-size: 18px;
  font-weight: 300;
  padding: 22px 24px;
}
</style>

<style lang="scss">
.v-expansion-panel-header__icon .v-icon {
  color:white !important;
}
</style>
