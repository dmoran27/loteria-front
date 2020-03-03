
<template>
    <div class=" ">
      <div class="container py-5">
        <div class="row"> 
                 
            <div class="col-12 mb-4">
              <h2 class="text-center">{{titulo}} </h2>
            </div>
            </div>
        <div class="row" v-if="data" v-for=" (item, index)  in data"> 
            <div  class="col-6">
              <div  class="font-weight-bold"><p>{{index}}</p></div> 
            </div>
            <div class="col-6">
              <div><p>  {{item}}</p></div> 
            </div>
                    </div>
    
         </div>
    </div>
    </div>
</template>
 
<script>
  

  export default {
      props: {
          titulo: String,
          data: Object,
          columns: Array,
      },    


  }
      
</script>
 
<style>
    
</style>