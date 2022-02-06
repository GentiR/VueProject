import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      {
        blogTitle: "Blog Card #1",
        blogCoverPhoto: "burger",
        blogDate: "May 1, 2022",
      },
      {
        blogTitle: "Blog Card #2",
        blogCoverPhoto: "salad",
        blogDate: "May 1, 2022",
      },
      {
        blogTitle: "Blog Card #3",
        blogCoverPhoto: "tacos",
        blogDate: "May 1, 2022",
      },
      {
        blogTitle: "Blog Card #4",
        blogCoverPhoto: "cake",
        blogDate: "May 1, 2022",
      },
    ],
    editPost: null,
  },
  mutations: {
    toggleEditPost(state, payload){
      state.editPost = payload;
      console.log(state.editPost);
    },
  },
  actions: {
  },
  modules: {
  }
})
