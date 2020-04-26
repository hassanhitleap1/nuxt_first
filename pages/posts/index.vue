<template>
  <div class="container">
    <div class="row">

      <div v-for="post in allPosts" class="col-md-4" :key="post.id" >

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
    <button class="btn btn-danger" v-scroll-to="'body'">Top</button>
  </div>
</template>
<script>
    import axios from 'axios';
    import Card from '~/components/Card';
   import { mapMutations } from 'vuex';

  export default {
      components: {
          Card
      },
     
      data(){
          return {
              posts:''
          }
      }
      ,computed:{
   
          allPosts(){
            return this.$store.getters.posts
          }
      }
      //,
      // async fetch({store}){
      //    let {data}= await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      //    store.dispatch('setPosts',data);
      //   //  return {posts: data}
      // }

  }
</script>
