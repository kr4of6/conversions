import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';
import { userInfo } from 'os';

Vue.use(Vuex);

const getAuthHeader = () => {
  return { headers: { 'Authorization': localStorage.getItem('token') } };
}

export default new Vuex.Store({
  state: {
    savedConversions: [],
    userID: ''
  },
  getters: {
    savedConversions: state => state.savedConversions,
    loggedIn: state => {
      if (state.userID === '')
        return false;
      return true;
    }
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
    },
    setUser(state, userID){
      state.userID = userID;
    }
  },
  actions: {
    login(context,loginInfo) {
      return axios.post('/api/users',loginInfo)
      .then(response => {
        context.commit('setUser',response.data.userID);
        context.dispatch('getSavedConversions',response.data.userID);
      }).catch(error =>{
        console.log(error);
      })
      
    },
    logout(context){
      context.commit('setUser','');
      context.commit('setSavedConversions',[]);
    },
    // get tweets oSf a user, must supply {id:id} of user you want to get tweets for
    getSavedConversions(context, user) {
      return axios.get("api/" + user + "/conversion").then(result => {
        console.log("result",result);
        context.commit('setSavedConversions',result.data.conversions);
      }).catch(error =>{
        console.log(error);
      })
      // return axios.get("/api/users/" + user.id + "/tweets").then(response => {
      //   context.commit('setFeedView', response.data.tweets);
      // }).catch(err => {
      //   console.log("getUserTweets failed:", err);
      // });
    },
    addSavedConversion(context,conversion) {
      // context.commit('saveConv',conversion);
      axios.post("api/" + context.state.userID + "/conversion", {"conversion":conversion}).then(result =>{
      context.dispatch('getSavedConversions',context.state.userID)
      }).catch(error => {
        console.log(error);
      })
    //   axios.post("/api/users/" + context.state.user.id + "/tweets", tweet, getAuthHeader()).then(response => {
    //     return context.dispatch('getFeed');
    //   }).catch(err => {
    //     console.log("addTweet failed:", err);
    //   });
    console.log(conversion)
    },
    deleteConversion(context,convID){
      axios.delete("api/" + context.state.userID + "/conversion/" +convID).then(result =>{
        context.dispatch('getSavedConversions',context.state.userID)
        }).catch(error => {
          console.log(error);
        })
    }
  }
});
