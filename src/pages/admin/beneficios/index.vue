
<template>
    <div class="container">
        <div class="row"> 
            <div class="col-12 text-center text-md-right">
               <a @click="create()" class="btn btn-primary text-white text-white">Registrar Nuevo Beneficio</a>
            </div>      
            <div class="col-12">
              <h2 class="text-center">Listado de beneficios </h2>
            </div>
<modal 
                       ref="close"
                          name="modalcreate"
                          transition="nice-modal-fade"
                          :min-width="200"
                          :min-height="200"
                          
                          :delay="100"
                          height="auto" :scrollable="true">
                        <div class="example-modal-content">
                          <div class="container"> 
                              <div class="row"> 
                                    <a @click="salir()" class="text-danger col-12 text-md-right"><i class="fa fa-times text-danger"></i></a>
                          <h2 class="text-center col-12">Registrar beneficios </h2>
                              </div>
                          </div>
                          <beneficios-create></beneficios-create>
   
                        </div>
                      </modal>   
        </div>
    
        <!--<vue-topprogress ref="topProgress"></vue-topprogress>-->
        <div class="container">
            <v-server-table ref="myTable"
                    :columns="columns"
                    :options="options">
                   <span slot="action" slot-scope="{row}"> 
                      <a class="text-info" v-on:click="show(row.id)"><i class="fa fa-eye"></i></a>
                      <a class="text-success" v-on:click="edit(row.id)"><i class="fa fa-edit"></i></a>
                      <a class="text-danger" v-on:click="deletes(row.id)"><i class="fa fa-trash"></i></a>
                       <modal 
                       ref="close"
                          :name="'modaledit'+row.id"
                          transition="nice-modal-fade"
                          :min-width="200"
                          :min-height="200"
                          
                          :delay="100"
                          height="auto" :scrollable="true">
                        <div class="example-modal-content">
                          <div class="container"> 
                              <div class="row"> 
                                    <a @click="saliredit(row.id)" class="text-danger col-12 text-md-right"><i class="fa fa-times text-danger"></i></a>
                          <h2 class="text-center col-12">Editar beneficios </h2>
                              </div>
                          </div>
                          <beneficios-edit :data="row"></beneficios-edit>   
                        </div>
                      </modal>
                      <modal 
                          :name="'modalshow'+row.id"
                          transition="nice-modal-fade"
                          :min-width="200"
                          :min-height="200"
                          :delay="100"
                          width="80%"
                          height="50%"

                          >
                        <div class="example-modal-content">
                          <beneficios-show
                            titulo="Detalles del Beneficio"
                            :data="row"
                            :columns="['Id',  'Nombre', 'Descripcion', 'Requisitos']"
                          ></beneficios-show>   
                        </div>
                      </modal>
                  </span>
            </v-server-table>
        </div
        >
         
    </div>
</template>
 
<script>
  
  import axios from "axios";
   import API_ENDPOINT from '@/environments/apiEndPoint';
   import BeneficiosEdit from '@/pages/admin/beneficios/edit.vue';
   import BeneficiosShow from '@/pages/admin/beneficios/show.vue';
   import BeneficiosCreate from '@/pages/admin/beneficios/create.vue';
   

  export default {
      components: { 
      BeneficiosShow,
      BeneficiosEdit,
      BeneficiosCreate,
    }, 
        data() {
            return {
               open: false,
               modalOpen: false,
                columns: ['id',  'nombre', 'descripcion', 'requisitos', 'action',],

                options: {
                    headings: {
                      
                        id :'ID',
                        nombre:'Nombre',
                        descripcion:'Descripcion',
                        requisitos:'Requisitos',
                        action: 'Accion',
                    },
                    
                    texts: {
                      filter: 'Filtrar:',
                      count: "Mostrando {from} - {to} de {count} Registros |{count} Registros| Un Registro",
                      first: "Primero",
                      last: "Ultimo",
                      filterPlaceholder: "Dato a buscar ...",
                      limit: "Registros:",
                      page: "Pagina:",
                      noResults: "No se encontraron registros almacenados",
                      filterBy: "Filtrar por {column}",
                      loading: "Loading...",
                      defaultOption: "Seleccionar {column}",
                      columns: "Columna",
                      limit: 'Mostrar: ',
                      search: 'Buscar'
                    },
                    datepickerOptions: {
                      showDropdowns: true,
                      autoUpdateInput: false
                    },
                    pagination: { chunk: 10, dropdown: false },
                    limit:10,
                    perPage: 10,
                    perPageValues: [10,20,25,50,100],
                    sortable:['id',  'nombre', 'descripcion', 'requisitos'],
                    filterable: ['id',  'nombre', 'descripcion', 'requisitos'],
                    requestFunction: function (data) {
                        console.log(data);
                        return axios.get(API_ENDPOINT +'tipobeneficios', { params: data }).catch(function (e) {
                            self.dispatch('error', e);
                        }.bind(this));
                    },
                    responseAdapter: function(resp) {
                        console.log(resp)
                        return {
                            data: resp.data.data,
                            count: resp.data.total,
                        }
                    }
                }
            }
        },
    
 methods: {   
   created: function() {
            
             bus.$on('salire', (value) => {
              this.saliredit(value);
              console.log(value)
            })
        },
    show (id) {
        this.$modal.show('modalshow'+id);  
    },
    edit (id) {
        this.$modal.show('modaledit'+id);       
    },
    create() {
      this.$modal.show('modalcreate');       
    },
    saliredit(id){
        this.$modal.hide('modaledit'+id);  
     },
     salir(){
        this.$modal.hide('modalcreate');  
     },
    deletes (id) {   
      axios.delete(API_ENDPOINT + 'beneficios' + '/'+id,{
        'id':id,
      },{
         headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + localStorage.access_token,
             
          }}).then((response) => {
              this.data= response.data.content;
              this.$notify({ group: 'auth', type:'success', title: response.data.success  });
              this.$refs.myTable.refresh();
            });
        } ,
        
      },
     }
</script>
 
<style>
 
</style>