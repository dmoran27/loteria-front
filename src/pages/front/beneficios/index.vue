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
		<div class="container contenido-loteria2 my-5">
			<div class="row align-items-center h-100">
				<div class="col-12 col-md-6 col-lg-6 ">
					<div class="card" style="width: 18rem;">
					  <img class="card-img-top" src="@/assets/img/slide3.jpg" alt="Card image cap">
					  <div class="card-body">
					    <h3 class="card-title">Card title</h3>
					    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					    <a href="#" class="">Ver Mas...</a>
					  </div>
					</div>
				</div>
			</div>
		</div>
	
	</div>
</template>

<script>

export default {
    components: { 
    	
	  },
	  methods: {
	    
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

	
		.card{
			h3{
				font-weight: 900;
				color: $azul-oscuro;
				position: relative;
				font-size: 30px;
				margin-bottom: 30px;
				display: inline-block;
				 
			}
			p{
				font-size: 18px;
				color: $oscuro;
				font-family: $ff;
				text-align: justify;
				margin: 10px 0px;

			}
			a{
				
				  color: $oscuro;
				  font-size: 18px;
				  padding: 20px;
				  border-radius: 25px;
				  margin: 30px 0px;
				  float: right;
				  text-transform:uppercase;
				  &:hover{
				  color: $azul-oscuro;
				  }
			}
		}
	
	
	
	
	
</style>
