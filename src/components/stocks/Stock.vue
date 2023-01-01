<template>
    <div class="col-sm-6 col-md-4">
        <div class="card text-bg-success mb-3">
            <div class="card-header">
                {{stock.name}}
                <small>(Price:{{stock.price}})</small>
            </div>
            <div class="card-body">
                <div class="float-start">
                    <input type='number' class="form-control" placeholder="Quantity" v-model="quantity" :class="{danger:insufficientFunds}" />
                </div>
                <div class="float-end">
                    <button class="btn btn-secondary" @click="buyStock" :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(parseFloat(quantity))">{{insufficientFunds?'Insufficient Funds':'Buy'}}</button>
                    <!-- <button class="btn btn-secondary" @click="buyStock" :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(parseFloat(quantity))">{{insufficientFunds?'Insufficient Funds':'Buy'}}</button> -->
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.danger{
    border:1px solid red;
}

</style>

<script>
export default{
    props:['stock','funds'],
    data(){
        return{
            fund: this.funds,
            quantity: 0
        }
    },
    computed:{

        insufficientFunds(){
            return this.quantity * this.stock.price > this.funds;
        }
    },
    methods:{
        buyStock(){
            const order={
                stockId:this.stock.id,
                stockPrice:this.stock.price,
                quantity:this.quantity
            };
            console.log(order);
            this.stock.quantity+=parseFloat(this.quantity);
            this.fund-=this.quantity*this.stock.price;
            this.$emit('buyStocks',this.fund);
            this.quantity=0;
        }
    }
}
</script>