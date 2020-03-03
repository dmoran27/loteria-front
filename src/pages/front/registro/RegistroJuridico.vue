<template>
	<div class="div">
		
	<div class="loteria-interna">
		<div class="contenido-loteria"> 
			<img  src="@/assets/img/slide3.jpg" class="img-principal" alt="">
		</div>
		<div class="container contenido-loteria2">
			<div class="row align-items-center h-100">
				<div class="col-12 ">
					<h2>Registro</h2>
				</div>
			</div>
		</div>
	</div>

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
				            	<small class="text-danger" v-if='errors.razonsocial'>
                                  <ul>
                                    <li v-for="error in errors.razonsocial">{{error}}</li>
                                  </ul>
                                </small>
				            </fg-input>
				          </div>
				          
				        </div>
				         <div class="row">
				          <div class="col-2">
				            <label for="tipod">Tipo * </label>
							    <select class="form-control" id="tipod" v-model="user.tipodedocumento">
							      <option value="J">J</option>
							      <option value="G">G</option>
							    </select>
				          </div>
				           <div class="col-md-4">
				            <fg-input type="number"
				                      label="nroidentificacion *"
				                      placeholder="Ej: 11111111"
				                      v-model="user.nroidentificacion"
				                      :inputclass="{ 'is-invalid': isActive.nroidentificacion}"
				                     >
				            	<small class="text-danger" v-if='errors.nroidentificacion'>
                                  <ul>
                                    <li v-for="error in errors.nroidentificacion">{{error}}</li>
                                  </ul>
                                </small>
				            </fg-input>
				          </div>
						<div class="col-12 col-md-6 col-lg-4" :class="{ 'is-invalid-select': isActive.parroquia_id}">	
							<label for="">Tipo de Organizacion *</label>
								<v-select   							
								v-model="tipoorganizacion_seleccionado"
			                    
			                    :options="tipoorganizacion"
        						label="nombre"
      							value="id"
      							hide-details
			                    ></v-select>
			                    <small class="text-danger" v-if='errors.parroquia_id'>
                                  <ul>
                                    <li v-for="error in errors.parroquia_id">{{error}}</li>
                                  </ul>
                                </small>
				         </div>
						</div>
				          
				 
				        <div class="row">
				  		 
				          <div class="col-md-6 col-lg-4">
				            <fg-input type="text"
				                      label="Telefono *"
				                      placeholder="Ej: Maria"
             				          v-model="user.telefono1"
			                       :inputclass="{ 'is-invalid': isActive.telefono1}"
				                     >
				            <small class="text-danger" v-if='errors.telefono1'>
                                  <ul>
                                    <li v-for="error in errors.telefono1">{{error}}</li>
                                  </ul>
                                </small>
				            </fg-input>
				          </div>
				          <div class="col-md-6 col-lg-4">
				            <fg-input type="text"
				                      label="Telefono *"
				                      placeholder="Ej: Perez"
				                      v-model="user.telefono2"
									:inputclass="{ 'is-invalid': isActive.telefono1}"
				                     >
				                     				            <small class="text-danger" v-if='errors.telefono2'>
                                  <ul>
                                    <li v-for="error in errors.telefono2">{{error}}</li>
                                  </ul>
                                </small>

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
				            <small class="text-danger" v-if='errors.email'>
                                  <ul>
                                    <li v-for="error in errors.email">{{error}}</li>
                                  </ul>
                                </small>
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
			                      <small class="text-danger" v-if='errors.estado_id'>
                                  <ul>
                                    <li v-for="error in errors.estado_id">{{error}}</li>
                                  </ul>
                                </small> 
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
			                    <small class="text-danger" v-if='errors.municipio_id'>
                                  <ul>
                                    <li v-for="error in errors.municipio_id">{{error}}</li>
                                  </ul>
                                </small>
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
			                    <small class="text-danger" v-if='errors.parroquia_id'>
                                  <ul>
                                    <li v-for="error in errors.parroquia_id">{{error}}</li>
                                  </ul>
                                </small>
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
				            <small class="text-danger" v-if='errors.direccion'>
                                  <ul>
                                    <li v-for="error in errors.direccion">{{error}}</li>
                                  </ul>
                                </small>
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
								<small class="text-danger" v-if='errors.password'>
                                  <ul>
                                    <li v-for="error in errors.password">{{error}}</li>
                                  </ul>
                                </small>
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
				            <small class="text-danger" v-if='errors.password_confirmation'>
                                  <ul>
                                    <li v-for="error in errors.password_confirmation">{{error}}</li>
                                  </ul>
                                </small>
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
    	tipoorganizacion:[],
    	tipoorganizacion_seleccionado:'',
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
	    	id_tipoorganizacion: null,
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
$azul-oscuro: #052F5F;
	$azul: #3989aa;
	$azul-cielo: #78b8c3;
	$dorado: #edb032;
	$oscuro: #000;
	$gris: #6F8191;
	$ff: 'Roboto', sans-serif;

	.contenido-internas{
		padding: 100px 0px;
		.carousel-imagenes{
			img{
				height: 400px;
				object-fit: cover;
			}
		}
		
			h3, h2{
				font-weight: 900;
				color: $azul-oscuro;
				position: relative;
				font-size: 30px;
				margin-bottom: 30px;
				display: inline-block;
				 &:before{
			        content: "";
			        border-radius: 20px;
			        height: 4px;
			        width: 50%;
			        background: $dorado;
			        position: absolute;
			        bottom: -15px;
			        left: 0px;
			        box-shadow: 3px 3px 4px 0px #052f5f;
			      }
			}
			p,li{
				font-size: 18px;
				color: $oscuro;
				font-family: $ff;
				text-align: justify;
				margin: 10px 0px;

			}
			a{
				background: $azul-oscuro;
  color: #fff;
  font-size: 18px;
  padding: 20px;
  border-radius: 25px;
  margin: 30px 0px;
  float: right;
  text-transform:uppercase;
  &:hover{
  color: $azul-oscuro;
  background: #fff;
  border: 1px solid $azul-oscuro;
  }
			}
		}
	

	.is-invalid-select{
		.vs__dropdown-toggle{
				border: 1px solid #dc3545 !important;
		}
	}
	
	
	
</style>
