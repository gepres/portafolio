<template>
 <section class="container">
    <v-row class="content-title">
      <h2 class="font-weight-bold primario--text display-2">Contáctame</h2>
    </v-row>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
        <h4 class="title primario--text font-weight-light text-center">ESCRIBEME UN MENSAJE</h4>
        <v-form>
          <v-row class="d-flex justify-center">
            <v-col cols="10">
              <v-text-field
                label="Nombre"
                single-line
                outlined
                dark
                color="primario"
                hide-details
              ></v-text-field>
            </v-col>
             <v-col cols="10">
              <v-text-field
                label="Correo"
                single-line
                outlined
                dark
                type="email"
                color="primario"
                hide-details
              ></v-text-field>
            </v-col>
             <v-col cols="10">
              <v-text-field
                label="Asunto"
                single-line
                outlined
                dark
                color="primario"
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="10">
              <v-textarea
                outlined
                dark
                color="primario"
                label="Escribe un mensaje"
                hide-details
              ></v-textarea>
            </v-col>
            <v-col cols="10">
              <v-btn class="primario white--text" disabled>Enviar</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
        <h4 class="title primario--text font-weight-light text-center">CONTACTO SOCIALES</h4>
        <v-row>
          <v-col cols="12">
            <div class="content-icons">
              <a href="https://www.facebook.com/genaro.pretillescobar" target="_blank"><v-icon medium  class="white--text">fab fa-facebook-square</v-icon></a>
              <a href="https://www.linkedin.com/in/genaro-pretill-escobar-605b021b0/"  target="_blank"><v-icon  medium  class="white--text">fab fa-linkedin</v-icon></a>
              <a href="https://github.com/gepres"  target="_blank"><v-icon medium  class="white--text">fab fa-github-square</v-icon></a>
            </div>
          </v-col>
          <v-col cols="12">
            <div class="row d-flex justify-center">
              <v-col cols="2 d-flex justify-center"><v-icon x-large class="primario--text">fas fa-map-marker-alt</v-icon></v-col>
              <v-col cols="5">
                <h5 class="primario--text subtitle-1 font-weight-light">Dirección</h5>
                <p class="mb-0 grey--text">Ica - Perú</p>
                 <p class="mb-0 grey--text">Lima - Perú</p>
              </v-col>
            </div>
            <div class="row d-flex justify-center">
              <v-col cols="2 d-flex justify-center"><v-icon x-large class="primario--text">fas fa-envelope</v-icon></v-col>
              <v-col cols="5">
                <h5 class="primario--text subtitle-1 font-weight-light">Correo</h5>
                <p class="mb-0 grey--text">genaropretill@gmail.com</p>
              </v-col>
            </div>
             <div class="row d-flex justify-center">
              <v-col cols="2 d-flex justify-center"><v-icon x-large class="primario--text">fas fa-phone-alt</v-icon></v-col>
              <v-col cols="5">
                <h5 class="primario--text subtitle-1 font-weight-light">Celular</h5>
                <p class="mb-0 grey--text">945 335 795</p>
              </v-col>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
 </section>
</template>

<script>
  export default {
    name:'Contacnt'
  }
</script>

<style lang="scss" scoped>
.content-icons{
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  & a{
    text-decoration: none;
  }
}
</style>