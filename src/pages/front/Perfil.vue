<template>
	<div class="div">
		
	<div class="loteria-interna">
		<div class="contenido-loteria"> 
			<img  src="@/assets/img/slide3.jpg" class="img-principal" alt="">
		</div>
		<div class="container contenido-loteria2">
			<div class="row align-items-center h-100">
				<div class="col-12 ">
					<h2>Perfil</h2>
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
    		<router-link :to="{path:'/register'}">Solicitar Cita </router-link>
    	</div>
    </div>	
    	<div class="row">
    		<div class="col-12">
    			<h3>Datos del Solicitante</h3>
    		</div>
    	</div>
		<div class="row justify-content-center">
				<p  class="col-12 col-md-6 col-lg-4"><strong>Nombre: </strong>lorem</p>
				<p  class="col-12 col-md-6 col-lg-4"><strong>Apellido: </strong>lorem</p>
				<p  class="col-12 col-md-6 col-lg-4"><strong>Cedula: </strong>lorem</p>
				<p  class="col-12 col-md-6 col-lg-4"><strong>Fecha de Nacimiento: </strong>lorem</p>
				<p  class="col-12 col-md-6 col-lg-4"><strong>Correo: </strong>lorem@lorem.com</p>
				<p  class="col-12 col-md-6 col-lg-4"><strong>Telefono: </strong>123 123</p>
			
    	</div>
    	<div class="row">
    		<div class="col-12">
    			<h3>Datos de la proxima cita</h3>
    		</div>
    	</div>
    	<div class="row my-5">
    		<div class="col-12">
    			<h3>Estado de tramites de Solicitudes</h3>
    		</div>
    	</div>
    	<div class="row">
    		<div class="col-12"></div>
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
