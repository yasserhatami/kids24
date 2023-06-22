<template>
  <div class="width mx-auto">
    <v-sheet class="mx-auto w-100 rounded-lg  mb-4 card">

      <input @blur="v$.name.$touch" @keyup="v$.name.$touch" v-model="formData.name" type="text" class="costom-input mb-3"
        placeholder=" نام">
      <div class="text-red mb-2 text-subtitle-1" v-for="error of v$.name.$errors" :key="error.$id">
        <div class="error-msg text-red">{{ error.$message }}</div>
      </div>

      <input @blur="v$.lastName.$touch" @keyup="v$.lastName.$touch" v-model="formData.lastName" type="text"
        class="costom-input mb-3" placeholder=" نام خانوادگی">
      <div class="text-red mb-2 text-subtitle-1" v-for="error of v$.lastName.$errors" :key="error.$id">
        <div class="error-msg text-red">{{ error.$message }}</div>
      </div>




      <input @blur="v$.mobileNum.$touch" @keyup="v$.mobileNum.$touch" v-model="formData.mobileNum" type="text"
        class="costom-input mb-5" placeholder=" شماره موبایل خود را وارد کنید">
      <div class="text-red mb-2 text-subtitle-1" v-for="error of v$.mobileNum.$errors" :key="error.$id">
        <div class="error-msg text-red">{{ error.$message }}</div>
      </div>

      <input @blur="v$.password.$touch" @keyup="v$.password.$touch" v-model="formData.password" type="text"
        class="costom-input mb-3" placeholder="رمز عبور(حداقل 8کاراکتر وارد کنید)">
      <div class="text-red mb-2 text-subtitle-1" v-for="error of v$.password.$errors" :key="error.$id">
        <div class="error-msg text-red">{{ error.$message }}</div>
      </div>

      <v-btn @click="login" block class="mt-4 mb-2 py-6 bg-propurple text-prowhite text-h6">ثبت اطلاعات</v-btn>
      <nuxt-link to="/athentication/login">ورد به کیدز24</nuxt-link>
    </v-sheet>
  </div>
</template>

<script setup>
import { required, helpers, numeric, minLength } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

const formData = reactive({
  name: '',
  lastName: '',
  mobileNum: '',
  password: ''
});
const rules = computed(() => {
  return {
    name: {
      required: helpers.withMessage('این فیلد باید پر شود', required),
    },
    lastName: {
      required: helpers.withMessage('این فیلد باید پر شود', required),
    },
    mobileNum: {
      required: helpers.withMessage('این فیلد باید پر شود', required),
      numeric: helpers.withMessage('فقط عدد وارد کنید.', numeric),
      minLength: helpers.withMessage('شماره خود را به درستی وارد کنید.', minLength(11))

    },
    password: {
      required: helpers.withMessage('این فیلد باید پر شود', required),
      minLength: helpers.withMessage('حداقل باید هشت کارکتر باشد', minLength(8))
    }
  };
});
const v$ = useVuelidate(rules, formData);

function login() {
  // console.log(v$.password.$error);
}
</script>

<style scoped>
.radio-sryle {
  width: 48%;
  height: 50px;
  border-bottom: 3px solid #B5B5B5;
  border-radius: 20px 20px 0px 0px;
  background-color: #FFFFFF;
  outline: none;
  padding: 10px;
  color: #B5B5B5;

  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 19px;
}

/* HIDE RADIO */
[type=radio] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* IMAGE STYLES */
[type=radio]+img {
  cursor: pointer;
}

/* CHECKED STYLES */
[type=radio]:checked+img {
  background-color: #BEAEE2;
}

.card {
  background: rgba(237, 237, 237, 0.3);
  backdrop-filter: blur(2.5px);
}

.pass {
  outline: none;
  padding: 10px;
  color: #B5B5B5;
}
</style>