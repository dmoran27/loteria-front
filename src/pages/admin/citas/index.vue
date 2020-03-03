
<template>
    <div class="container">
        <div class="row"> 
            
            <div class="col-12">
              <h2 class="text-center">Listado de citas </h2>
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
                          <h2 class="text-center col-12">Registrar citas </h2>
                              </div>
                          </div>
                          <citas-create></citas-create>
   
                        </div>
                      </modal>   
        </div>
    
        <!--<vue-topprogress ref="topProgress"></vue-topprogress>-->
        <div class="container">
            <v-server-table ref="myTable"
                    :columns="columns"
                    :options="options">
                   
            </v-server-table>
        </div
        >
         
    </div>
</template>
 
<script>
  
  import axios from "axios";
   import API_ENDPOINT from '@/environments/apiEndPoint';
   import CitasEdit from '@/pages/admin/citas/edit.vue';
   import CitasShow from '@/pages/admin/citas/show.vue';
   import CitasCreate from '@/pages/admin/citas/create.vue';
   

  export default {
      components: { 
      CitasShow,
      CitasEdit,
      CitasCreate,
    }, 
        data() {
            return {
               open: false,
               modalOpen: false,
                columns: ['id',  'estado','disponibilidad.fecha', 'disponibilidad.horainicio', 'disponibilidad.horafin'],

                options: {
                    headings: {
                      
                        id :'ID',
                        'estado_id':'Estado',
                        'disponibilidad.fecha':'Fecha',
                        'disponibilidad.horainicio':'Hora de inicio',
                        'disponibilidad.horafin':'Hora final',
                        
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
                    sortable:['id',  'fecha', 'horainicio', 'horafin'],
                    filterable: ['id',  'fecha', 'horainicio', 'horafin'],
                    requestFunction: function (data) {
                        console.log(data);
                        return axios.get(API_ENDPOINT +'citas', { params: data }).catch(function (e) {
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
            axios.get(API_ENDPOINT +'citas',
          {'estado_id': this.estado_seleccionado.id},
          {
          headers: {
                     'Content-Type': 'application/json',
                     

                     
                  }}).then((response) => {
          console.log(response);
            });
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
      axios.delete(API_ENDPOINT + 'disponibilidades' + '/'+id,{},{
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