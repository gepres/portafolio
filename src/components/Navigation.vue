<template>
  <div>
     <!-- START - TOOLBAR -->
    <v-app-bar dark app v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs ||  $vuetify.breakpoint.md">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span class="title">Genaro Pretill</span>
        <span class="font-weight-light subheading">frontend</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <!-- START - NAVIGATION -->
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      color="drawer"
      class="navigation-drawer"
    >
      <v-list-item>
        <v-container>
          <v-row>
            <v-col cols="12" class="logo">
              <span class="primario--text">GP</span>
            </v-col>
            <v-col cols="12" class="text-center title py-1">
               <h1>Genaro Pretill</h1>
            </v-col>
            <v-col cols="12" class="text-center subtitle">
                <small>Desarrollador Front-end</small>
            </v-col>
          </v-row>
        </v-container>
      </v-list-item>
      <div class="content-enlaces">
        <v-btn v-for="item in items" v-scroll-to="item.el" :key="item.title" text>
          {{ item.title }}
        </v-btn>
      </div>
      <v-footer style="background:transparent !important;top: 80px;">
        <div class="content-icons">
          <a href="https://www.facebook.com/genaro.pretillescobar" target="_blank"><v-icon>fab fa-facebook-square</v-icon></a>
          <a href="https://www.linkedin.com/in/genaro-pretill-escobar-b7b94782/"  target="_blank"><v-icon>fab fa-linkedin</v-icon></a>
          <a href="https://github.com/gepres"  target="_blank"><v-icon>fab fa-github-square</v-icon></a>
        </div>
      </v-footer>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name:'navigation',
  data () {
    return {
      drawer:true,
      items: [
          { 
            title: 'Acerca',
            el:{ el: '#acerca' }
          },
          { 
            title: 'Servicios',
            el:{ el: '#servicios' }
          },
          { 
            title: 'Experiencia',
            el:{ el: '#experiencia' }
          },
          { 
            title: 'Educación y Skills',
            el:{ el: '#educacion' }
          },
          { 
            title: 'Portafolio',
            el:{ el: '#portafolio' }
          },
          { 
            title: 'Contacto',
            el:{ el: '#contacto' }
          },
        ]
    }
  },
  methods:{
  },
}
</script>

<style lang="scss" scoped>
.navigation-drawer{
  @media screen and (max-width:600px){
    top:56px !important;
  }
}
.logo { 
  text-align: center;
  padding: 0;
  & span{
    font-weight: bold;
    font-size: 3.3rem;
  }
}
.title h1{
  font-weight: 400 ;
  font-size: 32px ;
}
.subtitle small{
  font-size: 1rem;
}
.nav-link{
  font-size: 15px !important;
  font-weight: 300 !important;
}
.v-list-item--link{
  margin: .8rem 0 !important;

  &:first-of-type{
  margin:0 !important;
  }
  &:hover{
    transition: all 0.2s ease-in-out;
  }
}
.content-enlaces{
  display: flex;
  flex-direction: column;
  align-items: center;
  & button {
    margin: .5rem 0;
    text-transform: none !important;
    font-size: 15px !important;
    font-weight: 300 !important;
    &:first-of-type{
    margin:0 !important;
    }
  }

}
.content-icons{
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  & a{
    text-decoration: none;
  }
}
</style>