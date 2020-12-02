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
                <md-badge :md-content="$parent.newMessagesDPO">
                  
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

    <div class="scrollable">
      <b-container>
          <b-row><b-col><h2>Team</h2></b-col></b-row>
          <b-row>
            <b-col>Project name:</b-col> 
            <b-col>{{form.projectname}}</b-col>
          </b-row>
          <b-row>
            <b-col>Team members:</b-col> 
            <b-col>
            <b-list-group>
              <b-list-group-item v-for="member in form.teamMembers" :key="member.email">{{member.email}}</b-list-group-item>
            </b-list-group>
            </b-col>
          </b-row>

          <b-row><b-col><h2>Project information</h2></b-col></b-row>
          <b-row>
            <b-col>Description:</b-col> 
            <b-col>{{form.description}}</b-col>
          </b-row>
          <b-row>
            <b-col>Type agreement:</b-col> 
            <b-col>{{form.typeAgreement}}</b-col>
          </b-row>
          <b-row>
            <b-col>Begin date:</b-col> 
            <b-col>{{form.beginDate}}</b-col>
          </b-row>
          <b-row>
            <b-col>End date:</b-col> 
            <b-col>{{form.endDate}}</b-col>
          </b-row>
          <b-row>
            <b-col>No date reason:</b-col> 
            <b-col>{{form.noDateReason}}</b-col>
          </b-row>

          <b-row><b-col><h2>Questions</h2></b-col></b-row>
          <b-row v-for="answer in form.answers" :key="answer.question">
            <b-col>{{answer.question}}</b-col> 

            <b-col v-if="answer.type=='text'">{{answer.answer}}</b-col>
            <b-col v-else-if="answer.type=='checkbox'">
              <input disabled type="checkbox" :checked=answer.answer>
            </b-col>
          </b-row>
      </b-container>
        <b-container>
          <b-row><b-col><h2>Team</h2></b-col></b-row>
          <b-row>
            <b-col>Project name:</b-col> 
            <b-col>{{form.projectname}}</b-col>
          </b-row>
          <b-row>
            <b-col>Team members:</b-col> 
            <b-col>
            <b-list-group>
              <b-list-group-item v-for="member in form.teamMembers" :key="member.email">{{member.email}}</b-list-group-item>
            </b-list-group>
            </b-col>
          </b-row>

          <b-row><b-col><h2>Project information</h2></b-col></b-row>
          <b-row>
            <b-col>Description:</b-col> 
            <b-col>{{form.description}}</b-col>
          </b-row>
          <b-row>
            <b-col>Type agreement:</b-col> 
            <b-col>{{form.typeAgreement}}</b-col>
          </b-row>
          <b-row>
            <b-col>Begin date:</b-col> 
            <b-col>{{form.beginDate}}</b-col>
          </b-row>
          <b-row>
            <b-col>End date:</b-col> 
            <b-col>{{form.endDate}}</b-col>
          </b-row>
          <b-row>
            <b-col>No date reason:</b-col> 
            <b-col>{{form.noDateReason}}</b-col>
          </b-row>

          <b-row><b-col><h2>Questions</h2></b-col></b-row>
          <b-row v-for="answer in form.answers" :key="answer.question">
            <b-col>{{answer.question}}</b-col> 

            <b-col v-if="answer.type=='text'">{{answer.answer}}</b-col>
            <b-col v-else-if="answer.type=='checkbox'">
              <input disabled type="checkbox" :checked=answer.answer>
            </b-col>
          </b-row>
      </b-container>

        <b-container>
          <b-row><b-col><h2>Team</h2></b-col></b-row>
          <b-row>
            <b-col>Project name:</b-col> 
            <b-col>{{form.projectname}}</b-col>
          </b-row>
          <b-row>
            <b-col>Team members:</b-col> 
            <b-col>
            <b-list-group>
              <b-list-group-item v-for="member in form.teamMembers" :key="member.email">{{member.email}}</b-list-group-item>
            </b-list-group>
            </b-col>
          </b-row>

          <b-row><b-col><h2>Project information</h2></b-col></b-row>
          <b-row>
            <b-col>Description:</b-col> 
            <b-col>{{form.description}}</b-col>
          </b-row>
          <b-row>
            <b-col>Type agreement:</b-col> 
            <b-col>{{form.typeAgreement}}</b-col>
          </b-row>
          <b-row>
            <b-col>Begin date:</b-col> 
            <b-col>{{form.beginDate}}</b-col>
          </b-row>
          <b-row>
            <b-col>End date:</b-col> 
            <b-col>{{form.endDate}}</b-col>
          </b-row>
          <b-row>
            <b-col>No date reason:</b-col> 
            <b-col>{{form.noDateReason}}</b-col>
          </b-row>

          <b-row><b-col><h2>Questions</h2></b-col></b-row>
          <b-row v-for="answer in form.answers" :key="answer.question">
            <b-col>{{answer.question}}</b-col> 

            <b-col v-if="answer.type=='text'">{{answer.answer}}</b-col>
            <b-col v-else-if="answer.type=='checkbox'">
              <input disabled type="checkbox" :checked=answer.answer>
            </b-col>
          </b-row>
      </b-container>
      
    </div>


    <!-- <button class="editbutton" v-on:click="editDetail($route.params.id)">Edit</button> -->
      <md-button class="md-raised md-primary editButton" @click="gotoReview($route.params.id)">Review</md-button>
  </div>
</template>

<script>
export default {
  data() {
    return{
      form:this.$parent.forms.find(form => form.id == this.$route.params.id)
    }
        },
  methods: {
    gotoReview(id) {
      console.log(id)
      this.$router.push({path:('/review/'+id)})
    }
  }
}
</script>

<style>

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
.editButton{
  margin-top:5px !important;
}

</style>