<template>
 <div>  
     <div class="container-fluid"> 
    <div class="row"> 
        <div class="col-12 shadow p-0">  
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.25716644352!2d-63.17449008520779!3d9.74427054302681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c3340cc6007834d%3A0xbfd2b6145d35b26a!2sCentro%20Loter%C3%ADa%20de%20Oriente%2C%20Matur%C3%ADn%206201%2C%20Monagas!5e0!3m2!1ses!2sve!4v1579320512909!5m2!1ses!2sve" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        </div>
    </div>
      
  </div>
  <footer>
    <div class="container ">
      <div class="row justify-content-center justify-content-md-between align-items-center"> 
        <nav class="col-12 col-lg-5 col-md-6">
        <ul>
          <li>
            <router-link :to="{path:'/nosotros'}">Sobre Nosotros</router-link>
          </li>
          <li>
            <router-link :to="{path:'/beneficios'}">Beneficios</router-link>
          </li>
          <li>  
            <router-link :to="{path:'/contactanos'}">Contactanos</router-link>
          </li>
        </ul>
      </nav>
      <div class="col-12 col-lg-5 col-md-6">
        <div class="row align-items-center">
          <i class="p-1 col-1 fa fa-map-marker"></i>
          <a href="#" class="col-11" target="_blank">Av. Bolivar, Edificio Loteria de Oriente, piso 1 Y 2. Maturín Estado Monagas</a>
        </div>
        <div class="row align-items-center">
          <i class="p-1 col-1 fa fa-phone"></i>
          <a href="tel:02916410155" class="col-11" target="_blank">(0291) 6410155</a>
        </div>
        <div class="row align-items-center">
          <i class="p-1 col-1 fa fa-envelope"></i>
          <a class="col-11" href="emailto:loteriadeoriente1@gmail.com" target="_blank">loteriadeoriente1@gmail.com</a>
        </div>
      </div>

      <div class="col-12 col-lg-2 text-center text-lg-right">
          <a href="https://twitter.com/jbpsemlo?lang=es" target="_blank"><i class="fa fa-twitter"></i> </a>
           <a href="https://www.facebook.com/Loter%C3%ADa-de-Oriente-1550935761824120/" target="_blank"><i class="fa fa-facebook"></i></a>
        </div>

      </div>
    </div>
  </footer>
 </div>
</template>

<script>

</script>

<style lang="scss">
$azul-oscuro: #052F5F;
$azul: #006494;
$azul-cielo: #2FA1E2;
$dorado: #edb032;
$oscuro: #000;
$gris: #6F8191;
$ff: 'Roboto', sans-serif;
body{
    background: $gris;
  }
footer{
   background: $azul-oscuro;
   padding: 30px 0px;
    nav ul{
      width: 100%;
      li{
        list-style: none;
      }
    }
    a{
      color:#fff;
      font-size: 14px;
      font-weight: 300;
      font-family: $ff;
      padding: 5px;
      font-weight: 300;
      display: inline-block;
      border-bottom: 2px solid transparent;
      &:hover{
        color: $dorado;
        cursor: pointer;
      }
    }
    i{
      color:#fff;
      font-size: 20px;
       &:hover{
        color: $dorado;
        cursor: pointer;
      }
    }

  
}
</style>

