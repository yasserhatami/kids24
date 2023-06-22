<template>
    <div class="width mx-auto">
        <v-sheet class="mx-auto w-100 rounded-lg  mb-14 card">

            <input @blur="v$.mobileNum.$touch" @keyup="v$.mobileNum.$touch" v-model="formData.mobileNum" type="text"
                class="costom-input mb-5" placeholder=" شماره موبایل خود را وارد کنید">
            <div class="text-red mb-2 text-subtitle-1" v-for="error of v$.mobileNum.$errors" :key="error.$id">
                <div class="error-msg text-red">{{ error.$message }}</div>
            </div>
            <v-btn @click="login" block class="mt-5 py-6 bg-progreen text-prowhite text-h6">ورود</v-btn>
        </v-sheet>
    </div>
</template>

<script setup>
import { required, helpers, numeric, minLength } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';


const formData = reactive({
    mobileNum: ""
    });
const rules = computed(() => {
    return {
        mobileNum: {
            required: helpers.withMessage('این فیلد باید پر شود', required),
            numeric: helpers.withMessage('فقط عدد وارد کنید.', numeric),
            minLength: helpers.withMessage('شماره خود را به درستی وارد کنید.', minLength(11))

        }
    };
});
const v$ = useVuelidate(rules, formData);

function login() {
    // console.log(v$.password.$error);
}
</script>
<style scoped>
.card {
    background-color: rgba(237, 237, 237, 0.3) !important;

}
</style>