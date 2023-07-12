<template>
  <div id="app">
   <Header/>
   <vue-page-transition name="fade">
  <router-view/>
</vue-page-transition>
<Footer/>
  </div>
</template>

<script>
import header from './components/header.vue'
import footer from './components/footer.vue'
export default{
  components:{
    'Header':header,
    'Footer':footer
  },
  
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@500&display=swap");

#app{
  font-family: 'Source Serif 4', serif;
}
#app{
  background-color: #DBCFBD;
}
</style>