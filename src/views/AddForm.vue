<template>

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
        <b-row>
          <label>Wie is of zijn de contactpersonen binnen UHasselt?</label>
          <md-field>
          <md-input v-model="contactpersonenUHasselt"></md-input>
          </md-field>
        </b-row>
        <b-row>
          <label>Project titel:</label>
          <md-field>
          <md-input v-model="Typeagreement"></md-input>
          </md-field>
        </b-row>
        <b-row>
          <label>Korte omschrijving:</label>
          <md-field>
          <md-input v-model="Begindate"></md-input>
          </md-field>
        </b-row>
        <b-row>
          <label>Type overeenkomst:</label>
          <md-field>
          <md-input v-model="Enddate"></md-input>
          </md-field>
        </b-row>
        <b-row>
          <label>Begindatum:</label>
          <md-field>
          <md-input v-model="Nodatereason"></md-input>
          </md-field>
        </b-row>
        <md-button class="md-raised md-primary" @click="setDone('third')">Done</md-button>
      </md-step>
    </md-steppers>
  </div>
</b-container>
</template>

<script>
  export default {
    name: 'Addform',
  data() {
    return{
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