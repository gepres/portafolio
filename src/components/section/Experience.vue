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
              <v-card-text class="white--text" v-html="item.description" />
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
            date:'Nov 20 - Hoy',
            title:'IZIPAY - tismart',
            description:'Se realiza el desarrollo y análisis de diversos productos de Izipay, tanto para los proyectos comerciales y administrativos. Realizando trabajos en equipo y de investigación de funciones. Aportando mejoras de expericiencia UX y mecanicas técnicas.<br>Trabajando con tecnologías como vue.js , react.js, nest.js, AWS, noSQL, .NET'
          },
          {
            date:'Oct 21 - fre 22',
            title:'Altomayo',
            description:'Colabore con el desarrollo de un aplicativo en vue.js para la gestión administrativa de una Importadora, realizando análisis y gestión en mejoras para dispositivos web y mobile.<br>Dando un mejor fluujo de en la gestión de productos.'
          },
          {
            date:'Abr 21 - Jul 21',
            title:'Appetit',
            description:'Colabore con el desarrollo de un aplicativo en vuejs para la gestión administrativa de un Restaurante, desempeñando trabajos de diseño flujo para dispositivos web y mobile.<br>Mejorando en la disponiblidad y bloqueo de mesas.'
          },
          {
            date:'Abr 20 - Nov 20',
            title:'Investigación y desarrollo de soluciones informáticas E.I.R.L',
            description:'Me desempeñe en un papel de desarrollo y mantenimiento de aplicativos de software relacionado al market-place, Se realizo gestión de aplicativos en productivo, se implementó diversas soluciones para agilizar búsquedas para frontend y backend<br>Trabajando con tecnologías como vue.js node.js, c#, SQL server'
          },
          {
            date:'Ene 20 - Jun 20',
            title:'Consurec',
            description:'Desempeñe un papel principal en el desarrollo y mantenimiento de aplicativos de software en nodejs con vuejs y php, relacionado a plataformas de empleo en línea, se aporto en diseños de vistas, además de investigación de funcionalidades y métodos de pago.<br>Trabajando con tecnologías como jquery, codeIgniter'
          },
          {
            date:'Set 18 - fre 19',
            title:'RT System',
            description:'Desempeñe un papel principal en la creación de paginas web para distintos rubros como hoteles, markets, grupos musicales<br>Trabajando con tecnologías como html5, css, jquery, PHP'
          },
          {
            date:'Dic 16 - Abr 17',
            title:'Clínica Señor de Luren',
            description:'Desempeñe en el desarrollo del aplicativo para la clínica para la gestión administrativo de distintos módulos.<br>Trabajando con tecnologías como html5, css, jquery, PHP'
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