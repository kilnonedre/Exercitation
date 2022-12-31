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
            <li><a class="dropdown-item" href="#">Save</a></li>
            <li><a class="dropdown-item" href="#">Load</a></li>
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
  import {mapActions} from 'vuex';

export default{
  computed:{
        funds(){
            return this.$store.getters.funds;
        }
    },
    methods:{
      ...mapActions([
        'randomizeStocks'
      ]),
      endDay(){
        this.randomizeStocks();
      }
    }
}

</script>

<style scoped>
.navbar-nav{
   --bs-nav-link-padding-y: 0rem;
}

</style>