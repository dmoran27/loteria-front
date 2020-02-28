<template>
    <div class="row">
<div class="col-12">
  <router-link class= "btn btn-primary" :to="{path:'clientes/create'}">Agregar Nuevo</router-link>
</div>      
<div class="col-12">
  <h2 class="text-center">Listado de Clientes </h2>
</div>

      <div class="col-12">
        <card class="card-plain">
          <div class="table-full-width table-responsive">
            <paper-table type="hover" :title="table2.title" :sub-title="table2.subTitle" urls='clientes' :data="table2.data"
                         :columns="table2.columns" accion="true">

            </paper-table>
          </div>
        </card>
      </div>

    </div>
</template>
<script>
import { PaperTable } from "@/components";

export default {
  components: {
    PaperTable
  },
  data() {
    return {
      tableData:{

      },
      table2: {
        title: "Clientes",
        subTitle: "listado de Clientes en sistema",
        columns: [ 'id', 'nombre',  'descripcion', 'requisitos'],
        
      }
    };
  },

      methods: {
          


       }
};
</script>
<style>
</style>
