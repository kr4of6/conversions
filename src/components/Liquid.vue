<template>
    <div class="home">
<input v-model="quantity" type="number">
        <select v-model="selected">
            <!-- <option disabled value=""> Please choose measursement Type</option> -->
             <option>Teaspoon</option>
            <option>Tablespoon</option>
            <option>Fluid Ounces</option>
            <option>Cup</option>
            <option>Pint</option>
            <option>Quart</option>
            <option>Liter</option>
            <option>Gallon</option>
            </select>
<label> to </label>
            <select v-model="selected2">
            <!-- <option disabled value="">Choose</option> -->
            <option>Teaspoon</option>
            <option>Tablespoon</option>
            <option>Fluid Ounces</option>
            <option>Cup</option>
            <option>Pint</option>
            <option>Quart</option>
            <option>Liter</option>
            <option>Gallon</option>
            </select>
            <!-- v-on:click.self.prevent -->
  <button v-on:click.self.prevent="convert">convert</button>
  <h2>{{result}}</h2>
  <div v-if="history.length > 0">
  <!-- <hr> -->
  <h2  class="h" >History</h2>
  </div>
  <ul >
    <li v-for="item in history.slice(0, 5)"> 
      <label>{{item}}</label>
      <button>Save</button>
      </li>
  </ul>
    </div>

</template>

<script>
export default {
  name: "Liquid",
  data() {
    return {
      selected: "",
      selected2: "",
      quantity: 0,
      result: "",
      TEA_TO_CUP: 0.0208333,
      TABLE_TO_CUP: 0.0625,
      FL_ONZ_TO_CUP: 0.125,
      PINT_TO_CUP: 2,
      QUART_TO_CUP: 4,
      GALLON_TO_CUP: 16,
      LITER_TO_CUP: 4.22675,
      history: []
    };
  },
  methods: {
    convert: function() {
      console.log("I've been hit");
      this.result = "Results: ";
      var convertedToCups = 0;
      console.log(this.quantity);
      var quantityTemp = Number(this.quantity);
      if (this.selected === "Pint") {
        convertedToCups = quantityTemp * this.PINT_TO_CUP;
      } else if (this.selected === "Gallon") {
        convertedToCups = quantityTemp * this.GALLON_TO_CUP;
      } else if (this.selected === "Liter") {
        convertedToCups = quantityTemp * this.LITER_TO_CUP;
      } else if (this.selected === "Fluid Ounces") {
        convertedToCups = quantityTemp * this.FL_ONZ_TO_CUP;
      } else if (this.selected === "Cup") {
        convertedToCups = quantityTemp;
      } else if (this.selected === "Quart") {
        convertedToCups = quantityTemp * this.QUART_TO_CUP;
      } else if (this.selected === "Teaspoon") {
        convertedToCups = quantityTemp * this.TEA_TO_CUP;
      } else if (this.selected === "Tablespoon") {
        convertedToCups = quantityTemp * this.TABLE_TO_CUP;
      }
      console.log(convertedToCups);
      // this.result += convertedToCups;
      var fromCupToNew = 0;
      if (this.selected2 === "Pint") {
        fromCupToNew = convertedToCups / this.PINT_TO_CUP;
      } else if (this.selected2 === "Gallon") {
        fromCupToNew = convertedToCups / this.GALLON_TO_CUP;
      } else if (this.selected2 === "Liter") {
        fromCupToNew = convertedToCups / this.LITER_TO_CUP;
      } else if (this.selected2 === "Fluid Ounces") {
        fromCupToNew = convertedToCups / this.FL_ONZ_TO_CUP;
      } else if (this.selected2 === "Cup") {
        fromCupToNew = convertedToCups;
      } else if (this.selected2 === "Quart") {
        fromCupToNew = convertedToCups / this.QUART_TO_CUP;
      } else if (this.selected2 === "Teaspoon") {
        fromCupToNew = convertedToCups / this.TEA_TO_CUP;
      } else if (this.selected2 === "Tablespoon") {
        fromCupToNew = convertedToCups / this.TABLE_TO_CUP;
      }
      fromCupToNew = fromCupToNew.toFixed(2);
      this.result += fromCupToNew + " " + this.selected2;
      if (fromCupToNew !== 1 && this.selected2 !== "Fluid Ounces")
        this.result += "s";

      if (history === undefined) {
        history = new Array();
      }
      var histRes =
        this.quantity +
        " " +
        this.selected +
        " = " +
        fromCupToNew +
        " " +
        this.selected2;
      this.history.unshift(histRes);
    }
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
