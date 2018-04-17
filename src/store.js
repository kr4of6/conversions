import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

const getAuthHeader = () => {
  return { headers: { 'Authorization': localStorage.getItem('token') } };
}

export default new Vuex.Store({
  state: {
    savedConversions: [],
  },
  getters: {
    savedConversions: state => state.savedConversions,
  },
  mutations: {
    setSavedConversions(state, savedConv) {
      state.savedConversions = savedConv;
    },
    saveConv(state,conversion){
      if(state.savedConversions === undefined)
      {
        state.savedConversions = new Array();
      }
      state.savedConversions.unshift(conversion);
      console.log(state.savedConversions);
    }
  },
  actions: {
    // get tweets of a user, must supply {id:id} of user you want to get tweets for
    getSavedConversions(context, user) {
      // return axios.get("/api/users/" + user.id + "/tweets").then(response => {
      //   context.commit('setFeedView', response.data.tweets);
      // }).catch(err => {
      //   console.log("getUserTweets failed:", err);
      // });
    },
    addSavedConversion(context,conversion) {
      context.commit('saveConv',conversion)
    //   axios.post("/api/users/" + context.state.user.id + "/tweets", tweet, getAuthHeader()).then(response => {
    //     return context.dispatch('getFeed');
    //   }).catch(err => {
    //     console.log("addTweet failed:", err);
    //   });
    console.log(conversion)
    },
  }
});
