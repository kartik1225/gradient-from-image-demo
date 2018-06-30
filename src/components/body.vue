<template>
  <v-app id="inspire">
    <v-toolbar
      color="blue-grey"
      dark
      fixed
      app
      clipped-right
      style='background: linear-gradient(to right, #ff512f, #dd2476) !important;'
    >
      <v-toolbar-side-icon @click.stop="left = !left"></v-toolbar-side-icon>
      <v-toolbar-title>Gradient from image</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class='white' @click='href("https://github.com/kartik1225/gradient-from-image")' outline>get it</v-btn>
    </v-toolbar>
    <v-navigation-drawer
      v-model="left"
      temporary
      fixed
    ></v-navigation-drawer>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer
       dark
       height="auto"
     >
       <v-card
         flat
         tile
         class="white--text text-xs-center"
         style='background: linear-gradient(to right, #ff512f, #dd2476)!important; width: 100%;'
       >
       <br>
         <v-card-text class="white--text pt-0">
           This website is created with <strong role='button' @click='href("https://vuetifyjs.com/")'>Vuetify</strong> 
         </v-card-text>

         <v-divider></v-divider>
         <v-card-text>
           created by <strong role='button' @click='href("https://github.com/kartik1225")'>Kartik</strong>
         </v-card-text>

       </v-card>

     </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: true,
      drawerRight: true,
      right: null,
      left: null
    }),
    props: {
      source: String
    },
    methods:{
    href(url){
      window.location = url;
    },
  }
  }

</script>
