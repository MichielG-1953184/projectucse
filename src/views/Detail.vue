<template>

  <div class="Overview">
   

   <md-table v-model="$parent.forms" md-sort="name" md-sort-order="asc" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Forms</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.projectname }}</md-table-cell>
        <md-table-cell md-label="Start Date" md-sort-by="startDate">{{ item.startDate }}</md-table-cell>
        <md-table-cell md-label="End date" md-sort-by="endDate">{{ item.endDate }}</md-table-cell>
        <md-table-cell md-label="Status" md-sort-by="status">{{ item.status }}</md-table-cell>
      </md-table-row>
    </md-table>
    
    <button class="button" v-on:click="changeMsg()">Change Message</button>

    <h1>{{$route.params.id-1}}</h1>

  </div>
</template>

<script>
export default {
  data() {
            return {
                id:this.$route.params.id
            }
        },
  methods: {
    changeMsg() {
      this.$parent.forms[1]=
      { 
      id: 2, 
      projectname: '7G', 
      startDate: '15/11/20', 
      endDate: '29/05/2021', 
      status: '100',
      answers:[
        {
        vraag1:null,
        vraag2:null,
        }
      ],
      remarks:[
        {
        vraag1:[{
          message:[{
            text:null,
            date:null,
            sender:null
          }]
        }],
        vraag2:[{
          message:[{
            text:null,
            date:null,
            sender:null
          }]
        }],
        }
      ]
      }
    
    }
  }
}
</script>