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

				        	 <div class="col-12
				        	 ">
				        	 	<label for="tipod">Fecha * </label>
					             <flat-pickr
					                v-model="user.fecha"
					                :config="config"                                                        
					                class="form-control" 
					                placeholder="Selecciona una fecha"               
					                name="date"
	  								:inputclass="{ 'is-invalid': isActive.fecha}"
					                >

					        	</flat-pickr>
				        		<small class="text-danger" v-if='errors.fecha'>
                                  <ul>
                                    <li v-for="error in errors.fecha">{{error}}</li>
                                  </ul>
                                </small>
				          	</div>
				          
				        	<div class="col-12
				        	">
				        		<label for="tipod">Hora de inicio * </label>
					 
						             <flat-pickr
						                v-model="user.horainicio"
						                :config="config2"                                                        
						                class="form-control" 
						                placeholder="Selecciona una fecha"               
						                name="date"
		  								:inputclass="{ 'is-invalid': isActive.horainicio}"
						                >
					        	</flat-pickr>
					        	<small class="text-danger" v-if='errors.horainicio'>
	                                  <ul>
	                                    <li v-for="error in errors.horainicio">{{error}}</li>
	                                  </ul>
	                            </small>
					        </div>
				          	<div class="col-12
				          	">
				        		<label for="tipod">Hora Final * </label>
					 
						             <flat-pickr
						                v-model="user.horafin"
						                :config="config2"                                                        
						                class="form-control" 
						                placeholder="Selecciona una fecha"               
						                name="date"
		  								:inputclass="{ 'is-invalid': isActive.horafin}"
						                >
					        	</flat-pickr>
					        	<small class="text-danger" v-if='errors.horafin'>
	                                  <ul>
	                                    <li v-for="error in errors.horafin">{{error}}</li>
	                                  </ul>
	                            </small>
					        </div>
				          </div>
					        <div class="text-center">
					          
					          <a class="btn submint btn-default" @click="registro()" >Registrar</a>
					          
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
    	vSelect,
    	flatPickr,
    	
	  },
	  data() {
    return {
    	isActive:{},
    	errors:[],
    	user:{
	        horainicio:"",
			fecha:"",
			horafin:"",
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
        config2: {
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
        },
  	}
  },
	methods: {
		registro: function(e){
             axios.post(API_ENDPOINT + 'disponibilidades/',
              {
                    'fecha': this.user.fecha,
			        'horainicio': this.user.horainicio,
			        'horafin': this.user.horafin,
              },
               {
                headers: {
                     'Content-Type': 'application/json',
                     'Accept': 'application/json',
				}
               }
               ).then(res => {
                        this.$notify({ group: 'auth', type:'success', title: 'Fecha disponible registrada Correctamente' });
                        console.log(res);
                        setTimeout(function(){
                        	 window.location.reload();
                            
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
	  
	  }
};
</script>

<style lang="scss">

</style>
