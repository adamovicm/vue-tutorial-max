<template>
  <div class="sm-col-12 md-col-6 lg-col-4 row">
    <app-stock v-for="(stock, index) in stocks" :key="index" :stock="stock">stock</app-stock>
  </div>
</template>

<script>
import Stock from './Stock.vue'
export default {
  components: {
    appStock: Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
}
</script>

<style scoped>
  /* .card-parent {
    display: flex; 
    flex-wrap: wrap;
  } */

</style>