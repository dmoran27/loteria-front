<template>
	<div class="div">
		
	<div class="loteria-interna">
		<div class="contenido-loteria"> 
			<img  src="@/assets/img/slide3.jpg" class="img-principal" alt="">
		</div>
		<div class="container contenido-loteria2">
			<div class="row align-items-center h-100">
				<div class="col-12 ">
					<h2>Contactenos</h2>
				</div>
			</div>
		</div>
	</div>

	<div class="contenido-internas">
		<div class="contactanos pb-5">
			  <!--div heading-->
   

    <div class="container">	
    	<div class="row">
    		<div class="col-12">
    			
    <p class="text-center w-responsive mx-auto mb-5">¿Tiene usted alguna pregunta? Por favor no dude en contactarnos directamente. Nuestro equipo volverá a usted dentro de
        en cuestión de horas para ayudarte.</p>
    		</div>
    	</div>
		<div class="row justify-content-center">

	        <!--Grid column-->
	        <div class="col-md-9">
	            <div>
				    <form >
				        <div class="row">
				          <div class="col-md-6">
				            <fg-input type="text"
				                      label="nombre"
				                      placeholder="Ej: Maria"
				                     >
				            </fg-input>
				          </div>
				          <div class="col-md-6">
				            <fg-input type="email"
				                      label="Correo"
				                      placeholder="Ej: correo@correo"
				                     >
				            </fg-input>
				          </div>
				        </div>

				        <div class="row">
				          <div class="col-md-12">
				            <fg-input type="text"
				                      label="Asunto"
				                      placeholder="Ej: Duda sobre Beneficios"
				                     >
				            </fg-input>
				          </div>
				        </div>

				       

				        <div class="row">
				          <div class="col-md-12">
				            <div class="form-group">
				              <label>Mensaje</label>
				              <textarea class="form-control"
				                        placeholder="Mensaje ..."
				                       >

				              </textarea>
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
	</div>
</template>

<script>

import FlatPicker from "vue-flatpickr-component";
import OwlCarousel from 'vue-owl-carousel';
import { Carousel, Slide } from 'vue-carousel';

export default {
    components: { 
    	OwlCarousel ,
    	Carousel,
    	Slide,
    	FlatPicker,
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
