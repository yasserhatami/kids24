<template>
  <v-container>
    <v-row class="d-flex justify-center align-center ">
      <v-col cols="12" sm="7" md="6">
        <v-card class="mx-auto rounded-lg text-center w-100 card" style="border:1px solid #66BDAE " variant="outlined">
          <v-card class="py-2 mx-auto  rounded-lg width bg-propurple text-white mt-4 mb-5 d-flex justify-space-around">
            <v-btn @click="chanePage(1)" class="btn  text-center text-subtitle-1" variant="text" :class="{ selectedbtn: selectedbtn === 1 }">
              فرزند دارم</v-btn>

            <v-btn @click="chanePage(2)" class="text-center btn text-caption" :class="{ selectedbtn: selectedbtn === 2 }"
              variant="text">
              فرزند بالای 6 سال دارم
            </v-btn>

            <v-btn @click="chanePage(3)" class="text-center btn text-subtitle-1" :class="{ selectedbtn: selectedbtn === 3 }"
              variant="text">
              فرزند ندارم
            </v-btn>
          </v-card>



          <component :is="chooseEnterState" />

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>



let TripleState = reactive([

  {
    id: 1,
    componentName: markRaw(resolveComponent('haschild'))
  },


  {
    id: 2,
    componentName: markRaw(resolveComponent('childOverSix'))
  },


  {
    id: 3,
    componentName: markRaw(resolveComponent('hasNoChild'))
  }

])
console.log(TripleState[0].componentName);
console.log(typeof TripleState[0].componentName);
let chooseEnterState = ref(TripleState[0].componentName);
let selectedbtn = ref(1)
function chanePage(x) {
  const object = TripleState.find(obj => obj.id === x);
  chooseEnterState.value = object.componentName;
  selectedbtn.value = x;
}
</script>

<style scoped>
.card {
  background: rgba(237, 237, 237, 0.3);
  border: 1px solid #66BDAE;
  box-shadow: 0px 2px 5px rgba(40, 40, 40, 0.25);
  backdrop-filter: blur(2.5px);

}

.width {
  width: 90%;
}

@media only screen and (max-width: 450px) {
  .width {
    width: 98%;
  }

  .btn {
    width: 33%;
  }
}

.btn {
  width: 33%;
  background-color: "#FFFFF" !important;
  font-weight: 900;
}

.selectedbtn {
  background-color: white;
  border-radius: 9px;
  color: #BEAEE2;

}
</style>