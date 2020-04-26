<template>
  <div class="container">
    <div>
      <srr>
      <v-select v-model="selected" placholder="plaase selct" :options="['for','bar']" ></v-select>
      </srr>
    </div>
  </div>
</template>
<script>
export default  {
  data(){
    return {
      selected:""
    }
  }
};

</script>


