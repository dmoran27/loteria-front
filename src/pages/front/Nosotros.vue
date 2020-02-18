<template>
	<div class="div">
		
	<div class="loteria-interna">
		<div class="contenido-loteria"> 
			<img  src="@/assets/img/slide3.jpg" class="img-principal" alt="">
		</div>
		<div class="container contenido-loteria2">
			<div class="row align-items-center h-100">
				<div class="col-12 ">
					<h2>Sobre Nosotros</h2>
				</div>
			</div>
		</div>
	</div>

	<div class="contenido-internas">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h2>Quienes somos??</h2>
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
			<div class="row align-items-center">
				
				<div class="col-12 col-md-6 order-md-1">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eum eligendi tenetur possimus beatae aspernatur consequuntur mollitia enim a accusantium autem, maiores assumenda atque facere voluptatem illo veniam fugiat, rerum illum minus, voluptates voluptate ratione temporibus molestias? Quos nostrum pariatur, facilis saepe minus, impedit beatae architecto, voluptatum placeat accusantium ratione voluptate cumque. Nemo saepe molestias illum veritatis accusamus porro, modi, quasi veniam quod quibusdam voluptas praesentium maxime ea impedit ipsa, itaque autem aperiam omnis tenetur. Labore hic aliquam qui quaerat eligendi, velit iste aspernatur odio? Doloribus rem quas, tempora. Voluptatem eum earum, sed! Ab quos, animi dolor deserunt rerum earum.</p>
				</div>
				<div class="col-12 col-md-6 carousel-imagenes order-md-0 mt-5">
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
			<div class="row align-items-center mt-5">
				<div class="col-12 text-center">
					<h3>Que Hacemos?</h3>
				</div>
				<div class="col-12">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eum eligendi tenetur possimus beatae aspernatur consequuntur mollitia enim a accusantium autem, maiores assumenda atque facere voluptatem illo veniam fugiat, rerum illum minus, voluptates voluptate ratione temporibus molestias? Quos nostrum pariatur, facilis saepe minus, impedit beatae architecto, voluptatum placeat accusantium ratione voluptate cumque. Nemo saepe molestias illum veritatis accusamus porro, modi, quasi veniam quod quibusdam voluptas praesentium maxime ea impedit ipsa, itaque autem aperiam omnis tenetur. Labore hic aliquam qui quaerat eligendi, velit iste aspernatur odio? Doloribus rem quas, tempora. Voluptatem eum earum, sed! Ab quos, animi dolor deserunt rerum earum.</p>
				</div>
				
				
			</div>

			
		</div>
	</div>

	<div class="otros-beneficios">
		
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
