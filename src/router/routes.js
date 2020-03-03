import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
import FrontendLayout from "@/layout/frontend/FrontendLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";
import UnderConstruction from "@/pages/UnderConstruction.vue";

// Admin pages
import ProveedoresIndex from "@/pages/admin/proveedores/index.vue";
import ProveedoresCreate from "@/pages/admin/proveedores/create.vue";
import EmpleadosIndex from "@/pages/admin/empleados/index.vue";
import EmpleadosCreate from "@/pages/admin/empleados/create.vue";
import EmpleadosEdit from "@/pages/admin/empleados/edit.vue";
import ClientesIndex from "@/pages/admin/clientes/index.vue";
import ClientesCreate from "@/pages/admin/clientes/create.vue";

import DepartamentosIndex from "@/pages/admin/departamentos/index.vue";
import TipoorganizacionIndex from "@/pages/admin/tipoorganizacion/index.vue";
import CitasIndex from "@/pages/admin/citas/index.vue";
import DisponibilidadesIndex from "@/pages/admin/disponibilidades/index.vue";
import BeneficiosIndex from "@/pages/admin/beneficios/index.vue";




import PresupuestosIndex from "@/pages/admin/presupuestos/index.vue";
import SolicitudesIndex from "@/pages/admin/solicitudes/index.vue";
import Dashboard from "@/pages/admin/Dashboard.vue";
import Notifications from "@/pages/admin/Notifications.vue";
import Proveedores from "@/pages/admin/Proveedores.vue";
import Expediente from "@/pages/admin/Expediente.vue";
import Clientes from "@/pages/admin/Clientes.vue";
import Departamentos from "@/pages/admin/Departamento.vue";
import Inventarios from "@/pages/admin/Inventario.vue";
import Presupuestos from "@/pages/admin/Presupuesto.vue";
import Disponibilidad from "@/pages/admin/Disponibilidad.vue";
import EditarBeneficios from "@/pages/admin/Beneficios.vue";
import LoginAdmin from "@/pages/admin/LoginAdmin.vue";


// Front pages
import Inicio from "@/pages/front/Inicio.vue";
import Beneficios from "@/pages/front/Beneficios.vue";
import Contactanos from "@/pages/front/Contactanos.vue";
import Nosotros from "@/pages/front/Nosotros.vue";
import Perfil from "@/pages/front/Perfil.vue";
import EstadoTramites from "@/pages/front/EstadoTramites.vue";
import SolicitudCita from "@/pages/front/SolicitudCita.vue";
import Login from "@/pages/front/Login.vue";

import Register from "@/pages/front/Register.vue";
import RegistroNatural from "@/pages/front/registro/RegistroNatural.vue";
import RegistroJuridico from "@/pages/front/registro/RegistroJuridico.vue";



const routes = [
   
  
 {
    path: "/",
    component: FrontendLayout,
    redirect: "/inicio",
    children: [
      {
        path: "inicio",
        name: "inicio",
        component: Inicio,
        meta: {
          public: true,  // Allow access to even if not logged in  
        }
      },
      {
        path: "perfil",
        name: "perfil",
        component: Perfil,
        meta: {
          permissions: [
            {
              role: "cliente",
              redirect: "login"
            },
          ]
      } 
      },
      {
        path: "login",
        name: "login",
        component: Login,
        meta: {
          public: true,  // Allow access to even if not logged in
          onlyWhenLoggedOut: true
        }
      },
      {
        path: "registro-natural",
        name: "registro-natural",
        component: RegistroNatural,
        meta: {
          public: true,  // Allow access to even if not logged in
          onlyWhenLoggedOut: true
        }
      },
      {
        path: "registro-juridico",
        name: "registro-juridico",
        component: RegistroJuridico,
        meta: {
          public: true,  // Allow access to even if not logged in
          onlyWhenLoggedOut: true
        }
      },
       {
        path: "beneficios",
        name: "beneficios",
        component: Beneficios,
        meta: {
          public: true,  // Allow access to even if not logged in  
        }
      },
      {
        path: "nosotros",
        name: "nosotros",
        component: Nosotros,
        meta: {
          public: true,  // Allow access to even if not logged in  
        }
      },
      {
        path: "contactanos",
        name: "contactanos",
        component: Contactanos,
        meta: {
          public: true,  // Allow access to even if not logged in  
        }
      },      
    ]
  },
  {
  path: "/admin",
    component: DashboardLayout,
    redirect: "/admin/dashboard",
    children: [
      {
        path: "/admin/dashboard",
        name: "Panel Principal",
        component: Dashboard,
      },
      {
        path: "/admin/empleados",
        name: "Listado de empleados",
        component: EmpleadosIndex,
      },
      {
        path: "/admin/empleados/:id",
        name: "Editar de empleado",
        component: EmpleadosEdit,
      },
      {
        path: "/admin/empleados/create",
        name: "Registrar Empleado",
        component: EmpleadosCreate,
      },
      {
        path: "/admin/clientes",
        name: "Listado de clientes",
        component: ClientesIndex,
      },
      {
        path: "/admin/clientes/create",
        name: "Registrar Cliente",
        component: ClientesCreate,
      },

      {
        path: "/admin/proveedores",
        name: "Listado de proveedores",
        component: ProveedoresIndex,
      },
      {
        path: "/admin/proveedores/create",
        name: "Refistrar Proveedor",
        component: ProveedoresCreate,
      },
      {
        path: "/admin/citas",
        name: "Listado de citas",
        component: CitasIndex,
      },
      {
        path: "/admin/disponibilidades",
        name: "Listado de la disponibilidad de citas",
        component: DisponibilidadesIndex,
      },
      {
        path: "/admin/tipoorganizacion",
        name: "Listado de los tipos de organizacion",
        component: TipoorganizacionIndex,
      },
      {
        path: "/admin/beneficios",
        name: "Listado de Beneficios",
        component: BeneficiosIndex,
      },
      {
        path: "/admin/departamentos",
        name: "departamentos",
        component: DepartamentosIndex,
      },


      
      {
        path: "/admin/presupuestos",
        name: "presupuestos",
        component: PresupuestosIndex,
      },
      
      
      {
        path: "/admin/solicitudes",
        name: "solicitudes",
        component: SolicitudesIndex,
      },
      
      

    ]
 },
 { path: "under-construction", 
    component: UnderConstruction,
    meta: {
      public: true,  // Allow access to even if not logged in  
    }
  },

  { path: "*", 
    component: NotFound,
    meta: {
      public: true,  // Allow access to even if not logged in  
    }
  }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
