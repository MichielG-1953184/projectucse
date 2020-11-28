<template>

  <div class="Overview">


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
    </div>


    <button class="button" v-on:click="editDetail($route.params.id)">Edit</button>

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