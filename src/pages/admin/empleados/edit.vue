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
							    <select class="form-control" id="tipod" v-model="user.tipodedocumento" :class="{ 'is-invalid': isActive.tipodedocumento}">
							      <option value="V">V</option>
							      <option value="E">E</option>
							    </select>
							    <div class="text-danger" v-if='errors.tipodedocumento'>
                                    <small class="text-sm text-danger" v-for="error in errors.tipodedocumento">{{error}}</small>
                                </div>
				          </div>
				           <div class="col-md-4">
				            <fg-input type="text"
				                      label="Cedula *"
				                      placeholder="Ej: 11111111"
				                      v-model="user.cedula"
				                      :inputclass="{ 'is-invalid': isActive.cedula}"
				                     >
				            	<div class="text-danger" v-if='errors.cedula'>
                                    <small class="text-sm text-danger" v-for="error in errors.cedula">{{error}}</small>
                                </div>
				            </fg-input>
				          </div>
						 <div class="col-md-6" >
				        	 	<label for="tipod">Fecha de Nacimiento * </label>
				             <flat-pickr
				                v-model="user.fechanacimiento"
				                :config="config"                                                        
				                class="form-control" 
				                placeholder="Selecciona una fecha"               
				                name="date"
  								:class="{ 'is-invalid': isActive.fechanacimiento}"
				                >

				        </flat-pickr>
				        <div class="text-danger" v-if='errors.fechanacimiento'>
                                    <small class="text-sm text-danger" v-for="error in errors.fechanacimiento">{{error}}</small>
                                </div>
				          </div>
				          
				        
				 
				        
				  		 <div class="col-md-6 col-lg-6">
				            <label for="genero">Genero * </label>
							    <select class="form-control" id="genero" v-model="user.genero " :class="{ 'is-invalid-select': isActive.genero}">
							      <option value="F">Femenino</option>
							      <option value="M">Masculino</option>
							    </select>
							    <div class="text-danger" v-if='errors.genero'>
                                    <small class="text-sm text-danger" v-for="error in errors.genero">{{error}}</small>
                                </div>
				          </div>
						<div class="col-12 col-md-6 col-lg-6" :class="{ 'is-invalid-select': isActive.roles}">	
							<label for="">Rol *</label>
								<v-select   							
								v-model="user.rol_id"
			                     
			                    :options="roles"
        						label="nombre"
      							value="id"
      							hide-details
			                    ></v-select>
			                    <div class="text-danger" v-if='errors.roles'>
                                    <small class="text-sm text-danger" v-for="error in errors.roles">{{error}}</small>
                                </div>
				         </div>
				         <div class="col-12 col-md-6 col-lg-6" :class="{ 'is-invalid-select': isActive.id_departamento}">	
							<label for="">Departamento *</label>
								<v-select   							
								v-model="user.id_departamento"
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
				  		 <div class="col-12 col-md-6 col-lg-4" >	
							 <fg-input type="text"
				                      label="Cargo *"
				                      placeholder="Ej: 11111111"
				                      v-model="user.cargo"
				                      :class="{ 'is-invalid': isActive.cargo}"
				                     >
				            	<div class="text-danger" v-if='errors.cargo'>
                                    <small class="text-sm text-danger" v-for="error in errors.cargo">{{error}}</small>
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
				            <div class="text-danger" v-if='errors.telefono1'>
                                    <small class="text-sm text-danger" v-for="error in errors.telefono1">{{error}}</small>
                                </div>
				            </fg-input>
				          </div>
				          <div class="col-md-6 col-lg-4">
				            <fg-input type="text"
				                      label="Telefono *"
				                      placeholder="Ej: Perez"
				                      v-model="user.telefono2"
									:inputclass="{ 'is-invalid': isActive.telefono2}"
				                     >
				                     				            <div class="text-danger" v-if='errors.telefono2'>
                                    <small class="text-sm text-danger" v-for="error in errors.telefono2">{{error}}</small>
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
				            <div class="text-danger" v-if='errors.email'>
                                    <small class="text-sm text-danger" v-for="error in errors.email">{{error}}</small>
                                </div>
				            </fg-input>
				          </div>
				          <div class="col-12 col-md-6 col-lg-4"  :class="{ 'is-invalid-select': isActive.estado_id}" >
				          <label for="">Estado *</label>	
								<v-select   							
								v-model="user.estado_id"
								@input="changeEstado"
			                   :class="{ 'is-invalid': isActive.estado_id}"
			                    :options="estados"
        						label="estado"
      							value="id"
      							hide-details
			                    ></v-select>
			                      <div class="text-danger" v-if='errors.estado_id'>
                                    <small class="text-sm text-danger" v-for="error in errors.estado_id">{{error}}</small>
                                </div>
				          </div>
				          <div class="col-12 col-md-6 col-lg-4" :class="{ 'is-invalid-select': isActive.municipio_id}">
				          <label for="">Municipio *</label>	
								<v-select   
															
								v-model="user.municipio_id"
								@input="changeMunicipio"
			                    :class="{ 'is-invalid': isActive.municipio_id}"
			                    :options="municipios"
        						label="municipio"
      							value="id"
      							hide-details
			                    ></v-select>
			                    <div class="text-danger" v-if='errors.municipio_id'>
                                    <small class="text-sm text-danger" v-for="error in errors.municipio_id">{{error}}</small>
                                </div>
				          </div>
						<div class="col-12 col-md-6 col-lg-4" :class="{ 'is-invalid-select': isActive.parroquia_id}">	
							<label for="">Parroquia *</label>
								<v-select   							
								v-model="user.parroquia_id"
			                    :class="{ 'is-invalid': isActive.parroquia_id}"
			                    :options="parroquias"
        						label="parroquia"
      							value="id"
      							hide-details
			                    ></v-select>
			                    <div class="text-danger" v-if='errors.parroquia_id'>
                                    <small class="text-sm text-danger" v-for="error in errors.parroquia_id">{{error}}</small>
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
				            <div class="text-danger" v-if='errors.direccion'>
                                    <small class="text-sm text-danger" v-for="error in errors.direccion">{{error}}</small>
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
								<div class="text-danger" v-if='errors.password'>
                                    <small class="text-sm text-danger" v-for="error in errors.password">{{error}}</small>
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
				            <div class="text-danger" v-if='errors.password_confirmation'>
                                    <small class="text-sm text-danger" v-for="error in errors.password_confirmation">{{error}}</small>
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
    	data: {},
    	date: null,
    	estados:[],
    	roles:[],
    	municipios:[],
    	parroquias:[],
    	departamentos:[],
    	isActive:{},
    	errors:[],
    	user:{
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
  	this.empleado();
  		this.est();
  		this.tipoO();
  		this.rol();
  		for (var i = 0; i < this.estados.length; i++) {
  			if(this.estados[i].id==this.data.estado_id){
  				this.user.estado_id=this.estados[i];		
  			}
  		}
  		for (var i = 0; i < this.departamentos.length; i++) {
  			if(this.departamentos[i].id==this.data.id_departamento){
  				this.user.id_departamento=this.departamentos[i];
  			}
  		}
  		for (var i = 0; i < this.roles.length; i++) {
  			if(this.roles[i].id==this.data.rol_id){
  				this.user.rol_id=this.roles[i];
  			}
  		}
  },
	methods: {
		empleado: function(){
			 
			 axios.get(API_ENDPOINT + 'empleados/'+ this.$route.params.id+'/',
              { 
		},  
               {
                  headers: {
                     'Content-Type': 'application/json',
                     

                     
                  }
               }
               ).then(res => {
                       
                        console.log(res.data[0]);

	        this.user.id_departamento=res.data[0].departamentos;
			this.user.tipodedocumento=res.data[0].tipodedocumento;
			this.user.cedula=res.data[0].cedula;
			this.user.user_id=res.data[0].user_id;
			this.user.nombre=res.data[0].nombre;
			this.user.apellido=res.data[0].apellido;
			this.user.fechanacimiento=res.data[0].fechanacimiento;
			this.user.cargo=res.data[0].cargo;
			this.user.genero=res.data[0].genero;
			this.user.telefono1=res.data[0].users.telefono1;
			this.user.telefono2=res.data[0].users.telefono2;
			this.user.direccion=res.data[0].users.direccion;
			this.user.email=res.data[0].users.email;
			this.user.password=res.data[0].users.password;
			this.user.password_confirmation=res.data[0].users.password_confirmation;
			this.user.municipio_id=res.data[0].users.municipio_id;
			this.user.estado_id=res.data[0].users.estado_id;
			this.user.parroquia_id=res.data[0].users.parroquia_id;
			this.user.rol_id=res.data[0].rol_id;
			this.user.id=res.data[0].id;
			
               }).catch( error=> {
                console.log(error)
              });},
		registroNatural: function(e){
              axios.put(API_ENDPOINT + 'empleados/'+this.user.id+'/',
              
this.user ,             
               {
                  headers: {
                     'Content-Type': 'application/json',
                     

                     
                  }
               }
               ).then(res => {
                        this.$notify({ group: 'auth', type:'success', title: 'Usuario Registrado Correctamente' });
                        console.log(res);
                        setTimeout(function(){ window.location.reload();},2000);
                        
                        
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
         		axios.get(API_ENDPOINT +'departamento',{},{
	    		headers: {
                     'Content-Type': 'application/json',
                     

                     
                  }}).then((response) => {
	    		console.log(response);
                this.departamentos = response.data;
            });
					
		},

         rol(){
         		axios.get(API_ENDPOINT +'roles',{},{
	    		headers: {
                     'Content-Type': 'application/json',
                     

                     
                  }}).then((response) => {
	    		console.log(response);
                this.roles = response.data;
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
	    		{'estado_id': this.user.estado_id.id},
	    		{
	    		headers: {
                     'Content-Type': 'application/json',
                     

                     
                  }}).then((response) => {
	    		this.user.municipio_id="";
                this.municipios = response.data;
            });
	    },
	    changeMunicipio(){
	    	this.parroquia=[];
	    	axios.get(API_ENDPOINT +'parroquias',
	    		{'municipio_id': this.user.municipio_id.id},
	    		{
	    		headers: {
                     'Content-Type': 'application/json',
                     'Accept': 'application/json',
                     


 
                     
                  }}).then((response) => {
	    		this.user.parroquia_id="";
                this.parroquias = response.data;
            });

	    	
	    },
	    
	  
	  }
};
</script>

<style lang="scss">

	
</style>
