<template>
    <div class="container" style=" margin: auto; width:500px; ">
        <form @submit.prevent="addInsurance()">
            <div class="form-group">
                <label for="">Matrícula</label>
                <input type="text" v-model="plate" class="form-control" id="plate" required>
            </div>
            <div class="form-group">
                <label for="">Data Matrícula</label>
                <input type="date" v-model="plateDate" class="form-control" id="plateDate" required>
            </div>
            <div class="form-group">
                <select v-model="carType" id="carType">
                    <option v-for="type in carType" :key="type">{{type.description}}</option>
                </select>
            </div>
            <div class="form-group">
                <select v-model="brand" id="brand">
                    <option v-for="b in brand" :key="b">{{b.description}}</option>
                </select>
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
                plate: "",
                plateDate: "",
                carType: "",
                carType2: [],
                brand: "",
                brand2: [],

            };
        },
        created() {
            if (localStorage.getItem("insurances")) {
                this.$store.state.insurances = JSON.parse(localStorage.getItem("insurances"));
            }
            this.insurances = this.$store.state.insurances;

            if (localStorage.getItem("carType")) {
                this.$store.state.carType = JSON.parse(localStorage.getItem("carType"));
            }
            this.carType2 = this.$store.state.carType;

            if (localStorage.getItem("brand")) {
                this.$store.state.brand = JSON.parse(localStorage.getItem("brand"));
            }
            this.brand2 = this.$store.state.brand;
        },
        methods: {
            addInsurance() {
                this.$store.commit('ADD_CARINSURANCE', {
                    id: this.$store.getters.getLastId + 1,
                    plate: this.plate,
                    plateDate: this.plateDate,
                    carType: this.carType,
                    brand: this.brand,
                })
                this.plate = ""
                this.plateDate = ""
                this.carType = ""
                this.brand = ""
            }
        }

    }
</script>