
<template>
  <div class="centered-container">
    <md-content class="md-elevation-3">
       <div class="title">
         <br>
        <img src="../assets/UHasselt-liggend.jpg" style="width: 40%">
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
      
      <div>
        <b-row align-v="center">
          <b-col><a href="/resetpassword">Reset password</a></b-col>
          <b-col><md-button class="md-raised md-primary" @click="auth">Log in</md-button></b-col>
        </b-row>
        <b-row>
          <b-col>
            <p style="color:red; margin:auto; font-weight:bold;" v-if="wrongCredentials"> Wrong credentials</p>
          </b-col>
        </b-row>
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
      wrongCredentials:false,
      loading: false,
      login: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    auth() {
      var found = this.$parent.accounts.find(account => account.email == this.login.email && account.password == this.login.password)

      // your code to login user
      // this is only for example of loading


      if(found!=null){
        found.inUse=true;
        console.log(this.login.email);
        console.log(this.login.password);
        this.$router.push("overview");
      }
      else{
        
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.wrongCredentials =  true;
      }, 1500);
        
      }
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
  max-width:30%;

  
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

