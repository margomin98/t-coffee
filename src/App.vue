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

#app{
 
  font-family: 'Source Serif 4', serif;
  background-color: #DBCFBD;
}
</style>