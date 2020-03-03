<template>
	<div class="div">

	<div class="contenido-internas">
		<div class="contactanos pb-5">
			  <!--div heading-->
   

    <div class="container">	
    	
		<div class="row justify-content-center">
			
	        <!--Grid column-->
	        <div class="col-md-12">
	            
				    <form>
				        <div class="row">
				          <div class="col-12">
				            <fg-input type="text"
				                      label="Nombre *"
				                      placeholder="Ej: Tesoreria"
				                      v-model="user.nombre"
				                      :inputclass="{ 'is-invalid': isActive.nombre}"
				                     >
				            	<div class="text-danger" v-if='errors.nombre'>
                                    <small class="text-sm text-danger" v-for="error in errors.nombre">{{error}}</small>
                                </div>
				            </fg-input>
				          </div>
				          
				        </div>
				         <div class="row">
				          <div class="col-12">
				            <label for="tipod">Descripcion * </label>
							    <textarea class="form-control"  placeholder="Ej: Encargado de..." :class="{ 'is-invalid': isActive.nombre}"
				                      v-model="user.descripcion"></textarea>
							    <div class="text-danger" v-if='errors.descripcion'>
                                    <small class="text-sm text-danger" v-for="error in errors.descripcion">{{error}}</small>
                                </div>
				          </div>
				          </div>
				        <div class="text-center">
				          
				          <a class="btn submint btn-default" @click="registro()" >Registrar</a>
				          
				        </div>

				        <div class="clearfix"></div>
				    </form>
				
	        </div>
        

    	</div>

    </div>
		</div>
	</div>
	</div>
</template>

<script>

import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import axios from "axios";
import API_ENDPOINT from '@/environments/apiEndPoint';

export default {
    components: { 
    	vSelect,
	  },
	  data() {
    return {
    	isActive:{},
    	errors:[],
    	user:{
	        descripcion:"",
			nombre:"",
        },
  	}
  },
	methods: {
		registro: function(e){
             axios.post(API_ENDPOINT + 'departamentos/',
              {
                    'nombre': this.user.nombre,
			        'descripcion': this.user.descripcion,
              },
               {
                headers: {
                     'Content-Type': 'application/json',
                     'Accept': 'application/json',
				}
               }
               ).then(res => {
                        this.$notify({ group: 'auth', type:'success', title: 'Departamento Registrado Correctamente' });
                        console.log(res);
                        setTimeout(function(){
                        	 window.location.reload();
                            
                        },2000);
                        
               }).catch( error=> {
                
	                if(error){
	                	this.errors=[];
		                this.isActive={};
		                for (let prop in  error.response.data) {
		                   this.isActive[prop]=true;
		                }
		                this.errors= error.response.data;
	                } 
              });

         },	    
	  
	  }
};
</script>

<style lang="scss">

</style>
