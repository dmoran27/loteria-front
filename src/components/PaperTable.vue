
<template>    
        <!--<vue-topprogress ref="topProgress"></vue-topprogress>-->
        <div class="container">
            <v-server-table ref="myTable"
                    :columns="columns"
                    :options="options">
                   <span slot="action" slot-scope="{row}"> 
                      <button v-on:click="show(row.id)"><i class="fa fa-eye"></i></button>
                      <button v-on:click="edit(row.id)"><i class="fa fa-edit"></i></button>
                      <button v-on:click="deletes(row.id)"><i class="fa fa-trash"></i></button>
                  </span>
            </v-server-table>
        </div>
    
</template>
 
<script>
  import axios from "axios";
   import API_ENDPOINT from '@/environments/apiEndPoint';

    export default {
     props: {
                urls: String,
                columnsp: Array,
                sortablep: Array,
                fillterablep: Array,
                headingsp: Object,
                actin: Boolean,

            },
        data() {
            return {
               modalOpen: false,
                url1: this.urls,
                columns:this.columnsp,
                options: {
                    headings: this.headingsp,
                    
                    texts: {
                      filter: 'Filtrar:',
                      count: ' ',
                      limit: 'Mostrar: '
                    },
                    datepickerOptions: {
                      showDropdowns: true,
                      autoUpdateInput: false
                    },
                    pagination: { chunk: 10, dropdown: false },
                    
                    perPage: 10,
                    perPageValues: [10,20,25,50,100],
                    sortable:this.sortablep,
                    filterable:this.filterablep,
                    requestFunction: function (data) {
                        console.log(data);
                        return axios.get(API_ENDPOINT +this.url1, { params: data }).catch(function (e) {
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
    show (id) {
        window.location.href=API_ENDPOINT + this.url1 + id +'/';
    },
    edit (id) {
        window.location.href=API_ENDPOINT + this.url1 + id +'/';
    },
    deletes (id) {   
      axios.delete(API_ENDPOINT + this.url1,
        {'id':id},
        {
         headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + localStorage.access_token,
             
          }}).then((response) => {
              this.data= response.data.content;
              this.$notify({ group: 'auth', type:'success', title: response.data.success  });
              this.$refs.myTable.refresh();
            });
        }   
      },
     }
</script>
 
<style>
    #app {
        width: 95%;
        margin-top: 50px;
    }
 
    .VuePagination {
        text-align: center;
    }
 
    .vue-title {
        text-align: center;
        margin-bottom: 10px;
    }
 
    .vue-pagination-ad {
        text-align: center;
    }
 
    .glyphicon.glyphicon-eye-open {
        width: 16px;
        display: block;
        margin: 0 auto;
    }
 
    th:nth-child(3) {
        text-align: center;
    }
 
    .VueTables__child-row-toggler {
        width: 16px;
        height: 16px;
        line-height: 16px;
        display: block;
        margin: auto;
        text-align: center;
    }
 
    .VueTables {
        margin-top:20px;
    }
    .VueTables__table thead tr{
      background:  #212120c4;
      color: #fff;
    }
    .VueTables__child-row-toggler--closed::before {
        content: "+";
    }
 
    .VueTables__limit-field{
        margin-top:30px;
    }
    .VueTables__child-row-toggler--open::before {
        content: "-";
    }
 
    .VuePagination nav{
        background-color: transparent !important;
        color:black;
        box-shadow: none;
        text-align: right;
        padding:0px;
    }
    .VuePagination nav ul{
        float:right;
        margin:0px;
    }
    .VuePagination nav p{
        text-align: right;
        padding:0px;
    }
    .VueTables__search{
      height: 100% !important;
      margin-bottom: 0px !important;
    }
    .VueTables__search .VueTables__search-field{
      text-align: left !important;
    }
    .table-striped tbody > tr:nth-of-type(2n) {
        background-color: #f2f2f2 !important;
    }
</style>