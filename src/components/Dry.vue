<template>
    <div class="home">
<input v-model="quantity" type="number">
        <select v-model="selected">
            <!-- <option disabled value=""> Please choose measursement Type</option> -->
            <option>Ounces</option>
            <option>Gram</option>
            <option>Pound</option>
            <option>Kilogram</option>
            </select>
<label> to </label>
            <select v-model="selected2">
            <!-- <option disabled value="">Choose</option> -->
            <option>Ounces</option>
            <option>Gram</option>
            <option>Pound</option>
            <option>Kilogram</option>
            </select>
            <!-- v-on:click.self.prevent -->
  <button v-on:click.self.prevent="convertDry">convert</button>
  <h2>{{result}}</h2>
  <div v-if="history.length > 0">
  <!-- <hr> -->
  <h2  class="h" >History</h2>
  </div>
  <ul >
    <li v-for="item in history.slice(0, 5)"> <label>{{item}}</label></li>
  </ul>
    </div>

</template>

<script>
export default {
  name: "Dry",
  data() {
    return {
      selected: "",
      selected2: "",
      quantity: 0,
      result: "",
      OUNCES_TO_GRAM: 0.035274,
      POUND_TO_CUP: .00220462,
      KILOGRAM_TO_CUP: .001,
      history: []
    };
  },
  methods: {
    convertDry: function() {
      // console.log(this.selected);
      // console.log(this.selected2);
      this.result = "Results: ";
      var convertedToCups = 0;
       console.log(this.quantity);
      var quantityTemp = Number(this.quantity);
      if (this.selected === "Ounces") {
        convertedToCups = quantityTemp / this.OUNCES_TO_GRAM;
      } else if (this.selected === "Gram") {
        convertedToCups = quantityTemp;
      } else if (this.selected === "Pound") {
        convertedToCups = quantityTemp / this.POUND_TO_CUP;
      } else if (this.selected === "Kilogram") {
        convertedToCups = quantityTemp / this.KILOGRAM_TO_CUP;
      }
      console.log(convertedToCups);
      // this.result += convertedToCups;
      var fromCupToNew = 0;
      if (this.selected2 === "Ounces") {
        fromCupToNew = convertedToCups * this.OUNCES_TO_GRAM;
      } else if (this.selected2 === "Gram") {
        fromCupToNew = convertedToCups;
      } else if (this.selected2 === "Pound") {
        fromCupToNew = convertedToCups * this.POUND_TO_CUP;
      } else if (this.selected2 === "Kilogram") {
        fromCupToNew = convertedToCups * this.KILOGRAM_TO_CUP;
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
