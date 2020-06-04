<template>
  <div class="register">
      <div id="registerForm">
        <h2 class="centered" id="registerPage">Registo</h2>
        <br>
        <div class="container col-sm-4">
          <form v-on:submit.prevent="addUser()">
            <div class="form-group">
              <label for="txtName" class="nameLabel">Nome de Utilizador:</label>
              <input type="text" class="form-control" id="txtName" placeholder="Insira o seu nome" required
                v-model="name" />
            </div>
            <div class="form-group">
              <label for="passTxt" class="passLabel">Palavra-chave:</label>
              <input type="password" class="form-control" id="passTxt" placeholder="Password" required
                v-model="password" />
            </div>
            <div class="form-group">
              <label for="confirmarPassTxt" class="confLabel">Confirmar Palavra-chave:</label>
              <input type="password" class="form-control" id="confirmarPassTxt" placeholder="Confirme sua Password"
                required v-model="confPass" />
            </div>
            <div class="form-group">
              <label for="emailTxt" class="emailLabel">E-mail:</label>
              <input type="email" class="form-control" id="emailTxt" pattern="[a-z0-9._%+-]+@+[a-z]+.ipp.pt"
                placeholder="Insira o seu email" required v-model="email" />
            </div>
            <button type="submit" class="btnConf">Confirmar</button>
          </form>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "Register",
    data: () => ({
      id: 0,
      name: "",
      email: "",
      password: "",
      confPass: "",
    }),
    created: function () {
      window.addEventListener("unload", this.saveStorage);
      if (localStorage.getItem("users")) {
        this.$store.state.users = JSON.parse(localStorage.getItem("users"));
      }
    },
    methods: {
      /**
       * GET LAST ID
       */
      getLastId() {
        return this.$store.getters.getLastId;
      },
      /***
       * FUNCTION CREATED TO ADD NEW USER
       */

      addUser() {
          this.$store.commit("ADD_USER", {
            name: this.name,
            email: this.email,
            password: this.password,
            confPass: this.confPass
          });
        },
      saveStorage() {
        localStorage.setItem("users", JSON.stringify(this.$store.state.users));
        localStorage.setItem(
          "loggedUser",
          JSON.stringify(this.$store.state.loggedUser)
        );
      }
    }
  };
</script>