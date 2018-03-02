<template>
<div class="foot">
           <div>
               <p>Brian Rasmussen and Kathryn Rasmussen : last updated 3/1/2018</p>
               <p>Copying is prohibitied or you will be converted to...</p>
           </div>
           <div>
               <p>Contact information:
                   <a href="mailto:brian.rasmussen55@gmail.com">
                       email</a></p>
               <p>Github:
                   <a href="https://github.com/kr4of6/dinnerClub">Github Link</a>
               </p>

           </div>
       </div>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>

<style scoped>
div {
   text-align: center;
   color: rgb(0, 0, 0);
   /* width: 100%; */
   box-sizing: border-box;
   padding: 10px;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   font-size: 12px;

}
.foot {
   /* height: 150px; */
   display:flex;
   flex-direction: row;
   width:100%;
  justify-content: center;
  color:#666;
}

.foot a {
   color:#666;
   text-decoration: none;
}
</style>