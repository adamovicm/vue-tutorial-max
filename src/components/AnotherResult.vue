<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of Clicks: {{ stringCounter }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from '../store/types';
export default {
  computed: {
    ...mapGetters( // spread operator (...) tells JS to pull all objects 
                    // and properties and create separate key-value properties for each of them
    // [
    //   'doubleCounter',
    //   'stringCounter'
    // ]
    {
      doubleCounter: types.DOUBLE_COUNTER,
      stringCounter: types.CLICK_COUNTER
    }
    )
  }
};
</script>