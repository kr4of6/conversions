<template>
    <div class="home">
	<!-- <h1>Kitchen Conversions</h1> -->
<p>Convert </p>
<input v-model.number="quantity" type="number">

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
    </div>

</template>

<script>
export default {
  PINT_TO_CUP:2,
  LITER_TO_CUP: 4.22675,
  GALLON_TO_CUP: 16,
  FL_ONZ_TO_CUP : .125,

  name: "Liquid",
  data() {
    return {
      selected: "",
      selected2: "",
      quantity: 0,
      result: ""
    };
  },
  methods: {
    convert: function() {
      console.log("I've been hit");
      this.result = "Results: ";
      var convertedToCups = 0;
            console.log(this.quantity);

      if (this.selected === "Pint")
      {
        convertedToCups = this.quantity /this.PINT_TO_CUP;
      }
       else if (this.selected === "Gallon") {
         convertedToCups = this.quantity / this.GALLON_TO_CUP;
      }
      else if (this.selected === "Liter") {
         convertedToCups = this.quantity / this.LITER_TO_CUP;
      }
      else if (this.selected === "Fluid Ounces") {
         convertedToCups = this.quantity / this.FL_ONZ_TO_CUP;
      }
      console.log(convertedToCups);
      this.result += convertedToCups;
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
img {
  width: 50%;
}
</style>
