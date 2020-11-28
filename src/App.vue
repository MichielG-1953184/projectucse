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
//import Header from './views/Header.vue'

export default {
  name: 'App',
  data() { return{
    selectedCountry: null,
    forms: [
      { 
      id: 1, 
      projectname: '5G', 
      description: 'Onderzoek rondom 5G',
      typeAgreement:"test",
      beginDate:"12/12/2020",
      endDate:"23/7/2021",
      noDateReason:"",
      teamMembers:[
        {
          email: "michiel.guilliams@student.uhasselt.be",
          write: true
        },
        {
          email: "steffen.lenaerts@student.uhasselt.be",
          write: true
        }
      ],
      startDate: '15/11/20', 
      endDate: '28/05/2021', 
      status: '100',
      answers:[
        {
          id:1,
          question:"testvraag?",
          answer: "testantwoord",
          type: "text"
        },
        {
          id:2,
          question:"Zijn er externe personen betrokken?",
          answer: true,
          type: "checkbox"
        },
      ],
      remarks:[
        {vraag1:[{
          message:[{
            text:null,
            date:null,
            sender:null
          }]
        }]},
        {vraag2:[{
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