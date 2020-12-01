<template>
  <div>
    <md-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
         <img src="../assets/UHasselt-liggend.jpg" style="width:20%">
        </div>

 
        <div class="md-toolbar-section-end">
          <md-menu md-size="auto" md-align-trigger>
            <div class= "iconWithText">
                <md-badge :md-content="newMessages">
                  
                    <md-button class="md-icon-button" md-menu-trigger>
                        <md-icon>notifications</md-icon>
                    </md-button>
                    
                  
                </md-badge>
                <p>Notifications</p>
                </div>
                
                <md-menu-content>
                    <md-menu-item>Notificatie 1</md-menu-item>
                    <md-menu-item>Notificatie 2</md-menu-item>
                    <md-menu-item>Notificatie 3</md-menu-item>
              </md-menu-content>
            </md-menu>

          <div class= "iconWithText">
            <md-button class="md-icon-button">
              <md-icon>login</md-icon>
            </md-button>
            <p> Log out </p>
          </div>
        </div>
      </div>
    </md-toolbar>
    <b-container>
    <div>
      <md-steppers :md-active-step.sync="active" md-linear>
        <md-step id="first" md-label="Team" md-description="Optional" :md-done.sync="first">
          <b-row>
            <b-col>
              <md-autocomplete v-model="searchNameCriteria" v-on:md-selected="addToList" :md-options="accounts" md-layout="box" md-dense>
                  <label>Search</label>
              </md-autocomplete>
            </b-col>
            <b-col>
              <label>Team members</label>
              <b-list-group style="width:100%">
                <b-list-group-item v-for="member in teamMembers" :key="member">{{member}}</b-list-group-item>
              </b-list-group>
            </b-col>
          </b-row>
          <md-button class="md-raised md-primary" @click="setDone('first', 'second')">Continue</md-button>
        </md-step>

        <md-step id="second" md-label="Project Information" :md-error="secondStepError" :md-done.sync="second">
          <b-row>
            <label>Projectnaam:</label>
            <md-field>
            <md-input v-model="Projectnaam"></md-input>
            </md-field>
          </b-row>
          <b-row>
            <label>Projectnummer:</label>
            <md-field>
            <md-input v-model="Projectnummer"></md-input>
            </md-field>
          </b-row>
          <b-row>
            <label>Description:</label>
            <md-field>
            <md-input v-model="Description"></md-input>
            </md-field>
          </b-row>
          <b-row>
            <label>Type agreement:</label>
            <md-field>
            <md-input v-model="Typeagreement"></md-input>
            </md-field>
          </b-row>
          <b-row>
            <label>Begin date:</label>
            <md-field>
            <md-input v-model="Begindate"></md-input>
            </md-field>
          </b-row>
          <b-row>
            <label>End date:</label>
            <md-field>
            <md-input v-model="Enddate"></md-input>
            </md-field>
          </b-row>
          <b-row>
            <label>No date reason:</label>
            <md-field>
            <md-input v-model="Nodatereason"></md-input>
            </md-field>
          </b-row>
          <md-button class="md-raised md-primary" @click="setDone('second', 'third')">Continue</md-button>
          <md-button class="md-raised md-primary" @click="setError()">Set error!</md-button>
        </md-step>

        <md-step id="third" md-label="Questions" :md-done.sync="third">
          <div v-for="questionPerTitle in questionsPerTitle" :key="questionPerTitle.title">
            <h4>{{questionPerTitle.title}}</h4>
            <b-row v-for="q in questionPerTitle.questions" :key="q.question">
              
              <div class="question">

              <label class="questionLabel">{{q.question}}</label>
              <br>
                <md-field v-if="q.type=='text'">
                <md-input class="addFormInput" v-model="answers[q.id]"></md-input>
                </md-field>
                <div v-else-if="q.type=='checkboxes'" >
                  <md-checkbox v-for="data in q.data" :key="data" :value=data v-model="$data[q.id]" >
                    {{data}}
                  </md-checkbox>
                </div>
                <div v-else-if="q.type=='radiobuttons'" >
                  <div style="text-align:left; margin-top:14px;">
                      <md-radio v-for="data in q.data" :key="data" :value=data v-model="answers[q.id]">
                        {{data}}
                      </md-radio>
                  </div>
                
                </div>
                <md-field v-else-if="q.type=='textarea'">
                      <md-textarea v-model="answers[q.id]"></md-textarea>
                </md-field>
              </div>
          </b-row>
          </div>
          <md-button class="md-raised md-primary" @click="setDone('third')">Done</md-button>
        </md-step>
      </md-steppers>
    </div>
    </b-container>
  </div>
  
</template>

<script>
  export default {
    name: 'Addform',
  data() {
    return{
      checkbox2:[],
      checkbox4:[],
      checkbox6:[],
      checkbox7:[],
      checkbox8:[],
      answers:[],

      questionsPerTitle:this.$parent.questionsPerTitle,
      Description:"",
      Typeagreement:"",
      Begindate:"",
      Enddate:"",
      Nodatereason:"",
      searchNameCriteria:"",
      accounts: this.$parent.accounts.map(accounts=>(accounts.email)).filter(email => email!=('dpo@uhasselt.be')),
      teamMembers: [],
      active: 'first',
      first: false,
      second: false,
      third: false,
      secondStepError: null
    }},
    methods: {
      setDone (id, index) {
        this[id] = true

        this.secondStepError = null

        if (index) {
          this.active = index
        }
      },
      setError () {
        this.secondStepError = 'This is an error!'
      },
      addToList: function(event){
        console.log(event)
        this.teamMembers.push(event)

      }
    }
  }
</script>

<style>
.container{
  margin:auto;
  margin-top: 15px !important;
}
.md-checkbox{
  display:flex !important;
  text-align: left !important;
}

.addFormInput{
  position:absolute;
  border:none;
}
/* .md-field label{top:0 !important;} */
.question{
  width:100%;
}
.questionLabel{
  font-size: 20px !important;
}
.question label{
  float:left  !important;
}
/* .md-radio{
  margin:14px;
} */

.question div{
  /* margin-top:14px; */
  text-align:left;
}
</style>