<template>
  <div class="sm-col-12 m-col-12 md-col-6 lg-col-4">
    <app-header></app-header>
    <div class="row">
      <div class="sm-col-12 m-col-12 md-col-6 lg-col-4">
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
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

  .slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
  }

  .slide-leave-active {
      animation: slide-out 200ms ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>