<template>
  <div>
  	
	<header class=" bg-white">
			<div class="container">	
				<div class="row justify-content-center justify-content-md-end">
				<div class="col-12 col-md-4">
					<div class="logo text-center text-md-left">
						<img  src="@/assets/img/logo.jpg" alt="">
					</div>
				</div>
				<div class="col-12 col-md-8">
					<div class="header-top text-center text-md-right">
						<nav>
						<ul class="p-0 d-flex justify-content-center justify-content-md-end flex-wrap">
							<li>
								 <router-link :to="{path:'/'}">Inicio</router-link>
							</li>
							 
					          <li>
					            <router-link :to="{path:'/beneficios'}">Beneficios</router-link>
					          </li>
					          <!--li>  
					            <router-link :to="{path:'/contactanos'}">Contactanos</router-link>
					          </li-->
					  
						</ul>
					</nav>

					
					 
				</div>
				<div class="header-content">
					<nav>
						<ul class="p-0 d-flex justify-content-center justify-content-md-end flex-wrap">
							
					          <li>  
					       		<router-link :to="{path:'/login'}" v-if='!token'>Iniciar Sesion</router-link>
					       		<a  @click.prevent="logout" v-else>Cerrar Sesion</a>
					          </li>
					          <li  v-if='token'>					            <router-link :to="{path:'/perfil'}">Perfil</router-link>
					          </li>
					          <drop-down title='Registrarse' v-if='!token'> 
					          	<router-link :to="{path:'/registro-natural'}" class='d-block'>Persona Natural</router-link>
					          	<router-link :to="{path:'/registro-juridico'}" class='d-block'>Organizacion</router-link>
					          </drop-down>
						</ul>
					</nav>

				</div>
				</div>
			</div>
			</div>		
	</header>
	
       <div class="content">
	    
	        <transition name="fade" mode="out-in">
	          <!-- your content here -->
	          <router-view></router-view>
	        </transition>
	   
	  </div>
	  <content-footer></content-footer>
    </div>
  
</template>

<script>
import ContentFooter from "./Footer.vue";
import Content from "../Content.vue";
import FlatPicker from "vue-flatpickr-component";
import OwlCarousel from 'vue-owl-carousel';
import { Carousel, Slide } from 'vue-carousel';
import axios from "axios";
import API_ENDPOINT from '@/environments/apiEndPoint';

export default {

    components: { 
    	OwlCarousel ,
    	Carousel,
    	Slide,
    	FlatPicker,
   		ContentFooter,
    	Content,
	  },
	  data() {
	     return {
	       token:false,
	     };
	   },
	   mounted: function () {
        bus.$on('logOut', (item) => {
            this.token=item;
            
        });
      },
      created(){
       this.isLog();
      },
	  methods: {
	    isLog() {
	    	if(localStorage.getItem('access_token')){
	    		this.token=true;
	    	}
	    	else{
	    		this.token=false;
	    	}
	    },
	    isLoggedd(){
	    	if(localStorage.access_token){
	    		this.token= true;
	    		axios.post(API_ENDPOINT +'auth/user',{},{
	    		headers: {
                     'Content-Type': 'application/json',
                     'Authorization': "Bearer " + localStorage.access_token,
                     
                  }}).then((response) => {
	    		console.log(response);
	    		window.auth_user = response;
	    	})
              }
	    	else{
	    		this.token= false;
	    	}



	    },
	    role(){
			if(localStorage.access_token){
	            axios.post(API_ENDPOINT +'auth/user',{},{
	            headers: {
	                 'Content-Type': 'application/json',
	                 'Authorization': "Bearer " + this.state.token,
	                 
	              }}).then((response) => {
	                localStorage.setItem('rol', res.data.response.data.rol[0].nombre);
	            })
	         }
		},
	    logout(){
	    	axios.post(API_ENDPOINT + 'auth/logout',
            
               {
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + localStorage.access_token,
                     
                  }
               }
               ).then(res => {
               		localStorage.removeItem('access_token')                 
                    this.$notify({ group: 'auth', type:'success', title: 'Sesion cerrada' });  
             		this.isLoggedd();  
             		setTimeout(function(){
                            window.location.href="/";
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

         }
	    }
	  }

</script>

<style lang="scss">
	$azul-oscuro: #052F5F;
	$azul: #3989aa;
	$azul-cielo: #78b8c3;
	$dorado: #edb032;
	$oscuro: #000;
	$gris: #6F8191;
	$ff: 'Roboto', sans-serif;
	.bg-azul-absolute{
			background: $azul;
			position: absolute;
			z-index: -1;
			top: 0px;
			width: 100%;
			height: 500px
		}
		body{
			overflow-x: hidden;
		}
	header{
		background: #fff;
		z-index: 11;
		 box-shadow: 3px 3px 20px -5px #052f5f;
		 position: fixed;
		 width: 100%;
		 @media screen and (max-width: 768px){
				position: relative;
		 }
		.logo{
			position: relative;
			img{
				width: 100px;
				height: 100px;
			}
		}
		.header-top{
			border-bottom: 2px solid $gris;
			nav ul{
				width: 100%;
				margin:0px;
				li{
					list-style: none;
					a{
						color: $azul-oscuro;
								font-size: 16px;
								font-weight: 300;
								text-transform: uppercase;
								font-family: $ff;
								font-weight: 700;
								display: inline-block;
								padding: 20px 10px;
								
								&:hover{
									color: $dorado;
									cursor: pointer;

								}
							}
						}

			}

		}
		.header-content{
			nav ul{
				width: 100%;
				margin:0px;
				li{
					list-style: none;
					a{
						display: inline-block;
						padding: 10px;
						color: $gris;
						font-family: $ff;
						font-size: 16px;
						font-weight: 700;
						border-bottom: 4px solid transparent;
												&:hover{
							color: $azul-oscuro;
							cursor: pointer;
							border-bottom: 4px solid $azul-oscuro;
						}
						
					}
				}
			}
			

		}
	}
</style>
