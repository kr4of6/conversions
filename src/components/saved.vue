<template>
    <ul>
    <li v-for="item in history">
        <label>
            {{item.conversion}}
        </label>
        <label class="recipe" v-if="item.recipe !== null">Recipe:{{item.recipe}} </label>
        <div class="no" v-else>
          <button v-if="clickedYes[item.id]"  v-on:click="toggleClick(item)">Add to recipe</button>
          <form class="no" v-else v-on:submit.prevent="updateRecipe(item.id)">
            <input v-model="recipe" placeholder="recipe name">
            <button>submit</button>
          </form>
        </div>
        <button v-on:click="del(item)">X</button>
    </li>
    </ul>
</template>

<script>
export default {
  name: "Liquid",
  data() {
    return {
      clickedYes:[],
      recipe: ''
    };
  },
  created: function()
  {

  },
  computed: {
    history: function()
    {
      if(this.$store.getters.savedConversions.length === 0)
        return [];
        if (this.clickedYes.length === 0){
          console.log("INIT")
          this.clickedYes = new Array(this.$store.getters.savedConversions[this.$store.getters.savedConversions.length-1].id + 1);
          this.clickedYes.fill(true);
        }
      console.log(this.clickedYes);
    console.log("this was called",this.$store.getters.savedConversions);
    return this.$store.getters.savedConversions
    },


  },
  methods: 
  {
    del: function(item){
      this.$store.dispatch('deleteConversion',item.id);
    },
    updateRecipe: function(id){
      this.$store.dispatch("updateConWithRecipe",{id:id,recipe:this.recipe})
    },
    toggleClick: function(item){
      console.log(item.id,this.clickedYes[item.id - 1]);
      this.$set(this.clickedYes,item.id,false);
      // this.clickedYes = new Array([false,false,false,false]);


    }, 
       clickedYesCheck: function(id)
    {
      return this.clickedYes[id-1];
    }
  }
  
};
</script>

<style scoped>
.no {
  display: inline;
}
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
  text-align: right;
  align-content: center;
  display: inline-block;
}
li {
  margin: 5px 0px;
}
.recipe {
  color: black;
  font-style: italic;
}
</style>
