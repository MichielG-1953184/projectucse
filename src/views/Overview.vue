<template>

  <div class="Overview">
    <md-toolbar class="md-primary">
      <div id="header"> 
        <button v-on:click="navAddForm()">Add Form</button>
  
        <md-menu  md-size="auto" md-align-trigger>
            <md-button class="md-icon-button" md-menu-trigger>
                <md-icon>filter_alt</md-icon>
            </md-button>
            
            <md-menu-content id="filterMenu">
                <md-menu-item>
                        <label>Period:</label>
                        <input type="date" id="start" name="trip-start"
                        value="2020-11-20" v-model="startDate">
                        <label>to</label>
                        <input type="date" id="end" name="trip-start"
                        value="2020-11-20" v-model="endDate">                  
                </md-menu-item>
                <md-menu-item>
                        <label>Status:</label>
                        <div id="statusDiv">
                        <input type="checkbox" id="complete" >
                        <label for="complete">Complete</label>
                        <input type="checkbox" id="notComplete" >
                        <label for="notComplete">Not complete</label>
                        <br>
                        <input type="checkbox" id="notStarted" >
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

          <md-autocomplete v-model="searchNameCriteria" :md-options="formNames" md-layout="box" md-dense>
              <label>Search</label>
          </md-autocomplete>
      
          <md-menu md-size="auto" md-align-trigger>
              <md-badge :md-content="newMessages">
                  <md-button class="md-icon-button" md-menu-trigger>
                      <md-icon>notifications</md-icon>
                  </md-button>
              </md-badge>
              
              <md-menu-content>
                  <md-menu-item>Notificatie 1</md-menu-item>
                  <md-menu-item>Notificatie 2</md-menu-item>
                  <md-menu-item>Notificatie 3</md-menu-item>
            </md-menu-content>
          </md-menu>

          <md-button class="md-icon-button" v-on:click="navLogout()" >
              <md-icon>login</md-icon>
          </md-button>    
        </div>
      </md-toolbar>
   <md-table v-model="$parent.forms" md-sort="name" md-sort-order="asc" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Forms</h1>
      </md-table-toolbar>

      <md-table-row @click.native="navDetail(item.id)" slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.projectname }}</md-table-cell>
        <md-table-cell md-label="Start Date" md-sort-by="startDate">{{ item.startDate }}</md-table-cell>
        <md-table-cell md-label="End date" md-sort-by="endDate">{{ item.endDate }}</md-table-cell>
        <md-table-cell md-label="Status" md-sort-by="status">{{ item.status }}</md-table-cell>
      </md-table-row>
    </md-table>
    
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
    },
    changeMsg() {
      console.log(this.$parent.forms[0].id)
      this.$parent.forms[0].id = 5;
      console.log(this.$parent.forms[0].id)
    }
  },
  mounted(){
      for(var i= 0; i < this.$parent.forms.length;i++){
        this.formNames.push(this.$parent.forms[i].projectname);
      }
  }
}
</script>
<style>
#header{
   display: flex;
   justify-content: space-between;
}

</style>
