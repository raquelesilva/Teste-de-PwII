<template>
<div class="container" id="cardsInsurance">
    <div class="row">
        <div class="col-sm-4" v-for="i in insurances" :key="i.id" style="width: 18rem;">
            <div 
            :title="i.name"
            id="cards"
            class="card-body">
            <p>{{i.type}}</p>
            <a href="#" class="btn btn-primary">Ver mais</a>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Insurance",
        data: function () {
            return {
                insurances: [],
                insuranceType: []
            };
        },
        created() {
            localStorage.setItem("insurances",
                JSON.stringify(this.$store.state.insurances)
            );

            if (localStorage.getItem("insurances")) {
                this.insurances = JSON.parse(localStorage.getItem("insurances"));
            }

            if (localStorage.getItem("insuranceType")) {
                this.insuranceType = JSON.parse(localStorage.getItem("insuranceType"));
            }
            localStorage.setItem("insuranceType",
                JSON.stringify(this.$store.state.insuranceType)
            );
        },
    }
</script>