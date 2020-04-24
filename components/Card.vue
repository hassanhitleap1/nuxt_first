<template>
  <div>
    <nuxt-link :to="{name: 'posts-id', params: { id:post.id } }">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://www.uoe.co.uk/wp-content/uploads/2018/07/Post-box-1.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{post.title}}</h5>
          <p class="card-text">{{post.body}}</p>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
  export default {
        props:{
            post:Object
        }
    }
</script>
