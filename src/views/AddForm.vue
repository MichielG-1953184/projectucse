<template>
  <div>
    <md-toolbar class="md-primary">
      <div class="md-toolbar-row">
         <div class="md-toolbar-section-start">
            <img src="../assets/UHasselt-liggend.jpg" style="width: 20%">
            <div class="iconWithText">
              <a :href="'#/overview'">
              <md-button class="md-icon-button">
                <md-icon>home</md-icon>
               
              </md-button>
               <p>Home</p>
              </a>
            </div>
        </div>


 
        <div class="md-toolbar-section-end">
          <md-menu md-size="auto" md-align-trigger>
            <div class= "iconWithText">
                <md-badge :md-content="$parent.newMessagesResearcher">
                  
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
          <b-col><label>Team members</label></b-col>
        </b-row>
        <b-row>
          <b-col cols="5">
            <b-form-select v-model="selected" :options="accounts"></b-form-select>
          </b-col>
          <b-col cols="1">
            <md-button class="md-icon-button" v-on:click="addToList">
              <md-icon>add_circle</md-icon>
            </md-button>
          </b-col>
          <b-col cols="6">
            <b-list-group style="width:100%">
              <b-list-group-item v-for="m in teamMembers" :key="m.member">
                <b-row>
                  <b-col>{{m.email}}</b-col>
                  <b-col>
                    <md-checkbox class="writeCheckbox" v-model="m.write" >
                    write
                    </md-checkbox>
                  </b-col>
                  <b-col>
                    <md-button class="md-icon-button" v-on:click="deleteFromList(m.email)">
                      <md-icon>remove_circle</md-icon>
                    </md-button>
                  </b-col>
                </b-row>
              </b-list-group-item>
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
          <div class = "question">
          <label>Type agreement:</label>
          <br>
          <md-checkbox value="Project" v-model="Typeagreement" >
                  Project
          </md-checkbox>
          <md-checkbox value="MTA (Material Transfer Agreement)" v-model="Typeagreement" >
                  MTA (Material Transfer Agreement)
          </md-checkbox>
          <md-checkbox value="CTA (Clinical Trial Agreement)" v-model="Typeagreement" >
                  CTA (Clinical Trial Agreement)
          </md-checkbox>
          <md-checkbox value="DSA (Data Sharing Agreement)" v-model="Typeagreement" >
                  DSA (Data Sharing Agreement)
          </md-checkbox>
          <md-checkbox value="Raamovereenkomst" v-model="Typeagreement" >
                  Raamovereenkomst
          </md-checkbox>
          <md-checkbox value="Ander contract" v-model="Typeagreement" >
                  Ander contract
          </md-checkbox>
          <md-checkbox value="Niet van toepassing" v-model="Typeagreement" >
                  Niet van toepassing
          </md-checkbox>
          </div>
        </b-row>
        <b-row>
          <div class="datepicker">
            <label>Begin date:</label>
            <input type="date" v-model="Begindate"/>
          </div>
        </b-row>
        <b-row>
          <div class="datepicker">
            <label>End date:</label>
            <input type="date" v-model="Enddate"/>
            
          </div>
          
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
                <md-input class="addFormInput" v-model="q.answer"></md-input>
                </md-field>
                <div v-else-if="q.type=='checkboxes'" >
                  <md-checkbox v-for="data in q.data" :key="data" :value=data v-model="q.answer" >
                    {{data}}
                  </md-checkbox>
                </div>
                <div v-else-if="q.type=='radiobuttons'" >
                  <div style="text-align:left; margin-top:14px;">
                      <md-radio v-for="data in q.data" :key="data" :value=data v-model="q.answer">
                        {{data}}
                      </md-radio>
                  </div>
                
                </div>
                <md-field v-else-if="q.type=='textarea'">
                      <md-textarea v-model="q.answer"></md-textarea>
                </md-field>
              </div>
          </b-row>
          </div>
          <md-button class="md-raised md-primary" @click="save()">Done</md-button>
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
      questionsPerTitle:this.$parent.questionsPerTitle,
      Projectnaam:"",
      Projectnummer:"",
      Description:"",
      Typeagreement:[],
      Begindate:"",
      Enddate:"",
      Nodatereason:"",
      selected:"",
      accounts: this.$parent.accounts.map(accounts=>(accounts.email)).filter(email => email!=('dpo@uhasselt.be')),
      teamMembers: [],
      active: 'first',
      first: false,
      second: false,
      third: false,
      secondStepError: null
    }},
    methods: {
      save(){
        this.$parent.forms[this.$parent.forms.length]=
        {
          id: this.$parent.forms.length+1,
          projectname: this.Projectnaam,
          projectnummer: this.Projectnummer,
          description: this.Description,
          typeAgreement: this.typeAgreement,
          beginDate: this.Begindate,
          endDate: this.Enddate,
          noDateReason: this.noDateReason,
          teamMembers: this.teamMembers,
          status: "50",
          answers: this.questionsPerTitle,
          remarks: [],
        }
      },
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
        if(this.selected!=null){
          this.teamMembers.push({email:this.selected,write:false});

          this.accounts.splice(this.accounts.indexOf(this.accounts.find(email => email == this.selected)), 1);

          this.selected=null;
        }
      },
      deleteFromList: function(emailaddress){
        this.accounts.push(emailaddress)

        this.teamMembers.splice(this.teamMembers.indexOf(this.teamMembers.find(member => member.email == emailaddress)), 1);
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
  width: 100%;
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
.tmEmail{
  float:left;
  overflow:hidden;
}
.writeCheckbox{
  float:right;
  overflow:hidden;
  margin:auto !important;
}
/* .md-radio{
  margin:14px;
} */

.question div{
  /* margin-top:14px; */
  text-align:left;
}
.datepicker label{
  display:block;
  text-align:left;
}
</style>