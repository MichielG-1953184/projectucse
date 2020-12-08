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
        <md-button class="md-raised md-primary" @click="setDone('first', 'second')">Continue</md-button>
      </md-step>
      <md-step id="second" md-label="Project Information" :md-error="secondStepError" :md-done.sync="second">
        <b-row>
          <label class="beforebuttonlabel">{{standardQuestions.projectname.question}}</label>
          <md-button class="md-primary md-raised afterlabelbutton"  @click="openChat(standardQuestions.projectname)">Chat</md-button>
          <md-field>
          <md-input v-model="standardQuestions.projectname.answer"></md-input>
          </md-field>
        </b-row>
        <b-row>
          <label class="beforebuttonlabel">{{standardQuestions.projectnummer.question}}</label>
          <md-button class="md-primary md-raised afterlabelbutton" @click="openChat(standardQuestions.projectnummer)">Chat</md-button>
          <md-field>
          <md-input v-model="standardQuestions.projectnummer.answer"></md-input>
          </md-field>
        </b-row>
        <b-row>
          <label class="beforebuttonlabel">{{standardQuestions.description.question}}</label>
          <md-button class="md-primary md-raised afterlabelbutton"  @click="openChat(standardQuestions.description)">Chat</md-button>
          <md-field>
          <md-input v-model="standardQuestions.description.answer"></md-input>
          </md-field>
        </b-row>
        <b-row>

          <label class="beforebuttonlabel">{{standardQuestions.typeAgreement.question}}</label>
          <md-button class="md-primary md-raised afterlabelbutton"  @click="openChat(standardQuestions.typeAgreement)">Chat</md-button>
                    <div class = "question">
          <md-checkbox v-for="data in standardQuestions.typeAgreement.data" :key="data" :value=data v-model="standardQuestions.typeAgreement.answer" >
              {{data}}
          </md-checkbox>
          </div>
        </b-row>
        <b-row>
         <div class="datepicker">
           <div>
            <label class="beforebuttonlabel">{{standardQuestions.beginDate.question}}</label>
            <md-button class="md-primary md-raised afterlabelbutton"  @click="openChat(standardQuestions.beginDate)">Chat</md-button>
           </div>
           <br/>
           <input type="date" v-model="standardQuestions.beginDate.answer"/>
          </div>
        </b-row>
        <br/>
        <b-row>
          <div class="datepicker">
            <div>
              <label class="beforebuttonlabel">{{standardQuestions.endDate.question}}</label>
              <md-button class="md-primary md-raised afterlabelbutton"  @click="openChat(standardQuestions.endDate)">Chat</md-button>
            </div>
            <br/>
            <input type="date" v-model="standardQuestions.endDate.answer"/>
          </div>
        </b-row>
        <br/>
        <b-row>
          <label class="beforebuttonlabel">{{standardQuestions.noDateReason.question}}</label>
          <md-button class="md-primary md-raised afterlabelbutton"  @click="openChat(standardQuestions.noDateReason)">Chat</md-button>
          <md-field>
          <md-input v-model="standardQuestions.noDateReason.answer"></md-input>
          </md-field>
         
        </b-row>
        <md-button class="md-raised md-primary" @click="previous('second', 'first')">Previous</md-button>
        <md-button class="md-raised md-primary" @click="setDone('second', 'third')">Continue</md-button>
        <!-- <md-button class="md-raised md-primary" @click="setError()">Set error!</md-button> -->
      </md-step>


        <md-step id="third" md-label="Questions" :md-done.sync="third">
          <div v-for="questionPerTitle in questionsPerTitle" :key="questionPerTitle.title">
            <h4>{{questionPerTitle.title}}</h4>
            <b-row v-for="q in questionPerTitle.questions" :key="q.question">
              
              <div class="question">

              <label class="questionLabel">{{q.question}}</label>
              <md-button class="md-primary md-raised afterlabelbutton"  @click="openChat(q)">Chat</md-button>
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
          <md-button class="md-raised md-primary" @click="previous('third', 'second')">Previous</md-button>
          <md-button class="md-raised md-primary" @click="save()">Done</md-button>
        </md-step>
    </md-steppers>
    </div>
    </b-container>

    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>{{dialogtitle}}</md-dialog-title>
      <div id="scrollable"> 
      <b-row v-for="message in dialogmessages" :key="message.date">
        <b-col cols="7" class="messagecontainersend" v-if="message.sender==currentUser.email">
          <h6>{{message.sender.substring(0, message.sender.indexOf("@"))}}</h6>
          <p>{{message.text}}</p>
          <span class="time-right">{{message.date}}</span>
        </b-col>
        <b-col cols="7" class="messagecontainerrecv darker" v-else >
          <h6 class="right">{{message.sender.substring(0, message.sender.indexOf("@"))}}</h6>
          <p>{{message.text}}</p>
          <span class="time-left">{{message.date}}</span>
        </b-col>
      </b-row>
      </div>
      <b-row>
        <b-col></b-col>
        <b-col cols="7">
          <md-field>
            <md-input v-model="inputmessage"></md-input>
          </md-field> 
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row>
        <b-col></b-col>
        <b-col cols="6" style="text-align:center;">
          <md-button class="md-primary" @click="sendMessage()">Send</md-button>
        </b-col>
        <b-col></b-col>
      </b-row>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>

  </div>
  
</template>

<script>
  export default {
    name: 'Addform',
  data() {
    return{
      standardQuestions:JSON.parse(JSON.stringify(this.$parent.standardQuestions)),
      questionsPerTitle:JSON.parse(JSON.stringify(this.$parent.questionsPerTitle)),
      selected:null,
      accounts: this.$parent.accounts.map(accounts=>(accounts.email)).filter(email => email!=('dpo@uhasselt.be')),
      teamMembers: [],
      active: 'first',
      first: false,
      second: false,
      third: false,
      secondStepError: null,
      showDialog: false,
      dialogtitle:"",
      dialogmessages:[],
      inputmessage:"",
      currentUser:this.$parent.accounts.find(account => account.inUse == true),
    }},
    methods: {
      save(){
        this.$parent.forms[this.$parent.forms.length]=
        {
          id: this.$parent.forms.length+1,
          status: "50",
          teamMembers: this.teamMembers,
          standardAnswers:this.standardQuestions,
          answers: this.questionsPerTitle,
        }

        this.$router.push('overview')
      },
      setDone (id, index) {
        this[id] = true
        this.secondStepError = null
        if (index) {
          this.active = index
        }
      },
      previous (id, index) {
        if (index) {
          this.active = index
        }
      },
      setError () {
        this.secondStepError = 'This is an error!'
      },
      openChat (question){
        this.showDialog=true;
        this.dialogtitle=question.question;
        this.dialogmessages=question.remarks;
      },
      sendMessage () {
        var remark={
          text:this.inputmessage,
          date:new Date().toLocaleString(),
          sender:this.currentUser.email,
        };
        this.dialogmessages.push(remark);
        this.inputmessage="";
        this.updateScroll();
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
      },
      updateScroll(){
        var element = document.getElementById("scrollable");
        element.scrollTop = element.scrollHeight + element.clientHeight;
      },
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
.writeCheckbox label{
  margin-bottom: 0px;
}
/* .md-radio{
  margin:14px;
} */

.question div{
  /* margin-top:14px; */
  text-align:left;
}
.datepicker label{
  text-align:left;
}
.datepicker button{
  text-align:left;
  line-height: inherit !important;
}

.md-dialog-container {
  min-width: 50% !important;
  padding: 0px 30px;
}
</style>

<style scoped>
.afterlabelbutton{
  float: left !important;
  height:auto; 
  margin:0px 0px 0px 6px;
  line-height: inherit !important;
}

.beforebuttonlabel{
  float: left !important;
  margin:0px 6px 0px 0px
}

.messagecontainerrecv{
  border: 2px solid #dedede;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 0px 10px 10px auto;
}

.messagecontainersend{
  border: 2px solid #dedede;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 0px 0px 10px 10px;
}

.darker {
  border-color: #ccc;
  background-color: #ddd;
}

.messagecontainer::after {
  content: "";
  clear: both;
  display: table;
}

.messagecontainer h6 {
  float: left;
  max-width: 150px;
  width: 100%;
  margin-right: 20px;
  border-radius: 50%;
}

.messagecontainer h6.right {
  float: right;
  margin-left: 20px;
  margin-right:0;
}

.time-right {
  color: #aaa;
}

.time-left {
  color: #999;
}

#scrollable{
  padding: 10px;
  border: none;
  height: 82vh;
  max-height: 82vh;
  overflow-y:auto;
  overflow-x:hidden;
}

</style>