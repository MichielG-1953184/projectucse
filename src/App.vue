<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/login">Login</router-link> |
      <router-link to="/overview">Overview</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style>
.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

#searchBalkForm {
  margin:auto;
  margin-left:6px;
}

.md-primary {
    background-color: #2b2e33 !important; 
}

.centerFromHeader {
  display: flex;
  width: 50%;
  margin: auto;
  /* margin-top:15px;  */
}
.iconWithText {
  text-align: center;
  width: 100px;
  margin-top: 15px;
}

.iconWithText md-icon {
  display: block;
  margin: auto;
  text-align: center;
}
.filterinput { 
  margin-left:5px;
  margin-right:2px;
 }
 /* .datepicker{
  margin-left: 10px;
} */

select{
  margin-right: 75px !important; 
}

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
    accounts: [
      {
        email:"michiel.guilliams@student.uhasselt.be",
        password:"michiel",
        dpo:false
      },
      {
        email:"steffen.lenaerts@student.uhasselt.be",
        password:"michiel",
        dpo:false
      },
      {
        email:"dpo@uhasselt.be",
        password:"dpo",
        dpo:true 
      },
    ],
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
          id: 1,
          projectname: "5G",
          description: "Onderzoek rondom 5G",
          typeAgreement: "test",
          beginDate: "12/12/2020",
          endDate: "23/7/2021",
          noDateReason: "",
          teamMembers: [
            {
              email: "michiel.guilliams@student.uhasselt.be",
              write: true,
            },
            {
              email: "steffen.lenaerts@student.uhasselt.be",
              write: true,
            },
          ],
          startDate: "15/11/20",
          endDate: "28/05/2021",
          status: "100",
          answers: [
            {
              id: 1,
              question: "testvraag?",
              answer: "testantwoord",
              type: "text",
            },
            {
              id: 2,
              question: "Zijn er externe personen betrokken?",
              answer: true,
              type: "checkbox",
            },
          ],
          remarks: [
            {
              vraag1: [
                {
                  message: [
                    {
                      text: null,
                      date: null,
                      sender: null,
                    },
                  ],
                },
              ],
            },
            {
              vraag2: [
                {
                  message: [
                    {
                      text: null,
                      date: null,
                      sender: null,
                    },
                  ],
                }],
            }],
            }
          ]
        },
      ],
    }
  }
}
</script>