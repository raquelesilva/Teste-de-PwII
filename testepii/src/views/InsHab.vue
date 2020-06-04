<template>
    <div class="container" style=" margin: auto; width:500px; ">
        <form @submit.prevent="addInsurance2()">
            <div class="form-group">
                <label for="">Morada</label>
                <input type="text" v-model="adress" class="form-control" id="adress" required>
            </div>
            <div class="form-group">
                <select v-model="habType" id="habType">
                    <option v-for="type in habType" :key="type">{{type.description}}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="">NIF</label>
                <input type="number" v-model="nif" class="form-control" id="nif" required>
            </div>
            <div class="form-group">
                <label for="">Contacto</label>
                <input type="number" v-model="contact" class="form-control" id="contact" required>
            </div>
            <button type="submit" class="btn btn-primary">Simular</button>
        </form>
    </div>

</template>

<script>
    export default {
        data: function () {
            return {
                insurances: [],
                adress: "",
                nif: "",
                contact: "",
                habType: "",
                habType2: [],

            };
        },
        created() {
            if (localStorage.getItem("insurances")) {
                this.$store.state.insurances = JSON.parse(localStorage.getItem("insurances"));
            }
            this.insurances = this.$store.state.insurances;

            if (localStorage.getItem("habType")) {
                this.$store.state.habType = JSON.parse(localStorage.getItem("habType"));
            }
            this.carType2 = this.$store.state.carType;
        },
        methods: {
            addInsurance2() {
                this.$store.commit('ADD_HABINSURANCE', {
                    id: this.$store.getters.getLastId + 1,
                    adress: this.adress,
                    habType: this.habType,
                    nif: this.nif,
                    contact: this.contact,
                })
                this.adress = ""
                this.habType = ""
                this.nif = ""
                this.contact = ""
            }
        }

    }
</script>