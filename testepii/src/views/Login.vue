<template>
  <div class="login">
    <div class="container" style=" margin: auto; width:500px; ">
      <h2 id="loginTitle">Iniciar Sessão</h2>
      <form v-on:submit.prevent="login()" id="formLogin">
        <label for="txtEmailLogin" class="emailLogin">E-mail:</label>
        <input type="email" class="form-control" id="txtEmailLogin" placeholder="Insira o seu e-mail" v-model="email"
          required />
        <label for="txtPasswordLogin" class="passLogin">Palavra-Chave:</label>
        <input type="password" class="form-control" id="txtPasswordLogin" placeholder="Insira a sua palavra-chave"
          v-model="password" required />´
        <button type="submit" class="btn btn-primary float-right" id="btnLogin">Entrar</button>
      </form>
    </div>

  </div>
</template>

<script>
  export default {
    data: () => ({
      email: "",
      password: ""
    }),
    created: function () {
      if (localStorage.getItem("users")) {
        this.$store.state.users = JSON.parse(localStorage.getItem("users"));
      }
      if (localStorage.getItem("loggedUser")) {
        this.$store.state.loggedUser = JSON.parse(
          localStorage.getItem("loggedUser")
        );
      }
    },
    methods: {
      login() {
        this.$store.commit("LOGIN", {
          email: this.email,
          password: this.password
        });
      }
    }
  };
</script>