<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Login</router-link>  |
      <router-link to="/register">Registo</router-link> |
      <router-link to="/table">Tabela</router-link> |
      <router-link to="/InsAut">Automóvel</router-link> |
      <router-link to="/InsHab">Habitação</router-link> |
      <router-link to="/insurance">Seguros</router-link> 
      <br><br>
      <h1>Simulador de Seguros</h1>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
