import axios from 'axios';

export const state = ()=>({
 posts:{}
});

export const  getters = {
        posts(state){
            return state.posts;
        }
}


export const mutations ={
    SET_POSTS(state,posts){
        state.posts=posts;
    }
}


export  const  actions ={

    async nuxtServerInit ({commit}){
        let {data}= await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        commit("SET_POSTS",data);
     }
    // setPosts({commit},posts){
    //     
    // }
}