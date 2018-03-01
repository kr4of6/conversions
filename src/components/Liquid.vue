<template>
    <div class="home">
	<h1>Kitchen Conversions</h1>
	<h2>{{msg}}</h2>
    </div>
</template>

<script>
export default {
  name: "Liquid",
  data() {
    return {
      msg: "lol"
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
