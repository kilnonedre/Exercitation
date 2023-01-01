<template>
    <div class="row">
        <app-stock v-for="stock in stocks" :stock="stock" :key="stocks.id" @sellStocks="sellStocks"></app-stock>
    </div>
</template>

<script>
import Stock from './Stock.vue'
export default{
   props:['stocks','funds'],
   components:{
    appStock:Stock
   },
   methods:{
        sellStocks(data){
            this.$emit('updataFund',this.funds+data);
        }
    }
}
</script>