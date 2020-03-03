
<template>
    <div class="container">
        <div class="row"> 
            <div class="col-12 text-center text-md-right">
              <router-link class= "btn btn-primary " :to="{path:'proveedores/create'}">Agregar Nuevo</router-link>
            </div>      
            <div class="col-12">
              <h2 class="text-center">Listado de proveedores </h2>
            </div>

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
                          <h2 class="text-center col-12">Editar Proveedor </h2>
                              </div>
                          </div>
                          <proveedores-edit :data="row"></proveedores-edit>   
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
                          <proveedores-show
                            titulo="Detalles del proveedor"
                            :data="row"
                            :columns="['Id',  'Tipo de Documento', 'Nro de Identificacion', 'Razonsocial', 'Telefono', 'Telefono opcional', 'Direccion', 'Email']"
                          ></proveedores-show>   
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
   import ProveedoresEdit from '@/pages/admin/proveedores/edit.vue';
   import ProveedoresShow from '@/pages/admin/proveedores/show.vue';
   

  export default {
      components: { 
      ProveedoresShow,
      ProveedoresEdit,
    }, 
        data() {
            return {
               open: false,
               modalOpen: false,
                columns: ['id',  'tipodedocumento', 'nroidentificacion', 'razonsocial', 'telefono1', 'telefono2', 'direccion', 'email','action',],

                options: {
                    headings: {
                      
                        id :'ID',
                        tipodedocumento:'Tipo de documento',
                        nroidentificacion:'Nro de Identificacion',
                        razonsocial:'Razon social',
                        telefono1:'Telefono',
                        telefono2:'Telefono opcional',
                        direccion:'Direccion',
                        email:'Email',  
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
                    sortable: ['id',  'tipodedocumento', 'nroidentificacion', 'razonsocial', 'telefono1', 'telefono2', 'direccion', 'email'],
                    filterable: ['id',  'tipodedocumento', 'nroidentificacion', 'razonsocial', 'telefono1', 'telefono2', 'direccion', 'email'],
                    requestFunction: function (data) {
                        console.log(data);
                        return axios.get(API_ENDPOINT +'proveedores', { params: data }).catch(function (e) {
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
    saliredit(id){
        this.$modal.hide('modaledit'+id);  
     },
    deletes (id) {   
      axios.delete(API_ENDPOINT + 'proveedores' + '/'+id,{
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