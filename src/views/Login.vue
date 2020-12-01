
<template>
  <div class="centered-container">
    <md-content class="md-elevation-3">
       <div class="title">
         <br>
        <img src="../assets/UHasselt-liggend.jpg">
      </div>
      <div class="form">
        <md-field>
          <label>E-mail</label>
          <md-input v-model="login.email" autofocus></md-input>
        </md-field>

        <md-field md-has-password>
          <label>Password</label>
          <md-input v-model="login.password" type="password"></md-input>
        </md-field>
      </div>

      <div class="actions md-layout md-alignment-center-space-between">
        <a href="/resetpassword">Reset password</a>
        <md-button class="md-raised md-primary" @click="auth">Log in</md-button>
      </div>

      <div class="loading-overlay" v-if="loading">
        <md-progress-spinner md-mode="indeterminate" :md-stroke="2"></md-progress-spinner>
      </div>

    </md-content>
    <div class="background" />
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loading: false,
      login: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    auth() {
      // your code to login user
      // this is only for example of loading

      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 5000);

      console.log(this.login.email);
      console.log(this.login.password);
      
    }
  }
};
</script>

<style scoped>
.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
}
.md-content{
  width: 50%;
  height:40%;
  max-width:25%;

  
}
.form{
  margin:50px;
}
.actions{
  margin:50px;
}
img{
  width:25%;
  height:25%;
}
</style>

