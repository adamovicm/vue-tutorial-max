<template>
  <div class="container">
    <h1>Filters & Mixins</h1>
    <input v-model="filterText">
    <ul>
      <li v-for="(fruit, index) in filteredFruits" :key="index">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
import { fruitMixin } from './fruitMixin';

export default {
  mixins: [fruitMixin],
  created() {
    console.log('Inside List Created Hook');
  }
}
</script>

<style>

</style>