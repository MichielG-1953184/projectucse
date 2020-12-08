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
            <a :href="'#/login'">
            <md-button class="md-icon-button">
              <md-icon>login</md-icon>
            </md-button>
            <p> Log out </p>
            </a>
          </div>
        </div>
      </div>
    </md-toolbar>
    <div class="scrollable">
    <b-container>
   <div>
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
        <br/>
        <b-row>
          <div class="datepicker">
            <label>End date:</label>
            <input type="date" v-model="Enddate"/>
            
          </div>
          
        </b-row>
        <br/>
        <b-row>
          <label>No date reason:</label>
          <md-field>
          <md-input v-model="Nodatereason"></md-input>
          </md-field>
         
        </b-row>      

<b-row><b-col><h4>Team</h4></b-col></b-row>
        <b-row>
          <label style="float:left;">Team members</label>
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
                <b-row align-v="center">
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
          <md-button class="md-raised md-primary" @click="saveDetail($route.params.id)">Done</md-button>
    </div>
    </b-container>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'Editform',
    data() {
    return{
      questionsPerTitle:null,
      Projectnaam:null,
      Projectnummer:null,
      Description:null,
      Typeagreement:null,
      Begindate:null,
      Enddate:null,
      Nodatereason:null,
      selected:null,
      accounts: null,
      teamMembers:null,
    }
    },
  methods: {
    saveDetail(id){
        var form = this.$parent.forms.find(form => form.id == id);
        form.id= id;
          form.projectname= this.Projectnaam;
          form.projectnummer= this.Projectnummer;
          form.description= this.Description;
          form.typeAgreement= this.Typeagreement;
          form.beginDate= this.Begindate;
          form.endDate= this.Enddate;
          form.noDateReason= this.Nodatereason;
          form.teamMembers= this.teamMembers;
          form.status= "50";
          form.answers= this.questionsPerTitle;
          form.remarks= [];    

          this.$router.push({path:('/detail/'+id)})
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
  },
  mounted(){
      var form=JSON.parse(JSON.stringify(this.$parent.forms.find(form => form.id == this.$route.params.id)));

      this.questionsPerTitle=form.answers;
      this.Projectnaam=form.projectname;
      this.Projectnummer=form.projectnummer;
      this.Description=form.description;
      this.Typeagreement=form.typeAgreement;
      this.Begindate=form.beginDate;
      this.Enddate=form.endDate;
      this.Nodatereason=form.noDateReason;
      this.teamMembers= form.teamMembers;

      this.accounts=this.$parent.accounts.map(accounts=>(accounts.email)).filter(email => email!=('dpo@uhasselt.be'));
      this.teamMembers.forEach(acc => {
        this.accounts.splice(this.accounts.indexOf(this.accounts.find(email => email == acc)), 1);
      });
  }
}
</script>

<style scoped>
.scrollable{
  border-style: solid;
  border-color: black;
  border-width: 1px;;
  margin:auto;
  width: 80%;
  margin-top: 2%;
  height: 82vh;
  max-height: 82vh;
  overflow-y:auto;
}
</style>