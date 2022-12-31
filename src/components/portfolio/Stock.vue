<template>
    <div class="col-sm-6 col-md-4">
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
import { mapActions } from 'vuex';
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
        ...mapActions({
            placeSellOrder : 'sellStock'
        }),
        sellStock(){
            const order={
                stockId:this.stock.id,
                stockPrice:this.stock.price,
                quantity:this.quantity
            };
            this.placeSellOrder(order);
            this.quantity=0;
        }
    }
}
</script>