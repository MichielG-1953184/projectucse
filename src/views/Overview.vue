<template>

  <div class="about">
    <table>
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
    </table>
    <p>gggg{{msg}}</p>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: 'Overview',
  data() { return{
    msg:"tsta",
    forms: [
      { name: '5G', startDate: '15/11/20', endDate: '28/05/2021', status: '100' },
      { name: '6G', startDate: '15/11/20', endDate: '28/05/2021', status: '80' }
    ]
  }
    
  }
}
</script>
