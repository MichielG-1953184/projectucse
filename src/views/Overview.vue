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
              <md-button class="md-icon-button" v-on:click="navAddForm()">
                <md-icon>add</md-icon>
              </md-button>
              <p> Add Form </p>
            </div>
              <md-autocomplete id="searchBalkForm" v-model="searchNameCriteria" :md-options="formNames" md-layout="box" md-dense>
                <label>Search</label>
              </md-autocomplete>
           
              <div class= "iconWithText">
                 <md-menu md-size ="auto" md-align-trigger>
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
                          <label>Status:</label>
                          <div id="statusDiv">
                          <input class="filterinput" type="checkbox" id="complete" >
                          <label for="complete">Complete</label>
                          <input class="filterinput" type="checkbox" id="notComplete" >
                          <label for="notComplete">Not complete</label>
                          <br>
                          <input class="filterinput" type="checkbox" id="notStarted" >
                          <label for="notStarted">Not started</label>
                         
                          </div>
                  </md-menu-item>
                  <md-menu-item>
                      <label>Faculty: </label>
                      <select v-model="selectedFaculties" multiple>
                          <option value="It" >It</option>
                          <option value="Architecture">Architecture</option>
                          <option value="Business">Business</option>
                      </select>
                  </md-menu-item>
                </md-menu-content>

              </md-menu>
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


  <div class="table">
    <md-table v-model="$parent.forms" md-sort="name" md-sort-order="asc" md-card>
      <md-table-row @click.native="navDetail(item.id)" slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.projectname }}</md-table-cell>
        <md-table-cell md-label="Start Date" md-sort-by="startDate">{{ item.beginDate}}</md-table-cell>
        <md-table-cell md-label="End date" md-sort-by="endDate">{{ item.endDate }}</md-table-cell>
        <md-table-cell md-label="Status" md-sort-by="status">{{ item.status }}</md-table-cell>
      </md-table-row>
    </md-table>
    
  </div>
  
  </div>
</template>

<script>
export default {
  name: 'App',
  data() { return{
    searchNameCriteria:"",
    formNames: [],
    newMessages :0,
    startDate: null,
    endDate: null,
    selectedFaculties:[],
  }
  },
  methods: {
    navAddForm(){
      this.$router.push('addForm')
    },
    navLogout(){
      this.$router.push('login')
    },
    navAddForm(){
      this.$router.push('addForm')
    },
    navDetail(id){
      console.log(id)
      this.$router.push({path:('detail/'+id)})
    }
  },
  mounted(){
      for(var i= 0; i < this.$parent.forms.length;i++){
        this.formNames.push(this.$parent.forms[i].projectname);
      }
  }
}
</script>
<style scoped>


.table{
  margin:auto !important; 
  width: 80%  !important;
  margin-top: 20px  !important;
}
.md-table-row{
  text-align: left;
}
/* .filterinput { 
  margin-left:5px;
  margin-right:2px;
 } */

</style>
