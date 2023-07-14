<template>
  <div class="home_page ">
    <b-container fluid class="g-0">
    <kinesis-container class="pt1">
      <div class="title">
   <div class="bean_layer">    
              <kinesis-element :strength="80" class="bean1 d-xs-none">
                <img  src="../assets/img/coffee_xl.png" alt="coffee bean">
              </kinesis-element>
              <kinesis-element :strength="20" class="bean2">
                <img  src="../assets/img/coffee_xl.png" alt="coffee bean">
              </kinesis-element>
              <kinesis-element :strength="40" class="bean3">
                <img  src="../assets/img/coffee_xl.png" alt="coffee bean">
              </kinesis-element>
              <kinesis-element :strength="40" class="bean4">
                <img src="../assets/img/coffee_xl.png" alt="coffee bean">
              </kinesis-element>
              <kinesis-element :strength="20" class="bean5">
                <img src="../assets/img/coffee_xl.png" alt="coffee bean">
              </kinesis-element>
   </div>
  </div>       
  </kinesis-container >
  <h1 class="pt1_title">
      Do you know the country of origin<br>
      of the coffee you drink?
    </h1>
  </b-container>
<b-container fluid class="pt2">
  <b-col col class="left" xl="5" lg="5" md="12" sm="12">

  <div class="bg">
    <div class="bean_drop d-xl-block d-lg-block d-md-block d-none">
    <img v-prlx.mobile="{ preserveInitialPosition: false }" src="../assets/img/coffee_drop_2.png" alt="coffee drop demonstrate">
  </div>
  </div>
</b-col>
  <b-col col class="right" xl="7" lg="7" md="12" sm="12">
    <div class="title">
  <div class="h1"><h1>咖啡的歷史</h1></div>
<div class="underline">
  <img src="../assets/img/underline.png" alt="title underline">
</div>
  </div>
   <p>
    喝咖啡的文化可回溯到至11世紀，咖啡最先從衣索比亞進口到阿拉伯，波斯人對於這新的「伊斯蘭酒」所帶來產生的興奮作用，相當狂熱，因為回教嚴格禁止飲酒，「coffee」這個字是從阿拉伯古字「gahwah」而來。
   </p>
   <p>
    15世紀後半世紀，咖啡經由麥加和麥地那市普及到阿拉伯帝國，在1510年傳到開羅。
16世紀前半世紀，Osmanic帝國達到了全盛時期，咖啡在阿拉伯、小亞細亞、敘利亞、埃及、東南歐等地逐漸風行，第一間的咖啡館是於1530和1532年開在大馬士革與阿勒坡。
   </p>
  </b-col>

<div class="marquee_word d-xl-block d-lg-block d-md-block d-none">
  <marquee width="100%" direction="left" height="150px" scrollamount="25">
    “Coffee, the favorite drink of the civilized world.”
</marquee>
</div>
</b-container>
  <b-container fluid class="pt3 g-0">
    <b-row class="g-0">
      <b-col cols="12" class="pt3_xs">
    <b-col col  class="left_xs" >
  <div class="bean_drop d-xl-none d-lg-none d-md-none d-block">
  <img v-prlx="{ preserveInitialPosition: false }" src="../assets/img/coffee_drop_2.png" alt="coffee drop demonstrate">
</div>
</b-col>
<b-col>
  <div class="marquee_word d-xl-none d-lg-none d-md-none d-block">
  <marquee width="100%" direction="left" height="150px" scrollamount="25">
    “Coffee, the favorite drink of the civilized world.”
</marquee>
</div>
</b-col>
    <b-col col  class="right_xs d-xl-none d-lg-none d-md-none d-block">
        <p>
      台灣人一年喝掉<countTo :startVal='startVal1' :endVal='endVal1' :duration='10000'></countTo>萬噸
    </p>
    <p>
      一人一天平均喝<countTo :startVal='startVal3' :endVal='endVal3' :duration='10000'></countTo>杯以上
    </p>
    <p>
      平均每人每年喝約<countTo :startVal='startVal2' :endVal='endVal2' :duration='10000'></countTo>杯
    </p>
    </b-col>
</b-col>
    <b-col col  class="left d-xl-block d-lg-block d-md-block d-none" xl="6" lg="6" md="12" sm="12">
        <p>
      台灣人一年喝掉<countTo :startVal='startVal1' :endVal='endVal1' :duration='10000'></countTo>萬噸
    </p>
    <p>
      一人一天平均喝<countTo :startVal='startVal3' :endVal='endVal3' :duration='10000'></countTo>杯以上
    </p>
    <p>
      平均每人每年喝約<countTo :startVal='startVal2' :endVal='endVal2' :duration='10000'></countTo>杯
    </p>
    </b-col>
    <b-col col  class="right" xl="6" lg="6" md="12" sm="12">
      <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
  <p class="result_link"><a target="_blank" href="https://news.big-data.tw/2022/10/%E5%85%A8%E5%8F%B0%E6%8B%9A%E5%8D%83%E5%84%84%E3%80%8C%E9%BB%91%E9%87%91%E3%80%8D%EF%BC%9F%EF%BC%81%E3%80%8A%E7%B6%B2%E8%B7%AF%E6%BA%AB%E5%BA%A6%E8%A8%88%E6%B0%91%E8%AA%BF%E4%B8%AD%E5%BF%83%E3%80%8B/">資料來源：大數據股份有限公司</a></p>
    </b-col>
    <b-col cols="12" class="bean_right scroll_img_container" >
    <img class="scroll_img_element img_scroll fade-in-bottom" src="../assets/img/spark_bean.gif" alt="Coffee bean">
</b-col>

  </b-row>
 
  </b-container>
  <b-container fluid class="pt3_bg">
  </b-container>
  <b-container fluid class="pt4">
    <b-row>
    <b-col class="title">
 <h1>
你知道台灣大部分使用的
<br>
咖啡豆是哪種嗎？
 </h1>
</b-col>
</b-row>
<b-row class="img_row">
    <b-col  class="info1" xl="6" lg="6" md="12" sm="12">
    <div>
 <img @mouseover="textShow1 = true" @mouseleave="textShow1 = false" src="../assets/img/bean_intro_1.png" alt="阿拉卡比">
</div>
 <div class="content"  v-show="textShow1">
<p class="title" >阿拉比卡 Arabica</p>
<p class="info">阿拉比卡為原產地衣索比亞的代表性品種，在南非、非洲、亞洲國家等地也有生產，占全世界咖啡產量的70～75％。<br>
  阿拉比卡對於病蟲害的抵抗力較弱，因此高地地區較適於栽培，尤其以1500公尺以上高地生產的阿拉比卡咖啡豆品質最好。</p>
</div>
  </b-col>
  <b-col class="info2" xl="6" lg="6" md="12" sm="12">
  <div>
    <img @mouseover="textShow2 = true" @mouseleave="textShow2 = false" src="../assets/img/bean_intro_2.png" alt="羅布斯塔">
  </div>
    <div class="content"  v-show="textShow2">
<p class="title" >羅布斯塔 Robusta</p>
<p class="info">羅布斯塔的原產地為非洲剛果，占有全世界咖啡產量的30％。羅布斯塔一字有「堅韌」的意思，實際上，<br>
  此種咖啡樹不止對病蟲害抵抗力強，在任何土壤都能生存，甚至野生的狀態也能生長。<br>
  因此在高溫地區也能栽種，生長速度快且容易栽培，有著價格低廉的優勢，主要用來配豆或是做成即溶咖啡的主原料。</p>
</div>
</b-col>
</b-row>
</b-container>

<b-container fluid class="pt5 g-0" v-prlx.background="{ speed:0.8 }">
<div class="overlay">
</div>
<div class="list_enter_link">
 <div class="title_wrap">
  <div class="spark1">
  <img src="../assets/img/spark.gif" alt="spark icon">
</div>
  <p class="title">
    查看全臺咖啡廳
  </p>
  <div class="spark2">
  <img src="../assets/img/spark.gif" alt="spark icon">
</div>
</div>
  <p class="link">
  <router-link to="/list">
查看咖啡廳
  </router-link>
  </p>
</div>
</b-container>

  </div>
</template>

<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale,ChartDeferred);
import ChartDeferred from 'chartjs-plugin-deferred';
import countTo from 'vue-count-to';

export default {
  name: 'Home',
  //later for add string through prop
  
  components:{countTo,Bar},
  data(){
    return {
      startVal1:0,
      endVal1:5,
      startVal2:0,
      endVal2:122,
      startVal3:0,
      endVal3:1,
      autoplay:false,
      textShow1:false,
      textShow2:false,
      chartData: {
        labels: [ '2018', '2019', '2020' , '2021' ],
        datasets: [ 
          {
            label:'年份數據',
            barThickness:'50',
            backgroundColor: '#a07d64',
            data: [690, 703, 707,725] ,
            hoverBackgroundColor:'#714e34',
            } 
          ],
      },
      chartOptions: {
        responsive: true,
        plugins: {
          title: {
                display: true,
                text: '2021台灣咖啡消費量增1.6%',
                padding:5,
                color: "white",
                font:{
                  size:35,
                  family: 'chenyuluoyan'
                }

            },
            legend: {
                display:false
          } ,
          ChartDeferred: {
        xOffset: 5,   
        yOffset: '10%',
        delay: 50000   
      }
        }
    }
  }
  },
  props: {
    msg: String
  },
  mounted(){
    const scrollElements = document.querySelectorAll('.img_scroll');

    const scrollIn = (el,scrollHalf = 1) =>{
      const imgTop = el.getBoundingClientRect().top;

      return(
        imgTop<=(window.innerHeight || document.documentElement.imgScrollHeight) / scrollHalf
      )
    };

    const scrollOut = (el) =>{
      const imgTop = el.getBoundingClientRect().top;
    
    return(
      imgTop > (window.innerHeight || document.documentElement.imgScrollHeight)
    )
    };
    const imgScrollSource = (element) =>{
      element.classList.add('scrolled');
    };
    const HideScroll = (element) =>{
      element.classList.remove('scrolled');
    };
    const handleScrollAnimation = () =>{
      scrollElements.forEach((el)=>{
        if (scrollIn(el,1.5)){
          imgScrollSource(el);
        }else if(scrollOut(el)){
          HideScroll(el)
        }
      })
    }
    window.addEventListener('scroll',() =>{
      handleScrollAnimation();
    })
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home_page{
    font-family: 'Source Serif 4', serif;
}

@media screen and (min-width: 1200px){
.home_page{

  
   h1.pt1_title{
    height: auto;
    text-align: center;
    color: white;
    font-size: 3.5vw;
    top: 40%;
    position: absolute;
    right: 0;
    left: 0;
    }
.pt1{
background-image: url('../assets/img/home_bg.png');
background-position: bottom;
    background-size: cover;
    height:700px;
    position: relative;
    display: flex;
    align-items: center;
     
  .title {
      
    .bean_layer{
  position: relative;
   .bean1 {
    top: 10vh;
    left: 5vw;
    rotate: 120deg;
    scale: 0.9;
    position: absolute; 
  }
  .bean2{    
    position: absolute;
    top: -46vh;
    left: 10vw;
    rotate: -45deg;
  }
  .bean3{
    top: -57vh;
    left: 64vw;
    scale: 0.7;
    rotate: 30deg;
    position: absolute;
  }
  .bean4{
    top: 10vh;
    left: 65vw;
    rotate: 5deg;
    scale: 0.9;
    position: absolute;
  }
  .bean5{
    bottom: 2vh;
    left: 72vw;
    rotate: 307deg;
    position: absolute;
  }
}
}
}
.pt2{
  display: flex;
  margin:8% 0;
  height: 400px;
  position: relative;
 .left{
  .bg {
    position: relative;
    right: 32%;
    bottom: -25%;
    z-index: 2;
    scale: 0.9;
    .bean_drop{
      position: absolute;
    z-index: 2;
    top: -80px;
  }
      }
 }
.right{
 padding:0 200px 0 0;
  .title{
    position: relative;
 .h1 
 {
  h1{
    position: relative;
    z-index: 2;
    font-size: 100px;
    font-family: 'chenyuluoyan';
  }
}
  .underline{
    position: absolute;
    bottom: 10px;
    z-index: 1;
  }
  }
 
  p{
    font-family: 'chenyuluoyan';
    padding-right: 5%;
    font-size: 30px;
    letter-spacing: 5px;
    line-height:30px;
  }
}
.marquee_word{
  position: absolute;
    top: 110%;
  marquee{
    font-size: 100px;
    color: white;
  }
}
}
.pt3{
  margin-top: 15%;
  position:relative;
  .left{
  padding-left: 100px;
  margin-top: 20%;
  p{
    font-family: 'chenyuluoyan';
    margin: 0;
    font-size:70px;
    color:white;
    font-style: bold;
  }
}
.right{
  padding-right: 150px;
  p.result_link{
  a{
    text-decoration: none;
    color:white;
  display: flex;
  justify-content: end;
  }  
  }
} 
 .bean_right{
    position: relative;
    img{
      left: 56%;
      top: -140px;
      position: absolute;
      scale: 1.4;
    }
  }
  .scroll_img_container:nth-of-type(even) {
  flex-direction: row-reverse;
}


@media screen and (max-width: 650px) {
  .scroll_img_container,
  .scroll_img_container:nth-of-type(even) {
    flex-direction: column;
    align-content: inherit;
  }

}

.img_scroll {
  opacity: 0;
  transition: opacity 500ms;
}

.img_scroll.scrolled {
  opacity: 1;
}

.scrolled.fade-in {
  animation: fade-in 1s ease-in-out both;
}

.scrolled.slide-left {
  animation: slide-in-left 1s ease-in-out both;
}

.scrolled.slide-right {
  animation: slide-in-right 1s ease-in-out both;
}


@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-100px);
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(100px);
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

}
.pt3_bg{
  background-image: url('../assets/img/wave_end.png');
  background-position: bottom;
  height: 300px;
}
.pt4{
  flex-direction: column;
  display: flex;
  text-align: center;
  background-position: bottom;
  height: 680px;
  background-image: url('../assets/img/footer.jpg');
  .title{
   
    h1{
    font-family: 'chenyuluoyan';
    font-size: 80px;
  }
  }
  .img_row{
    padding: 7% 0 0 13%;
  
  .info1{
    position: relative;
    overflow: hidden;
    align-items: center;
    bottom: 0;
    display: flex;
    overflow: visible;
justify-content: center;
    img{
      position: relative;
      z-index: 2;
     transform:translate(0);
     -webkit-transition: transform 1000ms ease-in-out;
      &:hover{
      display: inline-block;
transform:translate(-220px);
-webkit-transition: transform 1000ms ease-in-out;
}

    }
  
.content{
  position: absolute;
  z-index: 1;
  padding: 0 0 0 20px;
  top: 20%;
  left: 36%;
  width: 500px;
text-align: left;
-webkit-animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
          @-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.title{
  font-weight: 700;
  font-size: 30px;
}
.info{
  font-size: 20px;
}
}


      }
    
      .info2{
    position: relative;
    overflow: hidden;
    align-items: center;
    bottom: 0;
    display: flex;
    overflow: visible;
    justify-content: center;
    img{
      position: relative;
      z-index: 2;
      right: 150%;
     transform:translate(0);
     -webkit-transition: transform 1000ms ease-in-out;
      &:hover{
      display: inline-block;
transform:translate(-80px);
-webkit-transition: transform 1000ms ease-in-out;
}

    }
  
.content{
  position: absolute;
  z-index: 1;
  padding: 0 0 0 10px;
  top: 20%;
  width: 500px;
text-align: left;
-webkit-animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
          @-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.title{
  font-weight: 700;
  font-size: 30px;
}
.info{
  font-size: 20px;
}
}


      }

   } 

}
.pt5{
    background:linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ), url('../assets/img/drip_bg.webp');
    height: 800px;
    background-size: cover;
    .overlay{
      background-image: url('../assets/img/wave_footer.png');
      height: 300px;
    }
    .list_enter_link{
      margin-top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
      p.link{
        border: thick double white;
    margin: auto;
    padding: 10px 30px;
    a{
      color:white;
      text-decoration: none;
      font-weight: 700;
      font-family: 'chenyuluoyan';
      font-size: 30px;
    }
    &:hover{
      animation: link_vibrate 2s ease-out 0s infinite normal both;
      @keyframes link_vibrate {
	0% {
		transform: translate(0);
	}

	20% {
		transform: translate(-2px, 2px);
	}

	40% {
		transform: translate(-2px, -2px);
	}

	60% {
		transform: translate(2px, 2px);
	}

	80% {
		transform: translate(2px, -2px);
	}

	100% {
		transform: translate(0);
	}
}
    }
      }
      .title_wrap{
        display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .spark1{
      position: absolute;
      left: 31%;
    bottom: 27%;
    rotate: 22deg;
      img{
      
        scale: 0.5;
      }
    }
    .spark2{
      position: absolute;
    right: 31%;
    top: 9%;
    rotate: 347deg;
      img{
      
        scale: 0.5;
      }
    }
        p.title{
        font-size:80px;
        color:white;
        font-family: 'chenyuluoyan';
      }
      }
     
    }
}

}
}
@media screen and (min-width: 768px) and (max-width: 979px){
  .home_page{

h1.pt1_title{
 height: auto;
 text-align: center;
 color: white;
 font-size: 3.5vw;
 top: 40%;
 position: absolute;
 right: 0;
 left: 0;
 }
.pt1{
background-image: url('../assets/img/home_bg.png');
background-position: bottom;
 background-size: cover;
 height:700px;
 position: relative;
 display: flex;
 align-items: center;
.title {
 .bean_layer{
   background-image: url('../assets/img/bean_move.gif');
   background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 800px;
    width: 750px;
img{
display: none;
}
}
}
}
.pt2{ 
flex-direction: column;
.left{
.bg {
 position: relative;
 right:54%;
 bottom: -400px;
 z-index: 2;
 scale: 0.8;
 .bean_drop{
   position: absolute;
 z-index: 2;
}
   }
}
.right{
padding: 30px;
text-align: center;
.title{
 position: relative;
.h1 
{
h1{
 position: relative;
 z-index: 2;
 font-size: 100px;
 font-family: 'chenyuluoyan';
}
}
.underline{
  position: absolute;
    bottom: 10px;
    z-index: 1;
    left: 0;
    right: 0;

}
}

p{
 font-family: 'chenyuluoyan';
 font-size: 30px;
 letter-spacing: 5px;
 line-height:30px;
}
}
.marquee_word{
position: absolute;
 top: 139%;
 width: 550px;
 right: 0;
marquee{
 font-size: 100px;
 color: white;
}
}
}
.pt3{
.left{
  display: flex;
    text-align: right;
    flex-direction: column;
    margin-top:55%;
    padding-right: 30px;
    z-index: 2;
p{
  font-family: "chenyuluoyan";
    margin: 0;
    color: white;
    font-size: 45px;
}
}
.right{
  margin: 42% 0 0;
    padding: 30px 30px 0;
p.result_link{
a{
 text-decoration: none;
 color:white;
display: flex;
justify-content: end;
}  
}
} 
.bean_right{
 position: relative;
 img{
  left: 10%;
    position: absolute;
 }
}
.scroll_img_container:nth-of-type(even) {
flex-direction: row-reverse;
}


@media screen and (max-width: 650px) {
.scroll_img_container,
.scroll_img_container:nth-of-type(even) {
 flex-direction: column;
 align-content: inherit;
}

}

.img_scroll {
opacity: 0;
transition: opacity 500ms;
}

.img_scroll.scrolled {
opacity: 1;
height: unset;
}

.scrolled.fade-in {
animation: fade-in 1s ease-in-out both;
}

.scrolled.slide-left {
animation: slide-in-left 1s ease-in-out both;
}

.scrolled.slide-right {
animation: slide-in-right 1s ease-in-out both;
}


@keyframes slide-in-left {
0% {
 -webkit-transform: translateX(-100px);
 transform: translateX(-100px);
 opacity: 0;
}
100% {
 -webkit-transform: translateX(0);
 transform: translateX(0);
 opacity: 1;
}
}

@keyframes slide-in-right {
0% {
 -webkit-transform: translateX(100px);
 transform: translateX(100px);
 opacity: 0;
}
100% {
 -webkit-transform: translateX(0);
 transform: translateX(0);
 opacity: 1;
}
}

@keyframes fade-in {
0% {
 opacity: 0;
}
100% {
 opacity: 1;
}
}

}
.pt3_bg{
background-image: url('../assets/img/wave_end.png');
background-position: bottom;
height: 300px;
}
.pt4{ 
flex-direction: column;
display: flex;
text-align: center;
background-position: bottom;
height: 1350px;
background-image: url('../assets/img/footer_xs.jpg');
.title{
margin:15% 0 5%;
 h1{
 font-family: 'chenyuluoyan';
 font-size: 60px;
}
}
.img_row{
img{
  scale: 0.8;
}
.info1{
 position: relative;
 align-items: center;
 bottom: 0;
 display: flex;
 overflow: visible;
justify-content: start;
margin-bottom: 5%;

.content{
padding: 0 20px;
text-align: left;
display: block !important;
      
.title{
font-weight: 700;
font-size: 30px;
}
.info{
font-size: 20px;
}
}

   }
 
   .info2{
 position: relative;
 align-items: center;
 bottom: 0;
 display: flex;
 overflow: visible;
justify-content: end;


.content{
padding: 0 20px;
text-align: left;
display: block !important;
      
.title{
font-weight: 700;
font-size: 30px;
}
.info{
font-size: 20px;
}
}

   }

} 

}
.pt5{
 background:linear-gradient(
 rgba(0, 0, 0, 0.5),
 rgba(0, 0, 0, 0.5)
), url('../assets/img/drip_bg.webp');
 height: 800px;
 background-size: cover;
 .overlay{
   background-image: url('../assets/img/wave_footer.png');
    height: 250px;
    background-position: right;
 }
 .list_enter_link{
   margin-top: 10%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 text-align: center;
   p.link{
     border: thick double white;
 margin: auto;
 padding: 10px 30px;
    animation: link_vibrate 2s ease-out 0s infinite normal both;
   @keyframes link_vibrate {
0% {
 transform: translate(0);
}

20% {
 transform: translate(-2px, 2px);
}

40% {
 transform: translate(-2px, -2px);
}

60% {
 transform: translate(2px, 2px);
}

80% {
 transform: translate(2px, -2px);
}

100% {
 transform: translate(0);
}
}
 a{
   color:white;
   text-decoration: none;
   font-weight: 700;
   font-family: 'chenyuluoyan';
   font-size: 30px;

 }
 }
   }
   .title_wrap{
     display: flex;
 justify-content: center;
 align-items: center;
 position: relative;
 .spark1{
   position: absolute;
   left: 9%;
 bottom: 27%;
 rotate: 22deg;
   img{
   
     scale: 0.5;
   }
 }
 .spark2{
   position: absolute;
 right:9%;
 top: 9%;
 rotate: 347deg;
   img{
   
     scale: 0.5;
   }
 }
     p.title{
     font-size:80px;
     color:white;
     font-family: 'chenyuluoyan';
   }
   }
  
 }
}
}
@media screen and (max-width: 767px)  {
  .home_page{

  
h1.pt1_title{
  height: auto;
    text-align: center;
    color: white;
    top:30%;
    padding: 30px;
    position: absolute;
    right: 0;
    left: 0;

 }
.pt1{
background-image: url('../assets/img/home_bg_xs.png');
background-position: bottom;
    background-size: cover;
    height:500px;
    position: relative;
    display: flex;
    align-items: center;
.title {
 .bean_layer{
   background-image: url('../assets/img/bean_move.gif');
   background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 500px;
    width: 370px;
img{
display: none;
}
}
}
}
.pt2{ 
margin-top:5%;
.left{
.bg {
  position: relative;
    right: 97%;
    bottom: -560px;
    z-index: 2;
    scale: 0.5;
     .bean_drop{
   position: absolute;
 z-index: 2;
}
   }
}
.right{
padding:0 30px 30px;
text-align: center;
.title{
 position: relative;
.h1 
{
h1{
  position: relative;
    z-index: 2;
    font-size: 65px;
 font-family: 'chenyuluoyan';
}
}
.underline{
  position: absolute;
    bottom: 10px;
    z-index: 1;
    left: 0;
    right: 0;
img{
  width: 100%;
}
}
}

p{
  font-family: "chenyuluoyan";
    font-size: 25px;
    line-height: 30px;
}
}
.marquee_word{
  position: absolute;
top:calc(100px + 130%);
    right: 0;
marquee{
 font-size: 100px;
 color: white;
}
}
}
.pt3{

.right{
margin-top: calc(90% + 10px);
    padding: 20px;
p.result_link{
a{
 text-decoration: none;
 color:white;
display: flex;
justify-content: end;
}  
}
} 
.bean_right{
 position: relative;
 img{
  left: calc(100% - 118%);
    right: 0;
    top: calc(100% - 50px);
    scale: 0.60;
    position: absolute;
    width: 580px;
 }
}
.scroll_img_container:nth-of-type(even) {
flex-direction: row-reverse;
}


@media screen and (max-width: 650px) {
.scroll_img_container,
.scroll_img_container:nth-of-type(even) {
 flex-direction: column;
 align-content: inherit;
}

}

.img_scroll {
opacity: 0;
transition: opacity 500ms;
}

.img_scroll.scrolled {
opacity: 1;
height: unset;
}

.scrolled.fade-in {
animation: fade-in 1s ease-in-out both;
}

.scrolled.slide-left {
animation: slide-in-left 1s ease-in-out both;
}

.scrolled.slide-right {
animation: slide-in-right 1s ease-in-out both;
}


@keyframes slide-in-left {
0% {
 -webkit-transform: translateX(-100px);
 transform: translateX(-100px);
 opacity: 0;
}
100% {
 -webkit-transform: translateX(0);
 transform: translateX(0);
 opacity: 1;
}
}

@keyframes slide-in-right {
0% {
 -webkit-transform: translateX(100px);
 transform: translateX(100px);
 opacity: 0;
}
100% {
 -webkit-transform: translateX(0);
 transform: translateX(0);
 opacity: 1;
}
}

@keyframes fade-in {
0% {
 opacity: 0;
}
100% {
 opacity: 1;
}
}


.pt3_xs{
  position: relative;
  .marquee_word{
    position: absolute;
    top: calc(100% + 15px);
    right: 0;
    z-index: 1;
marquee{
 font-size: 80px;
 color: white;
}
}
  .left_xs{
    position: absolute;
    left: -85%;
    scale: 0.55;
    top: calc(100% + -200px);
    z-index: 2;
    .bean_drop{
img{
  width: 100%;
}
    }
  }
}
.right_xs{
  text-align: end;
    position: absolute;
    right: 5%;
    top: calc(100% + 180px);
    z-index: 3;

  p{
    position: relative;
    z-index: 2;
    font-family: "chenyuluoyan";
    color: white;
    font-size: 25px;
    margin-bottom: 0;
  }
}
}
.pt3_bg{
background-image: url('../assets/img/wave_end.png');
background-position: bottom;
height: 300px;
}
.pt4{ 
flex-direction: column;
display: flex;
text-align: center;
background-position: bottom;
height: 1400px;
background-image: url('../assets/img/footer_xs.jpg');
.title{
 h1{
 font-family: 'chenyuluoyan';
 font-size:40px;
}
}
.img_row{
img{
  scale: 0.7;
}
.info1{

.content{
padding: 0 20px;
text-align: center;
display: block !important;
      
.title{
font-weight: 700;
font-size: 30px;
}
}

   }
 
   .info2{


.content{
padding: 0 20px;
text-align: center;
display: block !important;
      
.title{
font-weight: 700;
font-size: 30px;
}

}

   }

} 

}
.pt5{
 background:linear-gradient(
 rgba(0, 0, 0, 0.5),
 rgba(0, 0, 0, 0.5)
), url('../assets/img/drip_bg.webp');
height: 500px;
    background-size: cover;
    background-position: center;
 .overlay{
   background-image: url('../assets/img/wave_footer.png');
    height: 100px;
    background-position: center;
 }
 .list_enter_link{
   margin-top: 30%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 text-align: center;
   p.link{
     border: thick double white;
 margin: auto;
 padding: 10px 30px;
    animation: link_vibrate 2s ease-out 0s infinite normal both;
   @keyframes link_vibrate {
0% {
 transform: translate(0);
}

20% {
 transform: translate(-2px, 2px);
}

40% {
 transform: translate(-2px, -2px);
}

60% {
 transform: translate(2px, 2px);
}

80% {
 transform: translate(2px, -2px);
}

100% {
 transform: translate(0);
}
}
 a{
   color:white;
   text-decoration: none;
   font-weight: 700;
   font-family: 'chenyuluoyan';
   font-size: 25px;

 }
 }
   }
   .title_wrap{
     display: flex;
 justify-content: center;
 align-items: center;
 position: relative;
 .spark1{
  position: absolute;
    left:calc(100% - 101%);
    bottom: 27%;
    rotate: 22deg;
   img{
   
     scale: 0.4;
   }
 }
 .spark2{
   position: absolute;
   right:calc(100% - 101%);
    top: -3%;
 rotate: 347deg;
   img{
   
     scale: 0.2;
   }
 }
     p.title{
     font-size:40px;
     color:white;
     font-family: 'chenyuluoyan';
   }
   }
  
 }
}
}
</style>
