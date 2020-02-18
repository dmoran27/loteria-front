<template>
   <section class=" container py-5">
      
                    
            <div class="row">

              	<form role="form" class="col-12">
                        
                        </input>
                         <fg-input type="email"
                                  label="Correo Electronico *"
                                  placeholder="Ej: correo@correo.com"
                                   v-model="user.email"
                                  :inputclass="{ 'is-invalid': isActive.email}"
                                 >
                                 <small class="text-danger" v-if='errors.email'>
                                  <ul>
                                    <li v-for="error in errors.email">{{error}}</li>
                                  </ul>
                                </small>
                        </fg-input>
                         <fg-input type="password"
                                  label="clave *"
                                  placeholder="Ej: Maria"
                                  v-model="user.password"
                                 :inputclass="{ 'is-invalid': isActive.password}"

                                 >
                                 <small class="text-danger" v-if='errors.password'>
                                  <ul>
                                    <li v-for="error in errors.password">{{error}}</li>
                                  </ul>
                                </small>

                        </fg-input>
                       
                        <input type="checkbox" 
                                  v-model="user.remember_me" 
                                  id="recuerdame">
                        </input>
                        <label for="recuerdame" class="ml-3">Recuerdame</label>
                        <div class="text-center">
                            
                            <a class="btn submint btn-default" @click="login()" >Acceder</a>
                        </div>
                     </form>
            </div>
            
                
            </div>
            <div class="row ">
                  <div class="col-12 border-top pt-3 mt-3">
                     <router-link class='d-block text-center' :to="{ path: 'under-construction' }">
                        <!--p>¿Olvidó su contraseña?</p-->
                     </router-link>
                     <router-link class='d-block text-center' :to="{ path: 'registro-natural' }">
                        <p>Crear nueva cuenta como persona natural</p>
                     </router-link>
                     <router-link class='d-block text-center' :to="{ path: 'registro-juridico' }">
                        <p>Crear nueva cuenta como organizacion</p>
                     </router-link>
                  </div>
            </div>
            
   </section>
</template>

<script>
   import axios from "axios";
   import API_ENDPOINT from './../environments/apiEndPoint';

   export default {
   	
      data() {
         return {
               user: {
                  email: '',
                  password: '',
                  remember_me: false,
              },

              errors:[],
              isActive:{},
                  
         };
      },
      created(){
        
      },
      methods: {
          

         login: function(e){
             axios.post(API_ENDPOINT + 'auth/login',
              {
                    'email': this.user.email,
                    'password': this.user.password,
                    'remember_me': this.user.remember_me,    
              },
               {
                  headers: {
                     'Content-Type': 'application/json',
                     
                  }
               }
               ).then(res => {
                
                  if (res.data.access_token) {
                console.log(res);    
                    localStorage.setItem('access_token', res.data.access_token);
                  }
                  
                        this.$notify({ group: 'auth', type:'success', title: 'Bienvenido' });
                        
                        setTimeout(function(){
                            window.location.href="";
                        },2000);
                        this.addLogOut(true);


               }).catch( error=> {
                
                if(error.response.data.message){
                  this.$notify({ group: 'auth', type:'danger', title: error.response.data.message });
                }
                if(error){
                this.errors=[];
                this.isActive={};
                for (let prop in  error.response.data) {
                   this.isActive[prop]=true;
                }
                this.errors= error.response.data;
                this.addLogOut(false);
                } 
              });

         },
         addLogOut: function(value) {
                bus.$emit('logOut', value)            
          },
      }
   };
</script>

<style>
</style>
