<template>
    <div class="col-sm-6 col-md-4" v-show="stock.quantity>0">
        <div class="card text-bg-info mb-3">
            <div class="card-header">
                {{stock.name}}
                <small>(Price:{{stock.price}}|Quantity:{{ stock.quantity }})</small>
            </div>
            <div class="card-body">
                <div class="float-start">
                    <input type='number' class="form-control" placeholder="Quantity" v-model="quantity" />
                </div>
                <div class="float-end">
                    <button class="btn btn-secondary" @click="sellStock" :disabled="insufficientQuantity||quantity <= 0 || !Number.isInteger(parseFloat(quantity))">{{insufficientQuantity?'Not Enough':'Sell'}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props:['stock'],
    data(){
        return{
            quantity: 0
        }
    },
    computed:{
        insufficientQuantity(){
            return parseFloat(this.quantity) > parseFloat(this.stock.quantity);
        }
    },
    methods:{
        sellStock(){
            const order={
                stockId:this.stock.id,
                stockPrice:this.stock.price,
                quantity:this.quantity
            };
            this.stock.quantity-=this.quantity;
            // this.placeSellOrder(order);
            this.$emit('sellStocks',this.quantity*this.stock.price);

            this.quantity=0;
        }
    }
}
</script>