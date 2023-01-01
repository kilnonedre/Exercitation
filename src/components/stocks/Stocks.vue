<template>
    <div class="row">
        <app-stock v-for="stock in stocks" :stock="stock" :key="stocks.id" :funds="funds" @buyStocks="buyStocks"></app-stock>
    </div>
</template>

<script>
    import Stock from './Stock.vue';

 export default{
    props:['stocks','funds'],
    components:{
        appStock: Stock
    },
    methods:{
        buyStocks(data){
            this.$emit('updataFund',data);
        }
    }
 }

</script>