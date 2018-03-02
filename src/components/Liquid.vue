<template>
    <div class="home">
<input v-model="quantity" type="number">
        <select v-model="selected">
            <!-- <option disabled value=""> Please choose measursement Type</option> -->
            <option>Liter</option>
            <option>Fluid Ounces</option>
            <option>Gallon</option>
            <option>Pint</option>
            <option>Cup</option>
            </select>
<label> to </label>
            <select v-model="selected2">
            <!-- <option disabled value="">Choose</option> -->
            <option>Liter</option>
            <option>Fluid Ounces</option>
            <option>Gallon</option>
            <option>Pint</option>
            <option>Cup</option>
            </select>
            <!-- v-on:click.self.prevent -->
  <button v-on:click.self.prevent="convert">convert</button>
  <h2>{{result}}</h2>
  <div  v-if="history.length > 0">
  <label >History</label>
  </div>
  <ul >
    <li v-for="item in history"> <label>{{item}}</label></li>
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
      PINT_TO_CUP: 2,
      LITER_TO_CUP: 4.22675,
      GALLON_TO_CUP: 16,
      FL_ONZ_TO_CUP: 0.125,
      history: []
    };
  },
  methods: {
    convert: function() {
      console.log("I've been hit");
      this.result = "Results: ";
      var convertedToCups = 0;
      console.log(this.quantity);
      var quantityTemp = this.quantity; //Number(this.quantity);
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
      }
      fromCupToNew = fromCupToNew.toFixed(2);
      this.result += fromCupToNew + " " + this.selected2;
      if (fromCupToNew !== 1 && selected2 !== "Fluid Ounces") this.result += "s";

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

button {
  background:linear-gradient(cadetblue, pink);
  border-radius: 5px;
}

input, textarea, select, button {
  font-size:16px;

}


ul {
  list-style-type: none;
  padding:0;

}
li {
}

</style>
