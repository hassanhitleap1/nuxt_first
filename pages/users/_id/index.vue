<template>
  <div class="container">
      <h1>this id is {{$route.params.id}}</h1>
  </div>
</template>
<script>
  export default {
      validate ({ params }) {
          // Must be a number
          return /^\d+$/.test(params.id)
      }
  }
</script>
