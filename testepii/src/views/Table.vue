<template>
    <div class="simulations">
    <h2>Simulações Seguro de Automóvel</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Matricula</th>
          <th>Data Matrícula</th>
          <th>Tipo de Veículo</th>
          <th>Marca</th>
        </tr>
      </thead>
      <tbody v-for="s in simulation" :key="s.id">
        <tr>
          <td>{{s.plate}}</td>
          <td>{{s.plateDate}}</td>
          <td>{{s.carType}}</td>
          <td>{{s.brand}}</td>
          <td>
            <button @click="removeInsurance(s.id)">X</button>
          </td>
        </tr>
      </tbody>
    </table>
    <br><br>
    <h2>Simulações Seguro de Habitação</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Morada</th>
          <th>Tipo de Habitação</th>
          <th>NIF</th>
          <th>Contacto</th>
        </tr>
      </thead>
      <tbody v-for="s2 in simulation2" :key="s2.id">
        <tr>
          <td>{{s2.adress}}</td>
          <td>{{s2.habType}}</td>
          <td>{{s2.nif}}</td>
          <td>{{s2.contact}}</td>
          <td>
            <button @click="removeInsurance2(s2.id)">X</button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    
</template>

<script>
export default {
    data: function() {
        return {
            simulation: [],
            simulation2: []
        }
    },
    created() {
    if (localStorage.getItem("simulation")) {
      this.$store.state.simulation = JSON.parse(localStorage.getItem("simulation"));
    }
    this.simulation = this.$store.state.simulation;

    if (localStorage.getItem("simulation2")) {
      this.$store.state.simulation2 = JSON.parse(localStorage.getItem("simulation2"));
    }
    this.simulation2 = this.$store.state.simulation2;
    },
    methods: {
    removeInsurance(id) {
      if (confirm("Tem a certeza que quer remover esta simulação??")) {
        for (let s in this.simulation) {
          if (this.simulation[s].id == id) {
            this.simulation = this.simulation.filter(
              simulatio => this.simulation[s].id != simulatio.id
            );
            localStorage.setItem("simulation", JSON.stringify(this.simulation));
            this.$store.state.simulation = this.simulation;
            alert("Simulação Removida");
          }
        }
      }
    },
    removeInsurance2(id) {
      if (confirm("Tem a certeza que quer remover esta simulação??")) {
        for (let s2 in this.simulation2) {
          if (this.simulation2[s2].id == id) {
            this.simulation2 = this.simulation2.filter(
              simulatio2 => this.simulation2[s2].id != simulatio2.id
            );
            localStorage.setItem("simulation2", JSON.stringify(this.simulation2));
            this.$store.state.simulation2 = this.simulation2;
            alert("Simulação Removida");
          }
        }
      }
    },
}
}
</script>
