<template>
  <div class="header">
      <div class="logo">
          <router-link to="/">
          <img src="../assets/img/logo.png" class="logo_img" alt="Logo" >
      </router-link>
      </div>
      <div class="header_link">
       
          <div class="menu_wrapper" @mouseover="showham = true" @mouseleave="showham = false">
             
             <div class="header_inner_link" v-show="showham">
      <router-link to="/">Home</router-link>|
    <!-- <router-link to="/list">Coffee Shop List</router-link> -->
  </div>
   <div class="menu_ham" @touchstart="showhamxs()" @touchend="closehamxs()">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
          </div>
      </div>
          
</div>
  </div>
</template>

<script>

export default {
name: 'Header',
data(){
  return{
      showham:false
  ,
  }
},
methods:{
showhamxs(){
         this.showham = true
      },
      closehamxs(){
         this.showham = false;
      }
},
// watch for the action for the menu
watch: {
  $route(to, from) {
    this.showham = false
  }
}

}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1200px){
.header{
  font-family: 'Source Serif 4', serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
  margin-bottom: 5%;
  .header_link{
      display: flex;
      .header_inner_link{
          display: flex;
  align-items: center;
          animation:fadeIn 0.3s;
      }
      @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }     
      }
      a{
          color: white;
          text-decoration: none;
          padding: 0 20px;
          font-size: 25px;
          &:hover{
              color:#7D5D26;
              transition: ease-out 1s;
          }
      }
      .line{
          height:3px;
          width: 45px;
          background: white;
          margin:10px auto;
          transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      .menu_wrapper {

display: flex;
justify-content: end;
.menu_ham {
  height: 50px;
  padding: 0 20px;
  cursor: pointer;
  &:hover, &:focus {
    outline: none;
    .line:nth-child(1) {
    transform: rotate(45deg) translate(3px, 4px);
  }
  .line:nth-child(2) {
    visibility: hidden;
  }
  .line:nth-child(3) {
    transform: rotate(-45deg) translate(15px, -16px);
  }
  }
}
}
  
  }
}
}
@media screen and (min-width: 768px) and (max-width: 979px){
.header{
  font-family: 'Source Serif 4', serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
  margin-bottom: 5%;
  .header_link{
      display: flex;
      .header_inner_link{
          display: flex;
  align-items: center;
          
      }
      a{
          color: white;
          text-decoration: none;
          padding: 0 20px;
          font-size: 25px;
       
      }
      .line{
          height:3px;
          width: 45px;
          background: white;
          margin:10px auto;
          transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      .menu_wrapper {

display: flex;
justify-content: end;
.menu_ham {
  height: 50px;
  padding: 0 20px;
  cursor: pointer;
  &:hover,&:focus {
    outline: none;
    .line:nth-child(1) {
    transform: rotate(45deg) translate(3px, 4px);
  }
  .line:nth-child(2) {
    visibility: hidden;
  }
  .line:nth-child(3) {
    transform: rotate(-45deg) translate(15px, -16px);
  }
  }
}
}
  
  }
 
}
}
@media screen and (max-width: 767px) {
  .header{
  font-family: 'Source Serif 4', serif;
  display: flex;
  background-color: #bda98d;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
  .logo img{
    width: 100px;
  }
  .header_link{
      display: flex;
      .header_inner_link{
          display: flex;
  align-items: center;
  color: white;
      }
      a{
        color: white;
  text-decoration: none;
  font-size: 15px;
  margin: 0 5px;
      }
      .line{
        height: 2px;
  width: 29px;
  background: white;
  margin: 8px auto;
          transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      .menu_wrapper {
        display: flex;
  justify-content: end;
  align-items: center;
.menu_ham {
  margin: 0 20px;
  &:hover,&:focus {
    outline: none;
    height: 20px;
    .line:nth-child(1) {
    transform: rotate(45deg) translate(-2px, 0px);
  }
  .line:nth-child(2) {
    visibility: hidden;
  }
  .line:nth-child(3) {
    transform: rotate(-45deg) translate(15px, -16px);
  }
  }
}
}
  
  }
}
}
</style>