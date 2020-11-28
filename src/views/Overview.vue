<template>

  <div class="Overview">
   

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
  methods: {
    navDetail(id){
      console.log(id)
      this.$router.push({path:('detail/'+id)})
    },
    changeMsg() {
      console.log(this.$parent.forms[0].id)
      this.$parent.forms[0].id = 5;
      console.log(this.$parent.forms[0].id)
    }
  }
}
</script>
