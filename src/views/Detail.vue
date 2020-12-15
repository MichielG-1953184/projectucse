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
          <b-row class="outerRow">
            <b-col>
              <b-row>{{form.standardAnswers.projectname.question}}</b-row>
              <b-row class="userText" v-if="form.standardAnswers.projectname.answer!=''">
                {{form.standardAnswers.projectname.answer}}
              </b-row>
              <b-row class="userText" v-else>
                <br/>
              </b-row>
            </b-col>
          </b-row>

          <b-row class="outerRow">
            <b-col>
              <b-row>{{form.standardAnswers.projectnummer.question}}</b-row>
              <b-row class="userText" v-if="form.standardAnswers.projectnummer.answer!=''">
                {{form.standardAnswers.projectnummer.answer}}
              </b-row>
              <b-row class="userText" v-else>
                <br/>
              </b-row>
            </b-col>
          </b-row>

          <b-row class="outerRow">
            <b-col>
              <b-row>{{form.standardAnswers.description.question}}</b-row>
              <b-row class="userText" v-if="form.standardAnswers.description.answer!=''">
                {{form.standardAnswers.description.answer}}
              </b-row>
              <b-row class="userText" v-else>
                <br/>
              </b-row>
            </b-col> 
          </b-row>

          <b-row class="outerRow">
            <b-col>
              <b-row>{{form.standardAnswers.typeAgreement.question}}</b-row>
              <b-row>
                <div>
                  <md-checkbox v-for="data in form.standardAnswers.typeAgreement.data" :key="data" :value=data v-model="form.standardAnswers.typeAgreement.answer" disabled >
                      {{data}}
                  </md-checkbox>
                </div>
              </b-row>
            </b-col> 
          </b-row>
         
          <b-row class="outerRow">
            <b-col>
              <b-row>{{form.standardAnswers.beginDate.question}}</b-row>
              <b-row class="userText" v-if="form.standardAnswers.beginDate.answer!=''">
                {{form.standardAnswers.beginDate.answer}}
              </b-row>
              <b-row class="userText" v-else>
                <br/>
              </b-row>
            </b-col> 
          </b-row>     

           <b-row class="outerRow">
            <b-col>
              <b-row>{{form.standardAnswers.endDate.question}}</b-row>
              <b-row class="userText" v-if="form.standardAnswers.endDate.answer!=''">
                {{form.standardAnswers.endDate.answer}}
              </b-row>
              <b-row class="userText" v-else>
                <br/>
              </b-row>
            </b-col> 
          </b-row>

         <b-row class="outerRow">
            <b-col>
              <b-row>{{form.standardAnswers.noDateReason.question}}</b-row>
              <b-row class="userText" v-if="form.standardAnswers.noDateReason.answer!=''">
                {{form.standardAnswers.noDateReason.answer}}
              </b-row>
              <b-row class="userText" v-else>
                <br/>
              </b-row>
            </b-col> 
          </b-row>
          <b-row><b-col><h4>Team</h4></b-col></b-row>
          
          <b-row class="outerRow">
            <!-- <b-col>Team members:</b-col>  -->
              <label style="float:left;">Team members</label>
              <b-list-group class="listgroupTeamMembers">
                <b-list-group-item v-for="m in form.teamMembers" :key="m.email">
                  <div class="tmEmail">{{m.email}}</div>
                  <md-checkbox class="writeCheckbox" v-model="m.write" disabled>
                    write
                  </md-checkbox>
                </b-list-group-item>
              </b-list-group>
          </b-row>


            <div v-for="questionPerTitle in form.answers" :key="questionPerTitle.title" >
            <h4>{{questionPerTitle.title}}</h4>
            <b-row v-for="q in questionPerTitle.questions" :key="q.question" class="outerRow" >
              
              <div >
                <b-col>
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
              </div>

          </b-row>
          </div>

  
      </b-container>
       
      
    </div>

    <div class="buttons">
    <b-container fluid>
      <md-button class="md-raised md-primary" style="float:left;" @click="$router.push({path:('/overview')})">Terug</md-button>

    <!-- <button class="editbutton" v-on:click="editDetail($route.params.id)">Edit</button> -->
      <md-button v-if="currentUser.dpo!=true && form.teamMembers.find(member => member.email == currentUser.email).write == false" class="md-raised md-primary editButton" disabled @click="editDetail($route.params.id)">Edit</md-button>
      <md-button v-else class="md-raised md-primary editButton" @click="editDetail($route.params.id)">Edit</md-button>
      
      <md-button v-if="currentUser.dpo==true" class="md-raised md-primary" @click="reviewDetail($route.params.id)">Review</md-button>
    </b-container>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return{
      form:this.$parent.forms.find(form => form.id == this.$route.params.id),
      currentUser:this.$parent.accounts.find(account => account.inUse == true),
    }
        },
  methods: {
     navNotification(item){
      this.currentUser.notifications.splice(this.currentUser.notifications.indexOf(item), 1);
      this.$router.push({path:('detail/' + item.relatedFormId)});
      //this.navDetail(item.relatedFormId);
      
    },
    editDetail(id) {
      console.log(id)
      this.$router.push({path:('/edit/'+id)})
    },
    reviewDetail(id) {
      console.log(id)
      this.$router.push({path:('/review/'+id)})
    }
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
  margin-left:-104px !important;
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

.md-button.md-theme-default.md-raised[disabled]{
  color: rgb(146, 143, 143) !important;
}

</style>