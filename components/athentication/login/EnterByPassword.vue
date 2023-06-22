<template>
    <div class="width mx-auto">
        <v-sheet class="mx-auto w-100 rounded-lg  mb-14 card">

            <input @blur="v$.mobileNum.$touch" @keyup="v$.mobileNum.$touch" v-model="formData.mobileNum" type="text"
                class="costom-input mb-5" placeholder="شماره موبایل">
            <div class="text-red mb-2 text-subtitle-1" v-for="error of v$.mobileNum.$errors" :key="error.$id">
                <div class="error-msg text-red">{{ error.$message }}</div>
            </div>

            <div class="costom-input d-flex justify-space-between">
                <input @blur="v$.password.$touch" v-model="formData.password" class="pass"
                    placeholder="رمز عبور(حداقل 8کاراکتر وارد کنید)" v-bind:type="showPassword ? 'text' : 'password'">
                <button class="" v-on:click="showPassword = !showPassword">
                    <v-icon v-if="showPassword" color="protextgray" icon="mdi-eye"></v-icon>
                    <v-icon v-else color="protextgray" icon="mdi-eye-off"></v-icon>

                </button>
            </div>



            <div class="text-red mb-2 text-subtitle-1" v-for="error of v$.password.$errors" :key="error.$id">
                <div class="error-msg text-red">{{ error.$message }}</div>
            </div>



            <v-btn @click="login" block class="mt-5 py-6 bg-progreen text-prowhite text-h6">ورود</v-btn>
        </v-sheet>
    </div>
</template>

<script setup>
import { required, helpers, numeric, minLength } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
let showPassword = ref(false)

const formData = reactive({
    mobileNum: '',
    password: ''
});
const rules = computed(() => {
    return {
        mobileNum: {
            required: helpers.withMessage('این فیلد باید پر شود', required),
            numeric: helpers.withMessage('فقط عدد وارد کنید.', numeric)

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