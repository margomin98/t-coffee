<template>

  <div>
    <!-- City list dropdown -->
    <div class="city_list">
      <div class="title_wrap">
      <h1 class="title">
        查看看在全台灣的咖啡廳
      </h1>
      <div class="underline">
  <img src="../assets/img/underline.png" alt="title underline">
</div>
</div>
    <select v-model="selectedCity">
        <option value="">All</option>
        <option v-for="city in uniqueCities" :key="city" :value="city">{{ city }}</option>
      </select>
    </div>
 
 
    <!-- Display filtered items -->
    <div class="list_result">
      <!-- 根據paginatedItems的設定來顯示一頁的店數量 -->
      <div class="grid">
      <div v-for="item in paginatedItems" class='col' :key="item.id">
        <div>
        <p>Name : {{ item.name }}</p>
        <p>Website : <a :href="item.url" target="_blank">{{ item.url }}</a></p>
        <p>Address : {{ item.address }}</p>
        <p class="city">City : {{ item.city }}</p>
      </div>
    </div>
 </div>
 </div>
    <!-- Pagination -->

  <div class="pagination">
    <div class="numbers">
      <button @click="previousPage" :disabled="currentPage === 1">«</button>
      <span v-for="pageNumber in activePageNum" :key="pageNumber">
        <template v-if="pageNumber === '...'">...</template>
        <button v-else @click="goToPage(pageNumber)"  :disabled="currentPage === pageNumber">{{ pageNumber }}</button>
            </span>
      <button @click="nextPage" :disabled="currentPage === totalPages">»</button>
    </div>
    <div class="totalresult">
      <span>總共{{ getItemsCount(selectedCity) }}間咖啡廳</span>
    </div>
  </div>
  </div>
 </template>
 
 
 <script>
 import axios from 'axios';
 
 
 export default {
  data() {
    return {
      items: [], // 獲取的全部資料在這
      selectedCity: '', // 存篩選過後的城市
      currentPage: 1, // 存儲當前的頁數
      pageSize: 10, // 每页显示的数量
    };
  },
  computed: {
    uniqueCities() {
      //把篩選出的內容利用new監理處新的分類
      //new Set(...)是為了移除重複的內容
      //(item => item.city)，利用map語法挑選出一個只含有item.city的新陣列
      return [...new Set(this.items.map(item => item.city))];
    },
    filteredItems() {
      // 依據选中的城市过滤项目，移除URL为空
      //filter是建立一個新的數組，只會回傳我設定的兩個條件
      //filter(item => item.url) 是利用filter篩選出只有符合我設定或有url內容的店,就是只有url可以保留
      if (this.selectedCity === '') {
        return this.items.filter(item => item.url);
      } else {
        return this.items.filter(item => item.city === this.selectedCity && item.url);
      }
      //item=>item.city的意思是保留含有url的城市&被選擇的城市
    },
    paginatedItems() {
      // 製作分頁的效果
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.filteredItems.slice(startIndex, endIndex);
      //slice取出頁面起始數字+最後一頁面數字
    },
    totalPages() {
      // 用該城市所有的店舖總數除10（一頁要顯示的10間店舖），最後的答案就是這個分頁會有幾頁
      return Math.ceil(this.filteredItems.length / this.pageSize);
    },
    //生成我要的頁數數字範圍
    activePageNum() {
    const maxPage = 1;
    const currentPage = this.currentPage;
    const totalPages = this.totalPages;
 
 
    if (totalPages <= maxPage * 5 + 1) {
 
 
      //array.from是建立新的陣列
      //length：totalpages就是我要傳回去的參數
      //（_,i)是分別兩個的參數
      // _代表的是undefined
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      let viewPages = [];
 
 
      if (currentPage <= maxPage) {
        //帶入想要的參數
        //(_, i) _是為了接受錯誤的資料
        //(_, i) i是為了接受成功的資料
        //{ length: maxPage * 5 + 1 } 參數會顯示成為頁數的數字
        //如果目前頁數小於總頁數，viewpages就會傳回這個參數，就是最大頁數的長度乘*2+1{ length: maxPage * 5 + 1 }來增加一頁數
        viewPages = Array.from({ length: maxPage * 5 + 1 }, (_, i) => i + 1);
      }
      //不然就是當目前也是大於總頁數-最大頁數3.viewpages就會傳回這個參數，就是最大頁數的長度乘*2+1{ length: maxPage * 5 + 1 }，總頁數-最大頁數*2+i（1）
      else if
      (currentPage >= totalPages - maxPage)
      {
        viewPages = Array.from({ length: maxPage * 5 + 1 }, (_, i) => totalPages - maxPage * 5 + i);
      }
      else
      //如上面的，但是這個是目前頁面-最大頁面 + （i）
       {
        viewPages = Array.from({ length: maxPage * 5 + 1 }, (_, i) => currentPage - maxPage + i);
      }
      return viewPages;
    }
  },
  //顯示總共有幾間咖啡廳
  getItemsCount() {
    return (city) => {
      if (city) {
        const count = this.filteredItems.filter(item => item.city === city).length;
        return count;
      } else {
        return this.filteredItems.length;
      }
    };
  },
  },
  mounted() {
    // Fetches the items data from the API when the component is mounted
    this.fetchItems();
  },
  methods: {
    fetchItems() {
      // Fetches the items data from the API using axios
      axios
        .get('https://cafenomad.tw/api/v1.2/cafes')
        .then(response => {
          this.items = response.data;
        })
        .catch(error => {
          console.error('Error:', error);
        });
    },
    selectCity(city) {
 //this.selectedCity會跑出你選擇的城市
  if (city !== this.selectedCity) {
    this.selectedCity = city;
    this.currentPage = 1;
  }
}
,
    previousPage() {
      // Decrements the current page number if not on the first page
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      // Increments the current page number if not on the last page
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(pageNumber) {
    this.currentPage = pageNumber;
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
    }, 100);
  },
  // ...
},
  watch: {
    //如果selectedcity的數值有改變的話，就重新設定頁面回到第一頁
    selectedCity() {
      this.currentPage = 1; // Reset the current page to 1
    },
  },
 };
 </script>
 
 
 
 
 <style lang="scss" scoped>

@media screen and (min-width: 1200px){
  .city_list {
  font-family: 'Source Serif 4', serif;
  display: flex;
    margin-bottom: 5%;
    flex-direction: column;
    text-align: center;
    align-items: center;
    select{
      text-transform: capitalize;
      border: none;
    width: 200px;
    height: 30px;
    option{
      
    text-transform: capitalize;
    }
    }    .title_wrap{

.underline{
  position: absolute;
    right: 0;
    left: 0;
    top: 25%;
    z-index: 1;
}
 h1.title{
   position: relative;
   font-family: "chenyuluoyan";
 font-size:80px;
margin-bottom: 40px;
 z-index: 2;
 }
}
 }
 
 .list_result{
 .grid{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  grid-gap: 20px;
  padding: 0 5% 5%;
  overflow: hidden;
    
 }
  .col{
    border: 1px solid black;
    padding: 20px 20px 15px;
    word-wrap: break-word;
  overflow: hidden; 
  background: #7c65411c;
    a{
      text-decoration: none;
    color: black;
    &:hover{
      color:#7c4c00;
      transform: ease-out 1s;
    }
    }
 .city{
  text-transform:capitalize;
 }
      p{
        font-family: 'Source Serif 4', serif;
        margin-bottom: 5px;
        overflow: hidden;
  text-overflow: ellipsis;
       }
    }
 }

 .pagination{
  display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 5%;
    div{
      display: flex;
    justify-content: center;
    }
    .totalresult{
margin-top: 20px;
font-family: 'Source Serif 4', serif;
    }
    button,span{
      margin:0 3px
    }
    button{
      border: none;
      background: none;
    }
    span{
      button{
        background-color: #bfa082;
    height: 30px;
    width: 30px;
    display: flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    color: white;
      }
      :disabled{
        background-color: #765738;
      }
    }
 }
}
@media screen and (min-width: 768px) and (max-width: 979px) {
  .city_list {
  font-family: 'Source Serif 4', serif;
  display: flex;
    margin-bottom: 5%;
    flex-direction: column;
    text-align: center;
    align-items: center;
    select{
      text-transform: capitalize;
      border: none;
    width: 200px;
    height: 30px;
    option{
      
    text-transform: capitalize;
    }
    }
    .title_wrap{

.underline{
  position: absolute;
    right: 0;
    left: 0;
    top: 15%;
    z-index: 1;
}
 h1.title{
   position: relative;
   font-family: "chenyuluoyan";
 font-size:60px;
 margin: 40px 0 20px;
 z-index: 2;
 }
}
 }
 
 .list_result{
 .grid{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  padding: 0 5% 5%;
  overflow: hidden;
    
 }
  .col{
    background: #7c65411c;
    border: 1px solid black;
    padding: 20px 20px 15px;
    word-wrap: break-word;
  overflow: hidden; 
margin:unset;
    a{
      text-decoration: none;
    color: black;
    }
 .city{
  text-transform:capitalize;
 }
      p{
        font-family: 'Source Serif 4', serif;
        margin-bottom: 5px;
        overflow: hidden;
  text-overflow: ellipsis;
       }
    }
 }

 .pagination{
  display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 5%;
    div{
      display: flex;
    justify-content: center;
    }
    .totalresult{
margin-top: 20px;
font-family: 'Source Serif 4', serif;
    }
    button,span{
      margin:0 3px
    }
    button{
      border: none;
      background: none;
    }
    span{
      button{
        background-color: #bfa082;
    height: 30px;
    width: 30px;
    display: flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    color: white;
      }
      :disabled{
        background-color: #765738;
      }
    }
 }
}
@media screen and (max-width: 767px) {
  .city_list {
  font-family: 'Source Serif 4', serif;
  display: flex;
    margin-bottom: 5%;
    flex-direction: column;
    text-align: center;
    align-items: center;
    select{
      text-transform: capitalize;
      border: none;
    width: 200px;
    height: 30px;
    option{
    text-transform: capitalize;
    }
    }
    .title_wrap{

   .underline{
    position: absolute;
    right: 35%;
    left: 0;
    scale: 0.6;
    top: 12%;
    z-index: 1;
   }
    h1.title{
      position: relative;
      font-family: "chenyuluoyan";
    font-size: 40px;
    margin: 40px 0 20px;
    z-index: 2;
    }
   }
 }
 
 .list_result{
 .grid{
  padding: 0 5% 5%;
  overflow: hidden;
    
 }
  .col{
    border: 1px solid black;
    background: #7c65411c;
    padding: 20px 20px 15px;
    word-wrap: break-word;
  overflow: hidden; 
  margin:20px 0;
    a{
      text-decoration: none;
    color: black;
    }
 .city{
  text-transform:capitalize;
 }
      p{
        font-family: 'Source Serif 4', serif;
        margin-bottom: 5px;
        overflow: hidden;
  text-overflow: ellipsis;
       }
    }
 }

 .pagination{
  display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 5%;
    div{
      display: flex;
    justify-content: center;
    }
    .totalresult{
margin-top: 20px;
font-family: 'Source Serif 4', serif;
    }
    button,span{
      margin:0 3px
    }
    button{
      border: none;
      background: none;
    }
    span{
      button{
        background-color: #bfa082;
    height: 30px;
    width: 30px;
    display: flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    color: white;
      }
      :disabled{
        background-color: #765738;
      }
    }
 }
}
 </style>
 
 