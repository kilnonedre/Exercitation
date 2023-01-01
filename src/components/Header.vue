<template>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
          <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
      </ul>
      <ul class="navbar-nav  navbar-right mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Save & Load
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" @click="save">Save</a></li>
            <li><a class="dropdown-item" @click="load">Load</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="endDay">End Day</a>
        </li>
      </ul>
      <strong class="navbar-text navbar-right">Funds:{{ funds | currency }}</strong>
    </div>
  </div>
</nav>
</template>

<script>
import axios from 'axios';

export default{
  props:['stocks','funds'],
  computed:{
    },
    methods:{
      endDay(){
        this.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
        });
      },
      save(){
        console.log(this.stocks)
        this.stocks.forEach((stock)=>{
          axios.put('http://localhost:3000/stocksSave/'+stock.id, {
            "name": stock.name,
            "price": stock.price,
            "quantity": stock.quantity
        })
        });
        axios.put('http://localhost:3000/fundsSave/1',{
          "funds":this.funds})
      },
      load(){
        this.$emit('load');
      }
      
    }
}

</script>

<style scoped>
.navbar-nav{
   --bs-nav-link-padding-y: 0rem;
}

</style>