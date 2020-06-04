import Vue from "vue";
import Vuex from "vuex";

import apiService from "../eshtEventAPI/apiService";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [{
      id: 0,
      name: "Admin",
      email: "admin@email.com",
      password: "123",
    }],
    userExist: false,
    loggedUser: [],
    insurances: [
      {
        id: 1,
        name: "Seguro Automóvel",
        type: "Seguro Automóvel"
      },
      {
        id: 2,
        name: "Seguro Habitação",
        type: "Seguro Habitação"
      }
    ],
    carType: [
      {
        id: 1,
        description: "Automóvel Ligeiro"
      },
      {
        id: 2,
        description: "Todo Terreno"
      }
    ],
    brand: [
      {
        id: 1,
        description: "Seat"
      },
      {
        id: 2,
        description: "Mercedes"
      },
      {
        id: 3,
        description: "BMW"
      },
      {
        id: 4,
        description: "Citroen"
      }
    ],
    simulation: [],
    simulation2: [],
    habType: [
      {
        id: 1,
        description: "Moradia"
      },
      {
        id: 2,
        description: "Apartamento"
      },
    ]
  },
  mutations: {
    ADD_CARINSURANCE(state, payload) {
      if (!state.simulation.some(simulatio => simulatio.plate === payload.plate)) {
        state.simulation.push({
          id: payload.id,
          plate: payload.plate,
          plateDate: payload.plateDate,
          carType: payload.carType,
          brand: payload.brand,
        })
        localStorage.setItem("simulation", JSON.stringify(state.simulation))
        alert("Simulação feita com sucesso!")
      } else {
        alert("Matricula já em uso! Se pretender fazer uma nova simulação com a mesma matricula, por favor elimine a anterior.")
      }
    },
    ADD_HABINSURANCE(state, payload) {
      if (!state.simulation2.some(simulatio2 => simulatio2.nif === payload.nif)) {
        state.simulation2.push({
          id: payload.id,
          adress: payload.adress,
          habType: payload.habType,
          nif: payload.nif,
          contact: payload.contact,
        })
        localStorage.setItem("simulation2", JSON.stringify(state.simulation2))
        alert("Simulação feita com sucesso!")
      } else {
        alert("NIF já em uso! Se pretender fazer uma nova simulação com o mesmo NIF, por favor elimine a anterior.")
      }
    },
    ADD_USER: (state, payload) => {
      //SE ENCONTRAR ALGUM EMAIL IGUAL AO QUE ESTA A TENTAR CRIAR
      if (!state.users.some(user => user.email === payload.email)) {
        if (payload.password !== payload.confPass) {
          alert('Passwords diferentes')
        } else {
          state.users.push({
            // id: payload.id,
            // name: payload.name,
            // email: payload.email,
            // password: payload.password,

          });
          // localStorage.setItem("users", JSON.stringify(state.users))
          alert('Conta criada')
          window.location = "./login"
        }
      } else {

        alert('Email já existente');
      }
    },
    LOGIN: (state, payload) => {
      for (const user of state.users) {
        if (user.email == payload.email && user.password == payload.password) {
          state.loggedUser.push({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
          })
          localStorage.setItem("loggedUser", JSON.stringify(state.loggedUser))
          state.userExist = true
          window.location = "./"

        }
      }
      if (!state.userExist) {
        alert("Conta não existe")

      } else {
        state.userExist === false
      }

    },

    LOGOUT: (state) => {
      // state.loggedUser.pop()
      localStorage.removeItem("loggedUser", JSON.stringify(state.loggedUser))
      location.href = "./"
      alert('Sessão Terminada com Sucesso')
    },
  },
  getters: {
    getLastId(state) {
      return state.users.length ? state.users[state.users.length - 1].id : 0
    },
    getLoggedUserEmail(state) {
      return state.loggedUser[0].email
    },
    getLoggedUserPassword(state) {
      return state.loggedUser[0].password
    },
    getUser(state) {
      return state.loggedUser[0];
    },
    getId(state) {
      if (state.insurances.length) {
        return state.insurances[state.insurances.length - 1].id;
      } else {
        return 0
      }
    },
  },
  actions:{
    async addUser({ commit }, payload) {
      commit("ADD_USER", await apiService.addUser(
        payload.name,
        payload.email,
        payload.password,
      ))
    }
  }
});
