<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/login">Login</router-link> |
      <router-link to="/overview">Overview</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>


<script>
export default {
  name: 'App',
  data() { return{
    selectedCountry: null,
    forms: [
      { 
      id: 1, 
      projectname: '5G', 
      startDate: '15/11/20', 
      endDate: '28/05/2021', 
      status: '100',
      answers:[
        {
        vraag1:null,
        vraag2:null,
        }
      ],
      remarks:[
        {
        vraag1:[{
          message:[{
            text:null,
            date:null,
            sender:null
          }]
        }],
        vraag2:[{
          message:[{
            text:null,
            date:null,
            sender:null
          }]
        }],
        }
      ]
      },
    ],
  }
    
  }
}
</script>