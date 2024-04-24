import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    redes: {
      facebook: {
        url: 'https://www.facebook.com/genaro.pretillescobar',
        icon: 'fab fa-facebook-square'
      },
      github: {
        url:  'https://github.com/gepres',
        icon : 'fab fa-linkedin'
      },
      linkedin: {
        url : 'https://www.linkedin.com/in/genaro-pretill-escobar-b7b94782/',
        icon : 'fab fa-github-square'
      }
    },
    user: {
      address: ['Ica - Perú', 'Lima - Perú'],
      cel: '945 335 795',
      email: 'genaropretill@gmail.com'
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
