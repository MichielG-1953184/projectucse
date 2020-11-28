<template>

<b-container>
   <div>
    <md-steppers :md-active-step.sync="active" md-linear>
      <md-step id="first" md-label="Team" md-description="Optional" :md-done.sync="first">
        <b-row>
          <b-col>
          <md-autocomplete v-model="searchNameCriteria" :md-options="$parent.accounts.map(accounts=>(accounts.email)).filter(email => email!=('dpo@uhasselt.be'))" md-layout="box" md-dense>
              <label>Search</label>
          </md-autocomplete>
          </b-col>
          <b-col>
          </b-col>
        </b-row>

        <md-button class="md-raised md-primary" @click="setDone('first', 'second')">Continue</md-button>
      </md-step>

      <md-step id="second" md-label="Project Information" :md-error="secondStepError" :md-done.sync="second">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
        <md-button class="md-raised md-primary" @click="setDone('second', 'third')">Continue</md-button>
        <md-button class="md-raised md-primary" @click="setError()">Set error!</md-button>
      </md-step>

      <md-step id="third" md-label="Questions" :md-done.sync="third">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
        <md-button class="md-raised md-primary" @click="setDone('third')">Done</md-button>
      </md-step>
    </md-steppers>
  </div>
</b-container>
</template>

<script>
  export default {
    name: 'StepperLinear',
    data: () => ({
      active: 'first',
      first: false,
      second: false,
      third: false,
      secondStepError: null
    }),
    methods: {
      setDone (id, index) {
        this[id] = true

        this.secondStepError = null

        if (index) {
          this.active = index
        }
      },
      setError () {
        this.secondStepError = 'This is an error!'
      }
    }
  }
</script>