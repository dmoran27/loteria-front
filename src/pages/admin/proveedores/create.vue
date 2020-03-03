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
				                      label="Razon Social *"
				                      placeholder="Ej: Maria"
				                      v-model="user.razonsocial"
				                      :inputclass="{ 'is-invalid': isActive.razonsocial}"
				                     >
				            	<div class="text-danger" v-if='errors.razonsocial'>
                                    <small class="text-sm text-danger" v-for="error in errors.razonsocial">{{error}}</small>
                                </div>
				            </fg-input>
				          </div>
				          
				        </div>
				         <div class="row">
				          <div class="col-12 col-md-2">
				            <label for="tipod">Tipo * </label>
							    <select class="form-control" id="tipod" v-model="user.tipodedocumento" :class="{ 'is-invalid': isActive.tipodedocumento}">
							      <option value="J">J</option>
							      <option value="G">G</option>
							    </select>
							    <div class="text-danger" v-if='errors.tipodedocumento'>
                                    <small class="text-sm text-danger" v-for="error in errors.tipodedocumento">{{error}}</small>
                                </div>
				          </div>
				           <div class="col-md-4">
				            <fg-input type="number"
				                      label="nroidentificacion *"
				                      placeholder="Ej: 11111111"
				                      v-model="user.nroidentificacion"
				                      :inputclass="{ 'is-invalid': isActive.nroidentificacion}"
				                     >
				            	<div class="text-danger" v-if='errors.nroidentificacion'>
                                    <small class="text-sm text-danger" v-for="error in errors.nroidentificacion">{{error}}</small>
                                </div>
				            </fg-input>
				          </div>
				          <div class="col-md-6 col-lg-3">
				            <fg-input type="text"
				                      label="Telefono *"
				                      placeholder="Ej: Maria"
             				          v-model="user.telefono1"
			                       :inputclass="{ 'is-invalid': isActive.telefono1}"
				                     >
				            <div class="text-danger" v-if='errors.telefono1'>
                                    <small class="text-sm text-danger" v-for="error in errors.telefono1">{{error}}</small>
                                </div>
				            </fg-input>
				          </div>
				          <div class="col-md-12 col-lg-3">
				            <fg-input type="text"
				                      label="Telefono ( Opcional )"
				                      placeholder="Ej: Perez"
				                      v-model="user.telefono2"
									
				                     >

				            </fg-input>
				          </div>
						
						</div>
				        
				        <div class="row">
				        	 <div class="col-12">
				            <fg-input type="email"

				                      label="Correo *"
				                      placeholder="Ej: correo@correo"
				                      v-model="user.email"
			                       :inputclass="{ 'is-invalid': isActive.email}"
				                     >
				            <div class="text-danger" v-if='errors.email'>
                                    <small class="text-sm text-danger" v-for="error in errors.email">{{error}}</small>
                                </div>
				            </fg-input>
				          </div>
				      </div>
						<div class="row mt-3">	
							<div class="col-12">	
								 <fg-input type="textarea"
				                      label="Diseccion"
				                      placeholder="Ej: correo@correo"
				                      v-model="user.direccion"
			                       :inputclass="{ 'is-invalid': isActive.direccion}"
				                     >
				            <div class="text-danger" v-if='errors.direccion'>
                                    <small class="text-sm text-danger" v-for="error in errors.direccion">{{error}}</small>
                                </div>
				            </fg-input>
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
	        tipodedocumento:"",
	    	nroidentificacion:"",
            telefono1:"",
            telefono2:"",
            direccion:"",
           	email:"", 
			razonsocial:"",
        },
  	}
  },
	methods: {
		registro: function(e){
             axios.post(API_ENDPOINT + 'proveedores/',
              {
                    'razonsocial': this.user.razonsocial,
			        'tipodedocumento': this.user.tipodedocumento,
			    	'nroidentificacion': this.user.nroidentificacion,
		            'telefono1': this.user.telefono1,
		            'telefono2': this.user.telefono2,
		            'direccion': this.user.direccion,
		           	'email': this.user.email,
              },
               {
                headers: {
                     'Content-Type': 'application/json',
                     'Accept': 'application/json',
				}
               }
               ).then(res => {
                        this.$notify({ group: 'auth', type:'success', title: 'Proveedor Registrado Correctamente' });
                        console.log(res);
                        setTimeout(function(){
                            router.push({ name: "/admin/proveedores"});
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
