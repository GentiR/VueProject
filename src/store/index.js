import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogPosts: [],
    postLoaded: null,
    blogHTML: "Write your blog title here...",
    blogTitle: "",
    blogPhotoName: "",
    blogPhotoFileURL: null,
    blogPhotoPreview: null,
    //User data
    editPost: null,
    user: null,
    profileAdmin: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileId: null,
    profileInitials: null,
  },
  getters: {
    blogPostsFeed(state) {
      return state.blogPosts.slice(0, 2);
    },
    blogPostsCards(state) {
      return state.blogPosts.slice(2, 6);
    },
  },
  mutations: {
    newBlogPost(state, payload){
       state.blogHTML = payload;
    },
    updateBlogTitle(state, payload){
      state.blogTitle = payload;
    },
    fileNameChange(state, payload){
      state.blogPhotoName = payload;
    },
    createFileURL(state, payload){
      state.blogPhotoFileURL= payload;
    },
    openPhotoPreview(state){
      state.blogPhotoPreview = !state.blogPhotoPreview;
    },
    toggleEditPost(state, payload){
      state.editPost = payload;
      console.log(state.editPost);
    },
    updateUser(state, payload) {
      state.user = payload;
    },
    filterBlogPost(state, payload) {
        state.blogPosts = state.blogPosts.filter((post) => post.blogID !== payload);
    },
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUsername = doc.data().username;
    },
    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("") + 
        state.profileLastName.match(/(\b\S)?/g).join("");
    },
    changeFirstName(state, payload) {
      state.profileFirstName = payload;
    },
    changeLastName(state, payload) {
      state.profileLastName = payload;
    },
    changeUsername(state, payload) {
      state.profileUsername = payload;
    },
  },
  actions: {
    async getCurrentUser({ commit }) {
      const dataBase = await db.collection('users').doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit("setProfileInfo", dbResults);
      commit("setProfileInitials");
      console.log(dbResults);
    },
    async getPost({ state }) {
        const dataBase = await db.collection("blogPosts").orderBy("date", "desc");
        const dbResults = await dataBase.get();
        dbResults.forEach((doc) => {
          if (!state.blogPosts.some((post) => post.blogID === doc.id)) {
            const data = {
              blogID: doc.data().blogID,
              blogHTML: doc.data().blogHTML,
              blogCoverPhoto: doc.data().blogCoverPhoto,
              blogTitle: doc.data().blogTitle,
              blogDate: doc.data().date,
              blogCoverPhotoName: doc.data().blogCoverPhotoName,
            };
            state.blogPosts.push(data);
          }
        });
        state.postLoaded = true;
    },
    async updatePost({ commit, dispatch }, payload) {
        commit("filterBlogPost", payload);
        await dispatch("getPost");
    },
    async deletePost({ commit }, payload) {
    const getPost = await db.collection("blogPosts").doc(payload);
    await getPost.delete();
    commit("filterBlogPost", payload);
    },
    async updateUserSettings({commit, state}){
    //updating the personal information of the admin when we click save changes
      const dataBase = await db.collection('users').doc(state.profileId);
      await dataBase.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        username: state.profileUsername,
      });

      // in case the admin changes his name competely 
      // we have to change the initials on the profile pic by doing this
      commit("setProfileInitials");
    },
  },
  modules: {}
});

