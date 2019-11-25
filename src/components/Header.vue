<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <!-- <router-link to="/portfolio" tag="li" active-class="active"><a class="nav-link" active-class="active">Portfolio</a></router-link> -->
        <!-- <router-link to="/portfolio" class="nav-link nav-item" active-class="active">Portfolio</router-link>
        <router-link to="/stocks" class="nav-link" active-class="active">Stocks</router-link> -->
        <li class="nav-item">
          <router-link to="/portfolio" class="nav-link" active-class="active">Portfolio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/stocks" class="nav-link" active-class="active">Stocks</router-link>
        </li>
      </ul>
      
      <ul class="nav navbar-nav navbar-right">
        <li class="nav-item">
          <a href="#" @click="endDay" class="nav-link">End Day</a>
        </li>
        <!-- <li class="nav-item dropdown">
          <a 
            class="nav-link dropdown-toggle" 
            href="#" 
            id="navbarDropdown" 
            role="button" 
            data-toggle="dropdown" 
            aria-haspopup="true" 
            aria-expanded="false">
            Save & Load
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Save Data</a>
            <a class="dropdown-item" href="#">Load Data</a>
          </div>
        </li> -->
        <li class="nav-item"><a href="#" class="nav-link" @click="saveData">Save Data</a></li>
        <li class="nav-item"><a href="#" class="nav-link" @click="loadData">Load Data</a></li>
      </ul>
      <strong class="navbar-text nabvbar-right">Funds: {{ funds | currency }}</strong>
    </div>
  </nav>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  // data() {
  //   return {
  //     isDropdownOpen: false
  //   }
  // },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put('data.json', data);
    },
    loadData() {
      this.fetchData();
    }
  }
}
</script>

<style>
  .active {
    background-color: #a1a1a1;
  }
</style>>