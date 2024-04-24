<template>
  <section class="container">
    <v-row class="content-title">
      <h2 class="font-weight-bold primario--text display-2">Portafolio</h2>
    </v-row>
    <v-row>
      <v-carousel
        cycle
        class="caroucel-portafolio"
        hide-delimiters
        hide-delimiter-background
        show-arrows-on-hover
      >
      <v-carousel-item
        v-for="(item, i) in portafolio"
        :key="i"
        class="caroucel-portafolio__item"
      >
        <v-sheet
          height="100%"
          class="transparent"
        >
          <v-row
            class="fill-height"
            justify="center"
          >
          <v-col cols="12" class="d-flex justify-center align-center">
            <h4 class="title primario--text font-weight-light text-center">{{item.titulo}}</h4>
          </v-col>
          <v-col cols="12">
              <v-row>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                  <h5 class="title primario--text font-weight-light">Detalles del proyecto</h5>
                  <p>{{item.detalles}}</p>
                  <h5 class="title primario--text font-weight-light mb-3">Información del proyecto</h5>
                  <div>
                    <ul class="list-detalles">
                      <li class="primario--text mb-3" v-if="item.cliente">
                        <span><i class="fas fa-user mr-4"></i>Cliente</span>
                        <span class="white--text">{{item.cliente}}</span>
                      </li>
                      <li class="primario--text mb-3">
                        <span><i class="fas fa-code mr-4"></i>Código</span>
                        <ul class="row code">
                          <li class="col-6 white--text" v-for="(item,i) in item.herramientas" :key="i">
                            {{item}}
                          </li>
                        </ul>
                      </li>
                      <li class="primario--text mb-3" v-if="item.repositorio">
                        <span><i class="fab fa-github  mr-4"></i>Repositorio </span> 
                        <span class="white--text"><a :href="item.repositorio" target="_blank">github</a></span>
                      </li>
                      <li class="primario--text mb-3" v-if="item.pagina!== ''">
                        <span><i class="fas fa-link mr-4"></i>Pagina</span>
                        <span class="white--text"><a :href="item.pagina" target="_blank">link</a></span>
                      </li>
                      <li class="primario--text mb-3">
                        <span><i class="fas fa-tag mr-4"></i>Categoría</span>
                        <span class="white--text">{{item.categoria}}</span>
                      </li>
                    </ul>
                  </div>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" class="img-caroucel">
                 <div class="img-caroucel-container">
                    <img :src="item.imagen" alt="image" />
                    <div class="img-caroucel_content">
                      <a :href="item.imagen" target="_black">
                        <i class="fas fa-eye"></i>
                      </a>
                    </div>
                 </div>
                </v-col>
            </v-row>
          </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
      </v-carousel>
    </v-row>
  </section>
</template>

<script>
  export default {
    name:'Portafilio',
    data () {
      return {
        portafolio: [
        {
            titulo:'Micuenta - Izipay',
            detalles:'Pagina administratica para los cliente de izipay.',
            cliente:'',
            herramientas:[ 'nuxt', 'Vuetify' ,'Nestjs', 'MongoDB'],
            repositorio:'',
            pagina:'https://micuenta.izipay.pe/',
            imagen:'https://res.cloudinary.com/gepres/image/upload/v1714001911/portafolio/e9ed673e-74fa-4a12-9570-6bae32436140.png',
            categoria:'Full Stack'
          },
          {
            titulo:'Nuestras stories',
            detalles:'Pagina para conpartir contenido variado.',
            cliente:'',
            herramientas:['Vuejs', 'Vuetify','nuxt' ,'Nodejs', 'MongoDB'],
            repositorio:'',
            pagina:'http://www.nuestrastories.com/',
            imagen:'https://res.cloudinary.com/gepres/image/upload/v1601601483/portafolio/nuestras-stories_vhhtx3.png',
            categoria:'Front End y back'
          },
          
          {
            titulo:'2020 trabajos',
            detalles:'Es una aplicativo web para buscar trabajo y postular.',
            cliente:'Empresa:Consurec',
            herramientas:['html', 'css', 'javascript','PHP'],
            repositorio:'',
            pagina:'https://2020trabajos.com/',
            imagen:'https://res.cloudinary.com/gepres/image/upload/v1601600344/portafolio/2020-trabajos_ttxt66.jpg',
            categoria:'Front End'
          },
          {
            titulo:'2020 oficios',
            detalles:'Es una aplicativo web para buscar personas prestando oficio.',
            cliente:'Empresa:Consurec',
            herramientas:['html/ejs', 'scss', 'nodejs','mysql'],
            repositorio:'',
            pagina:'https://oficio2020.herokuapp.com/',
            imagen:'https://res.cloudinary.com/gepres/image/upload/v1601600090/portafolio/2020-oficio_jc4xkv.jpg',
            categoria:'Front End y back end'
          },
          {
            titulo:'vitrina laboral',
            detalles:'Es una aplicativo web para buscar trabajo y postular.',
            cliente:'Empresa:Consurec',
            herramientas:['html', 'css', 'PHP','javascript'],
            repositorio:'',
            pagina:'https://vitrinalaboral.com/',
            imagen:'https://res.cloudinary.com/gepres/image/upload/v1601601175/portafolio/vitrina-laboral_sm4l7d.jpg',
            categoria:'Front End'
          },
           {
            titulo:'Geo bodegas',
            detalles:'Es una aplicativo web ecommerce.',
            cliente:'Empresa: IDSI',
            herramientas:['vuejs', 'vuetyfy', 'plugins'],
            repositorio:'',
            pagina:'',
            imagen:'https://res.cloudinary.com/gepres/image/upload/v1601602736/portafolio/gebodegas_rfrmhl.png',
            categoria:'Front End'
          },
          {
            titulo:'Fotógrafo Matthews Carbonel',
            detalles:'Es una pagina de fotógrafia personalizada dinámica con un administrador para su contenido, además de autentificación de usuario por el lado de firebase y almacen de imagenes.',
            cliente:'Matthews Carbonel',
            herramientas:['Vuejs', 'Vuetify', 'Firebase'],
            repositorio:'https://github.com/gepres/photography-page',
            pagina:'https://fotografia-page-gepres.web.app/',
            imagen:'https://res.cloudinary.com/gepres/image/upload/v1584578640/portafolio/fotografo_xlsc3l.png',
            categoria:'Front End'
          },
          {
            titulo:'Sistema de compra - venta',
            detalles:'Es un Sistemas de ventas y compra contiene almacén, compra, venta, factura, estadistica.Además esta separada por roles para un mejor manejo. para pruebas ingrese al repositorio.',
            cliente:'Comercial',
            herramientas:['Vuejs', 'Vuetify', 'Nodejs', 'MongoDB'],
            repositorio:'https://github.com/gepres/sistemacv-frontend',
            pagina:'https://sistemacv-gepres.web.app/',
            imagen:'https://res.cloudinary.com/gepres/image/upload/v1584578633/portafolio/sistemas-ventas_b4a5ag.png',
            categoria:'Front End'
          },
          {
            titulo:'Meeti',
            detalles:'Es un aplicativo web para la creación de charlas, conferencias en diversos temas, cuentan con auntetificacíon, localización, eventos cercanos.',
            cliente:'Comercial',
            herramientas:['Ejs', 'Expresjs', 'pgSQL','cloudinary'],
            repositorio:'https://github.com/gepres/meeti',
            pagina:'https://meeti-gepres.herokuapp.com/',
            imagen:'https://res.cloudinary.com/gepres/image/upload/v1584578641/portafolio/meeti_lbglpz.png',
            categoria:'Front End'
          },
          {
            titulo:'DevJobs',
            detalles:'Es un aplicativo web para la creación de postulaciones de empleo en el ámbito de programación.',
            cliente:'Comercial',
            herramientas:['handlebars', 'Expresjs', 'MongoDB','cloudinary'],
            repositorio:'https://github.com/gepres/devjobs',
            pagina:'https://devjobs-gepres.herokuapp.com/',
            imagen:'https://res.cloudinary.com/gepres/image/upload/v1584578633/portafolio/devjobs_xowpd6.png',
            categoria:'Front End'
          },
          {
            titulo:'Gepres Blogs',
            detalles:'Es una pagina de blogs personalizada dinámica con un administrador para su contenido, además de autentificación por el lado de backend.',
            cliente:'Genaro Pretill',
            herramientas:['Vuejs', 'Vuetify', 'Nodejs', 'MongoDB'],
            repositorio:'https://github.com/gepres/gepres-blogs',
            pagina:'https://gepresblogs.com/',
            imagen:'https://res.cloudinary.com/gepres/image/upload/v1584578635/portafolio/gepres-blogs_mnzt3a.png',
            categoria:'Front End'
          },
           {
            titulo:'Sistema de pedidos',
            detalles:'Es un Sistemas de ventas contiene almacén, pedidos. Para pruebas ingrese al repositorio.',
            cliente:'Comercial',
            herramientas:['React js', 'Expresjs', 'MongoDB','cloudinary'],
            repositorio:'https://github.com/gepres/react-crm-frontend',
            pagina:'https://react-crm.netlify.com/iniciar-sesion',
            imagen:'https://res.cloudinary.com/gepres/image/upload/v1584578634/portafolio/react-crm-frontend_tlrso7.png',
            categoria:'Front End'
          },
          {
            titulo:'API REST blogs',
            detalles:'Servidor para un blogs utilizando nodejs express y cloudinary como almacén de imágenes.',
            cliente:'Comercial',
            herramientas:['Nodejs', 'Expresjs', 'MongoDB','cloudinary','JWT'],
            repositorio:'https://github.com/gepres/blogs-servidor-example',
            pagina:'https://blogs-server-example.herokuapp.com/',
            imagen:'https://res.cloudinary.com/gepres/image/upload/v1584587436/portafolio/servidor-blogs_d8tesp.png',
            categoria:'Back End'
          },
          {
            titulo:'API REST Sistemas compra venta',
            detalles:'Servidor del Sistema compra y venta',
            cliente:'Comercial',
            herramientas:['Nodejs', 'Expresjs', 'MongoDB','JWT'],
            repositorio:'https://github.com/gepres/sistemacv-backend',
            pagina:'',
            imagen:'https://niittrainingprdcdn.azureedge.net/Images/nodejs-520.jpg',
            categoria:'Back End'
          }
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
.caroucel-portafolio{
  height: 500px !important;
  @media screen and (max-width:600px){
     height: 750px !important;
  }
}
.list-detalles{
  width: 70%;
  @media screen and (max-width:600px){
    width: 95%;
  }
  & li{
    display: flex;
    justify-content: space-between;
  }
}
.code{
  margin-right: 0;
  & li {
    padding: 0;
    display: flex;
    justify-content: flex-end;
  }
}
.img-caroucel{
 position: relative;
  & img {
    border: 50%;
    object-fit: cover;
  }
 &:hover .img-caroucel_content{
   transform: scale(1);
 }
 &-container {
  display: flex;
    justify-content: center;
    & img {
      width: 400px;
    border-radius: 50%;
    height: 400px;
    }
 }
 &_content{
  border-radius: 50%;
    width: 400px;
    height: 400px;
    top: 12px;
    position: absolute;
    background: rgba(0, 0, 0,.7);
    justify-content: center;
    align-items: center;
    display: flex;
    transform: scale(0);
    transition: .3s;
    & i{
      color:#fff;
      font-size: 2rem;
    }
 }
}
</style>

<style lang="scss">
.v-carousel__item{
  @media screen and (max-width:600px){
     height: 750px !important;
  }
}
</style>