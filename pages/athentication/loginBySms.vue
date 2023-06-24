<template >
    <div dir="ltr">
        <div>
            <input @keyup="focusToInputTwo()"  ref="inputone" id="aa" v-model="inputs.inputone" class="input " type="number">
            <input  @keyup="focusToInputThree()"  ref="inputtwo" v-model="inputs.inputtwo" class="input " type="number">
            <input  @keyup="focusToInputFour()"  ref="inputthree" v-model="inputs.inputthree" class="input " type="number">
            <input @keyup="login()" ref="inputfour" v-model="inputs.inputfour" class="input " type="number">
        </div>
        <v-btn @click="login" block class="mt-5 py-6 bg-progreen text-prowhite text-h6 rounded-lg">ورود</v-btn>
    </div>
</template>
<script setup>
const inputs = reactive({
    inputone: '',
    inputtwo: '',
    inputthree: '',
    inputfour: ''
})
const inputone = ref(null)
const inputtwo = ref(null)
const inputthree = ref(null)
const inputfour = ref(null)
onMounted(() => {
    inputone.value.focus()
})
function focusToInputTwo(){
    inputtwo.value.focus()
}
function focusToInputThree(){
    inputthree.value.focus()
}
function focusToInputFour(){
    inputfour.value.focus()
}
function login() {
    console.log(inputs);
}
</script>
<style scoped>
.input {
    width: 110px;
    height: 100px;
    margin: 5px;
    border: 1px solid #BEAEE2;
    border-radius: 15px;
    font-size: 50px;
    outline: none;
    text-align: center;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}
</style>