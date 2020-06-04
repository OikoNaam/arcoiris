<template>
  
    <!-- <template slot="header">
      Escola Virtual Aprenda+
      <h1>Entrar</h1>
    </template>  -->

    <div class="login-box">
      <div>
        <h1>Registo</h1>
      </div>

        <div class="textbox">
          <input type="text" name="email" id="" placeholder="Nome">
        </div>
        <div class="textbox">
          <input type="text" name="email" id="" placeholder="Apelido">
        </div>
        <div class="textbox">
          <input type="text" name="email" id="" placeholder="Endereço">
        </div>
        <div class="textbox">
          <input type="text" name="email" id="" placeholder="Email ou Celular">
        </div>
        <div class="textbox">
          <input type="password" name="senha" id="" placeholder="Senha">
        </div>
        <div class="textbox">
          <input type="password" name="senha" id="" placeholder="Confirmar a Senha">
        </div>
        
        <div>
<input class="btn btn-outline-secondary" type="button" name="" value="Registrar-se">
        </div>

        <div>
          <a href="#">
          <div class="alert alert-secondary mr-4 mb-4 mt-4" role="alert">
            <strong>Esqueceu Senha? Recupera aqui!</strong>
          </div>
          </a>
          
        </div>
       
        
     
    </div>
 

</template>

<style lang="css" scoped>
  template{
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
    color: aquamarine;

  }
  .login-box{
    width: 280px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgba(100, 95, 86, 0.548);
  }

  .login-box h1{
    float: left;
    font-size: 40px;
    border-bottom: 6px solid;
    margin-bottom: 50px;
    padding: 13px 0;

  }
  .textbox{
    width: 100%;
    overflow: hidden;
    font-size: 20px;
    padding: 8px 0;
    margin: 8px 0;
    border-bottom: 1px solid;
  }
  .textbox input{
    border: none;
    outline: none;
    background: none;
    color: rgba(100, 95, 86, 0.548);
    font-size: 18px;
    float: left;
  }
  .btn{
    
  }
</style>

