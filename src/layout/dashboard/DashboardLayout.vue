<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/admin/dashboard" name="Inicio" />
        
        <sidebar-link to="/admin/solicitudes" name="Solicitudes" />
        <sidebar-link to="/admin/citas" name="Citas" />
        <sidebar-link to="/admin/finanzas" name="Finanzas" />
        <sidebar-link to="/admin/inventario" name="Inventario" />
        <sidebar-link to="/admin/presupuesto" name="Presupuesto" />
        <sidebar-link to="/admin/proveedores" name="Proveedores" />
        <sidebar-link to="/admin/empleados" name="Empleados" />
        <sidebar-link to="/admin/departamentos" name="Departamentos" />
        <sidebar-link to="/admin/administracion" name="Administracion" />
      </template>
      <mobile-menu>
         <li class="nav-item">
          <a class="nav-link">
            <i class="ti-user"></i>
            <p>Perfil</p>
          </a>
        </li>
        
        <drop-down class="nav-item"
                   title="Configuraciones"
                   title-classes="nav-link"
                   icon="ti-settings">
          
          <router-link class= "dropdown-item" :to="{path:'/admin/beneficios'}">Beneficios</router-link>
          <router-link class= "dropdown-item" :to="{path:'/admin/tipoorganizacion'}">Organizaciones</router-link>
          <router-link class= "dropdown-item" :to="{path:'/admin/disponibilidades'}">Disponibilidad de Fechas</router-link>
        </drop-down>
        <li class="nav-item">
          <a class="nav-link">
            <i class="ti-ext"></i>
            <p>Salir</p>
          </a>
        </li>
        <li class="divider"></li>
      </mobile-menu>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import Footer from "./Footer.vue";
import DashboardContent from "../Content.vue";
import MobileMenu from "../MobileMenu";
export default {
  components: {
    TopNavbar,
    Footer,
    DashboardContent,
    MobileMenu,
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
