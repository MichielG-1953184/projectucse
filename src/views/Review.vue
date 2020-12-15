<template>

  <div class="Detail">
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
                <md-badge :md-content="currentUser.notifications.length">
                  
                    <md-button class="md-icon-button" md-menu-trigger>
                        <md-icon>notifications</md-icon>
                    </md-button>
                    
                  
                </md-badge>
                <p>Notifications</p>
                </div>
                
                <md-menu-content>
                    <md-menu-item v-for="item in currentUser.notifications" :key="item.email" @click="navNotification(item)">{{item.notifMessage}}</md-menu-item>
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
      <b-container fluid>

        
          <b-row><b-col><h4>Project information</h4></b-col></b-row>
          <b-row class="outerRow" align-v="center">
            <b-col cols="8">
              <b-row>{{standardAnswers.projectname.question}}</b-row>
              <b-row class="userText" v-if="standardAnswers.projectname.answer!=''">
                {{standardAnswers.projectname.answer}}
              </b-row>
              <b-row class="userText" v-else>
                <br/>
              </b-row>
            </b-col>
            <b-col cols="4">
              <md-field>
                <label>Reason why</label>
                <md-input v-model="standardAnswers.projectname.review"></md-input>
              </md-field>
            </b-col>
          </b-row>

          <b-row class="outerRow" align-v="center">
            <b-col cols="8">
              <b-row>{{standardAnswers.projectnummer.question}}</b-row>
              <b-row class="userText" v-if="standardAnswers.projectnummer.answer!=''">
                {{standardAnswers.projectnummer.answer}}
              </b-row>
              <b-row class="userText" v-else>
                <br/>
              </b-row>
            </b-col>
            <b-col cols="4">
              <md-field>
                <label>Reason why</label>
                <md-input v-model="standardAnswers.projectnummer.review"></md-input>
              </md-field>
            </b-col>
          </b-row>

          <b-row class="outerRow" align-v="center">
            <b-col cols="8">
              <b-row>{{standardAnswers.description.question}}</b-row>
              <b-row class="userText" v-if="standardAnswers.description.answer!=''">
                {{standardAnswers.description.answer}}
              </b-row>
              <b-row class="userText" v-else>
                <br/>
              </b-row>
            </b-col> 
            <b-col cols="4">
              <md-field>
                <label>Reason why</label>
                <md-input v-model="standardAnswers.description.review"></md-input>
              </md-field>
            </b-col>
          </b-row>

          <b-row class="outerRow" align-v="center">
            <b-col cols="8">
              <b-row>{{standardAnswers.typeAgreement.question}}</b-row>
              <b-row>
                <div>
                  <md-checkbox v-for="data in standardAnswers.typeAgreement.data" :key="data" :value=data v-model="standardAnswers.typeAgreement.answer" disabled >
                      {{data}}
                  </md-checkbox>
                </div>
              </b-row>
            </b-col> 
            <b-col cols="4">
              <md-field>
                <label>Reason why</label>
                <md-input v-model="standardAnswers.typeAgreement.review"></md-input>
              </md-field>
            </b-col>
          </b-row>
         
          <b-row class="outerRow" align-v="center">
            <b-col cols="8">
              <b-row>{{standardAnswers.beginDate.question}}</b-row>
              <b-row class="userText" v-if="standardAnswers.beginDate.answer!=''">
                {{standardAnswers.beginDate.answer}}
              </b-row>
              <b-row class="userText" v-else>
                <br/>
              </b-row>
            </b-col> 
            <b-col cols="4">
              <md-field>
                <label>Reason why</label>
                <md-input v-model="standardAnswers.beginDate.review"></md-input>
              </md-field>
            </b-col>
          </b-row>  

           <b-row class="outerRow" align-v="center">
            <b-col cols="8">
              <b-row>{{standardAnswers.endDate.question}}</b-row>
              <b-row class="userText" v-if="standardAnswers.endDate.answer!=''">
                {{standardAnswers.endDate.answer}}
              </b-row>
              <b-row class="userText" v-else>
                <br/>
              </b-row>
            </b-col> 
            <b-col cols="4">
              <md-field>
                <label>Reason why</label>
                <md-input v-model="standardAnswers.endDate.review"></md-input>
              </md-field>
            </b-col>
          </b-row>

         <b-row class="outerRow" align-v="center">
            <b-col cols="8">
              <b-row>{{standardAnswers.noDateReason.question}}</b-row>
              <b-row class="userText" v-if="standardAnswers.noDateReason.answer!=''">
                {{standardAnswers.noDateReason.answer}}
              </b-row>
              <b-row class="userText" v-else>
                <br/>
              </b-row>
            </b-col>
            <b-col cols="4">
              <md-field>
                <label>Reason why</label>
                <md-input v-model="standardAnswers.endDate.review"></md-input>
              </md-field>
            </b-col>
          </b-row>

            <div v-for="questionPerTitle in answers" :key="questionPerTitle.title" >
            <h4>{{questionPerTitle.title}}</h4>
            <b-row v-for="q in questionPerTitle.questions" :key="q.question" class="outerRow" align-v="center">
              <b-col cols="8">
                <b-row>{{q.question}}</b-row>
                
                <b-row v-if="q.type=='text' && q.answer!=''" class="userText">
                  <div v-if="q.answer!='' && q.answer!=null">
                  {{q.answer}}
                  </div>
                  <div v-else class="userText">
                  <br/>
                  </div>
                </b-row>

                <b-row v-else-if="q.type=='checkboxes'" >
                  <div>
                  <md-checkbox v-for="data in q.data" :key="data" :value=data v-model="q.answer" disabled >
                    {{data}}
                  </md-checkbox>
                  </div>
                </b-row>
                
                <b-row v-else-if="q.type=='radiobuttons'" >
                  <div style="text-align:left; margin-top:14px;">
                      <md-radio v-for="data in q.data" :key="data" :value=data v-model="q.answer" disabled>
                        {{data}}
                      </md-radio>
                  </div>
                
                </b-row>
                <md-field v-else-if="q.type=='textarea'">
                      <md-textarea disabled v-model="q.answer" class="userText"></md-textarea>
                </md-field>
              </b-col>
              <b-col cols="4">
                  <md-field>
                  <label>Reason why</label>
                  <md-input v-model="q.review"></md-input>
                </md-field>
              </b-col>

          </b-row>
          </div>

  
      </b-container>
       
      
    </div>

    <div class="buttons">
    <b-container fluid>
        <md-button class="md-raised md-primary" style="float:left;" @click="$router.go(-1)">Terug</md-button>
        <!-- <button class="editbutton" v-on:click="editDetail($route.params.id)">Edit</button> -->
        <md-button class="md-raised md-primary editButton" @click="accept()">Accept</md-button>
        <md-button class="md-raised md-primary editButton" @click="decline()">Decline</md-button>
    </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      standardAnswers:JSON.parse(JSON.stringify(this.$parent.standardQuestions)),
      answers:JSON.parse(JSON.stringify(this.$parent.questionsPerTitle)),
      currentUser:this.$parent.accounts.find(account => account.inUse == true),
    }
        },
  methods: {
     navNotification(item){
      this.currentUser.notifications.splice(this.currentUser.notifications.indexOf(item), 1);
      this.$router.push({path:(item.relatedFormId)});
      //this.navDetail(item.relatedFormId);
      
    },
    accept() {
      var form = this.$parent.forms.find(form => form.id == this.$route.params.id);
      form.reviewstatus="Accepted"
      this.$router.push('/overview')
    },
    decline() {
      var form = this.$parent.forms.find(form => form.id == this.$route.params.id);
      form.standardAnswers=this.standardAnswers;
      form.answers= this.answers;
      form.reviewstatus="Declined";
      this.sendDeclineNotification( "Form " + this.$route.params.id + ": declined");

      this.$router.push('/overview');
      
    },
    sendDeclineNotification( message){
      var form = this.$parent.forms.find(form=>form.id == this.$route.params.id);
      var teamMembers = form.teamMembers;

      for(var i = 0; i < teamMembers.length;i++){
        var tmEmail = teamMembers[i].email;
        for(var j =0; j < this.$parent.accounts.length; j++){
          if(tmEmail == this.$parent.accounts[j].email){
            var notifications = this.$parent.accounts[j].notifications;
            var newNotif = {};
            newNotif.notifMessage = message;
            newNotif.relatedFormId = "detail/"+form.id;
            notifications.push(newNotif);
          }
        }
      }
    }
  },
    mounted(){
      var form=JSON.parse(JSON.stringify(this.$parent.forms.find(form => form.id == this.$route.params.id)));

      this.answers=form.answers;
      this.standardAnswers=form.standardAnswers;
  }
}
</script>

<style scoped>

.scrollable{
  border-style: solid;
  border-color: black;
  border-width: 1px;;
  margin:auto;
  width: 70%;
  margin-top: 1%;
  height: 82vh;
  max-height: 82vh;
  overflow-y:auto;
}

.buttons{
  margin:auto;
  width: 70%;
}

.editButton{
  margin-top:5px !important;
}

.listgroupTeamMembers{
  width:100%;
  margin:auto;
}

.outerRow{
  width:85%;
  margin:auto;
  margin-bottom:10px;
  
}
.md-checkbox{
  display:flex !important;
  text-align: left !important;
}

.userText{
  color:grey;
}


</style>