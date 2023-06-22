<template>aliiiiiiiiiiiiiiiiiiii</template>

<script setup>
/////////////this section nedd better wqay/////////////////
definePageMeta({
  middleware: () => {
    if(process.client){
        console.log('alaa');
        if(!localStorage.getItem('token')){
            console.log('kkkkkkkkk');
            return navigateTo('athentication/register')
        }
    }
  },
})
/////////////////////////////////////////////////////////////;
</script>

<style>
</style>