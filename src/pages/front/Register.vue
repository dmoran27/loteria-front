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
			<div class="col-12" >
				<div class="input-control">	
					<input type="radio" id="personanatural" value="personanatural" v-model="tiporegistro">
					<label for="personanatural">Persona Natural</label>
				</div>

				<div class="input-control">	
					<input type="radio" id="organizacion" value="organizacion" v-model="tiporegistro">
					<label for="organizacion">Organizacion</label>
				</div>
				
			</div>
			<hr class="w-100 mb-5">	

	        <!--Grid column-->
	        <div class="col-md-12" v-if='tiporegistro!=""'>
	            
				    <form v-if="tiporegistro=='personanatural'">
				        <div class="row">
				          <div class="col-md-6">
				            <fg-input type="text"
				                      label="nombre *"
				                      placeholder="Ej: Maria"
				                      v-model="form_user_natural.nombre"
				                     >
				            </fg-input>
				          </div>
				          <div class="col-md-6">
				            <fg-input type="text"
				                      label="Apellido *"
				                      placeholder="Ej: Perez"
				                      v-model="form_user_natural.apellido"
				                     >
				            </fg-input>
				          </div>
				        </div>
				         <div class="row">
				          <div class="col-md-2">
				            <label for="tipod">Tipo * </label>
							    <select class="form-control" id="tipod" v-model="form_user_natural.tipodedocumento">
							      <option>V</option>
							      <option>E</option>
							      <option>G</option>
							      <option>J</option>
							    </select>
				          </div>
				           <div class="col-md-4">
				            <fg-input type="number"
				                      label="Cedula *"
				                      placeholder="Ej: 11111111"
				                      v-model="form_user_natural.cedula"
				                     >
				            </fg-input>
				          </div>

				        	 <div class="col-md-6">
				        	 	<label for="tipod">Fecha de Nacimiento * </label>
				             <flat-pickr
				                v-model="form_user_natural.fechanacimiento">
				                :config="config"                                                        
				                class="form-control" 
				                placeholder="Selecciona una fecha"               
				                name="date">
				        </flat-pickr>
				          </div>
				          
				        </div>
				        <div class="clearfix"></div>
				    </form>
				    <form v-if="tiporegistro!='personanatural'">
				        <div class="row">
				          <div class="col-md-12">
				            <fg-input type="text"
				                      label="Razon Social *"
				                      placeholder="Ej: Hospital Vida y Salud"
				                      v-model="form_user_entidad.razonsocial"
				                     >
				            </fg-input>
				          </div>
				          <div class="col-md-6">
				            <label for="tipod">Tipo de documento * </label>
							    <select class="form-control" id="tipod" v-model="form_user_entidad.tipo">
							      <option>V</option>
							      <option>E</option>
							      <option>G</option>
							      <option>J</option>
							    </select>
				          </div>
				           <div class="col-md-6">
				            <fg-input type="number"
				                      label="Numero de Identificacion *"
				                      placeholder="Ej: 11111111"
				                     >
				            </fg-input>
				          </div>
				         
				        </div>
				       

				        <div class="row">
				          <div class="col-md-12">
				            <div class="form-group">
				               <fg-input type="password"
				                      label="Contraseña *"
				                      placeholder="*****"
				                     >
				            </fg-input>
				            </div>
				          </div>
				           <div class="col-md-12">
				            <div class="form-group">
				               <fg-input type="password"
				                      label="Confirmacion de contraseña *"
				                      placeholder="*****"
				                     >
				            </fg-input>
				            </div>
				          </div>
				        </div>
				        <div class="clearfix"></div>
				    </form>
				    <form >
				        <div class="row">
				          <div class="col-md-6">
				            <fg-input type="text"
				                      label="Telefono *"
				                      placeholder="Ej: Maria"
				                     >
				            </fg-input>
				          </div>
				          <div class="col-md-6">
				            <fg-input type="text"
				                      label="Telefono (Opcional)"
				                      placeholder="Ej: Perez"
				                     >
				            </fg-input>
				          </div>
				        </div>
				         <div class="row">
				          <div class="col-md-6">
				            <label for="tipod">Tipo de documento * </label>
							    <select class="form-control" id="tipod">
							      <option>V</option>
							      <option>E</option>
							      <option>G</option>
							      <option>J</option>
							    </select>
				          </div>
				           <div class="col-md-6">
				            <fg-input type="number"
				                      label="Cedula *"
				                      placeholder="Ej: 11111111"
				                     >
				            </fg-input>
				          </div>
				         
				        </div>

				        <div class="row">
				        	 <div class="col-md-6">
				            <fg-input type="email"
				                      label="Correo"
				                      placeholder="Ej: correo@correo"
				                     >
				            </fg-input>
				          </div>

				        	 <div class="col-md-6">
				        	 	<label for="tipod">Fecha de Nacimiento * </label>
				             <flat-pickr
				                v-model="date"
				                :config="config"                                                        
				                class="form-control" 
				                placeholder="Selecciona una fecha"               
				                name="date">
				        </flat-pickr>
				          </div>
				          
				        </div>

				       

				        <div class="row">
				          <div class="col-md-12">
				            <div class="form-group">
				               <fg-input type="password"
				                      label="Contraseña *"
				                      placeholder="*****"
				                     >
				            </fg-input>
				            </div>
				          </div>
				           <div class="col-md-12">
				            <div class="form-group">
				               <fg-input type="password"
				                      label="Confirmacion de contraseña *"
				                      placeholder="*****"
				                     >
				            </fg-input>
				            </div>
				          </div>
				        </div>
				        <div class="text-center">
				          <p-button 
				                    class="submint"
				                    >
				            Enviar
				          </p-button>
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

import flatPickr from "vue-flatpickr-component";
import 'flatpickr/dist/flatpickr.css';
import OwlCarousel from 'vue-owl-carousel';
import { Carousel, Slide } from 'vue-carousel';

export default {
    components: { 
    	OwlCarousel ,
    	Carousel,
    	Slide,
    	flatPickr,
	  },
	  data() {
    return {
    	date: null,
    	tiporegistro:"",
    	form_user:{
    		email : " ",
            password :" ",
            password_confirmation :" ",
            direccion:" ",
            telefono1:" ",
            telefono2:" ",
            pais:" ",
            estado:" ",
            municipio:" ",
            parroquia:" ",
    	},
    	form_user_entidad:{
	    	razonsocial:" ",
	        tipodedocumento:"G",
	        nrodeidentificacion:" ",
    	},
    	form_user_natural:{
	    	tipodedocumento:"V",
	    	cedula:" ",
	        nombre:" ",
	        apellido:" ",
	    	fechanacimiento: null,
	        genero:" ",
    	},




        config: {
          mode:"single",
          minDate: "today",
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
	  methods: {
	    toggleSidebar() {
	      if (this.$sidebar.showSidebar) {
	        this.$sidebar.displaySidebar(false);
	      }
	    }
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
	

	
	
	
	
</style>
