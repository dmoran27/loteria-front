<template>

  <div class="not-found full-screen">
    <img  src="@/assets/img/slide3.jpg" class="img-principal" alt="">
    <div class="wrapper wrapper-full-page section content d-flex align-items-center justify-content-center">
      <div class="">
        <div class="container">
          <div class="row ">
            <div class="col-12 text-center">
              <h3 class="title text-danger">Error 404</h3>
              <h2 class="title">Oops! La pagina no Existe.</h2>
              <router-link :to="{path:'/'}">Volver a LOTERIA DE ORIENTE</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
$azul-oscuro: #052F5F;
  $azul: #3989aa;
  $azul-cielo: #78b8c3;
  $dorado: #edb032;
  $oscuro: #000;
  $gris: #6F8191;
  $ff: 'Roboto', sans-serif;

  .not-found{
    position: relative;
    img{
      object-fit: cover;
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0px;
      left: 0px;
    }
    h3{
       font-weight: 900;
        color: #fff;
        position: relative;
        font-size: 2rem;
        
        display: block;
    }
      h2{
        font-weight: 900;
        color: #fff;
        position: relative;
        font-size: 4rem;
        margin-bottom: 50px;
        display: block;
         
      }
      a{
  
  color: $azul-oscuro;
  font-size: 2rem;
  padding: 20px;
  margin: 30px 0px;
  text-transform:uppercase;
  border-bottom: 4px solid $azul-oscuro;
  font-weight: 700;
  &:hover{
  color: #dc3545;
  border-bottom: 4px solid #dc3545;
  }
      }
    }
  

  
  
  
  
</style>