<template>
<div> 
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
</template>
<script>
export default {
    data(){
        return{
            newMessages: 5,
            startDate: null,
            endDate: null,
            selectedFaculties:[],

        }
    },
    methods:{
        navAddForm(){
            this.$router.push('addForm')
        },
        navLogout(){
            this.$router.push('login')
        }
    }
}
</script>
<style scoped>
select{
    float:left;
}
</style>