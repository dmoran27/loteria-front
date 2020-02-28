<template>
  <table class="table" :class="tableClass">
    <thead>
    <slot name="columns">
      <th v-for="column in columns" :key="column">{{column}}</th>
    </slot>
    <th v-if="accion">
Acciones
      </th>
    </thead>
    <tbody>
    <tr v-for="(item, index) in data" :key="index">
      <slot :row="item">
        <td v-for="(column, index) in columns"
            :key="index"
            v-if="hasValue(item, column)">
          {{itemValue(item, column)}}
        </td>
      </slot>
      <td v-if="accion">

  <a class ="btn btn-info  rounded-circle text-white" @click="show(item.id)"><i class="fa fa-eye"></i></a>
  <a class ="btn btn-danger  rounded-circle text-white" @click="deletes(item.id)"><i class="fa fa-trash"></i></a>

      </td>
    </tr>
    </tbody>

  </table>
</template>
<script>
  import axios from "axios";
   import API_ENDPOINT from '@/environments/apiEndPoint';

export default {
  name: 'paper-table',
  props: {
    urls: String,
    accion:String,
    columns: Array,
    type: {
      type: String, // striped | hover
      default: "striped"
    },
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    }
  },
  
   data() {
    return {
     data:{},
   }
  },
  computed: {
    tableClass() {
      return `table-${this.type}`;
    }
  },
     created(){
        this.creates();
      },
  methods: {
    hasValue(item, column) {
      return item[column.toLowerCase()] !== "undefined";
    },
    itemValue(item, column) {
      return item[column.toLowerCase()];
    },
      creates(){
            axios.get(API_ENDPOINT + this.urls,{},{
         headers: {
                    'Content-Type': 'application/json',
                     
                  }}).then((response) => {
          console.log(response.data.content);
          this.data= response.data.content;
            });
          
    },
      deletes(id){
        console.log(API_ENDPOINT + this.urls+ '/'+id +'/')
            axios.delete(API_ENDPOINT + this.urls+ '/'+id,{},{
         headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + localStorage.access_token,
                     
                  }}).then((response) => {
          console.log(response);
           this.data= response.data.content;
           this.$notify({ group: 'auth', type:'success', title: response.data.success  });

            });
          
    },
  },
  show(id){
     window.location.href=API_ENDPOINT + this.urls+ '/'+id +'/';
  }
};
</script>
<style>
</style>
