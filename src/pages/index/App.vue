<template>
  <div id="app">
    <h2>HELLO WELCOME TO MILIFE</h2>
    <router-link to="/home">go to home</router-link>
    <router-link to="/vheader">go to header</router-link>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  },
  methods:{
    getBooks:function(){}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
