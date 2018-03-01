<template>
    <div class="home">
	<!-- <h1>Kitchen Conversions</h1> -->
	<img v-bind:src="imagePath"/>
    </div>
</template>

<script>
 export default {
     name: 'HomePage',
     data () {
	 return {
	     imagePath: '/static/images/ingredients.png'
	 }
     }
 }
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
     font-size: 3em;
     letter-spacing: .2rem;
     color: #999;
     margin-bottom: 40px;
 }
 img {
     width: 50%;
 }
</style>
