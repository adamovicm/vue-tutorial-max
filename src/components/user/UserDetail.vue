<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{ $route.params.id }}</p>
    <!-- <router-link 
      class="btn btn-primary" 
      tag="button" 
      :to="'/user/' + $route.params.id + '/edit'"
    >Edit User</router-link> -->
    <router-link 
      class="btn btn-primary" 
      tag="button" 
      :to="link"
    >Edit User</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: { 
        name: 'userEdit', 
        params: { id: this.$route.params.id }, 
        query: { locale: 'en', q: 100 },
        hash: '#data'  
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(); // here we can add a condition to check if the user can have access 
            //to the page so that we can abort, redirect or let him continue
  }
}
</script>