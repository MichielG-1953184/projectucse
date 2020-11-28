<template>

  <div class="Overview">
    <md-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
         <img src="../assets/UHasselt-liggend.jpg" style="width:40%">
        </div>

        <div class="centerFromHeader">
          <div class ="centerLeft">
              <md-button class="addForm md-raised" v-on:click="navAddForm()">Add Form</md-button>
              <md-autocomplete class="searchBalkForm" v-model="searchNameCriteria" :md-options="formNames" md-layout="box" md-dense>
                <label>Search</label>
              </md-autocomplete>
            </div>
            <div class= "iconWithText">
              <md-button class="md-icon-button" md-menu-trigger>
                <md-icon>filter_alt</md-icon>
              </md-button>
              <p> Filter</p>
            
          </div>
        </div>
        <div class="md-toolbar-section-end">
          <md-menu md-size="auto" md-align-trigger>
            <div class= "iconWithText">
                <md-badge :md-content="newMessages">
                  
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

.datepicker{
  margin-left: 10px;
}

</style>
