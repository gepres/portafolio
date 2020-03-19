<template>
  <section class="container">
     <v-row class="content-title">
      <v-col class="d-flex content-title__education">
        <h2 class="font-weight-bold primario--text display-2">Que sé</h2>
        <v-btn class="primario white--text" target="_black" href="https://drive.google.com/open?id=1CF3R03B2xrJhXQCWNRrlSa_k7Q4bMtS2">Descargar CV</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" class="d-flex justify-center">
        <v-col ols="12" xs="12" sm="12" md="7" lg="7" xl="7">
          <h3 class="primario--text title-education mb-5">Mi Educación</h3>
          <div class="mb-5 white--text transparent" v-for="(item,i) in education" :key="i">
            <v-row class="mx-0">
              <div class="mr-3 primary" style="height: 100px; width: 1px;"></div>
              <v-col>
                <div class="mb-3">{{item.centro}}</div>
                <div class="text-right">
                  <span class="title primary--text">{{item.grado}}</span>
                  <footer>
                    <div>{{item.carrera}}</div>
                    <div>{{item.tiempo}}</div>
                  </footer>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-col>
      <v-col  cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
        <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
          <h3 class="primario--text title-education mb-5">Mis Skills</h3>
          <div class="mb-4" v-for="(item,i) in skills" :key="i">
            <h4 class="text-uppercase mb-3 primary--text">{{item.categoria}}</h4>
            <div class="pl-md-4" v-for="(item,i) in item.skill" :key="i">
              <v-row class="mb-2 mx-0 align-center">
                <v-col cols="5">
                   <h5 class="subtitle-2 white--text">{{item.nombre}}</h5>
                </v-col>
                <v-col cols="7">
                  <v-rating full-icon="fas fa-circle" length="6" empty-icon="far fa-circle"  v-model="item.rating" background-color="primario" small readonly>
                  </v-rating>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col>
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    name:'Education',
    data(){
      return {
        rating: 3,
        education:[
          {
            centro:'Univesidad San Luis Gonzaga',
            grado:'Ingeniería de Sistemas',
            carrera:'Ingeniería de Sistemas',
            tiempo:'2015 - 2019'
          },
          {
            centro:'Univesidad San Luis Gonzaga',
            grado:'Matemática Informática',
            carrera:'Matemática Informática',
            tiempo:'2013 - 2014'
          },
          {
            centro:'I.E.P Santa Rosa de Parcona',
            grado:'Secundaría',
            tiempo:'2006 - 2011'
          },
          {
            centro:'I.E N° 22309',
            grado:'Primaría',
            tiempo:'2000 - 2005'
          }
        ],
        skills:[
          {
            categoria:'Programación',
            skill:[
              {
                nombre:'Html5',
                rating:6
              },
              {
                nombre:'Css3',
                rating:6
              },
              {
                nombre:'JavaScript',
                rating:5
              },
              {
                nombre:'Vue js',
                rating: 5
              },
              {
                nombre:'React js',
                rating: 3
              },
              {
                nombre:'Node js',
                rating: 4
              },
              {
                nombre:'Firebase',
                rating: 4
              },
              {
                nombre:'Mongo DB',
                rating: 5
              },
              {
                nombre:'Mysql/pgSQL',
                rating: 4
              }
            ]
          },
          {
            categoria:'Grafico/Otros',
            skill:[
              {
                nombre:'Ilustrator',
                rating:4
              },
              {
                nombre:'Adobe xd',
                rating:5
              },
              {
                nombre:'Diseño Interfaz',
                rating:5
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.content-title__education{
  align-items: center;
  justify-content: space-between;
  padding-left: 0;
  @media screen and (max-width:600px){
    padding-right: 0;
  }
  & button {
    margin-right: 1rem;
    @media screen and (max-width:600px){
      margin-right: 0;
    }
  }
}
.title{
  &-education{
    font-weight: 500;
    font-size: 24px;
  }
}
</style>