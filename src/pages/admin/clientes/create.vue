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
				          <div class="col-md-6">
				            <fg-input type="text"
				                      label="Nombre *"
				                      placeholder="Ej: Pedro"
				                      v-model="user.nombre"
				                      :inputclass="{ 'is-invalid': isActive.nombre}"
				                     >
                                <div class="text-danger" v-if='errors.nombre'>
                                    <small class="text-sm text-danger" v-for="error in errors.nombre">{{error}}</small>
                                </div>
				            </fg-input>
				          </div>
				          <div class="col-md-6">
				            <fg-input type="text"
				                      label="Apellido *"
				                      placeholder="Ej: Perez"
				                      v-model="user.apellido"
				                      :inputclass="{ 'is-invalid': isActive.apellido}"
				                     >
                                <div class="text-danger" v-if='errors.apellido'>
                                    <small class="text-sm text-danger" v-for="error in errors.apellido">{{error}}</small>
                                </div>
				            </fg-input>
				          </div>
				          
				        </div>
				         <div class="row">
				          <div class="col-12 col-md-2">
				            <label for="tipod">Tipo * </label>
							    <select class="form-control" id="tipod" v-model="user.tipodedocumento">
							      <option value="J">J</option>
							      <option value="G">G</option>
							    </select>
							    <div class="text-danger" v-if='errors.tipodedocumento'>
                                    <small class="text-sm text-danger" v-for="error in errors.tipodedocumento">{{error}}</small>
                                </div>
				          </div>
				           <div class="col-md-4">
				            <fg-input type="text"
				                      label="Cedula *"
				                      placeholder="Ej: 11111111"
				                      v-model="user.nroidentificacion"
				                      :inputclass="{ 'is-invalid': isActive.nroidentificacion}"
				                     >
				            	<div class="text-danger" v-if='errors.nroidentificacion'>
                                    <small class="text-sm text-danger" v-for="error in errors.nroidentificacion">{{error}}</small>
                                </div>
				            </fg-input>
				          </div>
						 <div class="col-md-6">
				        	 	<label for="tipod">Fecha de Nacimiento * </label>
				             <flat-pickr
				                v-model="user.fechanacimiento"
				                :config="config"                                                        
				                class="form-control" 
				                placeholder="Selecciona una fecha"               
				                name="date"
  								:inputclass="{ 'is-invalid': isActive.fechanacimiento}"
				                >

				        </flat-pickr>
				        <div class="text-danger" v-if='errors.fechanacimiento'>
                                    <small class="text-sm text-danger" v-for="error in errors.fechanacimiento">{{error}}</small>
                                </div>
				          </div>
				          
				        
				 
				        
				  		 <div class="col-md-6 col-lg-6">
				            <label for="genero">Genero * </label>
							    <select class="form-control" id="genero" v-model="user.genero">
							      <option value="F">Femenino</option>
							      <option value="M">Masculino</option>
							    </select>
							    <div class="text-danger" v-if='errors.genero'>
                                    <small class="text-sm text-danger" v-for="error in errors.genero">{{error}}</small>
                                </div>
				          </div>
						<div class="col-12 col-md-6 col-lg-6" :class="{ 'is-invalid-select': isActive.parroquia_id}">	
							<label for="">Departamento *</label>
								<v-select   							
								v-model="departamento_seleccionado"
			                    
			                    :options="departamentos"
        						label="nombre"
      							value="id"
      							hide-details
			                    ></v-select>
			                    <div class="text-danger" v-if='errors.id_departamento'>
                                    <small class="text-sm text-danger" v-for="error in errors.id_departamento">{{error}}</small>
                                </div>
				         </div>
				         
						</div>
				          
				 
				        <div class="row">
				  		 <div class="col-12 col-md-6 col-lg-4" :class="{ 'is-invalid-select': isActive.parroquia_id}">	
							 <fg-input type="text"
				                      label="Cargo *"
				                      placeholder="Ej: 11111111"
				                      v-model="user.departamento"
				                      :inputclass="{ 'is-invalid': isActive.departamento}"
				                     >
				            	<div class="text-danger" v-if='errors.departamento'>
                                    <small class="text-sm text-danger" v-for="error in errors.departamento">{{error}}</small>
                                </div>
				            </fg-input>
				         </div>
				          <div class="col-md-6 col-lg-4">
				            <fg-input type="text"
				                      label="Telefono *"
				                      placeholder="Ej: Maria"
             				          v-model="user.telefono1"
			                       :inputclass="{ 'is-invalid': isActive.telefono1}"
				                     >
				            <div class="text-danger" v-if='errors.razonsocial'>
                                    <small class="text-sm text-danger" v-for="error in errors.razonsocial">{{error}}</small>
                                </div>
				            </fg-input>
				          </div>
				          <div class="col-md-6 col-lg-4">
				            <fg-input type="text"
				                      label="Telefono *"
				                      placeholder="Ej: Perez"
				                      v-model="user.telefono2"
									:inputclass="{ 'is-invalid': isActive.telefono1}"
				                     >
				                     				            <div class="text-danger" v-if='errors.razonsocial'>
                                    <small class="text-sm text-danger" v-for="error in errors.razonsocial">{{error}}</small>
                                </div>

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
				            <div class="text-danger" v-if='errors.razonsocial'>
                                    <small class="text-sm text-danger" v-for="error in errors.razonsocial">{{error}}</small>
                                </div>
				            </fg-input>
				          </div>
				          <div class="col-12 col-md-6 col-lg-4"  :class="{ 'is-invalid-select': isActive.estado_id}" >
				          <label for="">Estado *</label>	
								<v-select   							
								v-model="estado_seleccionado"
								@input="changeEstado"
			                   
			                    :options="estados"
        						label="estado"
      							value="id"
      							hide-details
			                    ></v-select>
			                      <div class="text-danger" v-if='errors.razonsocial'>
                                    <small class="text-sm text-danger" v-for="error in errors.razonsocial">{{error}}</small>
                                </div>
				          </div>
				          <div class="col-12 col-md-6 col-lg-4" :class="{ 'is-invalid-select': isActive.municipio_id}">
				          <label for="">Municipio *</label>	
								<v-select   
															
								v-model="municipio_seleccionado"
								@input="changeMunicipio"
			                    
			                    :options="municipios"
        						label="municipio"
      							value="id"
      							hide-details
			                    ></v-select>
			                    <div class="text-danger" v-if='errors.razonsocial'>
                                    <small class="text-sm text-danger" v-for="error in errors.razonsocial">{{error}}</small>
                                </div>
				          </div>
						<div class="col-12 col-md-6 col-lg-4" :class="{ 'is-invalid-select': isActive.parroquia_id}">	
							<label for="">Parroquia *</label>
								<v-select   							
								v-model="parroquia_seleccionado"
			                    
			                    :options="parroquias"
        						label="parroquia"
      							value="id"
      							hide-details
			                    ></v-select>
			                    <div class="text-danger" v-if='errors.razonsocial'>
                                    <small class="text-sm text-danger" v-for="error in errors.razonsocial">{{error}}</small>
                                </div>
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
				            <div class="text-danger" v-if='errors.razonsocial'>
                                    <small class="text-sm text-danger" v-for="error in errors.razonsocial">{{error}}</small>
                                </div>
				            </fg-input>
							</div>
						</div>
				        
				        
				            <div class="row">
				          <div class="col-md-12">
				            <div class="form-group">
				               <fg-input type="password"
				                      label="Contraseña *"
				                      placeholder="*****"
				                      v-model="user.password"
				                      :inputclass="{ 'is-invalid': isActive.password}"
				                     >
								<div class="text-danger" v-if='errors.razonsocial'>
                                    <small class="text-sm text-danger" v-for="error in errors.razonsocial">{{error}}</small>
                                </div>
				            </fg-input>
				            </div>
				          </div>
				           <div class="col-md-12">
				            <div class="form-group">
				               <fg-input type="password"
				                      label="Confirmacion de contraseña *"
				                      v-model="user.password_confirmation"
				                      placeholder="*****"
				                      :inputclass="{ 'is-invalid': isActive.password_confirmation}"
				                     >
				            <div class="text-danger" v-if='errors.razonsocial'>
                                    <small class="text-sm text-danger" v-for="error in errors.razonsocial">{{error}}</small>
                                </div>
				            </fg-input>
				            </div>
				          </div>
				        </div>
				    
				        <div class="text-center">
				          
				          <a class="btn submint btn-default" @click="registroNatural()" >Registrarse</a>
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


  import flatPickr from 'vue-flatpickr-component';  
  import 'flatpickr/dist/flatpickr.css';
  import 'flatpickr/dist/themes/dark.css';
  import {Hindi} from 'flatpickr/dist/l10n/hi.js';

import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import axios from "axios";
import API_ENDPOINT from '@/environments/apiEndPoint';

export default {
    components: { 
    	
    	flatPickr,
    	vSelect,
	  },
	  data() {
    return {

    	date: null,
    	estados:[],
    	municipios:[],
    	parroquias:[],
    	departamentos:[],
    	departamento_seleccionado:'',
    	estado_seleccionado:'',
    	municipio_seleccionado:'',
    	parroquia_seleccionado:'',
    	isActive:{},
    	errors:[],
    	user:{
	        nombre:"",
	        apellido:"",
	        tipodedocumento:"V",
	    	nroidentificacion:"",
	    	id_departamento:null,
	    	cargo:"",
	    	fechanacimiento:'',
	        genero:"",
            telefono1:"",
            telefono2:"",
            direccion:"",
           	email:"", 
            password:"", 
            password_confirmation:"",
        },
        config: {
          mode:"single",
          dateFormat: "Y-m-d",
          onChange: function(selectedDates, dateStr, instance) {
            console.log(selectedDates+"/"+dateStr)
          },
          locale: {
            firstDayOfWeek: 1,
            weekdays: {
              shorthand: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
              longhand: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],         
            }, 
            months: {
              shorthand: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Оct', 'Nov', 'Dic'],
              longhand: ['Enero', 'Febrero', 'Мarzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            },
          },

        },
         
    
  }
  },
  created(){
  		this.est();
  		this.tipoO();
  },
	methods: {
							registroNatural: function(e){
             axios.post(API_ENDPOINT + 'auth/registro-organizacion',
              {
                    'razonsocial': this.user.razonsocial,
			        'tipodedocumento': this.user.tipodedocumento,
			    	'nroidentificacion': this.user.nroidentificacion,
			    	'id_tipoorganizacion': this.tipoorganizacion_seleccionado.id,
			        'genero': this.user.genero,
		            'telefono1': this.user.telefono1,
		            'telefono2': this.user.telefono2,
		            'direccion': this.user.direccion,
		           	'email': this.user.email,
		            'password': this.user.password,
		            'password_confirmation': this.user.password_confirmation,
		            'municipio_id':this.municipio_seleccionado.id,
		            'estado_id':this.estado_seleccionado.id,
		            'parroquia_id':this.parroquia_seleccionado.id,
              },
               {
                  headers: {
                     'Content-Type': 'application/json',
                     

                     
                  }
               }
               ).then(res => {
                        this.$notify({ group: 'auth', type:'success', title: 'Usuario Registrado Correctamente' });
                        console.log(res);
                        setTimeout(function(){
                            window.location.href="/login";
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
         tipoO(){
         		axios.get(API_ENDPOINT +'tipoorganizacion',{},{
	    		headers: {
                     'Content-Type': 'application/json',
                     

                     
                  }}).then((response) => {
	    		console.log(response);
                this.tipoorganizacion = response.data;
            });
					
		},

	    
	    est(){
	    	axios.get(API_ENDPOINT +'estados',{},{
	    		headers: {
                     'Content-Type': 'application/json',
                     

                  }}).then((response) => {
	    		
                this.estados = response.data;
            });
	    },
	    changeEstado(){
	    	this.municipios=[];
	    	axios.get(API_ENDPOINT +'municipios',
	    		{'estado_id': this.estado_seleccionado.id},
	    		{
	    		headers: {
                     'Content-Type': 'application/json',
                     

                     
                  }}).then((response) => {
	    		this.municipio_seleccionado="";
                this.municipios = response.data;
            });
	    },
	    changeMunicipio(){
	    	this.parroquia=[];
	    	axios.get(API_ENDPOINT +'parroquias',
	    		{'municipio_id': this.municipio_seleccionado.id},
	    		{
	    		headers: {
                     'Content-Type': 'application/json',
                     'Accept': 'application/json',
                     


 
                     
                  }}).then((response) => {
	    		this.parroquia_seleccionado="";
                this.parroquias = response.data;
            });

	    	
	    },
	    
	  
	  }
};
</script>

<style lang="scss">

	
	
</style>

