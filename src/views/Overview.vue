<template>

  <div class="Overview">
    <md-toolbar class="md-primary">
      <div class="md-toolbar-row">
         <div class="md-toolbar-section-start">
            <img src="../assets/UHasselt-liggend.jpg" style="width: 40%">
            <div class="iconWithText">
              <a :href="'#/overview'">
              <md-button class="md-icon-button">
                <md-icon>home</md-icon>
               
              </md-button>
               <p>Home</p>
              </a>
            </div>
        </div>

        <div class="centerFromHeader">
            <div class= "iconWithText">
              <a :href="'#/addForm'" v-if="!currentUser.dpo">
              <md-button class="md-icon-button">
                <md-icon>add</md-icon>
              </md-button>
              <p> Add Form </p>
              </a>
            </div>
              <md-autocomplete id="searchBalkForm" v-model="searchNameCriteria" :md-options="formNames" md-layout="box" md-dense v-on:md-changed="onSearch()" >
                <label>Search</label>
              </md-autocomplete>
           
              <div class= "iconWithText">
                <md-menu md-size ="auto" md-align-trigger class="test">
                <md-button class="md-icon-button" md-menu-trigger>
                  <md-icon>filter_alt</md-icon>
                </md-button>
                <p> Filter</p>
                <md-menu-content id="filterMenu">
                  <md-menu-item>
                    <p>
                      <label>Period:</label>
                      <br>
                      <input type="date" id="start" name="trip-start"
                      value="2020-11-20" v-model="startDate">
                      <br>
                      <label>to:</label>
                      <br>
                      <input type="date" id="end" name="trip-start"
                      value="2020-11-20" v-model="endDate"> 
                    </p>
                  </md-menu-item>
                        
                  <md-menu-item>
                          <b-row >
                            <b-col >
                              <label>Status:</label>
                            </b-col>
                            <b-col>
                              <div id="statusDiv">
                                <input v-model="selectedStatus" class="filterinput" type="checkbox" id="accepted"  value="Accepted">
                                <label for="accepted">Accepted</label>
                                <br>
                                <input v-model="selectedStatus" class="filterinput" type="checkbox" id="declined" value="Declined" >
                                <label for="declined">Declined</label>
                                <br>  
                                <input v-model="selectedStatus" class="filterinput" type="checkbox" id="inProgress" value="In Progress" >
                                <label for="inProgress">In progress</label>
                                <br>
                                <input v-model="selectedStatus" class="filterinput" type="checkbox" id="readyToReview" value="Ready To Review" >
                                <label for="readyToReview">Ready to review</label>
                              </div>
                            </b-col>
                          </b-row>
                          
                          
                  </md-menu-item>
                  <md-menu-item>
                    <b-row>
                      <b-col><label>Faculty: </label></b-col>
                      <b-col>
                        <div id="facultyDiv">
                        <input v-model="selectedFaculties" value="IT" class="filterinput" type="checkbox" id="IT" >
                        <label for="IT">IT</label>
                        <br>
                        <input v-model="selectedFaculties" value="HEALTH" class="filterinput" type="checkbox" id="HEALTH" >
                        <label for="HEALTH">HEALTH</label>
                        <br>
                        <input v-model="selectedFaculties" value="MARKETING" class="filterinput" type="checkbox" id="MARKETING" >
                        <label for="MARKETING">MARKETING</label>
                      </div>
                      </b-col>
                    </b-row>
                      
                      
                   
                      <!-- <select v-model="selectedFaculties" multiple>
                          <option value="It" >It</option>
                          <option value="Architecture">Architecture</option>
                          <option value="Business">Business</option>
                      </select> -->
                  </md-menu-item>
                  <md-menu-item>
                    <md-button @click="resetFilter">Reset</md-button>
                    <md-button @click="applyFilter">Apply</md-button>
                  </md-menu-item>
                  
                </md-menu-content>
                
              </md-menu>
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
                    <!-- <md-menu-item>Notificatie 2</md-menu-item>
                    <md-menu-item>Notificatie 3</md-menu-item> -->
              </md-menu-content>
            </md-menu>

          <div class= "iconWithText">
            <a @click="navLogout()">
            <md-button class="md-icon-button">
              <md-icon>login</md-icon>
            </md-button>
            <p> Log out </p>
            </a>
          </div>
        </div>
      </div>
    </md-toolbar>



  <div class="table"  >
    <md-table v-model="overviewforms" md-sort="name" md-sort-order="asc" md-card>
      <md-table-row  v-if="item.teamMembers.find(member => member.email==currentUser.email)!=null" @click.native="navDetail(item.id)" slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="standardAnswers.projectname.answer">{{ item.standardAnswers.projectname.answer }}</md-table-cell>

        <md-table-cell md-label="Start Date" md-sort-by="standardAnswers.beginDate.answer">{{ item.standardAnswers.beginDate.answer}}</md-table-cell>

        <md-table-cell md-label="End date" md-sort-by="standardAnswers.endDate.answer">{{ item.standardAnswers.endDate.answer }}</md-table-cell>

        <md-table-cell md-label="Status" md-sort-by="status" >{{ item.status }}% {{item.reviewstatus}} </md-table-cell>
        <md-table-cell>
          <div class="quickActionIconWithText" @click.stop="quickEdit(item.id)" v-if="item.teamMembers.find(member => member.email == currentUser.email).write == true" >
              <md-button class="quickAction" >
                <md-icon>edit</md-icon>
              </md-button>
              <p>Edit</p>
          </div>
        </md-table-cell>
      </md-table-row>

       <md-table-row  v-else-if="currentUser.dpo==true" @click="navDetail(item.id)" slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="standardAnswers.projectname.answer">{{ item.standardAnswers.projectname.answer }}</md-table-cell>

        <md-table-cell md-label="Start Date" md-sort-by="standardAnswers.beginDate.answer">{{ item.standardAnswers.beginDate.answer}}</md-table-cell>

        <md-table-cell md-label="End date" md-sort-by="standardAnswers.endDate.answer">{{ item.standardAnswers.endDate.answer }}</md-table-cell>

        <md-table-cell md-label="Status" md-sort-by="status" >{{ item.status }}% {{ item.reviewstatus }}</md-table-cell>
        <md-table-cell>
          <div class="quickActionIconWithText" @click.stop="quickReview(item.id)">
              <md-button class="quickAction" >
                <md-icon>rate_review</md-icon>
              </md-button>
              <p>Review</p>
          </div>
        </md-table-cell>
        
      </md-table-row>

      <md-table-row v-else slot="md-table-row" style="background-color: grey" slot-scope="{ item }">
        
        <md-table-cell md-label="ID" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="standardAnswers.projectname.answer">{{ item.standardAnswers.projectname.answer }}</md-table-cell>

        <md-table-cell md-label="Start Date" md-sort-by="standardAnswers.beginDate.answer"></md-table-cell>

        <md-table-cell md-label="End date" md-sort-by="standardAnswers.endDate.answer"></md-table-cell>

        <md-table-cell md-label="Status" md-sort-by="status" ></md-table-cell>

        <md-table-cell></md-table-cell>
      </md-table-row>
    </md-table>
    
  </div>
  
  </div>
</template>

<script>
export default {
  name: 'App',
  data() { 
    return{
      overviewforms: JSON.parse(JSON.stringify(this.$parent.forms)),
      filteredForms:JSON.parse(JSON.stringify(this.$parent.forms)),
      searchNameCriteria:"",
      formNames: [],
      newMessages :0,
      startDate: null,
      endDate: null,
      selectedFaculties:[],
      selectedStatus:[],
      currentUser:this.$parent.accounts.find(account => account.inUse == true),
    }
  },
  methods: {
    quickReview(id){
     this.$router.push({path:('/review/'+id)})
    },
    quickEdit(id){
     this.$router.push({path:('/edit/'+id)})
    },
    onSearch(){
      console.log("enter");
        this.overviewforms = this.filteredForms.filter(form =>{
          return form.standardAnswers.projectname.answer.toLowerCase().includes(this.searchNameCriteria.toLowerCase())
          })
    },
    navAddForm(){
      this.$router.push('addForm')
    },
    navLogout(){
      this.$parent.accounts.find(account => account.inUse == true).inUse=false;
      this.$router.push('login')
    },
    navAddForm(){
      this.$router.push('addForm')
    },
    navDetail(id){
      this.$router.push({path:('detail/'+id)})
    },
    navLink(id){
      this.$router.push({path:(id)})
    },
    navNotification(item){
      this.currentUser.notifications.splice(this.currentUser.notifications.indexOf(item), 1);
      //var id = item.relatedFormId;
      //this.$router.push({path:('detail/' + id)});
      this.navLink(item.relatedFormId);
      
    },
  
    applyFilter(){
      this.overviewforms = JSON.parse(JSON.stringify(this.$parent.forms));

      //applyDateFilter
      if(this.startDate != null && this.endDate != null)
      {
        var filterdate1 = new Date(this.startDate);
        var filterdate2 = new Date(this.endDate);

        for(var i = 0; i < this.overviewforms.length; i++ ){
          var formDateStart = Date.parse(this.overviewforms[i].standardAnswers.beginDate.answer);
          var formDateEnd = Date.parse(this.overviewforms[i].standardAnswers.endDate.answer);
          
          if(!(formDateStart >  filterdate1) && !(formDateStart < filterdate2)){
            if(!(formDateEnd > filterdate1) && !(formDateEnd < filterdate2)){
              this.overviewforms.splice(i,1);
              i--;
              //this.overviewforms.push(this.$parent.forms[i]);
            }
          }
        }
      }

      //apply status filter
      if(this.selectedStatus.length != 0){
        for(var i= 0; i < this.overviewforms.length; i++){
          var formStatus = this.overviewforms[i].reviewstatus;
          var indexStatus = this.selectedStatus.indexOf(formStatus);
          if(indexStatus == -1){
            this.overviewforms.splice(i, 1);
            i--;
          }
        }
      }

      //apply faculty filter
        if(this.selectedFaculties.length != 0){
            for(var j = 0; j < this.overviewforms.length; j++){
              var formFaculty = this.overviewforms[j].faculty;
              var indexFaculty = this.selectedFaculties.indexOf(formFaculty);
              if(indexFaculty == -1){
                this.overviewforms.splice(j, 1);
                j--;
              }
            }

        
      }


    },
    resetFilter(){
      this.overviewforms = this.$parent.forms;
    }
  },
  // computed:{
  //   filteredForms:{
  //       get:function(){
  //         return this.overviewforms.filter(form =>{
  //         return form.standardAnswers.projectname.answer.toLowerCase().includes(this.searchNameCriteria.toLowerCase())
  //         })
  //       },
  //       set:() =>{}
  //     },
  //   // filteredForms:function(){
  //   //   return this.overviewforms.filter(form =>{
  //   //     return form.standardAnswers.projectname.answer.toLowerCase().includes(this.searchNameCriteria.toLowerCase())
  //   //   })
  //   // }
  // },
  mounted(){

      for(var i= 0; i < this.$parent.forms.length;i++){
        this.formNames.push(this.$parent.forms[i].standardAnswers.projectname.answer);
      }
  }
}
</script>
<style scoped>

.quickActionIconWithText{
  text-align: center;
  float:left;
  margin-top: -10px;
  margin-bottom: -25px;
}
.quickAction{
  height:0% !important;
  margin:auto;
}
.table{
  margin:auto !important; 
  width: 80%  !important;
  margin-top: 20px  !important;
}
.md-table-row{
  text-align: left;
}

.md-menu-content{
  height:auto !important;
  max-height:100% !important;
}
#statusDiv{
  margin:auto !important;
  margin-left: -10px !important;
}
#facultyDiv{
  margin:auto !important;
  margin-left: -15px !important; 
}
/* .filterinput { 
  margin-left:5px;
  margin-right:2px;
 } */

</style>
