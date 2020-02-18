<template>
	<div class="div">
		
	<div class="loteria-interna">
		<div class="contenido-loteria"> 
			<img  src="@/assets/img/slide3.jpg" class="img-principal" alt="">
		</div>
		<div class="container contenido-loteria2">
			<div class="row align-items-center h-100">
				<div class="col-12 ">
					<h2>Beneficios</h2>
				</div>
			</div>
		</div>
	</div>

	<div class="contenido-internas">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h2>Beneficio 1</h2>
				</div>
			</div>
			<div class="row align-items-center">
				
				<div class="col-12 col-md-6">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eum eligendi tenetur possimus beatae aspernatur consequuntur mollitia enim a accusantium autem, maiores assumenda atque facere voluptatem illo veniam fugiat, rerum illum minus, voluptates voluptate ratione temporibus molestias? Quos nostrum pariatur, facilis saepe minus, impedit beatae architecto, voluptatum placeat accusantium ratione voluptate cumque. Nemo saepe molestias illum veritatis accusamus porro, modi, quasi veniam quod quibusdam voluptas praesentium maxime ea impedit ipsa, itaque autem aperiam omnis tenetur. Labore hic aliquam qui quaerat eligendi, velit iste aspernatur odio? Doloribus rem quas, tempora. Voluptatem eum earum, sed! Ab quos, animi dolor deserunt rerum earum.</p>
				</div>
				<div class="col-12 col-md-6 carousel-imagenes">
					<carousel :scrollPerPage="true" :perPage="2" :perPageCustom="[[0, 1], [480, 1], [768, 1], [920, 1]]" :autoplay="true" :speed="1000"
						              :navigationEnabled="false" :loop="true" :paginationEnabled="false"  navigationNextLabel="<i class='fa fa-angle-right'></i>" navigationPrevLabel="<i class='fa fa-angle-left'></i>">
						        <slide>
						      <img  src="@/assets/img/slide1.jpg" class="w-100" alt="">
						      </slide>
						      <slide>
						      <img  src="@/assets/img/slide2.png" class="w-100" alt="">
						      </slide>
						  </carousel>
				</div>
				
			</div>
			<div class="row">
				<div class="col-12">
					<h3>Requisitos</h3>
				</div>
				<div class="col-12">
					<ul>
						<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minima vel odit asperiores doloribus praesentium eligendi, dolorum placeat. Aliquid, impedit.</li>
						<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minima vel odit asperiores doloribus praesentium eligendi, dolorum placeat. Aliquid, impedit.</li>
						<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minima vel odit asperiores doloribus praesentium eligendi, dolorum placeat. Aliquid, impedit.</li>
						<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minima vel odit asperiores doloribus praesentium eligendi, dolorum placeat. Aliquid, impedit.</li>
						<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minima vel odit asperiores doloribus praesentium eligendi, dolorum placeat. Aliquid, impedit.</li>
						<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minima vel odit asperiores doloribus praesentium eligendi, dolorum placeat. Aliquid, impedit.</li>
					</ul>
				</div>
				<div class="col-12">
					<router-link :to="{path:'/login'}">Solicitar Cita</router-link>
				</div>
			</div>
		</div>
	</div>

	<div class="otros-beneficios">
		<div class="container">	
			<div class="row">			<div class="col-12 carousel-beneficios">
							<carousel :scrollPerPage="true" :perPage="2" :perPageCustom="[[0, 1], [480, 2], [768, 3], [920, 4]]" :autoplay="true" :hoverpause="true" :speed="1000"
						              :navigationEnabled="true" :loop="true" :paginationEnabled="false"  navigationNextLabel="<i class='fa fa-angle-right'></i>" navigationPrevLabel="<i class='fa fa-angle-left'></i>">
						        <slide>
				   					<div class="card p-2" style="width: 18rem;">
									  <img class="card-img-top" src="@/assets/img/slide3.jpg" alt="Card image cap">
									  <div class="card-body">
									    <h3 class="card-title">Card title</h3>
									    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									    <a href="#" class="">Ver Mas...</a>
									  </div>
									</div>

						      </slide>
						       <slide>
				   					<div class="card p-2" style="width: 18rem;">
									  <img class="card-img-top" src="@/assets/img/slide3.jpg" alt="Card image cap">
									  <div class="card-body">
									    <h3 class="card-title">Card title</h3>
									    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									    <a href="#" class="">Ver Mas...</a>
									  </div>
									</div>

						      </slide>
						       <slide>
				   					<div class="card p-2" style="width: 18rem;">
									  <img class="card-img-top" src="@/assets/img/slide3.jpg" alt="Card image cap">
									  <div class="card-body">
									    <h3 class="card-title">Card title</h3>
									    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									    <a href="#" class="">Ver Mas...</a>
									  </div>
									</div>

						      </slide>
						       <slide>
				   					<div class="card p-2" style="width: 18rem;">
									  <img class="card-img-top" src="@/assets/img/slide3.jpg" alt="Card image cap">
									  <div class="card-body">
									    <h3 class="card-title">Card title</h3>
									    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									    <a href="#" class="">Ver Mas...</a>
									  </div>
									</div>

						      </slide>
						       <slide>
				   					<div class="card p-2" style="width: 18rem;">
									  <img class="card-img-top" src="@/assets/img/slide3.jpg" alt="Card image cap">
									  <div class="card-body">
									    <h3 class="card-title">Card title</h3>
									    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									    <a href="#" class="">Ver Mas...</a>
									  </div>
									</div>

						      </slide>
						  </carousel>

						</div></div></div>
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
