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

    <div class="scrollable">
      <b-container>

        
          <b-row><b-col><h2>Project information</h2></b-col></b-row>
          <b-row class="outerRow">
            <b-col>
              <b-row>Projectnaam:</b-row>
              <b-row >
                {{form.projectname}}
              </b-row>
            </b-col>
          </b-row>

          <b-row class="outerRow">
            <b-col>
              <b-row>Description:</b-row>
              <b-row>
                {{form.description}}
              </b-row>
            </b-col> 
          </b-row>
          <b-row class="outerRow">
            <b-col>
              <b-row>Type agreement:</b-row>
              <b-row>
                <div>
                  <md-checkbox value="Project" v-model="form.typeAgreement" disabled >
                    Project
                  </md-checkbox>
                  <md-checkbox value="MTA (Material Transfer Agreement)" v-model="form.typeAgreement" disabled>
                    MTA (Material Transfer Agreement)
                  </md-checkbox>
                  <md-checkbox value="CTA (Clinical Trial Agreement)" v-model="form.typeAgreement" disabled>
                    CTA (Clinical Trial Agreement)
                  </md-checkbox>
                  <md-checkbox value="DSA (Data Sharing Agreement)" v-model="form.typeAgreement" disabled >
                    DSA (Data Sharing Agreement)
                  </md-checkbox>
                  <md-checkbox value="Raamovereenkomst" v-model="form.typeAgreement" disabled>
                    Raamovereenkomst
                  </md-checkbox>
                  <md-checkbox value="Ander contract" v-model="form.typeAgreement" disabled>
                    Ander contract
                  </md-checkbox>
                  <md-checkbox value="Niet van toepassing" v-model="form.typeAgreement" disabled>
                    Niet van toepassing
                  </md-checkbox>
                </div>
              </b-row>
            </b-col> 
          </b-row>
         
          <b-row class="outerRow">
            <b-col>
              <b-row>Begin date:</b-row>
              <b-row>
                {{form.beginDate}}
              </b-row>
            </b-col> 
          </b-row>         
           <b-row class="outerRow">
            <b-col>
              <b-row>End date:</b-row>
              <b-row>
                {{form.endDate}}
              </b-row>
            </b-col> 
          </b-row>
         <b-row class="outerRow">
            <b-col>
              <b-row>No date reason:</b-row>
              <b-row>
                {{form.noDateReason}}
              </b-row>
            </b-col> 
          </b-row>
      


          <b-row><b-col><h2>Team</h2></b-col></b-row>
          
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



            <div v-for="questionPerTitle in form.answers" :key="questionPerTitle.title">
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

          <!-- <b-row><b-col><h2>Questions</h2></b-col></b-row>
          <b-row v-for="answer in form.answers" :key="answer.question">
            <b-col>{{answer.question}}</b-col> 

            <b-col v-if="answer.type=='text'">{{answer.answer}}</b-col>
            <b-col v-else-if="answer.type=='checkbox'">
              <input disabled type="checkbox" :checked=answer.answer>
            </b-col>
          </b-row> -->
      </b-container>
       
      
    </div>


    <!-- <button class="editbutton" v-on:click="editDetail($route.params.id)">Edit</button> -->
      <md-button class="md-raised md-primary editButton" @click="editDetail($route.params.id)">Edit</md-button>
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
    editDetail(id) {
      console.log(id)
      this.$router.push({path:('/edit/'+id)})
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
  width: 80%;
  margin-top: 2%;
  height: 82vh;
  max-height: 82vh;
  overflow-y:auto;
}
.editButton{
  margin-top:5px !important;
}
.listgroupTeamMembers{
  width:100%;
  margin:auto;
}

.outerRow{
  width:70%;
  margin:auto;
  margin-bottom:10px;
  
}
.md-checkbox{
  display:flex !important;
  text-align: left !important;
}


</style>