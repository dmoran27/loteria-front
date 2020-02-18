<template>
	<div class="div">
		
	<div class="loteria">
		<div class="contenido-loteria"> 
			<img  src="@/assets/img/slide3.jpg" class="img-principal" alt="">
		</div>
		<div class="container contenido-loteria2">
			<div class="row align-items-center h-100">
				<div class="col-12 ">
					<h2>Loteria de Oriente</h2>
					<h4>La Loteria de la Gente</h4>
				</div>
				<div class="col-12 text-center">
					<a href="#"><i class="fa fa-angle-double-down"></i></a>
				</div>
			</div>
		</div>
	</div>

		<!--div class="bg-azul-oscuro nosotros">	
			<div class="container">	
				<div class="row align-items-center" id="nosotros">	
						<div class="col-12 col-md-6 carousel-imagenes">
							<carousel :scrollPerPage="true" :perPage="2" :perPageCustom="[[0, 1], [480, 1], [768, 1], [920, 1]]" :autoplay="true" :speed="1000"
						              :navigationEnabled="true" :loop="true" :paginationEnabled="false"  navigationNextLabel="<i class='fa fa-angle-right'></i>" navigationPrevLabel="<i class='fa fa-angle-left'></i>">
						        <slide>
						      <img  src="@/assets/img/slide1.jpg" class="w-100" alt="">
						      </slide>
						      <slide>
						      <img  src="@/assets/img/slide2.png" class="w-100" alt="">
						      </slide>
						  </carousel>
						</div>
						<div class="col-12 col-md-6 contenido d-flex flex-wrap justify-content-center justify-content-md-end">
							<h3>
								Quienes Somos?
							</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quas reprehenderit, repellat nobis consequatur libero necessitatibus nemo ad, fugit obcaecati, molestias accusantium rem atque! Numquam dolore earum beatae libero quis doloremque id sequi quasi delectus blanditiis expedita, quam mollitia, et odio ipsam esse eaque asperiores, praesentium. Veritatis eveniet hic quibusdam.
							</p>
						</div>
				</div>
			</div>
				
		</div>
		<div class="beneficios position-relative">	
				<div class="informacion"></div>
				<div class="container">	
					<div class="row">	
						<div class="col-12">
							<h2 class="text-center">Nuestros Beneficios</h2>
						</div>
					</div>
					<div class="row">	
						<div class="col-12 carousel-beneficios">
							<carousel :scrollPerPage="true" :perPage="2" :perPageCustom="[[0, 1], [480, 2], [768, 3], [920, 4]]" :autoplay="true" :hoverpause="true" :speed="1000"
						              :navigationEnabled="true" :loop="true" :paginationEnabled="false"  navigationNextLabel="<i class='fa fa-angle-right'></i>" navigationPrevLabel="<i class='fa fa-angle-left'></i>">
						        <slide>
						        	<div class="card">
						        		<div class="card-header">
						        			<h3>Beneficio1</h3>
						        		</div>
						        		<div class="card-body">
						        			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi minus incidunt quae tempora alias ...</p>
						        			<h4>Requisitos</h4>
						        			<ul>
						        				<li>Lorem ipsum dolor sit.</li>
						        				<li>Lorem ipsum dolor sit.</li>
						        				<li>Lorem ipsum dolor sit.</li>
						        				<li>...</li>
						        			</ul>
						        			<a href="">mas informacion<i class="fa fa-angle-double-right"></i></a>
						        		</div>
						        	</div>
						      
						      </slide>
						      <slide>
						        	<div class="card">
						        		<div class="card-header">
						        			<h3>Beneficio2</h3>
						        		</div>
						        		<div class="card-body">
						        			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi minus incidunt quae tempora alias ...</p>
						        			<h4>Requisitos</h4>
						        			<ul>
						        				<li>Lorem ipsum dolor sit.</li>
						        				<li>Lorem ipsum dolor sit.</li>
						        				<li>Lorem ipsum dolor sit.</li>
						        				<li>...</li>
						        			</ul>
						        			<a href="">mas informacion<i class="fa fa-angle-double-right"></i></a>
						        		</div>
						        	</div>
						      
						      </slide>
						       <slide>
						        	<div class="card">
						        		<div class="card-header">
						        			<h3>Beneficio3</h3>
						        		</div>
						        		<div class="card-body">
						        			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi minus incidunt quae tempora alias ...</p>
						        			<h4>Requisitos</h4>
						        			<ul>
						        				<li>Lorem ipsum dolor sit.</li>
						        				<li>Lorem ipsum dolor sit.</li>
						        				<li>Lorem ipsum dolor sit.</li>
						        				<li>...</li>
						        			</ul>
						        			<a href="">mas informacion<i class="fa fa-angle-double-right"></i></a>
						        		</div>
						        	</div>
						      
						      </slide>
						       <slide>
						        	<div class="card">
						        		<div class="card-header">
						        			<h3>Beneficio4</h3>
						        		</div>
						        		<div class="card-body">
						        			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi minus incidunt quae tempora alias ...</p>
						        			<h4>Requisitos</h4>
						        			<ul>
						        				<li>Lorem ipsum dolor sit.</li>
						        				<li>Lorem ipsum dolor sit.</li>
						        				<li>Lorem ipsum dolor sit.</li>
						        				<li>...</li>
						        			</ul>
						        			<a href="">mas informacion<i class="fa fa-angle-double-right"></i></a>
						        		</div>
						        	</div>
						      
						      </slide>
						       <slide>
						        	<div class="card">
						        		<div class="card-header">
						        			<h3>Beneficio5</h3>
						        		</div>
						        		<div class="card-body">
						        			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi minus incidunt quae tempora alias ...</p>
						        			<h4>Requisitos</h4>
						        			<ul>
						        				<li>Lorem ipsum dolor sit.</li>
						        				<li>Lorem ipsum dolor sit.</li>
						        				<li>Lorem ipsum dolor sit.</li>
						        				<li>...</li>
						        			</ul>
						        			<a href="">mas informacion<i class="fa fa-angle-double-right"></i></a>
						        		</div>
						        	</div>
						      
						      </slide>
						  </carousel>

						</div>
					</div>
				</div>
		</div-->
		
		<div class="bg-azul-oscuro beneficios cita" id="#cita">
			<div class="container">
				<div class="row  py-5">
					<div class="col-12 col-md-6">
						<h3>Deseas Optar por algun Beneficio??</h3>
						<p>Registrate, solicita una cita y recauda los documentos necesarios</p>
						
						<router-link :to="{path:'/registro-natural'}">Registrarse como persona Natural</router-link>
						<router-link :to="{path:'/registro-juridico'}">Registrarse como organizacion</router-link>
					</div>
					<div class="col-12 col-md-6 text-center text-md-left">
						<i class="fa fa-calendar"></i>
					</div>
					
				</div>
				<div class="row py-5">
					
					<div class="col-12 col-md-6 order-md-1">
						<h3>Deseas Verificar el estatus de tu solicitud??</h3>
						<p>Inicia Sesion YA...</p>
						<router-link :to="{path:'/login'}">Iniciar Sesion</router-link>
					</div>
					<div class="col-12 col-md-6 order-md-0 text-center text-md-left">
						<i class="fa fa-list-alt"></i>
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
.bb-azul{
	border-bottom: 4px solid $azul-oscuro;
}
	.nosotros{
		padding: 100px 0px;
		.carousel-imagenes{
			img{
				height: 400px;
				object-fit: cover;
			}
		}
		.contenido{
			display: flex;
    		flex-wrap: wrap;
			h3{
				font-weight: 900;
				color: #fff;
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
			        right: 0px;
			        box-shadow: 3px 3px 4px 0px #052f5f;
			      }
			}
			p{
				font-size: 18px;
				color: #fff;
				font-family: $ff;
				text-align: justify;
			}
		}
	}
	
	.beneficios{
		min-height: 300px;
		
		padding: 100px 0px;
		h2{
			font-size: 30px;
			font-weight: 900;
			color: $azul-oscuro;
			position: relative;
			margin-bottom: 30px;		
		}
		.carousel-beneficios{
			margin-bottom: 60px;
			.VueCarousel-slide{
				padding: 10px;
				.VueCarousel-navigation button{
					font-size: 20px !important;
					color: $azul-oscuro !important;
					font-weight: 700 !important;
				}
				.card{
					height: 100%;
					box-shadow: 2px 2px 8px -2px #052f5f;
					background: $dorado;
					h3{
						color: #fff;
						text-align:center;
						font-weight: bold;
						font-size: 	20px;
						text-transform: uppercase;
					}
					h4{
						color: #fff;
						font-weight: 700;
						font-size: 18px;
						text-transform: uppercase;
					}
					p, li{
						font-size: 16px;
						text-align: justify;
						color: #fff;
					}
					a{
						font-size: 	14px;
						color: #fff;
						font-weight: 900;
						text-transform: capitalize;
						float: right;
						&:hover{
							color: $azul
						}
					}
				}
			}
		}
	}
	
	.bg-azul{
		background: $azul;
		min-height: 300px;
	}
	.bg-dorado{
		background: $dorado;
		border-radius: 0px 100px 100px 0px;
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3) !important;

	}
	.bg-azul{
		background: $azul-cielo;
		min-height: 300px;
	}
	.bg-azul-oscuro{
		background: $azul-oscuro;
		min-height: 300px;
	}
	.informacion:after{
	    content: '';
	    width: 100%;
	    position: absolute;
	    bottom: 0em;
	    left: 0;
	    border-bottom: solid 100px $azul-cielo;
	    border-right: solid 100vw transparent;
	   
	    
	}

	 .informacion:before{
	    content: '';
	    height: 100%;
	    position: absolute;
	    bottom: 0em;
	    left: 0;
	    border-top: solid 100px $azul-oscuro;
	    border-left: solid 100vw transparent;
	   
	    
	}
	.bb-dorado{
		border-bottom: 4px solid $dorado;
	}
	.cita{
		position: relative;
		z-index: 1;
		h3{
			font-size: 40px;
			font-weight: 900;
			color: #fff;
			text-shadow: 3px 4px 4px $oscuro;
			@media screen and (max-width: 768px){
				text-align: center;
				font-size: 	25px;
		 }
		}
		p{
			font-size: 20px;
			font-weight: 400;
			color: #fff;
			margin-bottom: 	30px;
			@media screen and (max-width: 768px){
				text-align: center;
				font-size: 	16px;
		 }
		}
		i{
			font-size: 200px;
			color: #fff;
			text-shadow: 3px 4px 4px $oscuro;
			@media screen and (max-width: 768px){
				width: 100%;
				margin-top: 20px;
				font-size: 	100px;

		 }
			
		}
		a{
			display: block;
			background: rgba(#fff, .1);
			color: #fff;
			padding: 10px 20px;
			font-size: 18px;
			text-align: center;
			margin:10px 0px;
			font-weight: 	700;
				@media screen and (max-width: 768px){
		font-size: 	16px;		
		 }
			&:hover{
				background: #fff;
				cursor: pointer;
				color: #011627;
				font-weight: 	700;
			}
		}

		 &:before{
    content: '';
    position: absolute;
    bottom: -99px;
    left: 0;
    border-top: solid 100px $azul-oscuro;
    border-left: solid 100vw transparent;
}

	}

	.contactanos{
		h2{
			font-size: 40px;
			font-weight: 900;
			color: $azul-oscuro;
		}
		p{
			font-size: 16px;
			font-weight: 400;
			color: $oscuro;
			text-align:justify;
			padding: 20px 0px;
		}
	}
	
</style>
