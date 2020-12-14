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
    <b-container>
   <div>
    <md-steppers :md-active-step.sync="active" md-linear>
      <md-step id="first" md-label="Team" md-description="Optional" :md-done.sync="first">
        <b-row>
          <b-col><label>Team members</label></b-col>
        </b-row>
        <b-row align-v="center">
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
                  <b-col cols="7">{{m.email}}</b-col>
                  <b-col cols="3">
                    <md-checkbox class="writeCheckbox" v-model="m.write" >
                    write
                    </md-checkbox>
                  </b-col>
                  <b-col cols="2" v-if="m.email!=currentUser.email">
                    <md-button class="md-icon-button" v-on:click="deleteFromList(m.email)">
                      <md-icon>remove_circle</md-icon>
                    </md-button>
                  </b-col>
                  <b-col cols="2" v-else>
                    <md-button class="md-icon-button">
                    </md-button>
                  </b-col>
                </b-row>
              </b-list-group-item>
            </b-list-group>
          </b-col>
        </b-row>
        <md-button class="md-raised md-primary" style="float:left;" @click="activeconfirm = true">Cancel</md-button>
        <md-button class="md-raised md-primary fixcancel" @click="setDone('first', 'second')">Continue</md-button>
      </md-step>
      <md-step id="second" md-label="Project Information" :md-error="secondStepError" :md-done.sync="second">
        <div class="scrollablequestions">
        <b-row class="questioninscroll">
          <label class="beforebuttonlabel">{{standardQuestions.projectname.question}}</label>
          <md-button class="md-icon-button afterlabelbutton"  @click="openChat(standardQuestions.projectname)">
            <md-icon>chat</md-icon>
          </md-button>

            <md-menu md-size ="auto" md-align-trigger class="test">
                <md-button class="md-icon-button afterlabelbutton" md-menu-trigger>
                  <md-icon>help</md-icon>
                </md-button>
                <md-menu-content id="filterMenu">
                  <p class="helpParagraph">{{standardQuestions.projectname.help}}</p>
                </md-menu-content>
            </md-menu>

          <md-field>
          <md-input v-model="standardQuestions.projectname.answer"></md-input>
          </md-field>
        </b-row>
        <b-row class="questioninscroll">
          <label class="beforebuttonlabel">{{standardQuestions.projectnummer.question}}</label>
          <md-button class="md-icon-button afterlabelbutton"  @click="openChat(standardQuestions.projectnummer)">
            <md-icon>chat</md-icon>
         </md-button>  
              <md-menu md-size ="auto" md-align-trigger class="test">
                <md-button class="md-icon-button afterlabelbutton" md-menu-trigger>
                  <md-icon>help</md-icon>
                </md-button>
                <md-menu-content id="filterMenu">
                  <p class="helpParagraph">{{standardQuestions.projectnummer.help}}</p>
                </md-menu-content>
            </md-menu>
  
          <md-field>
          <md-input v-model="standardQuestions.projectnummer.answer"></md-input>
          </md-field>
        </b-row>
        <b-row class="questioninscroll">
          <label class="beforebuttonlabel">{{standardQuestions.description.question}}</label>
          <md-button class="md-icon-button afterlabelbutton"  @click="openChat(standardQuestions.description)">
            <md-icon>chat</md-icon>
          </md-button> 
            <md-menu md-size ="auto" md-align-trigger class="test">
                <md-button class="md-icon-button afterlabelbutton" md-menu-trigger>
                  <md-icon>help</md-icon>
                </md-button>
                <md-menu-content id="filterMenu">
                  <p class="helpParagraph">{{standardQuestions.description.help}}</p>
                </md-menu-content>
            </md-menu>

          <md-field>
          <md-input v-model="standardQuestions.description.answer"></md-input>
          </md-field>
        </b-row>
        <b-row class="questioninscroll">

          <label class="beforebuttonlabel">{{standardQuestions.typeAgreement.question}}</label>
          <md-button class="md-icon-button afterlabelbutton"  @click="openChat(standardQuestions.typeAgreement)">
            <md-icon>chat</md-icon>
          </md-button> 
            <md-menu md-size ="auto" md-align-trigger class="test">
                <md-button class="md-icon-button afterlabelbutton" md-menu-trigger>
                  <md-icon>help</md-icon>
                </md-button>
                <md-menu-content id="filterMenu">
                  <p class="helpParagraph">{{standardQuestions.typeAgreement.help}}</p>
                </md-menu-content>
            </md-menu>

          <div class = "question">
          <md-checkbox v-for="data in standardQuestions.typeAgreement.data" :key="data" :value=data v-model="standardQuestions.typeAgreement.answer" >
              {{data}}
          </md-checkbox>
          </div>
        </b-row>
        <b-row class="questioninscroll">
         <div class="datepicker">
           <div>
              <label class="beforebuttonlabel">{{standardQuestions.beginDate.question}}</label>
              <md-button class="md-icon-button afterlabelbutton"  @click="openChat(standardQuestions.beginDate)">
                <md-icon>chat</md-icon>
              </md-button>    
              <md-menu md-size ="auto" md-align-trigger class="test">
                <md-button class="md-icon-button afterlabelbutton" md-menu-trigger>
                  <md-icon>help</md-icon>
                </md-button>
                <md-menu-content id="filterMenu">
                  <p class="helpParagraph">{{standardQuestions.beginDate.help}}</p>
                </md-menu-content>
            </md-menu>        
            </div>
           <br/>
           <input type="date" v-model="standardQuestions.beginDate.answer"/>
          </div>
        </b-row>
        <br/>
        <b-row class="questioninscroll">
          <div class="datepicker">
            <div>
              <label class="beforebuttonlabel">{{standardQuestions.endDate.question}}</label>
              <md-button class="md-icon-button afterlabelbutton"  @click="openChat(standardQuestions.endDate)">
                <md-icon>chat</md-icon>
              </md-button>  
              <md-menu md-size ="auto" md-align-trigger class="test">
                <md-button class="md-icon-button afterlabelbutton" md-menu-trigger>
                  <md-icon>help</md-icon>
                </md-button>
                <md-menu-content id="filterMenu">
                  <p class="helpParagraph">{{standardQuestions.endDate.help}}</p>
                </md-menu-content>
            </md-menu>
            </div>
            <br/>
            <input type="date" v-model="standardQuestions.endDate.answer"/>
          </div>
        </b-row>
        <br/>
        <b-row class="questioninscroll">
          <label class="beforebuttonlabel">{{standardQuestions.noDateReason.question}}</label>
          <md-button class="md-icon-button afterlabelbutton"  @click="openChat(standardQuestions.noDateReason)">
                <md-icon>chat</md-icon>
          </md-button> 
          <md-menu md-size ="auto" md-align-trigger class="test">
                <md-button class="md-icon-button afterlabelbutton" md-menu-trigger>
                  <md-icon>help</md-icon>
                </md-button>
                <md-menu-content id="filterMenu">
                  <p class="helpParagraph">{{standardQuestions.noDateReason.help}}</p>
                </md-menu-content>
            </md-menu>
          <md-field>
          <md-input v-model="standardQuestions.noDateReason.answer"></md-input>
          </md-field>
         
        </b-row>
        </div>
        <md-button class="md-raised md-primary" style="float:left;" @click="activeconfirm = true">Cancel</md-button>
        <md-button class="md-raised md-primary fixcancel" @click="previous('second', 'first')">Previous</md-button>
        <md-button class="md-raised md-primary" @click="setDone('second', 'third')">Continue</md-button>
        <!-- <md-button class="md-raised md-primary" @click="setError()">Set error!</md-button> -->
      </md-step>


        <md-step id="third" md-label="Questions" :md-done.sync="third">
          <div class="scrollablequestions">
            <div v-for="questionPerTitle in questionsPerTitle" :key="questionPerTitle.title" class="questioninscroll">
              <h4>{{questionPerTitle.title}}</h4>
              <b-row v-for="q in questionPerTitle.questions" :key="q.question">
                
                <div class="question">

                <label class="questionLabel">{{q.question}}</label>
                <md-button class="md-icon-button afterlabelbutton" @click="openChat(q)">
                  <md-icon>chat</md-icon>
                </md-button> 
                <md-menu md-size ="auto" md-align-trigger class="menuQuestion">
                  <md-button class="md-icon-button afterlabelbutton" md-menu-trigger>
                    <md-icon>help</md-icon>
                  </md-button>
                  <md-menu-content id="filterMenu">
                    <p class="helpParagraph">{{q.help}}</p>
                  </md-menu-content>
              </md-menu>

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
          </div>
          <b-row>
            <b-col>
              <md-button class="md-raised md-primary" @click="activeconfirm = true" style="float:left;">Cancel</md-button>
              <md-button class="md-raised md-primary" @click="previous('third', 'second')">Previous</md-button>
              <md-button class="md-raised md-primary" @click="save()">Done</md-button>
              <md-checkbox style="display:inline-flex !important;" v-model="readytoreview" >
                Ready to review
              </md-checkbox>
            </b-col>
          </b-row>
        </md-step>
    </md-steppers>
    </div>
    </b-container>

    <md-dialog :md-active.sync="showDialog">
      <b-row align-v="center" style="padding: 15px 0px 0px 0px;">
        <b-col cols="10">      
          <md-dialog-title>Subject: "{{dialogtitle}}"</md-dialog-title>
        </b-col>
        <b-col cols="2">
          <md-button class="md-icon-button" style="float:right;" @click="showDialog = false">
            <md-icon>close</md-icon>
          </md-button>
        </b-col>
      </b-row>
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
    </md-dialog>

    <md-dialog-confirm
      :md-active.sync="activeconfirm"
      md-title="Are you sure?"
      md-content="If you exit you will lose all your progress!"
      md-confirm-text="OK"
      md-cancel-text="Cancel"
      @md-cancel="onCancel"
      @md-confirm="onConfirm" />

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
      activeconfirm: false,
      dialogtitle:"",
      dialogmessages:[],
      inputmessage:"",
      currentUser:this.$parent.accounts.find(account => account.inUse == true),
      readytoreview:false,
    }},
    methods: {
      navNotification(item){
      this.currentUser.notifications.splice(this.currentUser.notifications.indexOf(item), 1);
      this.$router.push({path:('detail/' + item.relatedFormId)});
      //this.navDetail(item.relatedFormId);
      
    },
      save(){
        var qptLength = 0;
        for(var i = 0; i < this.questionsPerTitle.length; i++){
          qptLength += this.questionsPerTitle[i].questions.length;
        }

        var sqLength =7;
        var totAantalVragen = qptLength + sqLength;
        var filledInQuestions = 0;

        if(this.standardQuestions.projectname.answer != ""){
          filledInQuestions +=1;
        }
        if(this.standardQuestions.projectnummer.answer != ""){
          filledInQuestions +=1;
        }
        if(this.standardQuestions.description.answer != ""){
          filledInQuestions +=1;
        }
        if(this.standardQuestions.beginDate.answer != ""){
          filledInQuestions +=1;
        }
        if(this.standardQuestions.endDate.answer != ""){
          filledInQuestions +=1;
        }
        if(this.standardQuestions.noDateReason.answer != ""){
          filledInQuestions +=1;
        }
        if(this.standardQuestions.typeAgreement.answer.length !=0){
          filledInQuestions +=1;
        }

        for(var i = 0; i < this.questionsPerTitle.length; i++){
          for(var j = 0; j< this.questionsPerTitle[i].questions.length; j++){
            if(this.questionsPerTitle[i].questions[j].answer != null && this.questionsPerTitle[i].questions[j].answer != ""  && this.questionsPerTitle[i].questions[j].length != 0){
              filledInQuestions +=1;
            }
          }
        }

        var berekendeStatus= Math.round((filledInQuestions / totAantalVragen) * 100);

        var reviewstatus="In Progress"
        if(this.readytoreview==true){
          reviewstatus="Ready To Review"
        }

        this.$parent.forms[this.$parent.forms.length]=
        {
          id: this.$parent.forms.length+1,
          status: berekendeStatus,
          reviewstatus: reviewstatus,
          faculty: this.currentUser.faculty,
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
      updateScroll(){
        var element = document.getElementById("scrollable");
        element.scrollTop = element.scrollHeight + element.clientHeight;
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
      onConfirm () {
        this.$router.push({path:('/overview')});
      },
      onCancel () {
      }
    },
    mounted(){
      this.teamMembers.push({email:this.currentUser.email,write:true});

      this.accounts.splice(this.accounts.indexOf(this.accounts.find(email => email == this.currentUser.email)), 1);
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

.scrollablequestions{
  height: 70vh;
  max-height: 70vh;
  overflow-y:auto;
  overflow-x:hidden;
}

.menuQuestion{
  float:left !important;
}

.helpParagraph{
  white-space:break-spaces;

}
.md-list{
  height:auto !important;
  max-height:100% !important;
  white-space: break-spaces !important;
}

.questioninscroll{
  margin-left: 30px;
}

.fixcancel{
  margin-left: -104px !important;
}
</style>