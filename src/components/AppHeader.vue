<template>
   <nav>
    <label for="show-menu" class="show-menu">Show Menu</label>
    <input type="checkbox" id="show-menu" role="button">
       <ul id="menu">
        <li><router-link active-class="active" to="/" exact>Home</router-link></li>
        <li><router-link active-class="active" to="/Liquid" exact>Liquid</router-link></li>
        <li><router-link active-class="active" to="/Dry" exact>Dry</router-link></li>
        <li><router-link active-class="active" to="/Saved" exact>Saved</router-link></li>
        <li class="formRight" v-if="loggedIn">
          <button v-on:click="logout">logout</button>
        </li>
        <li class="formRight" v-else>
          <form v-on:submit.prevent="login">
            <input v-model="username" placeholder="Username">
            <input v-model="password" type="password" placeholder="Password">
            <button class="primary" type="submit">Login/Register</button>
          </form>
        </li>
    </ul>
     <h1>Kitchen Conversions</h1>
   </nav>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login: function(){
      this.$store.dispatch('login',{
        user:this.username,
        password:this.password,
      }).then(user => {
        this.username = '';
        this.password = '';
      })},
      logout: function(){
        this.$store.dispatch("logout");
      }
  },
  computed: {
    loggedIn: function() {
      return this.$store.getters.loggedIn;
    }
  }
};
</script>

<style scoped>
/*Strip the ul of padding and list styling*/

h1 {
  font-size: 3em;
  letter-spacing: 0.2rem;
  color: #999;
  padding: 0px 0px 10px 0px;
  margin: 0px 0px 50px 0px;
  border-bottom-style: solid;
  border-bottom-color: #999;
  border-bottom-width: 2px;
}

.clear {
  float: clear;
}
nav {
  display: grid;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.formRight {
  float: right;
}
.formRight button {
  border-radius: 5px;
  border-width: 0.5px;
  border-style: solid;
  border-color: rgb(158, 158, 158);
  color: #ff5035;
}

/*Create a horizontal list with spacing*/
li {
  display: inline-block;
  float: left;
  margin-right: 1px;
}
/*Style for menu links*/
li a {
  display: block;
  margin-right: 20px;
  /* height: 10px; */
  text-align: center;
  color: #666;
  text-decoration-line: none;
  padding: 5px;
}
/*Active color*/
li a.active {
  color: #ff5035;
}
/*Hover state for top level links*/
li:hover a {
  border-bottom-style: solid;
  border-bottom-color: #666;
  border-bottom-width: 0.5px;
}
/*Style 'show menu' label button and hide it by default*/
.show-menu {
  text-decoration: none;
  color: #fff;
  background: #ff5035;
  text-align: center;
  padding: 10px 0;
  display: none;
}
/*Hide checkbox*/
input[type="checkbox"] {
  display: none;
}
/*Show menu when invisible checkbox is checked*/
input[type="checkbox"]:checked ~ #menu {
  display: block;
}
</style>
