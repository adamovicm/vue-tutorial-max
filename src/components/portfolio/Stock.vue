<template>
  <div class="cards">
    <h3 class="card-header">
      {{ stock.name }}
      <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
    </h3>
    <div class="card-body d-flex m-0">
      <div class="pull-left">
        <input 
          type="number"
          class="form-control"
          placeholder="Quantity"
          v-model.number="quantity"
          :class="{danger: insufficientQuantity}"
        >
      </div>
      <div class="pull-right ml-2">
        <button 
          class="btn btn-success" 
          @click="sellStock"
          :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
        >{{ insufficientQuantity ? 'Not enough Stocks' : 'Sell' }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock'
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      // console.log(order);
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
}
</script>

<style scoped>
  .cards {
      margin: 10px;
    }

  /* @media (max-width: 1000px){
    .cards {
      width: 45% !important;
    }
  }
  @media (min-width: 1001px){
    .cards {
      max-width: 33% !important;
    }
  } */
  

  /* .card-header {
    background-color: rgb(182, 241, 182);
  } */
  .danger {
    border: red 1px solid;
  }

</style>