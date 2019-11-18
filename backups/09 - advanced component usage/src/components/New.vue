<template>
  <div>
    <h3>New Quote</h3>
    <button @click="counter++">Increase</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  destroyed() {
    // eslint-disable-next-line no-console
    console.log('Destroyed!');
  },
  deactivated() {
    // eslint-disable-next-line no-console
    console.log('Deactivated!');
  },
  activated() {
    // eslint-disable-next-line no-console
    console.log('Activated!');
  }
}
</script>

<style>

</style>