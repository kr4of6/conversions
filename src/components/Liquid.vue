<template>
    <div class="home">
	<!-- <h1>Kitchen Conversions</h1> -->
<p>Convert </p>
<input v-model.number="msg" type="number">

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
    </div>
</template>

<script>
export default {
  name: "Liquid",
    data() {
      return {
        selected:'',
        selected2:'',
        msg: ''
      };
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
