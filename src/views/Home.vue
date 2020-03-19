<template>
  <div class="background">
    <Header />
    <v-container style="padding:20px">
      <About id="acerca" />
      <Services id="servicios" />
      <Experience id="experiencia" />
      <Education id="educacion" />
      <Portafolio id="portafolio" />
      <Contact id="contacto" />
    </v-container>
  </div>
    
</template>

<script>

import Header from '@/components/section/Header.vue'
import About from '@/components/section/About.vue'
import Services from '@/components/section/Services.vue'
import Experience from '@/components/section/Experience.vue'
import Education from '@/components/section/Education.vue'
import Portafolio from '@/components/section/Portafolio.vue'
import Contact from '@/components/section/Contact.vue'
export default {
  name: 'Home',
  components:{Header,About,Services,Experience,Education,Portafolio,Contact},
  data(){
    return {

    }
  }
}
</script>
