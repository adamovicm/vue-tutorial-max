<template>
  <div class="cards">
    <h3 class="card-header">
      {{ stock.name }}
      <small>(Price: {{ stock.price }})</small>
    </h3>
    <div class="card-body d-flex m-0">
      <div class="pull-left">
        <input 
          type="number"
          class="form-control"
          placeholder="Quantity"
          v-model.number="quantity"
          :class="{danger: insufficientFunds}"
        >
      </div>
      <div class="pull-right ml-2">
        <button 
          class="btn btn-success" 
          @click="buyStock"
          :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)"
        >{{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this. stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      // console.log(order);
      this.$store.dispatch('buyStock', order);
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
  

  .card-header {
    background-color: rgb(182, 241, 182);
  }

  .danger {
    border: red 1px solid;
  }

</style>