import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
import FrontendLayout from "@/layout/frontend/FrontendLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";
import UnderConstruction from "@/pages/UnderConstruction.vue";

// Admin pages
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
        path: "perfil/:id",
        name: "perfil",
        component: Perfil,
        meta: {
          permissions: [
            {
              role: "cliente",
              access: (user, to) => user.id === to.params.id,
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
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "/empleados",
        name: "empleados",
        component: Dashboard
      },
      {
        path: "/clientes",
        name: "clientes",
        component: Dashboard
      },
      {
        path: "/presupuestos",
        name: "presupuestos",
        component: Dashboard
      },
      {
        path: "/proveedores",
        name: "proveedores",
        component: Dashboard
      },
      {
        path: "/departamentos",
        name: "departamentos",
        component: Dashboard
      },
      {
        path: "/expedientes",
        name: "expedientes",
        component: Dashboard
      },
      {
        path: "/citas",
        name: "citas",
        component: Dashboard
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
