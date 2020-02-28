<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">{{routeName}}</a>
      <button class="navbar-toggler navbar-burger"
              type="button"
              @click="toggleSidebar"
              :aria-expanded="$sidebar.showSidebar"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-bar"></span>
        <span class="navbar-toggler-bar"></span>
        <span class="navbar-toggler-bar"></span>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
          <a class="nav-link">
            <i class="ti-user"></i>
            <p>Perfil</p>
          </a>
        </li>
        <drop-down class="nav-item"
                   title="Notificaciones"
                   title-classes="nav-link"
                   icon="ti-bell">
          <a class="dropdown-item">Notificacion1</a>
        </drop-down>
        <drop-down class="nav-item"
                   title="Configuraciones"
                   title-classes="nav-link"
                   icon="ti-settings">
          <a class="dropdown-item">Beneficios</a>
          <a class="dropdown-item">Organizaciones</a>
          <a class="dropdown-item">Disponibilidad de Fechas</a>
        </drop-down>
        <li class="nav-item">
          <a class="nav-link">
            <i class="ti-ext"></i>
            <p>Salir</p>
          </a>
        </li>
        </ul>
      </div>
    </div></nav>
</template>
<script>
export default {
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    }
  },
  data() {
    return {
      activeNotifications: false
    };
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    }
  }
};
</script>
<style>
</style>
