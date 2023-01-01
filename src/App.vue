<template>
  <div class="container">
    <app-header :stocks="stocks" :funds="funds" @load='load'></app-header>
    <transition name="slide" mode="out-in">
    <router-view :stocks="stocks" :funds="funds" @updataFund="updataFund"></router-view>

    </transition>

  </div>
</template>

<script>
import Header from './components/Header.vue';
import axios from 'axios';



export default {
  data(){
    return {
      funds: 0,
      stocks: []
    }
  },
  components:{
    appHeader: Header
  },
  methods:{
    updataFund(data){
      this.funds=data;
    },
    test(){
      axios.get('http://localhost:3000/stocks')
        .then((response)=> {
          this.stocks=response.data;
        }),
      axios.get('http://localhost:3000/funds')
        .then((response)=> {
          this.funds=response.data[0].funds;
        })
      },
      load(){
        axios.get('http://localhost:3000/stocksSave')
        .then((response)=> {
          this.stocks=response.data;
        }),
      axios.get('http://localhost:3000/fundsSave')
        .then((response)=> {
          this.funds=response.data[0].funds;
        })
      }
  },
  created(){
    this.test();
  }
}
</script>

<style>
.slide-enter-active{
  animation: slide-in 200ms ease-out forwards;
}
.slide-leave-active{
  animation: slide-out 200ms ease-out forwards;
}
@keyframes slide-in{
  from{transform: translateY(-30px); opacity: 0;}
  to{transform: translateY(0); opacity: 1;}
}
@keyframes slide-out{
  from{transform: translateY(0); opacity: 1;}
  to{transform: translateY(-30px); opacity: 0;}
}
</style>
