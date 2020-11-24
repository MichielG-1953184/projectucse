<template>

  <div class="Overview">
   

   <md-table v-model="forms" md-sort="name" md-sort-order="asc" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Forms</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Start Date" md-sort-by="startDate">{{ item.startDate }}</md-table-cell>
        <md-table-cell md-label="End date" md-sort-by="endDate">{{ item.endDate }}</md-table-cell>
        <md-table-cell md-label="Status" md-sort-by="status">{{ item.status }}</md-table-cell>
      </md-table-row>
    </md-table>


    <!-- <table>
      <thead>
        <tr>
          <th>name</th>
          <th>startDate</th>
          <th>endDate</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="form in forms" :key="form.name">
          <td>{{form.name}}</td>
          <td>{{form.startDate}}</td>
          <td>{{form.endDate}}</td>
          <td>{{form.status}}</td>        
        </tr>
      </tbody>
    </table> -->
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: 'Overview',
  data() { return{
    selectedCountry: null,
    forms: [
      { id: 1, name: '5G', startDate: '15/11/20', endDate: '28/05/2021', status: '100' },
      { id:2, name: '6G', startDate: '5/11/20', endDate: '8/05/2021', status: '80' }
    ],
    countries: [
        'Algeria',
        'Argentina',
        'Brazil',
        'Canada',
        'Italy',
        'Japan',
        'United Kingdom',
        'United States'
      ],
  }
    
  }
}
</script>
