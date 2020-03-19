<template>
  <section class="container">
    <v-row class="content-title">
      <h2 class="font-weight-bold primario--text display-2">Experiencia</h2>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="12" xs="12" sm="12" md="10" lg="10" xl="9">
        <v-timeline  :dense="$vuetify.breakpoint.smAndDown" >
          <v-timeline-item
            v-for="(item,i) in experience"
            :key="i"
          >
            <span slot="opposite" class="white--text">{{item.date}}</span>
            <v-card class="elevation-2 bg-card white--text" >
              <v-card-title class="headline white--text">{{item.title}}</v-card-title>
              <v-card-text class="white--text">
                {{item.description}}
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    name:'Experience',
    data(){
      return{
        experience:[
          {
            date:'2017',
            title:'Clínica Señor de Luren',
            description:'Desarrollo web del sistema administrativo.'
          },
          {
            date:'2018',
            title:'Apache Store',
            description:'desarrollo Front-end del sistema de ventas'
          },
          {
            date:'2019',
            title:'RT System',
            description:'Encargador del área de desarrollo web para distintos proyectos'
          },
          {
            date:'2020',
            title:'Consurec',
            description:'Encargador del área de desarrollo front end para distintos proyectos'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.bg-card{
  background-color: rgba(66, 66, 66,.7) !important;
  border-color: rgba(66, 66, 66,.7)  !important
}
</style>

<style lang="scss">
.v-timeline-item__dot{
  background: #424242 !important;
}
.theme--light.v-timeline::before {
    background: rgba(255, 255, 255, 0.12) !important;
}
</style>