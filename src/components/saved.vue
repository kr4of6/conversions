<template>
    <ul>
    <li v-for="item in history">
        <label>
            {{item.conversion}}
        </label>
    </li>
    </ul>
</template>

<script>
export default {
  name: "Liquid",
  data() {
    return {
    };
  },
  created: function()
  {

  },
  computed: {
    history: function()
    {
    console.log("this was called",this.$store.getters.savedConversions);
    return this.$store.getters.savedConversions
    }
  },
  methods: 
  {

  }
  
};
</script>

<style scoped>
body {
  padding: 0px;
  margin: 0px;
}
.home {
  text-align: center;
}
h1 {
  font-size: 100px;
  letter-spacing: 0.2rem;
  color: black;
  margin-bottom: 40px;
}
h2 {
  margin: 40px 0px;
}

button {
  /* background:linear-gradient(rgb(181, 255, 245), rgb(117, 204, 206)); */
  border-radius: 5px;
  border-width: 0.5px;
  border-style: solid;
  border-color: rgb(158, 158, 158);
  color: #ff5035;
  /* font-weight:bold; */
  /* border-color: slategray; */

}

input,
textarea,
select,
button {
  font-size: 16px;
}
.h {
  color: #666;
  margin: 10px 0px;
}

hr {
  width: 50%;
}

ul {
  list-style-type: none;
  padding: 0;
  color: #666;
}
li {
  margin: 5px 0px;
}
</style>
