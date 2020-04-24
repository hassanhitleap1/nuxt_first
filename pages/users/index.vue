<template>
  <div class="container">
      <div class="row">
        <input v-model="id" class="form-control" type="text" />
        <button class="btn btn-success" @click="loder" @keypress="loder">loading</button>
      </div>
  </div>
</template>
<script>
  export default {
      data:{
          id:''
      },methods:{
          loder(){
              this.$router.push(`/users/${this.id}`);
          }
      }
  }
</script>
