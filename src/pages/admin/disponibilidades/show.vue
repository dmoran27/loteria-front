
<template>
    <div class=" ">
      <div class="container">
        <div class="row"> 
                 
            <div class="col-12 mb-4">
              <h2 class="text-center">{{titulo}} </h2>
            </div>
            </div>
        <div class="row"> 
            <div v-if="columns" class="col-6">
              <div v-for=" columns in columns" class="font-weight-bold"><p>{{columns}}</p></div> 
            </div>
            <div v-if="data" class="col-6">
              <div v-for=" data in data"><p>  {{data}}</p></div> 
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