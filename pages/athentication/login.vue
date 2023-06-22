<template>
  <v-container>
    <v-row class="d-flex justify-center align-center ">
      <v-col cols="12" sm="7" md="6">
        <v-card class="mx-auto rounded-lg text-center w-100 card" style="border:1px solid #66BDAE " variant="outlined">
          <v-card class="py-2 mx-auto  rounded-lg width bg-propurple text-white mt-14 mb-10 d-flex justify-space-around">
            <v-btn @click="chooseEnterWay = !chooseEnterWay" class="btn  " variant="text"
              :class="{ selectedbtn: !chooseEnterWay }">
              ورود با رمز یکبار مصرف</v-btn>

            <v-btn @click="chooseEnterWay = !chooseEnterWay" class="btntext-center btn "
              :class="{ selectedbtn: chooseEnterWay }" variant="text">
              ورود با نام کاربری
            </v-btn>
          </v-card>
          <component :is="chooseEnterWay ? enterByPassword : enterBySMS" />

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>


const chooseEnterWay = ref(true);
let enterByPassword = resolveComponent('enterByPassword');
let enterBySMS = resolveComponent('enterBySMS');


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
    width: 50%;
  }
}

.btn {
  width: 45%;
  background-color: "#FFFFF" !important;
  font-weight: 900;
}

.selectedbtn {
  background-color: white;
  border-radius: 9px;
  color: #BEAEE2;

}
</style>