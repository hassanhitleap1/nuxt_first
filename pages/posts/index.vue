<template>
  <div class="container">
    <div class="row">

      <div v-for="post in posts" class="col-md-4" :key="post.id" >
<!--        <Card :props="post"/>-->
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
    </div>
  </div>
</template>
<script>
    import axios from 'axios';
    import Card from '~/components/Card';

  export default {
      components: {
          Card
      },
      data(){
          return {
              posts:''
          }
      },

      async asyncData(){
         let {data}= await axios.get(`https://jsonplaceholder.typicode.com/posts`);
         return {posts: data}
      }

  }
</script>
