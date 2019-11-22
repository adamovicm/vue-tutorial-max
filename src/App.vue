<template>
  <div class="sm-col-12 m-col-12 md-col-6 lg-col-4">
    <app-header></app-header>
    <div class="row">
      <div class="sm-col-12 m-col-12 md-col-6 lg-col-4">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  components: {
    appHeader: Header
  },
  created() {
    this.$store.dispatch('initStocks');
  }
}
</script>

<style>
  body {
    padding: 30px;
  }
</style>