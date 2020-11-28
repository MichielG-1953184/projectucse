<template>

  <div class="Edit">
   

   


    <button class="button" v-on:click="saveDetail($route.params.id)">Save</button>

  </div>
</template>

<script>
export default {
  methods: {
    saveDetail(id) {
      console.log(id)
      this.$router.push({path:('/detail/'+id)})
    }
  }
}
</script>